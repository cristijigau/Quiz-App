import { createStore } from 'redux';

import initialState from './initialState';
import allReducer from './reducers';

const store = createStore(
  allReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
