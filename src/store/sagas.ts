import {all} from 'redux-saga/effects';
import userSaga from './ducks/user/userSaga';

export default function* rootSaga() {
  yield all([userSaga()]);
}
