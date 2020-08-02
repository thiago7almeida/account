import {IContact} from '../../../models/contact';
import {generateContacts} from './fakeContacts';

/**
 ************************
 * Types
 ************************
 */
export const Types = {
  GET_TOKEN: 'user/GET_TOKEN',
  GET_TOKEN_SUCCESS: 'user/GET_TOKEN_SUCCESS',
  GET_TOKEN_ERROR: 'user/GET_TOKEN_ERROR',
};

/**
 ************************
 * State
 ************************
 */
interface IContactState {
  contacts: IContact[];
}

const initialState: IContactState = {
  contacts: generateContacts(),
};

/**
 ************************
 * Reducer
 ************************
 */
export default function reducer(
  state = initialState,
  action: {type: string; payload?: any},
) {
  switch (action.type) {
    // case Types.GET_TOKEN:
    //   return {...state, loading: true};
    // case Types.GET_TOKEN_SUCCESS:
    //   return {...state, loading: false, token: action.payload};
    // case Types.GET_TOKEN_ERROR:
    //   return {...state, loading: false};

    default:
      return state;
  }
}

/**
 ************************
 * Actions
 ************************
 */

// export function getToken() {
//   return {
//     type: Types.GET_TOKEN,
//   };
// }

// export function getTokenSuccess(token: string) {
//   return {
//     type: Types.GET_TOKEN_SUCCESS,
//     payload: token,
//   };
// }

// export function getTokenError() {
//   return {
//     type: Types.GET_TOKEN_ERROR,
//   };
// }
