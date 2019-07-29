import React, { Component } from 'react';

import { AxiosRequestConfig } from 'axios';
import Api from './../../services/Api';


import { Container } from '../../styles/components/layout';
import { Header, Title, Video, Date, Content, Poster, MovieBody, TitleSession, Text, Row, Chips, RoundProgress, TitleInformation, DetailBox, RowInformation } from './styles';

interface State {
    movie: any
}

type Props = {
    match: any
};


export default class MovieDetails extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            movie: {}
        }
    }

    getMovieDetails = async (movieId: string) => {
        const request: AxiosRequestConfig = {
            params: {
                api_key: 'edd8e0da0907ac7e225092596f0f10e3',
                append_to_response: 'images,videos',
                language: 'pt-BR'
            }
        };

        const { data: movie } = await Api.get(`movie/${movieId}`, request);
        console.log(movie);
        this.setState({ movie });
        document.title = movie.title;

    }

    componentDidMount = () => {
        const { params } = this.props.match;
        this.getMovieDetails(params.movieId);
    }

    handleParseDate = (dateString: string = ''): string => {
        const [ano, mes, dia] = dateString.split('-');
        return `${dia}/${mes}/${ano}`;
    }

    handlePrepareRoundeProgress = (value: number): string => {
        return String(value).replace('.', '').concat('%');
    }

    convertMinutesToHours = (minutes: number) => {
        const h = (minutes / 60);
        const min = (minutes % 60);
        return (min > 0) ? `${Math.floor(h)}h e ${min}min` : `${h}hs`;
    }

    prepareVide = (id: string): string => {
        return `https://www.youtube.com/embed/${id}`;
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>{this.state.movie.title}</Title>
                    <Date>{this.handleParseDate(this.state.movie.release_date)}</Date>
                </Header>
                <Content>
                    <MovieBody>
                        <TitleSession>Sinopse</TitleSession>
                        <Text>{this.state.movie.overview}</Text>
                        <TitleSession>Informações</TitleSession>
                        <RowInformation>
                            <DetailBox>
                                <TitleInformation>Situação</TitleInformation>
                                <Text>{this.state.movie.status}</Text>
                            </DetailBox>
                            <DetailBox>
                                <TitleInformation>Idioma</TitleInformation>
                                <Text>{this.state.movie.original_language}</Text>
                            </DetailBox>
                            <DetailBox>
                                <TitleInformation>Duração</TitleInformation>
                                <Text>{this.convertMinutesToHours(this.state.movie.runtime)}</Text>
                            </DetailBox>
                            <DetailBox>
                                <TitleInformation>Orçamento</TitleInformation>
                                <Text>${this.state.movie.budget},00</Text>
                            </DetailBox>
                            <DetailBox>
                                <TitleInformation>Receita</TitleInformation>
                                <Text>${this.state.movie.revenue},00</Text>
                            </DetailBox>
                            <DetailBox>
                                <TitleInformation>Lucro</TitleInformation>
                                <Text>${this.state.movie.revenue - this.state.movie.budget},00</Text>
                            </DetailBox>
                        </RowInformation>
                        <Row>
                            {this.state.movie.genres && this.state.movie.genres.map((genre: any) => (<Chips key={genre.id}>{genre.name}</Chips>))}
                        </Row>
                        <RoundProgress>{this.state.movie.vote_average && this.handlePrepareRoundeProgress(this.state.movie.vote_average)}</RoundProgress>

                    </MovieBody>
                    <Poster src={this.state.movie.poster_path && `https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`} />
                </Content>
                {this.state.movie.videos && this.state.movie.videos.results.length > 0 ? <Video src={this.prepareVide(this.state.movie.videos.results[0])}></Video> : ''}
            </Container>
        );
    }
}
