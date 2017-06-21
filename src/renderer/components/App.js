// @flow

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../containers/Header';
import Player from '../containers/Player';
import styles from '../styles/app.css';

type Props = {
  children?: React.Component<*>;
};

const App = (props: Props) => (
  <MuiThemeProvider>
    <div className={styles.container}>
      <Header />
      {
        props.children
      }
      <Player />
    </div>
  </MuiThemeProvider>
);

export default App;
