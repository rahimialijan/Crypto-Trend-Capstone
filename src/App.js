import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCrypto } from './redux/crypto/cryptoSlice';
import Nav from './components/Navigation/Navigation';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="header">
        <Nav />
      </div>
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
