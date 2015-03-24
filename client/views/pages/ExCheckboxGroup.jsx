'use strict';
import React from 'react';
import styles from './styles/checkboxGroup.useable.scss';
import CheckboxGroup from '../components/checkboxGroup.jsx';

/**
 * CheckboxGroup example
 * @class
 */
const ExCheckboxGroup = React.createClass({
  getInitialState() {
    return {
      checkboxValues: {
        foo: {text: 'foobar', checked: true},
        bar: {text: 'bababboo'}
      }
    };
  },
  componentWillMount() { styles.use(); },
  componentWillUnMount() { styles.unuse(); },
  handleCheckboxChange(val) {
    const checkboxValues = this.state.checkboxValues;
    checkboxValues[val].checked = !checkboxValues[val].checked;
    this.setState({checkboxValues: checkboxValues});
  },
  render() {
    return (
      <div>
        <p>An uncontrolled dropdown</p>
        <CheckboxGroup
          onChange={this.handleCheckboxChange}
          values={this.state.checkboxValues}/>
      </div>
    );
  }
});

export default ExCheckboxGroup;
