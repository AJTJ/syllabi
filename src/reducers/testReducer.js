import {SET_USER_NAME} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case SET_USER_NAME :
      return  {
        ...state,
        userName: action.userName, 
        userDescription: action.userDescription
      }
    
    default:
      return state;
  }

}