import {
    combineReducers
} from 'redux'
import authReducer from './authReducer'
import dashboardReducer from './dashboardReducer'
import errorReducer from './errorReducer'
import educationReducer from './educationReducer'

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    dash: dashboardReducer,
    educ: educationReducer
})