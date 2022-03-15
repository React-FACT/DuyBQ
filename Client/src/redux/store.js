import logger from 'redux-logger';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import rootReducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(logger), applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;