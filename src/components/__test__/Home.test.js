import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Home from '../Home/Home';

test('renders the entire content without error', () => {
  act(() => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
  });

  act(() => {});

  expect(screen.getByTestId('home-component')).toBeInTheDocument();
});
