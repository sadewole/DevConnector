import {
    GET_ERROR
} from './types'

export const returnError = (status, msg, id = null) => {
    return {
        type: GET_ERROR,
        payload: {
            status,
            msg,
            id
        }
    }
}