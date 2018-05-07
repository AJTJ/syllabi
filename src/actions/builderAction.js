import * as types from '../constants/actionTypes';

export function setSyllabiTitle(settings, title) {
  console.log('settings', settings)
  console.log('title', title)
  return {
    type: types.SET_SYLLABI_TITLE,
    syllabiTitle: title,
    settings
  };
};