import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieDetails from './pages/MovieDetails';
import SearchMovie from './pages/SearchMovie';

import GlobalStyle from './styles/global';
import { Header } from './styles/components/layout';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header>Movies</Header>
            <Switch>
                <Route path="/" exact component={SearchMovie} />
                <Route path="/detail" exact component={MovieDetails} />
            </Switch>
        </BrowserRouter>
  );
}
