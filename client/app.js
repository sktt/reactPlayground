'use strict';

import _ from 'lodash';

import React from 'react';
import Router, {DefaultRoute, Route, Link, RouteHandler} from 'react-router';

(window !== window.top ? window.top : window).React = React;
import style from './views/pages/styles/shared.scss';
let App = React.createClass({
  render() {
    return (
      <div className="page_wrapper">
        <RouteHandler
          {...this.state}
          {...this.props} />
      </div>
    );
  }
});

let routes = (
  <Route
    handler={App}>
    <DefaultRoute
      name="home"
      handler={require('./views/pages/Main.jsx')}/>
    <Route
      name="ExCheckboxGroup"
      handler={require('./views/pages/ExCheckboxGroup.jsx')}/>
    <Route
      name="ExDropdown"
      handler={require('./views/pages/ExDropdown.jsx')}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  let params = state.params;
  React.render(<Handler params={params}/>, document.body);
});
