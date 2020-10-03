import { mockSaga } from '../mockSaga'
import * as api from './middleware'
import { fetchLoginRequestSaga, fetchSignUpRequestSaga } from './sagas'
import {
    fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure,
    fetchSignUpRequest, fetchSignUpSuccess, fetchSignUpFailure,
} from './actions'

describe.only('fetchLoginRequestSaga', () => {
	api.authRequestMiddleware = jest.fn()
	api.setToken = jest.fn()
    const error = new Error('test')
    const payload = {
        email: 'email@email.com',
        password: 'password'
    }

	it('should logged in with success', async () => {
        const result = { success: true, token: 'token123' }

		api.authRequestMiddleware.mockImplementation(() => Promise.resolve(result))

		const dispatched = await mockSaga(
			fetchLoginRequestSaga,
			fetchLoginRequest(payload)
		)

		expect(dispatched).toContainEqual(fetchLoginSuccess({ token: result.token, email: payload.email }))
	})

	it('should logged in with failure', async () => {
		api.authRequestMiddleware.mockImplementation(() => {
			throw error
		})

		const dispatched = await mockSaga(
			fetchLoginRequestSaga,
			fetchLoginRequest(payload)
		)

		expect(dispatched).toContainEqual(fetchLoginFailure(error))
	})
})

describe.only('fetchSignUpRequestSaga', () => {
	api.authRequestMiddleware = jest.fn()
	api.setToken = jest.fn()
    const error = new Error('text')
    const payload = {
        email: 'email@email.com',
        name: 'Name',
        surname: 'Surname',
        password: 'password'
    }

	it('should register with success', async () => {
        const result = { success: true, token: 'token123' }
		api.authRequestMiddleware.mockImplementation(() => Promise.resolve(result))

		const dispatched = await mockSaga(
			fetchSignUpRequestSaga,
			fetchSignUpRequest(payload)
		)

		expect(dispatched).toContainEqual(fetchSignUpSuccess({ token: result.token, email: payload.email }))
	})

	it('should register with failure', async () => {
		api.authRequestMiddleware.mockImplementation(() => {
			throw error
		})

		const dispatched = await mockSaga(
			fetchSignUpRequestSaga,
			fetchSignUpRequest(payload)
		)

		expect(dispatched).toContainEqual(fetchSignUpFailure(error))
	})
})
