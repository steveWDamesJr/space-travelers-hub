import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission } from '../../redux/missions';

const Mission = (props) => {
  const { mission } = props;
  const dispatch = useDispatch();
  const handelReserved = (id) => {
    dispatch(reserveMission({ id }));
  };
  return (
    <tr id={mission.id}>
      <th>{mission.mission_name}</th>
      <td>{mission.description}</td>
      <td>
        <p className={
            mission.reserved ? 'ubadge member' : 'ubadge'
          }
        >
          {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
        </p>
      </td>
      <td>
        <button
          type="button"
          aria-label="exit"
          onClick={() => handelReserved(mission.id)}
          className={
            mission.reserved ? 'mission-button exit' : 'mission-button'
          }
        >
          {
            mission.reserved ? 'Leave Mission' : 'Join Mission'
          }
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  mission: Proptypes.shape({
    id: Proptypes.number,
    description: Proptypes.string,
    mission_id: Proptypes.number,
    mission_name: Proptypes.string,
    reserved: Proptypes.bool,
  }).isRequired,
};
export default Mission;
