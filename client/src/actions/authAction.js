import axios from 'axios'
import {
    AUTH_SIGN_UP,
    AUTH_ERROR
} from './types'
import {
    returnError
} from './errorAction';


// export const loadUser = () => async (dispatch) => {
//     try {
//         const res = await axios.get('/api/v1/user')

//         dispatch({
//             type: AUTH_SIGN_UP,
//             payload: res
//         })

//     } catch (err) {
//         dispatch({
//             type: AUTH_ERROR,

//         })
//     }
// }

export const register = (data) => async (dispatch) => {
    try {
        const res = await axios.post('/api/v1/auth/signup', data)
        console.log(res.data)
        // dispatch({
        //     type: AUTH_SIGN_UP,
        //     payload: res.data
        // })

    } catch (error) {
        console.log(error)
        // dispatch(returnError(error.response.status, error.response.data, 'REGISTER_FAIL'))
        // dispatch({
        //     type: AUTH_ERROR
        // })
    }
}