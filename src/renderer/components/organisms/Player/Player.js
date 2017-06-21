// @flow

import React from 'react';
import styles from './style.css';

const Player = (props) => (
  <div className={styles.container}>
    <audio
      src={props.src}
      controls
      autoPlay
    />
  </div>
);

export default Player;
