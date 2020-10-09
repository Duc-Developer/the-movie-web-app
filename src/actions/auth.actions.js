import { userConstants as type } from '../constants';

export function createNewUser(data) {
    return {
        type: type.CREATE_NEW_USER,
        payload: data
    }
}

export function createNewUserSuccess(response) {
    return {
        type: type.CREATE_NEW_USER_SUCCESS,
        payload: response
    }
}

export function createNewUserFailure(errors) {
    return {
        type: type.CREATE_NEW_USER_FAILURE,
        payload: errors
    }
}

export function loginRequest(data) {
    return {
        type: type.LOGIN_REQUEST,
        payload: data
    }
}

export function loginSuccess(response) {
    return {
        type: type.LOGIN_SUCCESS,
        payload: response
    }
}

export function loginFailure(errors) {
    return {
        type: type.LOGIN_FAILURE,
        payload: errors
    }
}