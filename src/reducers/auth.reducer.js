import { userConstants as type } from '../constants';

const initialState = {
    user: null,
    message: null,
}

function authReducer(state = initialState, action) {
    const {payload} = action;
    switch (action.type) {
        case type.CREATE_NEW_USER_SUCCESS:
            sessionStorage.setItem("userId", payload.id);
            return {
                user: payload,
                message: null,
            };
        case type.CREATE_NEW_USER_FAILURE:
            return {
                user: null,
                message: payload
            };
        case type.LOGIN_SUCCESS:
            sessionStorage.setItem("userId", payload.id);
            return {
                user: payload,
                message: null,
            };
        case type.LOGIN_FAILURE:
            console.log(payload)
            return {
                user: null,
                message: payload
            }
        default:
            return state;
    }
}

export default authReducer;