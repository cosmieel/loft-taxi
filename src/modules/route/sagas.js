import { takeEvery, call, put } from 'redux-saga/effects'
import * as api from '../baseMiddleware'
import {
	fetchRouteRequest,
	fetchRouteSuccess,
	fetchRouteFailure
} from './actions'

export function* fetchRouteSaga(action) {
	try {
		let response = yield call(api.middlewareRouteGET, action)
		yield put(fetchRouteSuccess(response))
	} catch (error) {
		yield put(fetchRouteFailure(error))
	}
}

export function* routeSaga() {
	yield takeEvery(fetchRouteRequest, fetchRouteSaga)
}
