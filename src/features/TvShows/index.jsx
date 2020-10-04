import { Container } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import AiringTodayPage from "./pages/AiringTodayPage";
import TopRatedPage from "./pages/TopRatedPage";
import PopularPage from "./pages/PopularPage";
import OnTvPage from "./pages/OnTvPage";

export default function TvShows() {
  return (
    <div style={{ paddingTop: "5em" }}>
      <Container>
        <h1>TV SHOWS</h1>
        <Switch>
          <Route exact path="/tv-shows/popular">
            <PopularPage />
          </Route>
          <Route exact path="/tv-shows/airing-today">
            <AiringTodayPage />
          </Route>
          <Route exact path="/tv-shows/top-rated">
            <TopRatedPage />
          </Route>
          <Route exact path="/tv-shows/on-tv">
            <OnTvPage />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}
