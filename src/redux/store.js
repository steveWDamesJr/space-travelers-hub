import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import rocketsReducer from './rockets';
import missionReducer from './missions';

const reducer = combineReducers({
  rocketsReducer,
  missionReducer,
});

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;
