import { takeEvery, call, put, fork } from 'redux-saga/effects'
import * as api from './middleware'
import {
    postProfileRequest, postProfileSuccess, postProfileFailure,
    fetchProfileRequest, fetchProfileSuccess, fetchProfileFailure
} from './actions'


export function* paymentSaga() {
	yield fork(postProfile)
	yield fork(fetchProfile)
}

export function* postProfileRequestSaga(action) {
	try {
		yield call(api.postProfileMiddleware, action)
		yield put(postProfileSuccess(action.payload))
	} catch (error) {
		yield put(postProfileFailure(error))
	}
}
export function* postProfile() {
    yield takeEvery(postProfileRequest, postProfileRequestSaga)
}

export function* fetchProfileRequestSaga(action) {
	try {
		const response = yield call(api.fetchProfileMiddleware, action.payload)
		yield put(fetchProfileSuccess(response))
	} catch (error) {
		yield put(fetchProfileFailure(error))
	}
}
export function* fetchProfile() {
	yield takeEvery(fetchProfileRequest, fetchProfileRequestSaga)
}