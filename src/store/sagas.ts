import {all} from 'redux-saga/effects';

import userSaga from './ducks/user/userSaga';
import contactSaga from './ducks/contacts/contactSaga';
import transferSaga from './ducks/transfers/transferSaga';

export default function* rootSaga() {
  yield all([userSaga(), contactSaga(), transferSaga()]);
}
