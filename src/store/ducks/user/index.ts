import {IUser} from '../../../models/user';

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
interface IUserState extends IUser {
  loading: boolean;
}

const initialState: IUserState = {
  email: 'thiago@email.com',
  name: 'Thiago Almeida',
  photo:
    'https://lh3.googleusercontent.com/-Adc2QRz1Wqw/XR65vvOzoMI/AAAAAAAAHHE/aPqlq9qnwQotWa56ZLQVGeufO8-uyJlqACEwYBhgLKtQDAL1OcqyoUC95wTJwF6gOQFPXKarL2QnHz2ozzurrfRM7LB_55JvOmV02VTGsKwxYxngSgTM5ZrkgrOgMDZPIkB5ZGdrCPxY5sTX43_PrCVpLwRuG1HhJEzQOhba2Tv9FonBpHtq4xWPiqFO9cpSLMZVKlNYMzSIDqYNDtKdN0waUW4K13-qIWTOxplloUmkp8Y0T5IVfIb0M8uMYO_yOQ5LFIErgq2qpj5duyEENYPLy_7CdmNjCgMx30yl4Z2JNuDnKJw1kgpTzev_4XIv1FhvICfGfa559yJqHyJj8_0GI4heSSzzFIHRxJtsViS4JFq49Z0hsIGxowmCcpjt30sXoTWZx9XmGilkrpWpwgEudng80jL5fwAbEUf0wT0NqnMmf5_X3w52McUhdVWw0Erbo3U7k6Ke7VgZBMGYtKMDo6kDPh_v9pUOgjpZMt0aZh9re7d9CVuvr11tVH_hgussjyiFyPL9XMS2L1QEq1vJHaVtoRAytX719fxweb7SUS7eZKtjcn1k56qN2F8jxMarKD7KMyvNNc09kmk9PU1KCWIjDs_7MP95WNkY2kphRzvrIkcOeK2veuvpkBZg9wzDQkahn94VgT4lkHqYDkTFqXGVsMPKLl_kF/w140-h140-p/T49HBCXJA-UA1NX9M24-947728df63f4-512.jpg',
  loading: false,
  token: null,
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
    case Types.GET_TOKEN:
      return {...state, loading: true};
    case Types.GET_TOKEN_SUCCESS:
      const token: string = action.payload;
      return {...state, loading: false, token};
    case Types.GET_TOKEN_ERROR:
      return {...state, loading: false};

    default:
      return state;
  }
}

/**
 ************************
 * Actions
 ************************
 */

export function getToken() {
  return {
    type: Types.GET_TOKEN,
  };
}

export function getTokenSuccess(token: string) {
  return {
    type: Types.GET_TOKEN_SUCCESS,
    payload: token,
  };
}

export function getTokenError() {
  return {
    type: Types.GET_TOKEN_ERROR,
  };
}
