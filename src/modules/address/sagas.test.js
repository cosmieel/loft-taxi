import { mockSaga } from '../mockSaga'
import * as api from '../baseMiddleware'
import { fetchAddressSaga } from './sagas'
import {
	fetchAddressRequest,
	fetchAddressSuccess,
	fetchAddressFailure
} from './actions'

describe.only('fetchAddressSaga', () => {
	api.middlewareGET = jest.fn()
	const error = new Error('test')

	it('should get addresses with success', async () => {
		api.middlewareGET.mockImplementation(() =>
			Promise.resolve({
				payload: ['data1', 'data2', 'data3']
			})
		)

		const dispatched = await mockSaga(
			fetchAddressSaga,
			fetchAddressRequest()
		)

		expect(dispatched).toContainEqual(fetchAddressSuccess())
	})

	it('should get addresses with failure', async () => {
		api.middlewareGET.mockImplementation(() => {
			throw error
		})

		const dispatched = await mockSaga(
			fetchAddressSaga,
			fetchAddressRequest()
		)

		expect(dispatched).toContainEqual(fetchAddressFailure(error))
	})
})
