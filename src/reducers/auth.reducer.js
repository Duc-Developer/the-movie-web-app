import { userConstants as type } from '../constants';

const initialState = {}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case type.CREATE_NEW_USER_SUCCESS:
            console.log("create new user success");
            return action.payload;
        case type.CREATE_NEW_USER_FAILURE:
            console.log("create new user failure");
            return action.payload;
        default:
            return state;
    }
}

export default authReducer;