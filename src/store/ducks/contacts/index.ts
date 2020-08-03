import {IContact} from '../../../models/contact';
import {generateContacts} from './fakeContacts';

/**
 ************************
 * Types
 ************************
 */
export const Types = {
  SET_CONTACT: 'contacts/SET_CONTACT',
  REMOVE_CONTACT: 'contacts/REMOVE_CONTACT',
  SET_MODAL_VISIBLE: 'contacts/SET_MODAL_VISIBLE',
  SEND_MONEY: 'contacts/SEND_MONEY',
  SEND_MONEY_SUCCESS: 'contacts/SEND_MONEY_SUCCESS',
  SEND_MONEY_ERROR: 'contacts/SEND_MONEY_ERROR',
};

/**
 ************************
 * State
 ************************
 */
interface IContactState {
  contacts: IContact[];
  contact?: IContact | null;
  modaVisible: boolean;
  loading: boolean;
}

const initialState: IContactState = {
  contacts: generateContacts(),
  contact: null,
  modaVisible: false,
  loading: false,
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
    case Types.SET_CONTACT:
      return {...state, contact: action.payload};
    case Types.REMOVE_CONTACT:
      return {...state, contact: null};
    case Types.SET_MODAL_VISIBLE:
      return {...state, modaVisible: action.payload};
    case Types.SEND_MONEY:
      return {...state, loading: true};
    case Types.SEND_MONEY_SUCCESS:
      return {...state, loading: false};
    case Types.SEND_MONEY_ERROR:
      return {...state, loading: false};

    default:
      return state;
  }
}

/**
 ************************
 * ActionsTypes
 ************************
 */
type SendMoneyToProps = {
  id: number;
  token: string | null;
  value: string;
};
export interface SendMoneyToAction {
  type: typeof Types.SEND_MONEY;
  payload: SendMoneyToProps;
}
/**
 ************************
 * Actions
 ************************
 */

export function setContact(contact: IContact) {
  return {
    type: Types.SET_CONTACT,
    payload: contact,
  };
}

export function removeContact() {
  return {
    type: Types.REMOVE_CONTACT,
  };
}

export function setModalState(visible: boolean) {
  return {
    type: Types.SET_MODAL_VISIBLE,
    payload: visible,
  };
}

export function sendMoneyTo(
  id: number,
  token: string | null,
  value: string,
): SendMoneyToAction {
  return {
    type: Types.SEND_MONEY,
    payload: {id, value, token},
  };
}

export function sendMoneySuccess() {
  return {
    type: Types.SEND_MONEY_SUCCESS,
  };
}

export function sendMoneyError() {
  return {
    type: Types.SEND_MONEY_ERROR,
  };
}
