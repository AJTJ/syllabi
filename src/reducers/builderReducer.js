import { SET_SYLLABI_TITLE } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function builderReducer(state = initialState.syllabi, action) {
  switch (action.type) {
    case SET_SYLLABI_TITLE :
      return  {
        ...state,
        currentSyllabi: {
          syllabiTitle: action.syllabiTitle
        }  
      }
    default:
      return state;
    break;
  }
}