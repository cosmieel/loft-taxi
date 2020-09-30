import { createAction } from 'redux-actions'

export const postProfileRequest = createAction('POST_PROFILE_REQUEST')
export const postProfileSuccess = createAction('POST_PROFILE_SUCCESS')
export const postProfileFailure = createAction('POST_PROFILE_FAILURE')

export const fetchProfileRequest = createAction('FETCH_PROFILE_REQUEST')
export const fetchProfileSuccess = createAction('FETCH_PROFILE_SUCCESS')
export const fetchProfileFailure = createAction('FETCH_PROFILE_FAILURE')