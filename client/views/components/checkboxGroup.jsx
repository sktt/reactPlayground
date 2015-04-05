import React from 'react';
import classNames from 'classnames';

/**
 * An uncontrolled checkbox group.
 * @class
 */
const CheckboxGroup = React.createClass({
  propTypes: {
    // values map where value is key
    // and {boolean} checked, {string} text are props
    values: React.PropTypes.object,
    onChange: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      values: {}
    };
  },
  render() {
    const checkboxes = this.props.values;
    return (
      <form className={classNames('checkboxGroup', this.props.className)}>
        {Object.keys(checkboxes).map((val) => {
          let checkbox = checkboxes[val];
          return (
            <div
              key={val}
              className="checkbox_wrapper"
              onClick={this.handleChange.bind(this, val)}>
              <input
                type="checkbox"
                className="checkbox"
                onChange={function(){} /* suppress uncontrolled warning */}
                name={val}
                value={val}
                checked={checkbox.checked} />
              <label className="checkbox_label" htmlFor={val}>{checkbox.text}</label>
            </div>
          );
        }, this)}
      </form>
    );
  },

  /**
   * Triggers when a checkbox changes. notify parent
   * @param {string} value The value of the selected checkbox
   */
  handleChange(value) {
    this.props.onChange(value);
  },

  /**
   * @returns {string[]} The selected values in the same format as the provided values
   */
  getChecked() {
    return Object.keys(this.props.values).filter(function (value) {
      return this.props.values[value].checked;
    }, this);
  }
});

export default CheckboxGroup;
