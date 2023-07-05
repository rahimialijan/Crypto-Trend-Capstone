import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

test('should render title place holder link', () => {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
  const linkElement = screen.getByText(/Crypto Trend/i);
  expect(linkElement).toBeInTheDocument();
});
