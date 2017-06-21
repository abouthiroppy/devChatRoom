// @flow

import React from 'react';
import styles from './style.css';

type Props = {
  left: React.Component<*>;
  right: React.Component<*>;
  children: React.Component<*>;
};

const Main = (props: Props) => (
  <div className={styles.container}>
    {
      props.children
    }
  </div>
);

export default Main;
