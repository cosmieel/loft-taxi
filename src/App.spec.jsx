import React from 'react'
import { fireEvent } from '@testing-library/react'
import { createStore } from 'redux'
import rootReducer from './modules/'
import { fetchLoginSuccess } from './modules/auth'
import App from './App'

describe("App", () => {
    it("renders ProfilePage on profileLink click", () => {
        const store = createStore(rootReducer)
        const { getByTestId } = renderWithProviders(<App />, store)
        store.dispatch(fetchLoginSuccess())

        fireEvent.click(getByTestId("profileLink"))

        expect(getByTestId("Profile")).toBeTruthy()
    })

    it("renders Map on mapLink click", () => {
        const store = createStore(rootReducer)
        const { getByTestId } = renderWithProviders(<App />, store)
        store.dispatch(fetchLoginSuccess())

        fireEvent.click(getByTestId("mapLink"))

        expect(getByTestId("Map")).toBeTruthy()
    })

    it("renders Login on logoutLink click", () => {
        const store = createStore(rootReducer)
        const { getByTestId } = renderWithProviders(<App />, store)
        store.dispatch(fetchLoginSuccess())

        fireEvent.click(getByTestId("logoutLink"))

        expect(getByTestId("Login")).toBeTruthy()
    })

    it("toggle Login and Signup on signupLink and loginLink click", () => {
        const store = createStore(rootReducer)
        const { getByTestId } = renderWithProviders(<App />, store)

        fireEvent.click(getByTestId("signupLink"))
        expect(getByTestId("Signup")).toBeTruthy()

        fireEvent.click(getByTestId("loginLink"))
        expect(getByTestId("Login")).toBeTruthy()
    })
})
