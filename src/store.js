import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

//reducers up here
const customerFeeling = (state = [], action) => {
  if (action.type === 'SUBMIT_FEELING') {
    //update state
    return action.payload;
  }
  return state;
};

const customerUnderstanding = (state = [], action) => {
  if (action.type === 'SUBMIT_UNDERSTANDING') {
    //update state
    return action.payload;
  }
  return state;
};

const customerSupport = (state = [], action) => {
  if (action.type === 'SUBMIT_SUPPORT') {
    //update state
    return action.payload;
  }
  return state;
};

const customerComments = (state = [], action) => {
  if (action.type === 'SUBMIT_COMMENTS') {
    //update state
    return action.payload;
  }
  return state;
};

//
export const store = () =>
  createStore(
    combineReducers({
      customerFeeling,
      customerUnderstanding,
      customerSupport,
      customerComments,
    }),
    applyMiddleware(logger)
  );
