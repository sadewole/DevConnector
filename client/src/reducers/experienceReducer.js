import {
    GET_EXPERIENCE,
    ADD_EXPERIENCE,
    DELETE_EXPERIENCE,
    EXPERIENCE_LOADING
} from '../actions/types'

const initState = {
    exp: [],
    msg: '',
    isLoading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case EXPERIENCE_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case GET_EXPERIENCE:
            return {
                ...state,
                exp: action.payload.data,
                    msg: action.payload.msg,
                    isLoading: false
            };
        case ADD_EXPERIENCE:
            return {
                ...state,
                exp: [...state.exp, action.payload.data],
                    msg: action.payload.msg
            };
        case DELETE_EXPERIENCE:
            return {
                ...state,
                exp: state.exp.filter(item => item._id !== action.payload)
            };
        default:
            return state
    }
}