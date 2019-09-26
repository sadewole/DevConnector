import {
    GET_EDUCATION,
    ADD_EDUCATION,
    DELETE_EDUCATION,
    EDUCATION_LOADING
} from './types'
import {
    returnError
} from './errorAction'
import axios from 'axios'
import {
    tokenConfig
} from './authAction'



export const getSingleUserEdu = (xd) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EDUCATION_LOADING
        })

        const res = await axios.get(`/api/v1/user/${xd}/edu`, tokenConfig(getState))
        dispatch({
            type: GET_EDUCATION,
            payload: res.data
        })
    } catch (error) {
        dispatch(returnError(error.response.status, error.response.data, 'GET_EDUCATION_FAIL'))
    }
}


export const postEducation = (data) => async (dispatch, getState) => {
    try {
        const body = JSON.stringify(data)
        const res = await axios.post('/api/v1/edu/', body, tokenConfig(getState))
        dispatch({
            type: ADD_EDUCATION,
            payload: res.data
        })

    } catch (error) {
        dispatch(returnError(error.response.status, error.response.data, 'ADD_EDUCATION_FAIL'))
    }
}

export const deleteEducation = id => async (dispatch, getState) => {
    try {
        await axios.delete(`/api/v1/edu/${id}`, tokenConfig(getState))
        dispatch({
            type: DELETE_EDUCATION,
            payload: id
        })
    } catch (error) {
        dispatch(returnError(error.response.status, error.response.data, 'DELETE_EDUCATION_FAIL'))
    }
}