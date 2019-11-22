import axios from 'axios'
import {
    ADD_POSTFEED,
    DELETE_POSTFEED,
    GET_POSTFEED,
    GET_ALL_POSTFEED,
    POSTFEED_LOADING,
    LIKED
} from './types';
import {
    tokenConfig
} from './authAction'
import {
    returnError
} from './errorAction'

export const getPostFeed = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: POSTFEED_LOADING
        })

        const res = await axios.get('api/v1/post', tokenConfig(getState))
        dispatch({
            type: GET_ALL_POSTFEED,
            payload: res.data
        })
    } catch (err) {
        dispatch(returnError(err.response.status, err.response.data, 'GET_ALL_POSTFEED_FAIL'))
    }
}

export const getSinglePostFeed = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: POSTFEED_LOADING
        })

        const res = await axios.get(`api/v1/post/${id}`, tokenConfig(getState))
        dispatch({
            type: GET_POSTFEED,
            payload: res.data
        })
    } catch (err) {
        dispatch(returnError(err.response.status, err.response.data, 'GET_POSTFEED_FAIL'))
    }
}

export const postFeed = (post) => async (dispatch, getState) => {
    try {
        const body = JSON.stringify(post)
        const res = await axios.post('api/v1/post', body, tokenConfig(getState))

        dispatch({
            type: ADD_POSTFEED,
            payload: res.data
        })
    } catch (err) {
        dispatch(returnError(err.response.status, err.response.data, 'ADD_POSTFEED_FAIL'))
    }
}

export const deletePostFeed = (id) => async (dispatch, getState) => {
    try {
        const res = await axios.post(`api/v1/post/${id}`, tokenConfig(getState))

        dispatch({
            type: DELETE_POSTFEED,
            payload: res.data
        })
    } catch (err) {
        dispatch(returnError(err.response.status, err.response.data, 'DELETE_POSTFEED_FAIL'))
    }
}

export const likes = (id) => async (dispatch, getState) => {
    try {
        const res = await axios.put(`api/v1/post/like/${id}`, tokenConfig(getState))

        dispatch({
            type: LIKED,
            payload: res.data
        })
    } catch (err) {
        dispatch(returnError(err.response.status, err.response.data, 'LIKE FAIL'))
    }
}