import {all} from 'redux-saga/effects';
import { createNewUserAction } from './auth.saga';

export default function* rootSaga() {
    yield all([
        createNewUserAction(),
    ])
}