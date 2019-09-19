import {
    GET_PROFILE,
    GET_PROFILES,
    UPDATE_PROFILE,
    PROFILE_LOADING
} from '../actions/types'

const initState = {
    allProf: [],
    prof: {},
    msg: '',
    isLoading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case GET_PROFILES:
            return {
                ...state,
                allProf: action.payload.data,
                    msg: action.payload.msg,
                    isLoading: false
            };
        case GET_PROFILE:
            return {
                ...state,
                prof: action.payload.data,
                    msg: action.payload.msg,
                    isLoading: false
            };
        case UPDATE_PROFILE:
            return {
                ...state,
                prof: action.payload.data,
                    msg: action.payload.msg
            };
        default:
            return state
    }
}