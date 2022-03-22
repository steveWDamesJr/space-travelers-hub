import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
 <>  
<Router>

      <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
    </Router>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);


