import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsURL = 'https://api.spacexdata.com/v3/missions';

export const getMissionsFromApi = async (dispatch, getMissions) => {
  try {
    const { data } = await axios.get(missionsURL);
    dispatch(getMissions(data));
  } catch ({ message }) {
    dispatch({ type: 'getMissionsFail', payload: { error: message } });
  }
};

const slice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    getMissions: (missions, action) => {
      const apiMission = action.payload;
      apiMission.forEach(
        ({
          mission_name: name, description, mission_id: id,
        }) => {
          const newMission = {
            id,
            mission_name: name,
            reserved: false,
            description,
          };
          missions.push(newMission);
        },
      );
    },

    reserveMission: (missions, action) => {
      const index = missions.find((mission) => mission.id === action.payload.id);
      index.reserved = !index.reserved;
    },

    getMissionsFail: (missions) => missions,
  },
});

export const { getMissions, reserveMission } = slice.actions;
export default slice.reducer;
