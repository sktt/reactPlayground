'use strict';
import React from 'react/addons';
const {CSSTransitionGroup} = React.addons;
import classNames from 'classnames';
import ClickOutsideMixin from './mixins/clickOutside.js';

/**
 * A uncontrolled dropdown.
 * @class
 */
const Dropdown = React.createClass({
  mixins: [
    ClickOutsideMixin('dropdown', 'dropdownItem', 'dropdownItem_label')
  ],
  propTypes: {
    activeKey: React.PropTypes.string,
    // values map where value is key
    values: React.PropTypes.object,
    onChange: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      values: {}
    };
  },
  getInitialState() {
    return {
      open: false
    };
  },
  onClickOutside() {
    this.setState({open: false});
  },
  render() {
    const values = this.props.values;
    const activeKey = this.props.activeKey;

    return (
      <div className={classNames('dropdown', this.props.className)}>
        <p className="dropdown_label" onClick={this.toggleOpen}>{values[activeKey].text}<span className={classNames('dropdown_icon', {'dropdown_icon-open': this.state.open})}></span></p>
        <CSSTransitionGroup transitionName="transition_dropdown">
          {this.state.open &&
            <ul key="list" className="dropdown_items">
              {Object.keys(values).map((val, i) => {
                let item = values[val];
                return (
                  <li key={i}>
                    <a
                      key={val}
                      className={classNames('dropdownItem', {'dropdownItem-active': val === activeKey})}
                      href="#"
                      onClick={this.handleChange.bind(this, val)}>
                      <p className="dropdownItem_label">{item.text}</p>
                    </a>
                  </li>
                );
              }, this)}
            </ul>
          }
        </CSSTransitionGroup>
      </div>
    );
  },

  toggleOpen(e) {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({ open: !this.state.open });
  },

  /**
   * Triggers when a dropdown changes. notify parent
   * @param {string} value The value of the selected checkbox
   */
  handleChange(value, e) {
    e.preventDefault();
    this.setState({open: false});
    this.props.onChange(value);
  },

  /**
   * @returns {string} The selected value key
   */
  getChecked() {
    return this.state.activeIndex;
  }
});

export default Dropdown;
