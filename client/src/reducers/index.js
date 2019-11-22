import {
    combineReducers
} from 'redux'
import authReducer from './authReducer'
import dashboardReducer from './dashboardReducer'
import errorReducer from './errorReducer'
import educationReducer from './educationReducer'
import experienceReducer from './experienceReducer'
import profileReducer from './profileReducer'
import postFeedReducer from './postFeedReducer'

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    dash: dashboardReducer,
    education: educationReducer,
    experience: experienceReducer,
    profile: profileReducer,
    postFeed: postFeedReducer
})