import {all} from 'redux-saga/effects';
import { createNewUserAction, loginRequestAction } from './auth.saga';

export default function* rootSaga() {
    yield all([
        createNewUserAction(),
        loginRequestAction(),
    ])
}