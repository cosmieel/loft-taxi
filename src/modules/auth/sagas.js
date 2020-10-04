import { takeEvery, put, call } from 'redux-saga/effects'
import * as api from './middleware'
import {
    fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure,
    fetchSignUpRequest, fetchSignUpSuccess, fetchSignUpFailure,
    fetchLogout
} from './actions'

export function* fetchLoginRequestSaga(action) {
    try {
        const response = yield call(api.authRequestMiddleware, action.payload, 'auth')
            yield call(api.setToken, response.token)
            yield put(fetchLoginSuccess())
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
        const response = yield call(api.authRequestMiddleware, action.payload, 'register')
            yield call(api.setToken, response.token)
            yield put(fetchSignUpSuccess())
    } catch (error) {
        yield put(fetchSignUpFailure(error))
    }
}

export function* registrationSaga() {
    yield takeEvery(fetchSignUpRequest, fetchSignUpRequestSaga)
    yield takeEvery(fetchLogout, api.removeToken)
}