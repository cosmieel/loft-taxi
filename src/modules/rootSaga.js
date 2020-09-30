import { fork } from 'redux-saga/effects'
import { authorizationSaga, registrationSaga } from './auth/sagas'

export function* rootSaga() {
    yield fork(authorizationSaga)
    yield fork(registrationSaga)
}