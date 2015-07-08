/**
 * Include this mixins in any component that needs to do something
 * when the user clicks outside. Expects @_onClickOutside to be impemented
 * in the component. Useful for modals, dropdowns, menus etc
 */
ClickOutsideListener = module.exports = {
  componentDidMount() {
    window.addEventListener('mousedown', @_checkClick, false)
  },
  componentWillUnmount() {
    window.removeEventListener('mousedown', @_checkClick, false)
  },
  _checkClick({target}) {
    if (!this.getDOMNode().contains(target)) {
      this.onClickOutside();
    }
  }
}
