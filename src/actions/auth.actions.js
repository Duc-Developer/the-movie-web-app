import { userConstants as type } from '../constants';

export function createNewUser(data) {
    return {
        type: type.CREATE_NEW_USER,
        payload: data
    }
}

export function createNewUserSuccess(response) {
    return {
        type: type.CREATE_NEW_USER,
        payload: response
    }
}

export function createNewUserFailure(errors) {
    return {
        type: type.CREATE_NEW_USER,
        payload: errors
    }
}