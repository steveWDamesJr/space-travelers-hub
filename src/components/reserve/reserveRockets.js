import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets';

const Rocket = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();
  const handelReserved = (id) => {
    dispatch(reserveRocket({ id }));
  };
  return (
    <li className="reserved-rocket-li">
      <div className="img-for-rocket-div">
        <img
          className="img-for-rocket"
          src={rocket.flickr_images}
          alt="Rocket"
        />
      </div>
      <div className="rocket-info">
        <h2 className="rocket-title">{rocket.rocket_name}</h2>
        <p>
          {rocket.reserved ? (
            <span className="rocket-reserved-badge">Reserved</span>
          ) : null}
          {rocket.description}
        </p>
        <button
          onClick={() => handelReserved(rocket.id)}
          className={
            rocket.reserved ? 'button-reserved' : 'button-not-reserved'
          }
          type="button"
        >
          {rocket.reserved ? 'rocket-reservation-canceled' : 'reserve-rocket'}
        </button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: Proptypes.shape({
    description: Proptypes.string,
    id: Proptypes.number,
    rocket_name: Proptypes.string,
    reserved: Proptypes.bool,
    flickr_images: Proptypes.string,
  }).isRequired,
};
export default Rocket;
