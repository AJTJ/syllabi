import * as types from '../constants/actionTypes';
// import firebase from 'firebase';
// import { withFirebase } from "react-redux-firebase";

export function setUserName(settings, name) {
  return {
    type: types.SET_USER_NAME,
    userName: name,
    userDescription: "Is very cool",
    settings
  };
};