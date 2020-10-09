import {userConstants as type} from '../constants';

const initialState = {
    wishList: []
}

function movieReducer(state = initialState, action) {
    const {payload} = action;
    switch (action.type) {
        case type.ADD_WISHLIST_SUCCESS:
            let newWishList = [
                ...state.wishList,
                payload
            ];
            return {
                ...state,
                wishList: newWishList
            }
        case type.ADD_WISHLIST_FAILURE:
            return state;
        default:
            return state;
    }
}

export default movieReducer;