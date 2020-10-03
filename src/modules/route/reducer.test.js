import reducer from './reducer'
import { 
    fetchRouteRequest, fetchRouteSuccess, fetchRouteFailure, 
    fetchRouteReset
} from './actions'

describe('route reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			route: [],
			isOrderAccepted: false,
			error: null,
		})
	})

	it(`should fetch ${fetchRouteRequest.toString()}`, () => {
		expect(
			reducer({}, {
				type: fetchRouteRequest.toString()
			})
		).toEqual({
			route: [],
			isOrderAccepted: false,
			error: null,
		})
	})

	it(`should fetch ${fetchRouteSuccess.toString()}`, () => {
		expect(
			reducer({}, {
				type: fetchRouteSuccess.toString(),
				payload: [1, 2, 3]
			})
		).toEqual({
			route: [1, 2, 3],
			isOrderAccepted: true,
			error: null,
		})
	})

	it(`should fetch ${fetchRouteFailure.toString()}`, () => {
		expect(
			reducer({}, {
				type: fetchRouteFailure.toString(),
				payload: 'error text'
			})
		).toEqual({
			route: [],
			isOrderAccepted: false,
			error: 'error text',
		})
	})

	it(`should fetch ${fetchRouteReset.toString()}`, () => {
		expect(
			reducer({}, {
				type: fetchRouteReset.toString()
			})
		).toEqual({
			route: [],
			isOrderAccepted: false,
			error: null,
		})
	})
})
