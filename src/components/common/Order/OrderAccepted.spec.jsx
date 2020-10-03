import React from 'react'
import { fireEvent, wait } from '@testing-library/react'
import { createStore } from 'redux'
import rootReducer from '../../../modules'
import { OrderAccepted } from './OrderAccepted'

describe('Order success form', () => {
    const newOrderHandleMock = jest.fn()

    it('click new order', () => {
        const { getByTestId } = renderWithProviders(<OrderAccepted newOrderHandle={newOrderHandleMock} />,
            createStore(rootReducer, {
                profile: { isProfileDataSaved: true },
                route: { isOrderAccepted: true },
            })
        )

        fireEvent.click(getByTestId('makeNewOrder'))

        wait(() => expect(getByTestId('OrderForm')).toBeTruthy())
    })
})
