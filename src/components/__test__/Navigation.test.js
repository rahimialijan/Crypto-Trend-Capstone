import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createMockStore from 'redux-mock-store';
import Nav from '../Navigation/Navigation';
import store from '../../redux/store';

describe('Navigation Bar test suit', () => {
  const initialState = {
    crypto: {
      cryptos: [
        {
          uuid: 'Qwsogvtv82FCd',
          symbol: 'BTC',
          name: 'Bitcoin',
          color: '#f7931A',
          iconUrl: 'https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg',
          marketCap: '586699044075',
          price: '30525.981366112937',
          listedAt: 1330214400,
          tier: 1,
          change: '0.50',
          rank: 1,
          lowVolume: false,
          coinrankingUrl: 'https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc',
          '24hVolume': '12581186855',
          btcPrice: '1',
        },
      ],
    },
    stats: {
      total: 26788,
      totalCoins: 26788,
      totalMarkets: 36444,
      totalExchanges: 161,
      totalMarketCap: '1172476637995',
      total24hVolume: '35484231592',
    },
    title: 'Crypto Trend',
    isLoading: true,
    error: '',
    message: '',
    active: 'Qwsogvtv82FCd',
  };
  const mockStore = createMockStore();
  const storeMocked = mockStore(initialState);
  test('Should render a navigation bar', () => {
    const container = render(
      <Provider store={storeMocked}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
  test('Should render Title in navigation bar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText(/Crypto Trend/i)).toBeInTheDocument();
  });
});
