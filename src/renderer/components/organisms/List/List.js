// @flow

import React from 'react';
import { List, ListItem } from 'material-ui/List';
import styles from './style.css';

const ListComponent = (props) => (
  <List style={{ overflowY: 'auto' }}>
    {
      props.items.map((item) => (
        <ListItem
          key={item.num}
          className={item.num === props.currentNum ? styles.current : ''}
          primaryText={item.title}
          secondaryText={
            `PUBLISHED: ${item.publishedDate} | DURATION: ${item.duration}`
          }
          onClick={() => props.onClick(item.path)}
        />
      ))
    }
  </List>
);

export default ListComponent;
