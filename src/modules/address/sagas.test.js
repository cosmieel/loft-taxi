import { mockSaga } from '../mockSaga'
import * as api from './middleware'
import { fetchAddressSaga } from './sagas'
import {
	fetchAddressRequest,
	fetchAddressSuccess,
	fetchAddressFailure
} from './actions'

describe.only('fetchAddressSaga', () => {
	api.fetchAddressMiddleware = jest.fn()
	const error = new Error('test')

	it('should get addresses with success', async () => {
		api.fetchAddressMiddleware.mockImplementation(() =>
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
		api.fetchAddressMiddleware.mockImplementation(() => {
			throw error
		})

		const dispatched = await mockSaga(
			fetchAddressSaga,
			fetchAddressRequest()
		)

		expect(dispatched).toContainEqual(fetchAddressFailure(error))
	})
})
