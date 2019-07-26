import React, { Component } from 'react';

import { AxiosRequestConfig } from 'axios';
import Api from './../../services/Api';


import { Container } from '../../styles/components/layout';
import { Header, Title, Date, Content, Poster, MovieBody, TitleSession, Text, Row, Chips, RoundProgress, TitleInformation, DetailBox, RowInformation } from './styles';

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
                                <Text>{this.state.movie.runtime}</Text>
                            </DetailBox>
                            <DetailBox>
                                <TitleInformation>Orçamento</TitleInformation>
                                <Text>{this.state.movie.budget}</Text>
                            </DetailBox>
                            <DetailBox>
                                <TitleInformation>Receita</TitleInformation>
                                <Text>{this.state.movie.revenue}</Text>
                            </DetailBox>
                            <DetailBox>
                                <TitleInformation>Lucro</TitleInformation>
                                <Text>{this.state.movie.revenue - this.state.movie.budget}</Text>
                            </DetailBox>
                        </RowInformation>
                        <Row>
                            {this.state.movie.genres && this.state.movie.genres.map((genre: any) => (<Chips key={genre.id}>{genre.name}</Chips>))}
                        </Row>
                        <RoundProgress>{this.state.movie.vote_average && this.state.movie.vote_average + ''.replace('.', '') + '%'}</RoundProgress>

                    </MovieBody>
                    <Poster src={this.state.movie.poster_path && `https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`} />
                </Content>
            </Container>
        );
    }
}
