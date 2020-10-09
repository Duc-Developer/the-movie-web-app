import {put, takeEvery} from 'redux-saga/effects';
import { addWishListFailure, addWishListSuccess } from '../actions';
import { addWishListApi } from '../api/user.api';
import {userConstants as type} from '../constants';

function* addWishList(action) {
    const {payload} = action;
    const userId = sessionStorage.getItem('userId');

    if(!userId) {
        alert("You must login to use this action!");
        yield put(addWishListFailure(payload));
        return;
    }
    yield addWishListApi(userId, payload);
    yield put(addWishListSuccess(payload));
}

export function* addWishListAction() {
    yield takeEvery(type.ADD_WISH_LIST, addWishList);
}