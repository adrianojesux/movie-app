import React, { Component } from 'react';
import { Content, Thumb, Title, RoundProgress, BodyMovie, Details, RowChips, Chips } from './style';

interface Props {
    movie: any,
    genres: any[]
}

interface State {
    movie: any,
    genres: any[]
}

export default class MovieItem extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    prepareUrlImage = (path: string): string => {
        return `https://image.tmdb.org/t/p/w500${path}`;
    }

    prepareRate = (rate: string): string => {
        return `${rate.replace('.', '')}%`;
    }

    render() {
        return (
            <Content>
                <Thumb src={this.prepareUrlImage(this.props.movie.poster_path)} width='250' />
                <BodyMovie>
                    <Title>
                        <RoundProgress>{this.prepareRate(this.props.movie.vote_average + '')}</RoundProgress>
                        {this.props.movie.title}
                    </Title>
                    <Details>{this.props.movie.overview}</Details>
                    <RowChips>{this.props.genres.map((genre: any) => (<Chips>{genre.name}</Chips>))}</RowChips>
                </BodyMovie>
            </Content>
        );
    }
}
