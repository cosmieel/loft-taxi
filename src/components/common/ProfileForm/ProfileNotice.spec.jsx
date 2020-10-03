import React from 'react'
import { fireEvent, wait } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../../../modules'
import { ProfileNotice } from './ProfileNotice'
import { fetchProfileRequest } from '../../../modules/profile'

describe('Saved ProfileForm ', () => {
    it('redirect to Map on goToMap button click', () => {
        const store = createStore(
    		rootReducer,
    		applyMiddleware(store => next => action => {
    			if (action.type === fetchProfileRequest.toString()) {
    				return Promise.resolve()
    			}
    			return next(action)
            })
    	)
        const { getByTestId } = renderWithProviders(<ProfileNotice />, store)

        fireEvent.click(getByTestId('goToMap'))

        wait(() => expect(getByTestId('Map')).toBeTruthy())
    })
})
