import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

import {
    postProfileRequest,
    postProfileSuccess,
    postProfileFailure,
    fetchProfileRequest,
    fetchProfileSuccess,
    fetchProfileFailure
} from './actions'

import { fetchLogout } from '../auth/actions'

const profileData = handleActions(
    {
        [postProfileRequest]: () => {},
        [postProfileSuccess]: (_state, action) => action.payload,
        [fetchProfileSuccess]: (_state, action) => action.payload
    }, {}
)

const isProfileDataSaved = handleActions(
    {
        [postProfileRequest]: () => false,
        [postProfileSuccess]: () => true,
        [postProfileFailure]: () => false,
        [fetchProfileRequest]: () => false,
        [fetchProfileSuccess]: () => true,
        [fetchProfileFailure]: () => false,
        [fetchLogout]: () => true,
    },
    false
)

const error = handleActions(
    {
        [postProfileRequest]: () => null,
        [postProfileSuccess]: () => null,
        [postProfileFailure]: (_state, action) => action.payload,
        [fetchProfileRequest]: () => null,
        [fetchProfileSuccess]: () => null,
        [fetchProfileFailure]: (_state, action) => action.payload,
        [fetchLogout]: () => null,
    },
    null
)

export default combineReducers({
    profileData,
    isProfileDataSaved,
    error
})