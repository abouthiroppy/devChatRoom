// @flow

import React from 'react';
import { Switch, Route } from 'react-router';
import App from './components/App';
import PodCastsList from './containers/PodCastsList';

const Router = () => (
  <App>
    <Switch>
      <Route path="/:group" component={PodCastsList} />
      <Route><div>listaaaaa</div></Route> {/* root */}
    </Switch>
  </App>
);

export default Router;
