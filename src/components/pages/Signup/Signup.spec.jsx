import React from 'react'
import { createStore } from 'redux'
import rootReducer from '../../../modules/'
import { fetchLoginSuccess } from '../../../modules/auth'
import { Signup } from './Signup'

describe("Signup", () => {
    it("renders correctly", () => {
        const store = createStore(rootReducer)
        const { getByTestId } = renderWithProviders(<Signup />, store)
        store.dispatch(fetchLoginSuccess())

        expect(getByTestId("Signup")).toBeTruthy()
    })
})