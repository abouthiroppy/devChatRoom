// @flow

import React from 'react';
import Main from '../../tempaltes/Main';
import styles from './style.css';

type Props = {
};

// Please create atoms, molecules, organisms.

import List from '../../organisms/List';

const PodCastsList = (props) => (
  <Main>
    <List
      items={props.podCasts}
      onClick={props.fetchPodCast}
      currentNum={props.currentNum}
    />
  </Main>
);

export default PodCastsList;
