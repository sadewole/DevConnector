import {
    GET_PROFILE,
    ADD_PROFILE,
    PROFILE_LOADING
} from './types'
import {
    returnError
} from './errorAction'
import axios from 'axios'
import {
    tokenConfig
} from './authAction'



export const getSingleUserPro = (xd) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PROFILE_LOADING
        })

        const res = await axios.get(`/api/v1/user/${xd}/pro`, tokenConfig(getState))
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch(returnError(error.response.status, error.response.data, 'GET_PROFILE_FAIL'))
    }
}


export const postProfile = (data) => async (dispatch, getState) => {
    try {
        const body = JSON.stringify(data)
        const res = await axios.post('/api/v1/pro/', body, tokenConfig(getState))
        dispatch({
            type: ADD_PROFILE,
            payload: res.data
        })

    } catch (error) {
        dispatch(returnError(error.response.status, error.response.data, 'ADD_PROFILE_FAIL'))
    }
}