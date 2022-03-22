import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/configureStore';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <Router>

          <Header />
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/myProfile" element={<MyProfile />} />
          </Routes>
        </Router>
        <Rockets />
      </>
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
);
