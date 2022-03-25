/* eslint-disable react/prop-types */
import React from 'react';
import Rocket from './reserve/reserveRockets';

const Rockets = ({ store }) => (
  <section className="rockets-container">
    <ul className="rocket-ul-flex">
      {store.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
      <li><p>Under Construction</p></li>
    </ul>
  </section>
);

export default Rockets;
