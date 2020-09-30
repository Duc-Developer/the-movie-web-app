import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export default function Moives() {
    const match = useRouteMatch();
    console.log(match)
    return (
        <div>
            <Switch>
                <Route></Route>
            </Switch>
        </div>
    )
}