import {
    AUTH_SIGN_UP,
    AUTH_SIGN_IN,
    REGISTER_FAIL,
    LOGIN_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    USER_LOADING,
    LOG_OUT
} from "../actions/types";

const initState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    error: '',
    user: null,
    isLoading: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                    isLoading: false,
                    user: action.payload
            };
        case AUTH_SIGN_IN:
        case AUTH_SIGN_UP:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                    isAuthenticated: true,
            };
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOG_OUT:
            localStorage.removeItem('token');
            return {
                token: null,
                    isAuthenticated: false,
                    error: '',
                    user: null,
                    isLoading: false
            };
        default:
            return state;
    }
}