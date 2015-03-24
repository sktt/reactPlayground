'use strict';
import React from 'react';
import {Link} from 'react-router';

/**
 * @class
 */
const Main = React.createClass({
  render() {
    return (
      <ul>
        <li>
          <Link to="ExCheckboxGroup">Checkbox group</Link>
        </li>
        <li>
          <Link to="ExDropdown">Dropdown</Link>
        </li>
      </ul>
    );
  }
});

export default Main;
