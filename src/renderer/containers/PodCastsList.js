// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/devchat';
import PodCastsList from '../components/pages/PodCastsList';

import type { State } from '../types/states';

type StateProps = {
};

type DispatchProps = {
};

const mapStateToProps = (state: State): StateProps => ({
  podCasts  : state.devchat.current.podCasts,
  currentNum: state.player.num
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchProps => ({
  fetchPodCast: (key) => dispatch(actions.fetchPodCast(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PodCastsList);
