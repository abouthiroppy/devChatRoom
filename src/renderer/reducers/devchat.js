// @flow

import type { Auth as State } from '../types/states/auth';
import type { Auth as Action } from '../types/actions/auth';

const initialState = {
  current: {
    category: {},
    podCasts: []
  },
  categories: []
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_SUCCESS':
      return Object.assign({}, state, {
        categories:
          Object.keys(action.payload.categories)
            .map((key) => ({
              key,
              ...action.payload.categories[key]
            }))
      });
    case 'SET_CURRENT_CATEGORY':
      return Object.assign({}, state, {
        current: Object.assign({}, state.current, {
          category: action.category
        })
      });
    case 'SET_CURRENT_POD_CASTS':
      return Object.assign({}, state, {
        current: Object.assign({}, state.current, {
          podCasts: action.payload.podCasts
        })
      });
    case 'FETCH_POD_CASTS':
    case 'FETCH_CATEGORIES':
      return state;
    default:
      (action: empty);
      return state;
  }
};

export default reducer;
