import React from "react";
import { Route } from "react-router-dom";
import PopularPage from "./pages/PopularPage";

export default function Peoples() {
    return (
        <div>
            <Route exact path="/peoples/popular-peoples" >
                <PopularPage />
            </Route>
        </div>
    )
}