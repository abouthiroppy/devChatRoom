// @flow

import { takeEvery, effects } from 'redux-saga';
import devchat from 'devchat';
import { getCurrentCategoryKey } from './selectors';

import type { Effect } from 'redux-saga';
import type { Login } from '../types/actions/devchat';

const {
  put,
  select
} = effects;

/**
 * fetch categories
 * @param {FetchCategories} action
 */
function *fetchCategories(action: FetchCategories): Generator<Effect, void, *> {

  // This is currently synchronous, so no error occurs.
  yield put({
    type   : 'FETCH_CATEGORIES_SUCCESS',
    payload: {
      categories: devchat.getCategories()
    }
  });
}

/**
 * fetch podCasts
 */
function *fetchPodCast(action): Generator<Effect, void, *> {
  try {
    if (action.key !== '') {
      const key = yield select(getCurrentCategoryKey);
      const podCast = yield devchat.getPodCast(key, action.key);

      yield put({
        type   : 'SET_PLAYER_CONTENT',
        payload: {
          podCast
        }
      });
    }
    else {
      throw {

        // code: 'ERROR'
      };
    }
  } catch (e) {
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * fetch podCasts
 */
function *fetchPodCasts(action): Generator<Effect, void, *> {
  try {
    if (action.key !== '') {
      const podCasts = yield devchat.getPodCasts(action.key);

      yield put({
        type   : 'SET_CURRENT_POD_CASTS',
        payload: {
          podCasts
        }
      });
    }
    else {
      throw {

        // code: 'ERROR'
      };
    }
  } catch (e) {
    yield put({
      type : 'ERROR',
      error: e
    });
  }
}

/**
 * Root for devchat
 */
export default function *devchatProcess(): Generator<Effect, void, *> {
  yield takeEvery('FETCH_POD_CAST', fetchPodCast);
  yield takeEvery('FETCH_POD_CASTS', fetchPodCasts);
  yield takeEvery('FETCH_CATEGORIES', fetchCategories);
}
