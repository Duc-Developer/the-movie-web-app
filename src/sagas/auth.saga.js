import { put, takeEvery } from 'redux-saga/effects';
import { createNewUserFailure, createNewUserSuccess } from '../actions';
import { uploadImage, createNewUserApi, findQuery } from '../api/user.api';
import { userConstants as type } from '../constants';


function* createNewUser(action) {
    const { payload } = action;
    let match = yield findQuery("users", "username", payload.username, 1);
    if (match) {
        yield put(createNewUserFailure("Username is exist, please try other!"));
        return;
    }
    let imgUrl = yield uploadImage(payload.avatar);
    if (!imgUrl) {
        yield put(createNewUserFailure("Server is down, please try again late!"));
        return;
    }
    yield createNewUserApi({
        ...payload,
        avatar: imgUrl
    });

    yield put(createNewUserSuccess({
        ...payload,
        avatar: imgUrl
    }));
}

export function* createNewUserAction() {
    yield takeEvery(type.CREATE_NEW_USER, createNewUser);
}