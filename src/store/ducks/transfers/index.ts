import {ITransfer} from '../../../models/transfer';

/**
 ************************
 * Types
 ************************
 */

export const Types = {
  GET_TRANSFERS: 'tranfers/GET_TRANSFERS',
  GET_TRANSFERS_SUCCESS: 'tranfers/GET_TRANSFERS_SUCCESS',
  GET_TRANSFERS_ERROR: 'tranfers/GET_TRANSFERS_ERROR',
};

/**
 ************************
 * State
 ************************
 */

interface ITransferState {
  transfers: ITransfer[];
  loading: boolean;
  transferByContact: ITransfer[];
}

const initialState: ITransferState = {
  transfers: [],
  loading: false,
  transferByContact: [],
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
    case Types.GET_TRANSFERS:
      return {...state, loading: true};
    case Types.GET_TRANSFERS_ERROR:
      return {...state, loading: false};
    case Types.GET_TRANSFERS_SUCCESS:
      const transfers: ITransfer[] = action.payload.transfers;
      const transferByContact: ITransfer[] = action.payload.transferByContact;
      return {...state, loading: false, transfers, transferByContact};
    default:
      return state;
  }
}

/**
 ************************
 * Actions
 ************************
 */

export function getTransfers() {
  return {
    type: Types.GET_TRANSFERS,
  };
}

export function getTransfersError() {
  return {
    type: Types.GET_TRANSFERS_ERROR,
  };
}

export function getTransfersSuccess(
  transfers: ITransfer[],
  transferByContact: ITransfer[],
) {
  return {
    type: Types.GET_TRANSFERS_SUCCESS,
    payload: {transfers, transferByContact},
  };
}
