import React from 'react'
import { createStore } from 'redux'
import rootReducer from '../../../modules/'
import { fetchLoginSuccess } from '../../../modules/auth'
import { Login } from './Login'

describe("Login", () => {
    it("renders correctly", () => {
        const store = createStore(rootReducer)
        const { getByTestId } = renderWithProviders(<Login />, store);
        store.dispatch(fetchLoginSuccess())

        expect(getByTestId("Login")).toBeTruthy();
    });
});
