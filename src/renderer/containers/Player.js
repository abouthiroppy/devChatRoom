// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/devchat';
import * as pageActions from '../actions/page';
import Player from '../components/organisms/Player';

import type { State } from '../types/states';

type StateProps = {
};

type DispatchProps = {
};

const mapStateToProps = (state: State): StateProps => ({
  src: state.player.src
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchProps => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
