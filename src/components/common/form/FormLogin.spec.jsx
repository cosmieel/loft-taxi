import React from 'react';
import { render } from '@testing-library/react';
import { FormLogin } from './FormLogin';

describe('FormLogin', () => {
    it('renders correctly', () => {
        const { getByText } = render(<FormLogin />);

        expect(getByText('Имя пользователя')).toBeInTheDocument();
        expect(getByText('Пароль')).toBeInTheDocument();
    });
});