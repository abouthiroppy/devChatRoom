// @flow

import { effects } from 'redux-saga';
import page from './page';
import error from './error';
import devchat from './devchat';

import type { Effect } from 'redux-saga';

/**
 * Root for saga
 */
function *rootSaga(): Generator<Effect, void, *> {
  yield [
    effects.fork(page),
    effects.fork(error),
    effects.fork(devchat)
  ];
}

export default rootSaga;
