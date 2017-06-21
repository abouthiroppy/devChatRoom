// @flow

import * as Redux from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/devchat';
import * as pageActions from '../actions/page';
import Header from '../components/organisms/Header';

import type { State } from '../types/states';

type StateProps = {
  categories: Array<any>;
};

type DispatchProps = {
  getCategories: () => {};
};

const mapStateToProps = (state: State): StateProps => ({
  color     : state.devchat.current.category.color,
  title     : state.player.title,
  categories: state.devchat.categories
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<*>): DispatchProps => ({
  pushPage          : (path) => dispatch(pageActions.pushPage(path)),
  fetchPodCasts     : (key) => dispatch(actions.fetchPodCasts(key)),
  fetchCategories   : () => dispatch(actions.fetchCategories()),
  setCurrentCategory: (category) => dispatch(actions.setCurrentCategory(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
