import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Stats from "../Stats/Stats";
import Coin from "../Coin/Coin";
import "./home.css";

const CoinsList = ({ coins }) => {
  const coinItems = coins.map((coin) => (
    <Coin coin={coin} key={Math.random()} />
  ));

  return <ul className="crypto-list">{coinItems}</ul>;
};

CoinsList.propTypes = {
  coins: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

const Error = ({ error }) => (
  <div className="error-container">
    <span>{error}</span>
  </div>
);

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

const Loading = () => (
  <div className="loading-container">
    <span />
  </div>
);

const Home = () => {
  const { cryptos, stats, isLoading, error } = useSelector(
    (state) => state.crypto
  );

  const [searchCoin, setSearchCoin] = useState("");

  const coinSearch = cryptos.filter((el) => {
    if (searchCoin.length > 0) {
      return el.name.toLowerCase().includes(searchCoin.toLowerCase());
    }
    return el;
  });

  return (
    <div className="content-container">
      {error !== "" ? (
        <Error error={error} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="all-stats-container">ALL STATS</div>
          <Stats stats={stats} />
          <div className="search-form-container">
            <input
              className="search-input"
              type="search"
              name="search"
              onChange={(e) => setSearchCoin(e.target.value)}
              id="search"
              placeholder="search Crypto"
              autoComplete="off"
            />
          </div>
          <CoinsList coins={coinSearch} />
        </div>
      )}
    </div>
  );
};

export default Home;
