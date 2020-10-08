import { userConstants as type } from '../constants';

const initialState = {
    user: null,
    message: null,
}

function authReducer(state = initialState, action) {
    const {payload} = action;
    switch (action.type) {
        case type.CREATE_NEW_USER_SUCCESS:
            sessionStorage.setItem("user", payload.username);
            return {
                user: payload,
                message: null,
            };
        case type.CREATE_NEW_USER_FAILURE:;
            return {
                user: null,
                message: payload
            };
        default:
            return state;
    }
}

export default authReducer;