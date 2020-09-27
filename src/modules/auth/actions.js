import { createAction } from 'redux-actions'

export const fetchLoginRequest = createAction('FETCH_LOGIN_REQUEST')
export const fetchLoginSuccess = createAction('FETCH_LOGIN_SUCCESS')
export const fetchLoginFailure = createAction('FETCH_LOGIN_FAILURE')

export const fetchLogout = createAction('FETCH_LOGOUT')

export const fetchSignUpRequest = createAction("FETCH_SIGNUP_REQUEST");
export const fetchSignUpSuccess = createAction("FETCH_SIGNUP_SUCCESS");
export const fetchSignUpFailure = createAction("FETCH_SIGNUP_FAILURE");