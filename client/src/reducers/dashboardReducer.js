import {
    DASHBOARD_USER
} from '../actions/types'

const initState = {
    userName: ''
}

export default (state = initState, action) => {
    switch (action.type) {
        case DASHBOARD_USER:
            return {
                ...state,
                userName: action.payload.data.name
            };
        default:
            return state
    }
}