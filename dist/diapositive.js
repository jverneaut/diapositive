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

  var defaults = {
    autoPlay: false,
    className: 'active',
    playing: false,
    startAt: 0,
    time: 2000
  };

  /**
   * Given a HTMLElement, returns the list of its level 1 childrens.
   * 
   * @param {HTMLElement} el
   * @returns {HTMLCollection}
   */
  var getImmediateChildrens = function getImmediateChildrens(el) {
    var childrens = [];

    for (var i = 0; i < el.children.length; i++) {
      childrens.push(el.children[i]);
    }

    return childrens;
  };

  var Diapositive =
  /**
   * Constructs Diapositive.
   * 
   * @constructs Diapositive
   * @param {String} selector
   * @param {Object} options
   */
  function Diapositive(selector) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults;

    _classCallCheck(this, Diapositive);

    _defineProperty(this, "removeClass", function (pos) {
      _this.childrens[pos].className = _this.childrens[pos].className.replace(' ' + _this.className, '');
      _this.childrens[pos].className = _this.childrens[pos].className.replace(_this.className, '');
    });

    _defineProperty(this, "addClass", function (pos) {
      _this.childrens[pos].className += _this.childrens[pos].className.length ? ' ' + _this.className : '' + _this.className;
    });

    _defineProperty(this, "prev", function () {
      _this.goTo(_this.index - 1);
    });

    _defineProperty(this, "next", function () {
      _this.goTo(_this.index + 1);
    });

    _defineProperty(this, "goTo", function (pos) {
      _this.removeClass(_this.index);

      switch (true) {
        case pos < 0:
          _this.index = _this.length - 1;
          break;

        case pos > _this.length - 1:
          _this.index = 0;
          break;

        default:
          _this.index = pos;
      }

      _this.addClass(_this.index);

      if (_this.playing) {
        _this.stop();

        _this.start();
      }
    });

    _defineProperty(this, "start", function () {
      if (!_this.playing) {
        _this.timer = setInterval(_this.next.bind(_this), _this.time);
        _this.playing = true;
      }
    });

    _defineProperty(this, "stop", function () {
      if (_this.playing) {
        clearInterval(_this.timer);
        _this.playing = false;
      }
    });

    var allOptions = Object.assign(defaults, options);
    Object.keys(allOptions).forEach(function (key) {
      _this[key] = allOptions[key];
    });
    this.index = this.startAt;
    this.el = document.querySelector(selector);
    this.childrens = getImmediateChildrens(this.el);
    this.length = this.el.children.length;
    this.removeClass(this.index);
    this.addClass(this.index);
    if (this.autoPlay) this.start();
  }
  /**
  * Remove class from element at specified index.
  * 
  * @param {Number} pos
  * @returns {Void}
  */
;

  return Diapositive;

}));
