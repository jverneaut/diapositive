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
    time: 2000,
    onchange: function onchange() {}
  };

  /**
   * Given a HTMLElement, returns the list of its level 1 childrens.
   *
   * @param {HTMLElement} el
   * @returns {HTMLCollection}
   */
  var getImmediateChildrens = function getImmediateChildrens(el) {
    var childrens = [];

    for (var i = 0; i < el.children.length; i += 1) {
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

    _defineProperty(this, "removeClassAtIndex", function (index) {
      _this.childrens[index].className = _this.childrens[index].className.replace(" ".concat(_this.className), '');
      _this.childrens[index].className = _this.childrens[index].className.replace(_this.className, '');
    });

    _defineProperty(this, "addClassAtIndex", function (index) {
      _this.childrens[index].className += _this.childrens[index].className.length ? " ".concat(_this.className) : "".concat(_this.className);
    });

    _defineProperty(this, "prev", function () {
      _this.goTo(_this.index - 1);
    });

    _defineProperty(this, "next", function () {
      _this.goTo(_this.index + 1);
    });

    _defineProperty(this, "goTo", function (index) {
      _this.removeClassAtIndex(_this.index);

      switch (true) {
        case index < 0:
          _this.index = _this.length - 1;
          break;

        case index > _this.length - 1:
          _this.index = 0;
          break;

        default:
          _this.index = index;
      }

      _this.addClassAtIndex(_this.index);

      _this.onchange.call(_this, _this.index);

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

    _defineProperty(this, "on", function (event, callback) {
      switch (event) {
        case 'change':
          _this.onchange = callback;
          break;

        default:
          console.warn('Unrecognized event:', event);
          break;
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
    this.goTo(this.startAt);
    if (this.autoPlay) this.start();
  }
  /**
  * Remove class from element at specified index.
  *
  * @param {Number} index
  * @returns {Void}
  */
;

  return Diapositive;

}));
