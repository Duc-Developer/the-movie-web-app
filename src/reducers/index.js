import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import movieReducer from './movie.reducer';


const rooReducer = combineReducers({
    auth: authReducer,
    movie: movieReducer,
})

export default rooReducer;