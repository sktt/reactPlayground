'use strict';
import React from 'react';
import styles from './styles/dropdown.useable.scss';
import Dropdown from '../components/dropdown.jsx';

/**
 * Dropdown example
 * @class
 */
const ExDropdown = React.createClass({
  getInitialState() {
    return {
      activeKey: 'foo',
      dropdownItems: {
        foo: {text: 'foobar'},
        bar: {text: 'bababboo'}
      }
    };
  },
  componentWillMount() {
    styles.use();
  },
  componentWillUnMount() {
    styles.unuse();
  },
  handleDropdownChange(val) {
    this.setState({activeKey: val});
  },
  render() {
    return (
      <div>
        <p>An uncontrolled dropdown</p>
        <Dropdown
          onChange={this.handleDropdownChange}
          activeKey={this.state.activeKey}
          values={this.state.dropdownItems}/>
      </div>
    );
  }
});

export default ExDropdown;
