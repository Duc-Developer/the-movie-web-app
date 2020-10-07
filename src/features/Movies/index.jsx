import { Container } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import MoviePreview from "./pages/MoviePreview";
import NowPlayingPage from "./pages/NowPlayingPage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingPage from "./pages/UpCommingPage";
import { movieRoutes } from "../../constants";

const { popular, upcoming, top_rated, now_playing } = movieRoutes.children;

export default function Movies() {
  return (
    <div style={{ paddingTop: "5em" }}>
      <Container>
        <h1>MOVIES</h1>
        <Switch>
          <Route exact path={movieRoutes.path + popular.path}>
            <PopularPage />
          </Route>
          <Route exact path={movieRoutes.path + now_playing.path}>
            <NowPlayingPage />
          </Route>
          <Route exact path={movieRoutes.path + top_rated.path}>
            <TopRatedPage />
          </Route>
          <Route exact path={movieRoutes.path + upcoming.path}>
            <UpcomingPage />
          </Route>
          <Route exact path={`${movieRoutes.path}/:id`}>
            <MoviePreview />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}
