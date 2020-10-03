import { runSaga } from 'redux-saga'

export async function mockSaga(saga, initialAction) {
    const dispatched = []

    await runSaga({ dispatch: action => dispatched.push(action) },
        saga,
        initialAction
    ).done

    return dispatched
}
