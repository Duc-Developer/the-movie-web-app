import {all} from 'redux-saga/effects';
import { createNewUserAction, loginRequestAction } from './auth.saga';
import { addWishListAction } from './movie.saga';

export default function* rootSaga() {
    yield all([
        createNewUserAction(),
        loginRequestAction(),
        addWishListAction(),
    ])
}