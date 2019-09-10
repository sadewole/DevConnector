import axios from 'axios'
import {
    AUTH_SIGN_UP,
    AUTH_ERROR,
    AUTH_SIGN_IN,
    USER_LOADED,
    USER_LOADING,
    LOG_OUT,
    DASHBOARD_USER
} from './types'
import {
    returnError
} from './errorAction';


export const loadUser = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LOADING
        })
        const res = await axios.get('/api/v1/auth/secret', tokenConfig(getState))

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
        dispatch({
            type: DASHBOARD_USER,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        })
    }
}

export const register = (data) => async (dispatch) => {
    try {
        // Headers
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        // Request Body
        const body = JSON.stringify(data)

        const res = await axios.post('/api/v1/auth/signup', body, config)
        dispatch({
            type: AUTH_SIGN_UP,
            payload: res.data
        })

    } catch (error) {
        dispatch(returnError(error.response.status, error.response.data, 'REGISTER_FAIL'))
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const login = data => async dispatch => {
    try {
        // Headers
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        // Request Body
        const body = JSON.stringify(data)

        const res = await axios.post('/api/v1/auth/signin', body, config)
        dispatch({
            type: AUTH_SIGN_IN,
            payload: res.data
        })

    } catch (error) {
        dispatch(returnError(error.response.status, 'Email or Password doesn\'t exist', 'LOGIN_FAIL'))
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOG_OUT
    })
}

export const tokenConfig = getState => {
    try {
        // get token from localstorage
        const token = getState().auth.token
        // add header script
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        // add token to header
        if (token) {
            config.headers['authorization'] = token
        }

        return config
    } catch (err) {
        return err
    }
}