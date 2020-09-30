import React from 'react'
import { createStore } from 'redux'
import rootReducer from '../../../modules'
import { fetchLoginSuccess } from '../../../modules/auth'
import { MapBlock } from './MapBlock'
import mapbox from 'mapbox-gl'

jest.mock("mapbox-gl", () => ({
    Map: jest.fn(() => ({ remove: () => {} })),
}))

describe("MapBlock", () => {
    it("renders correctly", () => {
        window.URL.createObjectURL = jest.fn()

        const store = createStore(rootReducer)
        const { getByTestId } = renderWithProviders(<MapBlock />, store)
        store.dispatch(fetchLoginSuccess())

        expect(mapbox.Map).toHaveBeenCalledWith({
            center: [30.3141, 59.9386],
            container: getByTestId('MapBlock'),
            style: "mapbox://styles/mapbox/light-v10",
            zoom: 12,
        })
    })
})