import React from 'react';
import {NavLink} from 'react-router-dom';
import planet from '../images/planet.png';

const Header = () => (
  <header className="header">
    <div className="Navbar">
      <nav>
        <ul className="flex">
        <div className='leftNav'>
        <li>
          <img className='logo' src={planet}></img>
        </li>
        <li>
          <h1>Space Travelers' Hub</h1>
        </li>
        </div>
        <div className='rightNav'>
          <li>
            <NavLink className="Rockets" to="/"  style={({isActive}) => {
              return {textDecoration:isActive? 'underline':''}
  }}

   >Rockets</NavLink>
          </li>
          <li>
            <NavLink className="Missions" to="/missions"style={({isActive}) => {
              return {textDecoration:isActive? 'underline':''}
  }}
  >Missions</NavLink>
          </li>
          <li>
            <NavLink className="categories" to="/myProfile" style={({isActive}) => {
              return {textDecoration:isActive? 'underline':''}
  }}
  >My Profile</NavLink>
          </li>
          </div>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

