import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './testReducer';

const rootReducer = combineReducers({
  user,
  routing: routerReducer
});

export default rootReducer;