import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';

const createAppStore = (): any => {
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
};

export const AppStore = createAppStore();
