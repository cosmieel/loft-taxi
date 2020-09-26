import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

import {
    fetchLoginRequest,
    fetchLoginSuccess,
    fetchLoginFailure,
    fetchLogout
} from './actions'

const isLoggedIn = handleActions(
    {
        [fetchLoginRequest]: () => false,
        [fetchLoginSuccess]: () => true,
        [fetchLoginFailure]: () => false,
        [fetchLogout]: () => false
    },
    window.localStorage.getItem('token') ? true : false
)

const error = handleActions(
    {
        [fetchLoginRequest]: () => null,
        [fetchLoginSuccess]: () => null,
        [fetchLoginFailure]: (_state, action) => action.payload
    },
    null
)

export default combineReducers({
    isLoggedIn,
    error
})