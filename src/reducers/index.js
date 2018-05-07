import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import syllabi from './builderReducer';
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  syllabi,
  firebase: firebaseReducer,
  routing: routerReducer
});

export default rootReducer;