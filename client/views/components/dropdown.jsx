'use strict';
import React from 'react/addons';
const {CSSTransitionGroup} = React.addons;
import classNames from 'classnames';

/**
 * A uncontrolled dropdown.
 * @class
 */
export default class Dropdown extends React.Component {
  static propTypes = {
    activeKey: React.PropTypes.string,
    // values map where value is key
    values: React.PropTypes.object,
    onChange: React.PropTypes.func
  };

  static defaultProps = { values: {} };

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  componentDidMount() {
    window.addEventListener('mousedown', this._checkClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this._checkClick, false);
  }

  _checkClick = ({target}) => {
    if (!React.findDOMNode(this).contains(target)) {
      this._onClickOutside();
    }
  }

  _onClickOutside = () => {
    this.setState({open: false});
  }

  _toggleOpen = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({ open: !this.state.open });
  }

  /**
   * Triggers when a dropdown changes. notify parent
   * @param {string} value The value of the selected item
   */
  _handleChange = (value, e) => {
    e.preventDefault();
    this.setState({open: false});
    this.props.onChange(value);
  }

  render() {
    const values = this.props.values;
    const activeKey = this.props.activeKey;

    return (
      <div className={classNames('dropdown', this.props.className)}>
        <p className="dropdown_label" onClick={this._toggleOpen}>{values[activeKey].text}<span className={classNames('dropdown_icon', {'dropdown_icon-open': this.state.open})}></span></p>
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
                      onClick={this._handleChange.bind(this, val)}>
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
  }
};

