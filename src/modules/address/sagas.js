import { takeEvery, call, put } from 'redux-saga/effects'
import * as api from '../baseMiddleware'
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
        const path = 'addressList'
		const response = yield call(api.middlewareGET, path)
		yield put(fetchAddressSuccess(response.addresses))
	} catch (error) {
		yield put(fetchAddressFailure(error))
	}
}