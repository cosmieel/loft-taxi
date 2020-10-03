import { takeEvery, call, put } from 'redux-saga/effects'
import * as api from './middleware'
import {
	fetchAddressRequest,
	fetchAddressSuccess,
	fetchAddressFailure
} from './actions'

export function* addressListSaga() {
	yield takeEvery(fetchAddressRequest, fetchAddressSaga)
}

export function* fetchAddressSaga() {
	try {
		let response = yield call(api.fetchAddressMiddleware)
		yield put(fetchAddressSuccess(response.addresses))
	} catch (error) {
		yield put(fetchAddressFailure(error))
	}
}