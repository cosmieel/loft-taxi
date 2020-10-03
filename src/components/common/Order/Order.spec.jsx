import React from 'react'
import { createStore } from 'redux'
import rootReducer from '../../../modules'
import Order from './Order'

describe('Order', () => {
    it('renders correctly OrderNotAllowed', () => {
        const { getByTestId } = renderWithProviders(<Order />,
            createStore(rootReducer, { profile: { isProfileDataSaved: false } })
        )
        expect(getByTestId('OrderNotAllowed')).toBeTruthy()
    })

    it('renders correctly OrderForm', () => {
        const { getByTestId } = renderWithProviders(<Order />,
            createStore(rootReducer, { profile: { isProfileDataSaved: true } })
        )
        expect(getByTestId('OrderForm')).toBeTruthy()
    })

    it('renders correctly OrderAccepted', () => {
        const { getByTestId } = renderWithProviders(<Order />,
            createStore(rootReducer, {
                profile: { isProfileDataSaved: true },
                route: { isOrderAccepted: true },
            })
        )
        expect(getByTestId('OrderAccepted')).toBeTruthy()
    })
})
