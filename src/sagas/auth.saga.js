import { put, takeEvery } from 'redux-saga/effects';
import { createNewUserSuccess } from '../actions';
import { userConstants as type} from '../constants';

function* createNewUser(action) {
    yield put(createNewUserSuccess(action.payload));
}

export function* createNewUserAction() {
    yield takeEvery(type.CREATE_NEW_USER, createNewUser);
}