import { createAction } from 'redux-actions'

export const fetchProfileRequest = createAction('FETCH_PROFILE_REQUEST')
export const fetchProfileSuccess = createAction('FETCH_PROFILE_SUCCESS')
export const fetchProfileFailure = createAction('FETCH_PROFILE_FAILURE')