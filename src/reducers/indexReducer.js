import {combineReducer} from 'redux'
import imageReducer from './imageReducer'


const rootReducer = combineReducer({
    images: imageReducer
})

export default rootReducer