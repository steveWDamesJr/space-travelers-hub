import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketsApiUrl = 'https://api.spacexdata.com/v3/rockets';

export const rocketsFromAPI = async (dispatch, getRockets) => {
  try {
    const { data } = await axios.get(rocketsApiUrl);
    dispatch(getRockets(data));
  } catch ({ message }) {
    dispatch({ type: 'rocketsFail', payload: { error: message } });
  }
};

const slice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    getRockets: (rockets, action) => {
      const rocketAPI = action.payload;
      rocketAPI.forEach(
        ({
          rocket_name: name, description, flickr_images: img, id,
        }) => {
          const newRocket = {
            id,
            rocket_name: name,
            reserved: false,
            description,
            flickr_images: img[0],
          };
          rockets.push(newRocket);
        },
      );
    },

    reserveRocket: (rockets, action) => {
      const index = rockets.find((rocket) => rocket.id === action.payload.id);
      index.reserved = !index.reserved;
    },

    rocketsFail: (rockets) => rockets,
  },
});

export const { getRockets, reserveRocket } = slice.actions;

export default slice.reducer;
