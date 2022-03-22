import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Header = () => (
  <header className="header">
    <div className="navbar">
      <nav>
        <ul className="flex">
          <div className="left-nav">
            <li>
              <img alt="logo" className="logo" src={planet} />
            </li>
            <li>
              <h1>Space Travelers&apos; Hub</h1>
            </li>
          </div>
          <div className="right-nav">
            <li>
              <NavLink
                className="rockets"
                to="/"
                style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : '' })}
              >
                Rockets
              </NavLink>
            </li>
            <li>
              <NavLink
                className="missions"
                to="/missions"
                style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : '' })}
              >
                Missions
              </NavLink>
            </li>
            <li>
              <NavLink
                className="categories"
                to="/myProfile"
                style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : '' })}
              >
                My Profile
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
