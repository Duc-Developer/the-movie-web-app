import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import PopularPage from "./pages/PopularPage";

const PeoplePreview = React.lazy(() => import("./pages/PeoplePreview"));

export default function Peoples() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/peoples/popular-peoples">
          <PopularPage />
        </Route>
        <Route exact path="/peoples/:id" component={PeoplePreview} />
      </Suspense>
    </div>
  );
}
