import reducer from './reducer'
import {
	fetchAddressRequest,
	fetchAddressSuccess,
	fetchAddressFailure
} from './actions'

describe('address reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			addressList: [],
			error: null
        })
        
    })
    
	it(`should fetch ${fetchAddressRequest.toString()}`, () => {
		expect(
			reducer({}, {
				type: fetchAddressRequest.toString(),
			})
		).toEqual({
			addressList: [],
			error: null
        })
        
    })
    

	it(`should fetch ${fetchAddressSuccess.toString()}`, () => {
		expect(
			reducer({}, {
				type: fetchAddressSuccess.toString(),
				payload: [1, 2, 3]
			})
		).toEqual({
			addressList: [1, 2, 3],
			error: null
        })
        
    })
    

	it(`should fetch ${fetchAddressFailure.toString()}`, () => {
		expect(
			reducer({}, {
				type: fetchAddressFailure.toString(),
				payload: 'error text'
			})
		).toEqual({
			addressList: [],
			error: 'error text'
        })
        
    })
    
})

