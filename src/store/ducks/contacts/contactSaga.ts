import {all, fork, put, call, takeEvery} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';
import * as RootNavigation from '../../../components/Router/RootNavigation';

import {
  Types,
  setModalState,
  SendMoneyToAction,
  removeContact,
  sendMoneyError,
  sendMoneySuccess,
} from '.';
import {sendMoneyToContact} from '../../../services/http';
import {colors} from '../../../constants';

function* setModalVisible() {
  yield put(setModalState(true));
}

function* setModalInvisible() {
  yield put(setModalState(false));
}

function* sendMoney(action: SendMoneyToAction) {
  const {id, token, value} = action.payload;
  try {
    yield call(sendMoneyToContact, id, token, value);
    yield put(sendMoneySuccess());

    yield put(removeContact());

    yield RootNavigation.navigate('Home');

    yield showMessage({
      backgroundColor: colors.primary,
      message: 'Enviado com sucesso!',
    });
  } catch (error) {
    yield put(removeContact());
    yield showMessage({message: 'Erro ao enviar', type: 'danger'});
    yield put(sendMoneyError());
  }
}

export function* watchSetModalVisible() {
  yield takeEvery(Types.SET_CONTACT, setModalVisible);
}

export function* watchSetModalInvisible() {
  yield takeEvery(Types.REMOVE_CONTACT, setModalInvisible);
}

export function* watchSendMoney() {
  yield takeEvery(Types.SEND_MONEY, sendMoney);
}

export default function* rootSaga() {
  yield all([
    fork(watchSetModalVisible),
    fork(watchSetModalInvisible),
    fork(watchSendMoney),
  ]);
}
