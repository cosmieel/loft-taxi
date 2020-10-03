import React from 'react'
import { fireEvent, wait } from '@testing-library/react'
import { createStore } from 'redux'
import rootReducer from '../../../modules'
import OrderForm from './OrderForm'

describe('OrderForm', () => {
    it('make an order on OrderFormSubmit click', () => {
		const { getByTestId } = renderWithProviders(<OrderForm />, createStore(rootReducer))

		expect(getByTestId('addressFrom')).toBeTruthy()
		expect(getByTestId('addressTo')).toBeTruthy()
        expect(getByTestId('OrderFormSubmit')).toBeTruthy()
        
        fireEvent.submit(getByTestId('OrderFormSubmit'))
        
        wait(() => expect(getByTestId('OrderAccepted')).toBeTruthy())
    })
})
