import {all, fork, put, call, takeEvery, select} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';
import * as RootNavigation from '../../../components/Router/RootNavigation';
import {getAllTransfers} from '../../../services/http';

import {Types, getTransfersError, getTransfersSuccess} from '.';
import {InputContactInTransfer, TransfersByContact} from './transform';
import {AppState} from '../../../store';

const getToken = (state: AppState) => state.user.token;
const getContacts = (state: AppState) => state.contacts.contacts;

function* getTransfers() {
  const token = yield select(getToken);
  const contacts = yield select(getContacts);
  try {
    const response = yield call(getAllTransfers, token);
    const transfers = yield InputContactInTransfer(
      response.data.data,
      contacts,
    );
    const transfersByContact = yield TransfersByContact(transfers);
    yield put(getTransfersSuccess(transfers, transfersByContact));

    yield RootNavigation.navigate('History');
  } catch (error) {
    yield put(getTransfersError());

    yield showMessage({
      message: 'Erro ao recuperar transferências',
      type: 'danger',
    });
  }
}

export function* watchGetTransfers() {
  yield takeEvery(Types.GET_TRANSFERS, getTransfers);
}

export default function* rootSaga() {
  yield all([fork(watchGetTransfers)]);
}
