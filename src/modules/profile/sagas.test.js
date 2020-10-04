import { mockSaga } from '../mockSaga'
import * as api from '../baseMiddleware'
import { postProfileRequestSaga, fetchProfileRequestSaga } from './sagas'
import {
    postProfileRequest, postProfileSuccess, postProfileFailure,
    fetchProfileRequest, fetchProfileSuccess, fetchProfileFailure
} from './actions'

describe.only('postProfileRequestSaga', () => {
    api.middlewarePOST = jest.fn()
    const error = new Error('test')

    it('should post profile with success', async () => {
        api.middlewarePOST.mockImplementation(() =>
            Promise.resolve({ success: true })
        )

        const payload = {
            test: 'test'
        }

        const dispatched = await mockSaga(
            postProfileRequestSaga,
            postProfileRequest(payload)
        )

        expect(dispatched).toContainEqual(postProfileSuccess(payload))
    })

    it('should post profile with failure', async () => {
        api.middlewarePOST.mockImplementation(() => {
            throw error
        })

        const payload = {
            test: 'test'
        }

        const dispatched = await mockSaga(
            postProfileRequestSaga,
            postProfileRequest(payload)
        )

        expect(dispatched).toContainEqual(postProfileFailure(error))
    })
})

describe.only('fetchProfileRequestSaga', () => {
    api.middlewareGET = jest.fn()
    const error = new Error('test')

    it('should get profile with success', async () => {
        api.middlewareGET.mockImplementation(() =>
            Promise.resolve({ test: 'test' })
        )

        const dispatched = await mockSaga(
            fetchProfileRequestSaga,
            fetchProfileRequest()
        )

        expect(dispatched).toContainEqual(
            fetchProfileSuccess({ test: 'test' })
        )
    })

    it('should get profile with failure', async () => {
        api.middlewareGET.mockImplementation(() => {
            throw error
        })

        const dispatched = await mockSaga(
            fetchProfileRequestSaga,
            fetchProfileRequest()
        )

        expect(dispatched).toContainEqual(fetchProfileFailure(error))
    })
})
