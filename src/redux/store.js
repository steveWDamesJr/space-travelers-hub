import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import rocketsReducer from './rockets';

const reducer = combineReducers({
  rocketsReducer,
});

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;
