import React from 'react'
import { fireEvent, wait } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../../../modules'
import App from '../../../App'
import { fetchSignUpRequest, fetchSignUpSuccess } from '../../../modules/auth'

describe('FormSignup', () => {
    it("should redirect to Map on signupSubmit button click ", () => {
		const store = createStore(
			rootReducer,
			applyMiddleware(store => next => action => {
				if (action.type === fetchSignUpRequest.toString()) {
					expect(action.payload).toStrictEqual({
						email: 'email@email.com',
						name: 'name',
						surname: 'surname',
						password: '000000000'
					})
					return store.dispatch(fetchSignUpSuccess())
				}
				return next(action)
			})
        )
        
        const { getByTestId } = renderWithProviders(<App />, store)

        fireEvent.click(getByTestId("signupLink"));
		expect(getByTestId("Signup")).toBeTruthy()

		fireEvent.change(getByTestId("signupEmail"), {
			target: { value: 'email@email.com' }
		})

		fireEvent.change(getByTestId("signupName"), {
			target: { value: 'name' }
        })
        
		fireEvent.change(getByTestId("signupSurname"), {
			target: { value: 'surname' }
		})

		fireEvent.change(getByTestId("signupPassword"), {
			target: { value: '000000000' }
		})

		const signupButton = getByTestId("signupSubmit")
		fireEvent.submit(signupButton)

		return wait(() => getByTestId("Map"))
	})
})