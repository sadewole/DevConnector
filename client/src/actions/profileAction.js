import {
    GET_PROFILE,
    GET_PROFILES,
    UPDATE_PROFILE,
    PROFILE_LOADING,
    GIT_USERNAME_REPO,
    GIT_USERNAME
} from './types'
import {
    returnError
} from './errorAction'
import axios from 'axios'
import {
    tokenConfig
} from './authAction'



export const getAllUserPro = () => async dispatch => {
    try {
        dispatch({
            type: PROFILE_LOADING
        })

        const res = await axios.get('/api/v1/pro/')
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    } catch (error) {
        dispatch(returnError(error.response.status, error.response.data, 'GET_PROFILES_FAIL'))
    }
}

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

export const githubUsername = (username) => async (dispatch) => {

    try {
        const data = {
            client_id: 'd6c602e79ad825c8ceb2',
            client_secret: '7860eab72105c4e981dd9e142bae2885c86e03a2',
            "sort": 'updated'
        }
        // const fetchName = axios.get(`https://api.github.com/users/${username}`, data)
        // dispatch({
        //     type: GIT_USERNAME,
        //     payload: fetchName.data
        // })
        // sort: 'created: asc'
        const repo = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created&order=desc`, data)
        dispatch({
            type: GIT_USERNAME_REPO,
            payload: repo.data
        })

    } catch (error) {
        console.log(error)
        dispatch(returnError(error.response.status, error.response.data, 'GITHUB_USERNAME_FAIL'))
    }
}