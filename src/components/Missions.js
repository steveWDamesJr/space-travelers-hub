import { useEffect } from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getMissions, getMissionsFromApi } from '../redux/missions';
import Mission from './reserve/reserveMission';

const Missions = ({ store }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (store.length === 0) {
      getMissionsFromApi(dispatch, getMissions);
    }
  }, []);

  return (
    <section id="mission" className="mission">
      <table className="tableStripes">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{' '}</th>
          </tr>
        </thead>
        <tbody>
          {store.map((mission) => (
            <Mission
              key={`${mission.id}m`}
              mission={mission}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

Missions.propTypes = {
  store: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
};

export default Missions;
