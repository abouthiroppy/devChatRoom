// @flow

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import player from './player';
import devchat from './devchat';

const reducer = combineReducers({
  router,
  player,
  devchat
});

export default reducer;
