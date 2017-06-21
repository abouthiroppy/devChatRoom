// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle
} from 'material-ui/Toolbar';
import styles from './style.css';
import SvgIcon from 'material-ui/SvgIcon';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      opened: false
    };
  }

  componentWillMount() {
    this.props.fetchCategories();
  }

  onClick = () => {
    this.setState({ opened: !this.state.opened });
  }

  render() {
    const {
      color,
      title,
      pushPage,
      categories,
      fetchPodCasts,
      setCurrentCategory
    } = this.props;

    return (
      <div className={styles.container}>
        <Toolbar style={{ background: color ? color : styles.toolbar }}>
          <ToolbarGroup firstChild>
            <IconButton
              onClick={this.onClick}
            >
              <Menu />
            </IconButton>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text={title} />
          </ToolbarGroup>
        </Toolbar>
        <Drawer
          open={this.state.opened}
          docked={false}
          onRequestChange={(open) => this.setState({ opened: false })}
        >
          <AppBar title="devChatRoom" />
          {
            categories.map((item) => (
              <MenuItem
                key={item.color}
                onClick={() => {
                  pushPage(item.path);
                  setCurrentCategory(item);
                  fetchPodCasts(item.key);
                  this.setState({ opened: false });
                }}
              >
                {
                  item.name
                }
              </MenuItem>
            ))
          }
        </Drawer>
      </div>
    );
  }
}

export default Header;
