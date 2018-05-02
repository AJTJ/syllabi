import * as types from '../constants/actionTypes';

export function setUserName(settings, name) {
  return {
    type: types.SET_USER_NAME,
    userName: name,
    userDescription: "Is very cool",
    settings
  };
}