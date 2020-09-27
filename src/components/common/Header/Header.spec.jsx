import React from 'react'
import { createStore } from 'redux'
import rootReducer from '../../../modules'
import { fetchLoginSuccess } from '../../../modules/auth'
import Header from './Header'

describe("Header", () => {
    it("renders correctly", () => {
        const store = createStore(rootReducer)
        const { getByTestId } = renderWithProviders(<Header />, store);
        store.dispatch(fetchLoginSuccess())

        expect(getByTestId("Header")).toBeTruthy();
    });
});
