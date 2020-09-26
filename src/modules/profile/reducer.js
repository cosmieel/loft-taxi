import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

import { 
    fetchProfileRequest, 
    fetchProfileSuccess, 
    fetchProfileFailure 
} from './actions'

const profileData = handleActions(
    {
        [fetchProfileSuccess]: (_state, action) => action.payload
    }, {}
)

const error = handleActions(
    {
        [fetchProfileRequest]: () => null,
        [fetchProfileSuccess]: () => null,      
        [fetchProfileFailure]: (_state, action) => action.payload,
    },
    null
)

export default combineReducers({
    profileData,
    error
})