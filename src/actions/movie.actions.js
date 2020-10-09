import { userConstants as type } from '../constants';

export function addWishList(data) {
    return {
        type: type.ADD_WISH_LIST,
        payload: data
    }
}

export function addWishListSuccess(data) {
    return {
        type: type.ADD_WISHLIST_SUCCESS,
        payload: data
    }
}

export function addWishListFailure(data) {
    return {
        type: type.ADD_WISHLIST_FAILURE,
        payload: data
    }
}