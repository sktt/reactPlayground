'use strict';

var _ = require('lodash');

var React = require('react');
var Router = require('react-router');
var {DefaultRoute, Route, Link, RouteHandler} = Router;

(window !== window.top ? window.top : window).React = React;

var App = React.createClass({
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

var routes = (
  <Route
    handler={App}>
    <DefaultRoute
      name="home"
      handler={require('./pages/main.jsx')}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  var params = state.params;
  React.render(<Handler params={params}/>, document.body);
});
