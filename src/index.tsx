import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import GlobalStyles from './styles/GlobalStyles';

function Root() {
  return (
    <>
      <GlobalStyles />
      <App />
    </>
  );
}

render(<Root />, document.getElementById('root'));
