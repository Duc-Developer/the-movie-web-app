import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { userRoutes } from '../../constants';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WishListPage from './pages/WishListPage';

const { login, register, wish_list } = userRoutes.children;

export default function User() {
    return (
        <div>
            <Switch>
                <Route exact path={userRoutes.path + login.path}>
                    <LoginPage />
                </Route>
                <Route exact path={userRoutes.path + register.path}>
                    <RegisterPage />
                </Route>
                <Route exact path={userRoutes.path + wish_list.path}>
                    <WishListPage />
                </Route>
            </Switch>
        </div>
    )
}