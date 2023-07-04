import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './coin.css';

const Coin = ({ coin }) => {
  const style = {
    backgroundImage: `url(${coin.iconUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'right',
    backgroundSize: '50px',
  };
  return (
    <li key={coin.uuid}>
      <Link to={`details?coin=${coin.uuid}`} state={coin.uuid}>
        <div className="coin-container">
          <span style={style}>
            <span className="coin-info coin-name">
              <span className="coin-name-label">Name: </span>
              <span className="coin-name-value">{`${coin.name}(${coin.symbol})`}</span>
            </span>
            <span className="coin-info coin-market-cap">
              <span className="coin-market-cap-label">Market Cap: </span>
              <span className="coin-market-cap-value">
                {Number(coin.marketCap).toLocaleString()}
              </span>
            </span>
            <span className="coin-info coin-price">
              <span className="coin-price-label">Price: </span>
              <span className="coin-price-value">
                {Number(coin.price).toLocaleString()}
              </span>
            </span>
          </span>
        </div>
      </Link>
    </li>
  );
};

Coin.propTypes = {
  coin: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Coin;
