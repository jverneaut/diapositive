(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Diapositive = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var Diapositive =
  /**
   * Construct Diapositive.
   * 
   * @constructs Diapositive
   * @param {String} selector
   * @param {Object} options
   */
  function Diapositive(selector, options) {
    var _this = this;

    _classCallCheck(this, Diapositive);

    _defineProperty(this, "removeClass", function (pos) {
      _this.childrens[pos].className = _this.childrens[pos].className.replace(' ' + _this.className, '');
      _this.childrens[pos].className = _this.childrens[pos].className.replace(_this.className, '');
    });

    _defineProperty(this, "addClass", function (pos) {
      _this.childrens[pos].className += _this.childrens[pos].className.length ? ' ' + _this.className : '' + _this.className;
    });

    _defineProperty(this, "prev", function () {
      _this.goTo(_this.POSITION - 1);
    });

    _defineProperty(this, "next", function () {
      _this.goTo(_this.POSITION + 1);
    });

    _defineProperty(this, "goTo", function (pos) {
      _this.removeClass(_this.POSITION);

      switch (true) {
        case pos < 0:
          _this.POSITION = _this.LENGTH - 1;
          break;

        case pos > _this.LENGTH - 1:
          _this.POSITION = 0;
          break;

        default:
          _this.POSITION = pos;
      }

      _this.addClass(_this.POSITION);

      if (_this.autoPlay) {
        _this.stop();

        _this.start();
      }
    });

    _defineProperty(this, "start", function () {
      _this.timer = setInterval(_this.next.bind(_this), _this.time);
    });

    _defineProperty(this, "stop", function () {
      clearInterval(_this.timer);
    });

    // this.options = defaults;
    var className = options.className,
        autoPlay = options.autoPlay,
        time = options.time,
        startAt = options.startAt;
    this.el = document.querySelector(selector);
    this.className = className || 'active';
    this.autoPlay = autoPlay || false;
    this.time = time || 1000;
    this.POSITION = startAt || 0;
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
;

  return Diapositive;

}));
