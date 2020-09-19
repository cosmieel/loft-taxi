import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock("../src/components/pages/Login/Login", () => ({ Login: () => <div>Login page content</div> }));

describe("App", () => {
	it("renders correctly", () => {
		const { container } = render(<App />);
		expect(container.innerHTML).toMatch("Login page content");
	});
});
