import PropTypes from 'prop-types';
import './stats.css';

const Stats = ({ stats }) => {
  const {
    totalCoins, total24hVolume, totalExchanges, totalMarkets, totalMarketCap, total,
  } = stats;

  return (
    <div className="stats-section">
      <div className="stats">
        <div className="letf-stats">
          <span>
            <span>Total Coins:</span>
            {' '}
            {Number(total).toLocaleString(undefined, 2)}
          </span>
          <span>
            <span>Total Volume in 24h:</span>
            {' '}
            {`${Number(total24hVolume).toLocaleString(undefined, 2)}$`}
          </span>
          <span>
            <span>Total Exchanges:</span>
            {' '}
            {Number(totalExchanges).toLocaleString(undefined, 2)}
          </span>
        </div>
        <div className="right-stats">
          <span>
            <span>Total Coins:</span>
            {' '}
            {Number(totalCoins).toLocaleString(undefined, 2)}
          </span>
          <span>
            <span>Total Markets:</span>
            {' '}
            {Number(totalMarkets).toLocaleString(undefined, 2)}
          </span>
          <span>
            <span>Total Markets Cap:</span>
            {' '}
            {`${Number(totalMarketCap).toLocaleString(undefined, 2)}$`}
          </span>
        </div>
      </div>
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Stats;
