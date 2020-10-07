import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { userRoutes } from '../../constants';

const { login, register, wish_list } = userRoutes.children;

export default function User() {
    return (
        <div style={{ paddingTop: "5em" }}>
            <Switch>
                <Route exact path={userRoutes.path + login.path}>
                    <div>login</div>
                </Route>
                <Route exact path={userRoutes.path + register.path}>
                    <div>register</div>
                </Route>
                <Route exact path={userRoutes.path + wish_list.path}>
                    <div>wish_list</div>
                </Route>
            </Switch>
        </div>
    )
}