import reducer from './reducer'
import { fetchProfileRequest, fetchProfileSuccess, fetchProfileFailure } from './actions'

describe('profile reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            profileData: {},
            error: null
        });
    });

    it(`should fetch ${fetchProfileRequest.toString()}`, () => {
        expect(
            reducer({}, {
                type: fetchProfileRequest.toString()
            })
        ).toEqual({
            profileData: {},
            error: null
        });
    });

    it(`should fetch ${fetchProfileSuccess.toString()}`, () => {
        expect(
            reducer({}, {
                type: fetchProfileSuccess.toString(),
                payload: { text: 'text' }
            })
        ).toEqual({
            profileData: { text: 'text' },
            error: null
        });
    });

    it(`should fetch ${fetchProfileFailure.toString()}`, () => {
        expect(
            reducer({}, {
                type: fetchProfileFailure.toString(),
                payload: 'error'
            })
        ).toEqual({
            profileData: {},
            error: 'error'
        });
    });
});
