import { combineReducers } from 'redux'
import authReducer from './auth.reducer'

const rooReducer = combineReducers({
    auth: authReducer
})

export default rooReducer;