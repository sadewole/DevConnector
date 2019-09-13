import {
    GET_EDUCATION,
    ADD_EDUCATION,
    DELETE_EDUCATION,
    EDUCATION_LOADING
} from '../actions/types'

const initState = {
    edu: [],
    msg: '',
    isLoading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case EDUCATION_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case GET_EDUCATION:
            return {
                ...state,
                edu: action.payload,
                    isLoading: false
            };
        case ADD_EDUCATION:
            return {
                ...state,
                edu: [...state.edu, action.payload.data],
                    msg: action.payload.msg
            };
        case DELETE_EDUCATION:
            return {
                ...state,
                edu: state.edu.filter(item => item._id !== action.payload)
            };
        default:
            return state
    }
}