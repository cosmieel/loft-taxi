import React from 'react';
import { render } from '@testing-library/react';
import { FormSignup } from './FormSignup';

describe('FormSignup', () => {
    it('renders correctly', () => {
        const { getByText } = render(<FormSignup />);

        expect(getByText('Адрес электронной почты')).toBeInTheDocument();
        expect(getByText('Имя')).toBeInTheDocument();
        expect(getByText('Фамилия')).toBeInTheDocument();
        expect(getByText('Пароль')).toBeInTheDocument();
    });
});