import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { AppStore } from './store/store';
import GlobalStyles from './styles/GlobalStyles';

function Root() {
  return (
    <Provider store={AppStore}>
      <GlobalStyles />
      <App />
    </Provider>
  );
}

render(<Root />, document.getElementById('root'));
