import {
    compose,
    createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleWare = [thunk]

const initState = {}

const store = createStore(rootReducer, initState, compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store