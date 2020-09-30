import React from 'react'
import { createStore } from 'redux'
import rootReducer from '../../../modules/'
import { fetchLoginSuccess } from '../../../modules/auth'
import { Map } from './Map'

jest.mock("mapbox-gl", () => ({
    Map: jest.fn(() => ({ remove: () => {} })),
}))

describe("Map", () => {
    it("renders correctly", () => {
        const store = createStore(rootReducer)
        const { getByTestId } = renderWithProviders(<Map />, store)
        store.dispatch(fetchLoginSuccess())

        expect(getByTestId("Map")).toBeTruthy()
    })
})