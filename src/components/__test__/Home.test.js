import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Home from '../Home/Home';
import cryptoSlice from '../../redux/crypto/cryptoSlice';

export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
};

// __mocks__/react-redux.js
export const useSelector = jest.fn();
export const useDispatch = jest.fn();

// Redux pure function unit tests
describe('Redux Pure Functions', () => {
  test('reducer should return the correct initial state', () => {
    const initialState = {};
    const action = { type: 'SOME_ACTION' };
    const newState = cryptoSlice(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
describe('React Component Integration Tests', () => {
  test('renders the entire content without error', () => {
    useSelector.mockReturnValue({});

    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(screen.getByTestId('home-component')).toBeInTheDocument();
  });
});
