// @flow

import type { Auth as State } from '../types/states/auth';
import type { Auth as Action } from '../types/actions/auth';

const initialState = {
  num  : '',
  src  : '',
  title: ''
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_PLAYER_CONTENT':
      return Object.assign({}, state, {
        num  : action.payload.podCast.num,
        src  : action.payload.podCast.src,
        title: action.payload.podCast.title
      });
    default:
      (action: empty);
      return state;
  }
};

export default reducer;
