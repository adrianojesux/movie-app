import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Api from './../../services/Api';
import { AxiosRequestConfig } from 'axios';

import { Container } from '../../styles/components/layout';
import MovieItem from './../../components/MovieItem';
import { Search, Pagination, PageButton, PageActual } from './style';


interface State {
    movies: [],
    page: number,
    total_pages: number,
    genres: any[],
    termSearch: string
}

interface Props { }

export default class SearchMovie extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            movies: [],
            page: 0,
            total_pages: 0,
            genres: [],
            termSearch: ''
        };
    }

    componentDidMount = async () => {
        const request: AxiosRequestConfig = {
            params: {
                api_key: 'edd8e0da0907ac7e225092596f0f10e3',
                language: 'pt-BR'
            }
        };
        const result = await Api.get('/genre/movie/list', request);
        this.setState({ genres: result.data.genres });
        document.title = 'Movie App';
    }

    getGenres = (genresIds: []) => {
        return this.state.genres.filter((genre: any) => genresIds.find((id: number) => id === genre.id));
    }


    searchMovies = async (query: string, page: number = 1) => {
        const request: AxiosRequestConfig = {
            params: {
                api_key: 'edd8e0da0907ac7e225092596f0f10e3',
                query,
                page,
                language: 'pt-BR'
            }
        };
        const result = await Api.get('/search/movie', request);
        this.setState({
            movies: result.data.results,
            page: result.data.page,
            total_pages: result.data.total_pages
        });
        console.log(this.state);
    }

    handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value: term } = event.target;
        if (term.trim() === '' || term.length <= 3) {
            this.setState({ movies: [], termSearch: '' });
            return
        };
        this.setState({ termSearch: term });
        this.searchMovies(term);
    }

    handlePage(): number[] {
        const pages = [];
        for (let i = 1; i <= this.state.total_pages; i++)
            if (i >= (this.state.page - 2) && i <= (this.state.page + 2)) pages.push(i);
        return pages;
    }

    handleChangePage = (page = 0, term = this.state.termSearch) => {
        this.searchMovies(term, page);
    }

    render() {
        return (
            <Container>
                <Search placeholder="Busque um filme por nome, ano ou genero..." onChange={this.handleChangeInput} />
                {
                    this.state.movies.map((movie: any) => (
                        <Link to={`/detail/${movie.id}`} key={movie.id} >
                            <MovieItem movie={movie} genres={this.getGenres(movie.genre_ids)} />
                        </Link>
                    ))
                }
                <Pagination>
                    {this.handlePage().map((p) => p !== this.state.page ? (<PageButton onClick={(e : React.MouseEvent) => this.handleChangePage(p)}>{p}</PageButton>) : (<PageActual>{p}</PageActual>))}
                </Pagination>
            </Container>
        )
    }
}
