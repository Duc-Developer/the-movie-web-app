import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import PopularPage from "./pages/PopularPage";
import { peopleRoutes } from "../../constants";

const { person, popular_peoples } = peopleRoutes.children;

const PeoplePreview = React.lazy(() => import("./pages/PeoplePreview"));

export default function Peoples() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path={peopleRoutes.path + popular_peoples.path}>
          <PopularPage />
        </Route>
        <Route
          exact
          path={`${peopleRoutes.path + person.path}/:id`}
          component={PeoplePreview}
        />
      </Suspense>
    </div>
  );
}
