// @flow

import React from 'react';
import Main from '../../tempaltes/Main';
import styles from './style.css';
import Slider from 'material-ui/Slider'; // [TODO] move
type Props = {
};

// Please create atoms, molecules, organisms.

import List from '../../organisms/List';

const PodCastsList = (props) => (
  <Main>
    <Slider
      max={10}
      step={1}
      style={{width: '100vw'}}
      onDragStop={(e) => console.log(e)}
    />
    <List
      items={props.podCasts}
      onClick={props.fetchPodCast}
      currentNum={props.currentNum}
    />
  </Main>
);

export default PodCastsList;
