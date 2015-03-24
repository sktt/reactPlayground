'use strict';

var clickOutside = function(){

  var elementClasses = Array.prototype.slice.call(arguments);

  return {

    clickOutsideListener: function (e) {
      if(this.onClickOutside && !this.clickIsInsideElement(e)){
        this.onClickOutside(e);
      }
    },

    clickIsInsideElement: function(event){
      if(elementClasses.length){
        var target = event.target || event.srcElement;
        return new RegExp(elementClasses.join('|')).test(target.className);
      }
      else{
        return false;
      }
    },

    componentDidMount: function () {
      document.addEventListener('click', this.clickOutsideListener, false);
    },

    componentWillUnmount: function () {
      document.removeEventListener('click', this.clickOutsideListener, false);
    }

  }
};

module.exports = clickOutside;
