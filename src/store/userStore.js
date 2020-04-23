import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import appReducer from '../reducers/appReducer';

const Store = createStore(
  appReducer,
  (applyMiddleware(thunk))
);

export default Store;