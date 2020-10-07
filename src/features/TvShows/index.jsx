import { Container } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import AiringTodayPage from "./pages/AiringTodayPage";
import TopRatedPage from "./pages/TopRatedPage";
import PopularPage from "./pages/PopularPage";
import OnTvPage from "./pages/OnTvPage";
import TvPreview from "./pages/TvPreview";

export default function TvShows() {
  return (
    <div style={{ paddingTop: "5em" }}>
      <Container>
        <h1>TV SHOWS</h1>
        <Switch>
          <Route exact path="/tv/popular">
            <PopularPage />
          </Route>
          <Route exact path="/tv/airing-today">
            <AiringTodayPage />
          </Route>
          <Route exact path="/tv/top-rated">
            <TopRatedPage />
          </Route>
          <Route exact path="/tv/on-tv">
            <OnTvPage />
          </Route>
          <Route exact path="/tv/:id">
            <TvPreview />
            </Route>
        </Switch>
      </Container>
    </div>
  );
}
