import { Container } from "@material-ui/core";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
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
        </Switch>
      </Container>
    </div>
  );
}
