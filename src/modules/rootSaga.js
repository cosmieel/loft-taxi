import { fork } from 'redux-saga/effects'
import { authorizationSaga, registrationSaga } from './auth/sagas'
import { paymentSaga } from './profile/sagas'

export function* rootSaga() {
    yield fork(authorizationSaga)
    yield fork(registrationSaga)
    yield fork(paymentSaga)
}