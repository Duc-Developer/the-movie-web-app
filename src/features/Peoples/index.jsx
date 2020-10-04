import React from "react";
import { Route } from "react-router-dom";
import PeoplePreview from "./pages/PeoplePreview";
import PopularPage from "./pages/PopularPage";

export default function Peoples() {
    return (
        <div>
            <Route exact path="/peoples/popular-peoples" >
                <PopularPage />
            </Route>
            <Route exact path="/peoples/:id">
                <PeoplePreview />
            </Route>
        </div>
    )
}