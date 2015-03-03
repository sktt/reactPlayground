'use strict';
var React = require('react');
//var PropsValidation = require('../app/views/mixins/propsValidation'); //Strict reminder for props
//require('../public/sass/default.scss'); // TODO: support subsets without breaking variables, standard styles and layout
var styles = require('./styles/main.useable.scss'); 
/**
 * General description of the component class.
 * @class
 */
var ReactComponent = React.createClass({

  statics: {},

  mixins: [
    //PropsValidation
  ],

  propTypes: {
    ref: React.PropTypes.string,
  },

  getDefaultProps: function () {
    return {};
  },
  getInitialState: function () {
    return {};
  },

  componentWillMount: function () {
    styles.use();
  },
  componentDidMount: function () {},
  componentWillUnMount: function () {
    styles.unuse();
  },
  componentWillReceiveProps: function (nextProps) {},
  shouldComponentUpdate: function (nextProps, nextState) {},
  componentWillUpdate: function (nextProps, nextState) {},
  componentDidUpdate: function (prevProps, prevState) {},
  componentWillUnmount: function () {},

  render: function () {
    return (
      <div className="foo"><h1>foohoo</h1></div>
    );
  }
});

module.exports = ReactComponent;
