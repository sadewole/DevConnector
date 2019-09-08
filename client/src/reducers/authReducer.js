import {
    AUTH_SIGN_UP
} from "../actions/types";

const initState = {
    token: '',
    isAuthenticated: false,
    error: ''
}

export default function (state = initState, action) {
    switch (action.type) {
        case AUTH_SIGN_UP:
            return {
                ...state,
                isAuthenticated: true,
            }
            default:
                return state;
    }
}