import React from 'react'
import { createStore } from 'redux'
import rootReducer from '../../../modules/'
import { fetchLoginSuccess } from '../../../modules/auth'
import { Map } from './Map'
import mapbox from 'mapbox-gl'

jest.mock("mapbox-gl", () => ({
    Map: jest.fn(() => ({ remove: () => {} })),
}))

describe("Map", () => {
    it("renders correctly", () => {
        window.URL.createObjectURL = jest.fn()

        const store = createStore(rootReducer)
        const { getByTestId } = renderWithProviders(<Map />, store)
        store.dispatch(fetchLoginSuccess())

        expect(mapbox.Map).toHaveBeenCalledWith({
            center: [30.3141, 59.9386],
            container: getByTestId('Map'),
            style: "mapbox://styles/mapbox/light-v10",
            zoom: 12,
        })
    })
})