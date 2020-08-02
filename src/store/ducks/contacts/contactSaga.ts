import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';

import {Types, getTokenError, getTokenSuccess} from '.';
import {generateToken} from '../../../services/http';

function* getToken() {
  try {
    const response = yield call(generateToken);
    yield put(getTokenSuccess(response.data.token));
  } catch (error) {
    yield put(getTokenError());
    yield showMessage({
      message: 'Erro ao gerar token de acesso',
      type: 'danger',
      icon: 'danger',
    });
  }
}

export function* watchGetToken() {
  yield takeEvery(Types.GET_TOKEN, getToken);
}

export default function* rootSaga() {
  yield all([fork(watchGetToken)]);
}
