import {
    AUTH_SIGN_UP,
    REGISTER_FAIL,
    AUTH_ERROR
} from "../actions/types";

const initState = {
    token: '',
    isAuthenticated: false,
    error: '',
    user: null
}

export default function (state = initState, action) {
    switch (action.type) {
        case AUTH_SIGN_UP:
            return {
                ...state,
                ...action.payload,
                    isAuthenticated: true,

            };
        case AUTH_ERROR:
        case REGISTER_FAIL:
            return {
                token: '',
                    isAuthenticated: false,
                    error: '',
                    user: null
            };
        default:
            return state;
    }
}