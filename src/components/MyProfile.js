import React from 'react';
import Proptypes from 'prop-types';

const MyProfile = ({ rockets }) => {
  const reservedItems = (store) => store.filter((element) => element.reserved === true);

  return (
    <section className="myprofile-container">
      <div className="myprofile-rockets-container">
        <h2 className="title-myprofile-rockets">My Rockets</h2>
        <ul className="rockets-myprofile-list-ul">
          {reservedItems(rockets).map((element) => (
            <li className="rockets-myprofile-list-li" key={element.rocket_name}>{element.rocket_name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

MyProfile.propTypes = {
  rockets: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
};

export default MyProfile;
