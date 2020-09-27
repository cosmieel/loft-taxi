import React from 'react'
import { createStore } from 'redux'
import rootReducer from '../../../modules/'
import { fetchLoginSuccess } from '../../../modules/auth'
import { ProfilePage } from './'

describe("Profile", () => {
    it("renders correctly", () => {
        const store = createStore(rootReducer)
        const { getByTestId } = renderWithProviders(<ProfilePage />, store)
        store.dispatch(fetchLoginSuccess())

        expect(getByTestId("Profile")).toBeTruthy()
    })
})