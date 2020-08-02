import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import user from './ducks/user';
import contacts from './ducks/contacts';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const rootReducer = combineReducers({user, contacts});

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(sagas);

export type AppState = ReturnType<typeof rootReducer>;
export default store;
