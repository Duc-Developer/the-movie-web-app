import { Container } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import AiringTodayPage from "./pages/AiringTodayPage";
import TopRatedPage from "./pages/TopRatedPage";
import PopularPage from "./pages/PopularPage";
import OnTvPage from "./pages/OnTvPage";
import TvPreview from "./pages/TvPreview";
import { tvRoutes } from "../../constants";

const { popular, airing_today, on_tv, top_rated } = tvRoutes.children;

export default function TvShows() {
  return (
    <div style={{ paddingTop: "5em" }}>
      <Container>
        <h1>TV SHOWS</h1>
        <Switch>
          <Route exact path={tvRoutes.path + popular.path}>
            <PopularPage />
          </Route>
          <Route exact path={tvRoutes.path + airing_today.path}>
            <AiringTodayPage />
          </Route>
          <Route exact path={tvRoutes.path + top_rated.path}>
            <TopRatedPage />
          </Route>
          <Route exact path={tvRoutes.path + on_tv.path}>
            <OnTvPage />
          </Route>
          <Route exact path={`${tvRoutes.path}/:id`}>
            <TvPreview />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}
