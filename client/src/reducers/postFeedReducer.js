import {
    ADD_POSTFEED,
    DELETE_POSTFEED,
    GET_POSTFEED,
    GET_ALL_POSTFEED,
    POSTFEED_LOADING,
    LIKED
} from '../actions/types';

const initState = {
    allPost: [],
    post: [],
    msg: '',
    isLoading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case POSTFEED_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case GET_ALL_POSTFEED:
            return {
                ...state,
                allPost: action.payload.data,
                    isLoading: false
            };
        case GET_POSTFEED:
            return {
                ...state,
                post: action.payload,
                    isLoading: false
            };
        case ADD_POSTFEED:
            return {
                ...state,
                allPost: [action.payload.data, ...state.allPost],
                    msg: action.payload.msg
            };
        case DELETE_POSTFEED:
            return {
                ...state,
                allPost: state.allPost.filter(post => post._id !== action.payload),
                    msg: action.payload.msg
            };
        case LIKED:
            return {
                ...state,
                msg: action.payload.msg
            };
        default:
            return state
    }
}