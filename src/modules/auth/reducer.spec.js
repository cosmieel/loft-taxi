import reducer from './reducer'
import { 
    fetchLoginFailure, fetchLoginRequest, fetchLoginSuccess, 
    fetchLogout,
    fetchSignUpFailure, fetchSignUpRequest, fetchSignUpSuccess
} from './actions'

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            isLoggedIn: false,
            error: null
        })
    })

    it(`should fetch ${fetchLoginRequest.toString()}`, () => {
        expect(
            reducer({}, {
                type: fetchLoginRequest.toString()
            })
        ).toEqual({
            isLoggedIn: false,
            error: null
        })
    })

    it(`should fetch ${fetchLoginSuccess.toString()}`, () => {
        expect(
            reducer({}, {
                type: fetchLoginSuccess.toString()
            })
        ).toEqual({
            isLoggedIn: true,
            error: null
        })
    })

    it(`should fetch ${fetchLoginFailure.toString()}`, () => {
        expect(
            reducer({}, {
                type: fetchLoginFailure.toString(),
                payload: 'error'
            })
        ).toEqual({
            isLoggedIn: false,
            error: 'error'
        })
    })

    it(`should fetch ${fetchLogout.toString()}`, () => {
        expect(
            reducer({}, {
                type: fetchLogout.toString()
            })
        ).toEqual({
            isLoggedIn: false,
            error: null
        })
    })

    it(`should fetch ${fetchSignUpRequest.toString()}`, () => {
		expect(
			reducer({}, {
				type: fetchSignUpRequest.toString()
			})
		).toEqual({
			isLoggedIn: false,
			error: null
		});
	});

	it(`should fetch ${fetchSignUpSuccess.toString()}`, () => {
		expect(
			reducer({}, {
				type: fetchSignUpSuccess.toString()
			})
		).toEqual({
			isLoggedIn: true,
			error: null
		});
	});

	it(`should fetch ${fetchSignUpFailure.toString()}`, () => {
		expect(
			reducer({}, {
				type: fetchSignUpFailure.toString(),
				payload: 'error'
			})
		).toEqual({
			isLoggedIn: false,
			error: 'error'
		});
	});
})
