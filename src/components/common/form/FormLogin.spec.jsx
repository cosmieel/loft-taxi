import React from 'react'
import { fireEvent, wait } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../../../modules'
import App from '../../../App'
import { fetchLoginRequest, fetchLoginSuccess } from '../../../modules/auth'

describe('FormLogin', () => {
    it("should redirect to Map on loginSubmit button click ", () => {
		const store = createStore(
			rootReducer,
			applyMiddleware(store => next => action => {
				if (action.type === fetchLoginRequest.toString()) {
					expect(action.payload).toStrictEqual({
						email: 'test5@test.com',
						password: '000000'
					})
					return store.dispatch(fetchLoginSuccess())
				}
				return next(action)
			})
        )
        
        const { getByTestId } = renderWithProviders(<App />, store)

		fireEvent.change(getByTestId("loginEmail"), {
			target: { value: 'test5@test.com' }
		})

		fireEvent.change(getByTestId("loginPassword"), {
			target: { value: '000000' }
		})

		const loginButton = getByTestId("loginSubmit")
		fireEvent.submit(loginButton)

		return wait(() => getByTestId("Map"))
	})
})