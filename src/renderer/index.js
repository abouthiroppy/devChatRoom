// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers';

import 'normalize.css';

injectTapEventPlugin();

const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <App />
    </AppContainer>),
  rootEl
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers', () => {
    render();
  });
}
