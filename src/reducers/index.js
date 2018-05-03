import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './testReducer';
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  user,
  firebase: firebaseReducer,
  routing: routerReducer
});

export default rootReducer;