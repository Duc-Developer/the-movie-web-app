import { put, takeEvery } from 'redux-saga/effects';
import { createNewUserFailure, createNewUserSuccess, loginFailure, loginSuccess } from '../actions';
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
    let id = createNewUserApi({
        ...payload,
        avatar: imgUrl
    });

    yield put(createNewUserSuccess({
        ...payload,
        avatar: imgUrl,
        id: id
    }));
}

function* loginRequest(action) {
    const { payload} = action;
    let userId;
    let userData;
    let match = yield findQuery("users", "username", payload.username, 1);
    if (!match) {
        yield put(loginFailure("Username is not exist, please try other!"));
        return;
    }
    userId = Object.keys(match)[0];
    userData = match[userId];
    if(userData.password !== payload.password) {
        yield put(loginFailure("Password was wrong!"));
        return;
    }
    yield put(loginSuccess({
        ...userData,
        id: userId
    }));
}

export function* loginRequestAction() {
    yield takeEvery(type.LOGIN_REQUEST, loginRequest);
}

export function* createNewUserAction() {
    yield takeEvery(type.CREATE_NEW_USER, createNewUser);
}