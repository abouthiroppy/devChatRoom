// @flow eslint-disable no-console */

'use strict';

const path = require('path');
const createMenu = require('./menu');

const menubar = require('menubar');

const mb = menubar({
  index : 'http://localhost:8080',
  height: 570,
  width : 500
});

mb.on('after-create-window', () => {
  mb.window.openDevTools();
});

mb.on('ready', () => {

  // Install redux-devtools and react-developer-tools.
  const {
    default: installExtension,
    REDUX_DEVTOOLS,
    REACT_DEVELOPER_TOOLS
  } = require('electron-devtools-installer');

  installExtension([
    REDUX_DEVTOOLS,
    REACT_DEVELOPER_TOOLS
  ])
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
});
