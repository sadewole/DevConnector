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


export const getSingleUserEdu = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EDUCATION_LOADING
        })

        const res = await axios.get(`/api/v1/user/${id}/edu`, tokenConfig(getState))
        dispatch({
            type: GET_EDUCATION,
            payload: res.data.data
        })
    } catch (error) {

    }
}


export const postEducation = (data) => async dispatch => {
    try {
        const config = {
            'Content-Type': 'application/json'
        }
        const body = JSON.stringify(data)
        const res = await axios.post('/api/v1/edu', body, config)

        dispatch({
            type: ADD_EDUCATION,
            payload: res.data.data
        })

    } catch (error) {
        dispatch(returnError(error.status, error.msg))
    }
}

export const deleteEducation = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/v1/edu/${id}`)
        dispatch({
            type: DELETE_EDUCATION,
            payload: res.data
        })
    } catch (error) {
        dispatch(returnError(error.status, error.msg))
    }
}