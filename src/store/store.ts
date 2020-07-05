import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/root.reducer';

const createAppStore = (): any => {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
};

export const AppStore = createAppStore();
