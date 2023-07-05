import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { setTitle, setActiveCoin } from '../../redux/crypto/cryptoSlice';
import './details.css';

const Details = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  // eslint-disable-next-line
  const activeData = useSelector((state) => state.crypto.cryptos.find((el) => el.uuid === location.state),);
  const date = new Date(activeData.listedAt * 1000);

  useEffect(() => {
    dispatch(setTitle(`${activeData.symbol} Treds`));
    dispatch(setActiveCoin(location.state));
  });

  return (
    <div key={activeData.uuid}>
      <div className="details-all-stats">{activeData.name.toUpperCase()}</div>
      <div className="details-top-details">
        <div className="details-crypto-icon">
          <img src={activeData.iconUrl} alt="Crypto" />
        </div>
        <div className="details-crypto-intro">
          <span>
            <span>Crypto Currency: </span>
            <span>{activeData.name}</span>
          </span>
          <span>
            <span>Price In BTC: </span>
            <span>
              {Number(activeData.btcPrice).toLocaleString(undefined, 2)}
            </span>
          </span>
          <span>
            <Link to={activeData.coinrankingUrl} target="_blank">
              External Resource
            </Link>
          </span>
        </div>
      </div>
      <div className="details-crypto-analytics">
        <div>
          <span>Name: </span>
          <span>{activeData.name}</span>
        </div>
        <div>
          <span>Volume in 24h:</span>
          <span>
            {`${Number(activeData['24hVolume']).toLocaleString(
              undefined,
              2,
            )} $`}
          </span>
        </div>
        <div>
          <span>Market Capital:</span>
          <span>
            {`${Number(activeData.marketCap).toLocaleString(undefined, 2)} $`}
          </span>
        </div>
        <div>
          <span>Price in USD: </span>
          <span>
            {`${Number(activeData.price).toLocaleString(undefined, 2)} $`}
          </span>
        </div>
        <div>
          <span>Listed At:</span>
          <span>{`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}</span>
        </div>
        <div>
          <span>Change in 24h: </span>
          <span>{activeData.change}</span>
        </div>
        <div>
          <span>Rank: </span>
          <span>{activeData.rank}</span>
        </div>
        <div>
          <span>Low Volume: </span>
          <span>{activeData.lowVolume}</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
