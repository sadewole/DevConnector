import {
    combineReducer
} from 'reducer'
import authReducer from './authReducer'

export default combineReducer({
    auth: authReducer
})