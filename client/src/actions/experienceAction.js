import {
    GET_EXPERIENCE,
    ADD_EXPERIENCE,
    DELETE_EXPERIENCE,
    EXPERIENCE_LOADING
} from './types'
import {
    returnError
} from './errorAction'
import axios from 'axios'
import {
    tokenConfig
} from './authAction'


export const getSingleUserExp = (xd) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EXPERIENCE_LOADING
        })

        const res = await axios.get(`/api/v1/user/${xd}/exp`, tokenConfig(getState))
        dispatch({
            type: GET_EXPERIENCE,
            payload: res.data
        })
    } catch (error) {
        dispatch(returnError(error.response.status, error.response.data, 'GET_EXPERIENCE_FAIL'))
    }
}


export const postExperience = (data) => async (dispatch, getState) => {
    try {
        const body = JSON.stringify(data)
        const res = await axios.post('/api/v1/exp/', body, tokenConfig(getState))
        dispatch({
            type: ADD_EXPERIENCE,
            payload: res.data
        })

    } catch (error) {
        dispatch(returnError(error.response.status, error.response.data, 'ADD_EXPERIENCE_FAIL'))
    }
}

export const deleteExperience = id => async (dispatch, getState) => {
    try {
        await axios.delete(`/api/v1/exp/${id}`, tokenConfig(getState))
        dispatch({
            type: DELETE_EXPERIENCE,
            payload: id
        })
    } catch (error) {
        dispatch(returnError(error.response.status, error.response.data, 'DELETE_EXPERIENCE_FAIL'))
    }
}