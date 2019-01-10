import {combineReducers} from 'redux'
import imageReducer from './imageReducer'
import userReducer from './userReducer'


const rootReducer = combineReducers({
    images: imageReducer,
    users: userReducer
})

export default rootReducer