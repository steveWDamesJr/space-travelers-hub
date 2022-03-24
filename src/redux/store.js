import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';

const reducer = combineReducers({

});

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;
