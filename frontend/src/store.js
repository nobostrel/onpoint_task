import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import { rootReducer } from './reducers/index.js';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas/index';
import { initialState } from './initialState.js';

const logger = createLogger();
const history = createBrowserHistory();
const middleware = routerMiddleware(history);
// const sagaMiddleware = createSagaMiddleware();

export const store = createStore( rootReducer(history), initialState, 
    composeWithDevTools( applyMiddleware(middleware, logger) ) );

// sagaMiddleware.run(rootSaga);