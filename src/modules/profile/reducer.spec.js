import reducer from './reducer'
import {
    postProfileRequest, postProfileSuccess, postProfileFailure,
    fetchProfileRequest, fetchProfileSuccess, fetchProfileFailure,
} from './actions'

describe('profile reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            profileData: {},
            isProfileDataSaved: false,
            error: null
        })
    })

    it(`should post ${postProfileRequest.toString()}`, () => {
		expect(
			reducer({}, {
				type: postProfileRequest.toString()
			})
		).toEqual({
			profileData: {},
			isProfileDataSaved: false,
			error: null,
		})
    })
    
	it(`should post ${postProfileSuccess.toString()}`, () => {
		expect(
			reducer({}, {
                type: postProfileSuccess.toString(),
                payload: { text: 'text' }
            })
		).toEqual({
			profileData: { text: 'text' },
			isProfileDataSaved: true,
			error: null,
		})
    })
    
    it(`should post ${postProfileFailure.toString()}`, () => {
		expect(
			reducer({}, {
                type: postProfileFailure.toString(),
                payload: 'error text'
            })
		).toEqual({
			profileData: {},
			isProfileDataSaved: false,
			error: 'error text',
		})
	})

    it(`should fetch ${fetchProfileRequest.toString()}`, () => {
        expect(
            reducer({}, {
                type: fetchProfileRequest.toString()
            })
        ).toEqual({
            profileData: {},
            isProfileDataSaved: false,
            error: null
        })
    })

    it(`should fetch ${fetchProfileSuccess.toString()}`, () => {
        expect(
            reducer({}, {
                type: fetchProfileSuccess.toString(),
                payload: { text: 'text' }
            })
        ).toEqual({
            profileData: { text: 'text' },
            isProfileDataSaved: true,
            error: null
        })
    })

    it(`should fetch ${fetchProfileFailure.toString()}`, () => {
        expect(
            reducer({}, {
                type: fetchProfileFailure.toString(),
                payload: 'error'
            })
        ).toEqual({
            profileData: {},
            isProfileDataSaved: false,
            error: 'error'
        })
    })
})
