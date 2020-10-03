import React from 'react'
import { fireEvent, wait } from '@testing-library/react'
import { createStore } from 'redux'
import rootReducer from '../../../modules'
import { OrderNotAllowed } from './OrderNotAllowed'

describe('OrderNotAllowed', () => {
    it('redirect to Profile on goToProfile button click', () => {
        const { getByTestId } = renderWithProviders(<OrderNotAllowed />,
            createStore(rootReducer, { profile: { isProfileDataSaved: false } })
        )

        fireEvent.click(getByTestId('goToProfile'))

        wait(() => expect(getByTestId('Profile')).toBeTruthy())
    })
})
