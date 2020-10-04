import { mockSaga } from '../mockSaga'
import * as api from '../baseMiddleware'
import { fetchRouteSaga } from './sagas'
import {
	fetchRouteRequest,
	fetchRouteSuccess,
	fetchRouteFailure
} from './actions'

describe.only('fetchRouteSaga', () => {
	api.middlewareRouteGET = jest.fn()
	const error = new Error('test')

	it('should get route with success', async () => {
		api.middlewareRouteGET.mockImplementation(() =>
			Promise.resolve({
				payload: ['data1', 'data2', 'data3']
			})
		)

		const dispatched = await mockSaga(
			fetchRouteSaga,
			fetchRouteRequest()
		)

		expect(dispatched).toContainEqual(fetchRouteSuccess({
			payload: ['data1', 'data2', 'data3']
		}))
	})

	it('should get route with failure', async () => {
		api.middlewareRouteGET.mockImplementation(() => {
			throw error
		})

		const dispatched = await mockSaga(
			fetchRouteSaga,
			fetchRouteRequest()
		)

		expect(dispatched).toContainEqual(fetchRouteFailure(error))
	})
})
