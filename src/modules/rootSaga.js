import { fork } from 'redux-saga/effects'
import { authorizationSaga, registrationSaga } from './auth/sagas'
import { paymentSaga } from './profile/sagas'
import { addressListSaga } from './address/sagas'
import { routeSaga } from './route/sagas'

export function* rootSaga() {
    yield fork(authorizationSaga)
    yield fork(registrationSaga)
    yield fork(paymentSaga)
    yield fork(addressListSaga)
    yield fork(routeSaga)
}