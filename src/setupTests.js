// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'

configure({ adapter: new Adapter() });

global.renderWithProviders = function(children, store) {
	let rendered = render(
		<MemoryRouter>
			<Provider store={store}>{children}</Provider>
		</MemoryRouter>
	);

	return {
		...rendered,
		store
	};
}

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    GeolocateControl: jest.fn(),
    Map: jest.fn(() => ({
      addControl: jest.fn(),
      on: jest.fn(),
      remove: jest.fn()
    })),
    NavigationControl: jest.fn()
}))
  
export default undefined;