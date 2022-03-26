import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, rocketsFromAPI } from './redux/rockets';
import Header from './components/Header';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import './index.css';

function App() {
  const dispatch = useDispatch();
  const { rocketsReducer, missionReducer } = useSelector((state) => state);

  useEffect(() => {
    rocketsFromAPI(dispatch, getRockets);
  }, []);

  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets store={rocketsReducer} />} />
          <Route path="/missions" element={<Missions store={missionReducer} />} />
          <Route path="/myProfile" element={<MyProfile rockets={rocketsReducer} missions={missionReducer} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
