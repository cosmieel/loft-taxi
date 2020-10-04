import { takeEvery, put, call } from 'redux-saga/effects'
import * as api from '../baseMiddleware'
import {
    fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure,
    fetchSignUpRequest, fetchSignUpSuccess, fetchSignUpFailure,
    fetchLogout
} from './actions'

export function* fetchLoginRequestSaga(action) {
    try {
        const response = yield call(api.middlewarePOST, action.payload, 'auth')
        const { success, token, error } = response
        const email = action.payload.email

        if (success) {
            yield call(api.setToken, token)
            yield put(fetchLoginSuccess({ token, email }))
        } else {
            yield put(fetchLoginFailure(error));
        }
    } catch (error) {
        yield put(fetchLoginFailure(error))
    }
}

export function* authorizationSaga() {
    yield takeEvery(fetchLoginRequest, fetchLoginRequestSaga)
    yield takeEvery(fetchLogout, api.removeToken)
}

export function* fetchSignUpRequestSaga(action) {
    try {
        const response = yield call(api.middlewarePOST, action.payload, 'register')
        const { success, token, error } = response
        const email = action.payload.email

        if (success) {
            yield call(api.setToken, token)
            yield put(fetchSignUpSuccess({ token, email }))
        } else {
            yield put(fetchSignUpFailure(error))
        }
    } catch (error) {
        yield put(fetchSignUpFailure(error))
    }
}

export function* registrationSaga() {
    yield takeEvery(fetchSignUpRequest, fetchSignUpRequestSaga)
    yield takeEvery(fetchLogout, api.removeToken)
}