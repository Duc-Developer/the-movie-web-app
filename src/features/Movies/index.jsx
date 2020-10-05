import { Container } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import MoviePreview from "./pages/MoviePreview";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpCommingPage";

export default function Movies() {
  return (
    <div style={{ paddingTop: "5em" }}>
      <Container>
        <h1>MOVIES</h1>
        <Switch>
          <Route exact path="/movies/popular">
            <PopularPage />
          </Route>
          <Route exact path="/movies/now-playing">
            <NowPlayingPage />
          </Route>
          <Route exact path="/movies/top-rated">
            <TopRatedPage />
          </Route>
          <Route exact path="/movies/upcoming">
            <UpcomingPage />
          </Route>
          <Route exact path="/movies/:id">
            <MoviePreview />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}
