import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, Middleware } from 'redux';
import rootReducer from './root.reducer';

const middlewares: Middleware[] = [logger];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
