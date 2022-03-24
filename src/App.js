import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Profile from './components/MyProfile';
import Missions from './components/Missions';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <Route
          path="/"
          exact
          render={() => <Rockets />}
        />
        <Route
          path="/mission"
          exact
          render={() => <Missions />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile />
          )}
        />
      </BrowserRouter>
    </main>
  );
}

export default App;
