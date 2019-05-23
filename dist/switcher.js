(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Switcher = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Switcher =
  /*#__PURE__*/
  function () {
    /**
     * Construct Switcher.
     * 
     * @constructs Switcher
     * @param {String} selector
     * @param {Object} options
     */
    function Switcher(selector, options) {
      _classCallCheck(this, Switcher);

      // this.options = defaults;
      var className = options.className,
          autoPlay = options.autoPlay,
          time = options.time,
          startAt = options.startAt;
      this.el = document.querySelector(selector);
      this.className = className;
      this.autoPlay = autoPlay;
      this.time = time;
      this.POSITION = startAt;
      this.LENGTH = this.el.children.length;
      this.childrens = [];

      for (var i = 0; i < this.LENGTH; i++) {
        this.childrens.push(this.el.children[i]);
      }

      this.removeClass(this.POSITION);
      this.addClass(this.POSITION);
      if (this.autoPlay) this.start();
    }
    /**
    * Remove class from element at specified position.
    * 
    * @param {Number} pos
    * @return {Void}
    */


    _createClass(Switcher, [{
      key: "removeClass",
      value: function removeClass(pos) {
        this.childrens[pos].className = this.childrens[pos].className.replace(' ' + this.className, '');
        this.childrens[pos].className = this.childrens[pos].className.replace(this.className, '');
      }
      /**
      * Add class to element at specified position.
      * 
      * @param {Number} pos
      * @return {Void}
      */

    }, {
      key: "addClass",
      value: function addClass(pos) {
        this.childrens[pos].className += this.childrens[pos].className.length ? ' ' + this.className : '' + this.className;
      }
      /**
       * Move class to previous element.
       * 
       * @return {Void}
       */

    }, {
      key: "prev",
      value: function prev() {
        this.goTo(this.POSITION - 1);
      }
      /**
       * Move class to next element.
       *
       * @return {Void}
       */

    }, {
      key: "next",
      value: function next() {
        this.goTo(this.POSITION + 1);
      }
      /**
      * Move class to specified element.
      *
      * @param {Number} pos
      * @return {Void}
      */

    }, {
      key: "goTo",
      value: function goTo(pos) {
        this.removeClass(this.POSITION);

        switch (true) {
          case pos < 0:
            this.POSITION = this.LENGTH - 1;
            break;

          case pos > this.LENGTH - 1:
            this.POSITION = 0;
            break;

          default:
            this.POSITION = pos;
        }

        this.addClass(this.POSITION);

        if (this.autoPlay) {
          this.stop();
          this.start();
        }
      }
      /**
       * Start instance autoplaying
       * 
       * @return {Void}
       */

    }, {
      key: "start",
      value: function start() {
        this.timer = setInterval(this.next.bind(this), this.time);
      }
      /**
      * Stop instance autoplaying
      *
      * @return {Void}
      */

    }, {
      key: "stop",
      value: function stop() {
        clearInterval(this.timer);
      }
    }]);

    return Switcher;
  }();

  return Switcher;

}));
