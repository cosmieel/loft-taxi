import { takeEvery, call, put, fork } from 'redux-saga/effects'
import * as api from '../baseMiddleware'
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
        const path = 'card'
		yield call(api.middlewarePOST, action, path)
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
        const path = `card?token=${action.payload}`
		const response = yield call(api.middlewareGET, path)
		yield put(fetchProfileSuccess(response))
	} catch (error) {
		yield put(fetchProfileFailure(error))
	}
}
export function* fetchProfile() {
	yield takeEvery(fetchProfileRequest, fetchProfileRequestSaga)
}