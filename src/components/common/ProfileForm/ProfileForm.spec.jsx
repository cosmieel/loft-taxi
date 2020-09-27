import React from 'react'
import { fireEvent, wait } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../../../modules'
import ProfileForm from './ProfileForm'
import { fetchProfileRequest } from '../../../modules/profile'

describe("ProfileForm", () => {
	it("should submit form on profileSave button click", () => {
		const store = createStore(
			rootReducer,
			applyMiddleware(store => next => action => {
				if (action.type === fetchProfileRequest.toString()) {
					return Promise.resolve()
				}
				return next(action)
            })
		)

		const { getByTestId } = renderWithProviders(<ProfileForm />, store)

		fireEvent.change(getByTestId("profileCardNumber"), {
			target: { value: '1111111111111111' }
		})
		fireEvent.change(getByTestId("profileExpiryDate"), {
			target: { value: '09/25' }
		})
		fireEvent.change(getByTestId("profileCardName"), {
			target: { value: 'NAME SURNAME' }
		})
		fireEvent.change(getByTestId("profileCVC"), {
			target: { value: '123' }
		})

		const profileSaveButton = getByTestId("profileSave")
		fireEvent.submit(profileSaveButton)

		return wait(() => getByTestId("profileNotice"))
	})
})
