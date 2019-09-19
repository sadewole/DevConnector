import {
    GET_PROFILE,
    UPDATE_PROFILE,
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

        const res = await axios.get(`/api/v1/pro/${xd}/`, tokenConfig(getState))
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch(returnError(error.response.status, error.response.data, 'GET_PROFILE_FAIL'))
    }
}


export const updateProfile = (xd, data) => async (dispatch, getState) => {
    try {
        const body = JSON.stringify(data)
        const res = await axios.put(`/api/v1/pro/${xd}`, body, tokenConfig(getState))
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

    } catch (error) {
        dispatch(returnError(error.response.status, error.response.data, 'UPDATE_PROFILE_FAIL'))
    }
}