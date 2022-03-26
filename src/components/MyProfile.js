import React from 'react';
import Proptypes from 'prop-types';

const MyProfile = ({ rockets, missions }) => {
  const reservedItems = (store) => store.filter((element) => element.reserved === true);

  return (
    <section className="myprofile-container">
      <div className="missions-myprofile-div">
        <h2 className="title-myprofile-missions">My Missions</h2>
        <ul className="missions-myprofile-list-ul">
          {reservedItems(missions).map((element) => (
            <li className="missions-myprofile-list-li" key={element.mission_name}>{element.mission_name}</li>
          ))}
        </ul>
      </div>
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
  missions: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
  rockets: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
};

export default MyProfile;
