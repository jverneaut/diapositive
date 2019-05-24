import defaults from './defaults';
import { getImmediateChildrens } from './utils/dom';

export default class Diapositive {
  /**
   * Constructs Diapositive.
   * 
   * @constructs Diapositive
   * @param {String} selector
   * @param {Object} options
   */
  constructor(selector, options = defaults) {
    const allOptions = Object.assign(defaults, options);
    Object.keys(allOptions).forEach(key => {
      this[key] = allOptions[key];
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
  removeClass = (pos) => {
    this.childrens[pos].className = this.childrens[pos].className.replace(' ' + this.className, '');
    this.childrens[pos].className = this.childrens[pos].className.replace(this.className, '');
  }


  /**
  * Add class to element at specified index.
  * 
  * @param {Number} pos
  * @returns {Void}
  */
  addClass = (pos) => {
    this.childrens[pos].className += this.childrens[pos].className.length ? ' ' + this.className : '' + this.className;
  }

  /**
   * Move class to previous element.
   * 
   * @returns {Void}
   */
  prev = () => {
    this.goTo(this.index - 1);
  }

  /**
   * Move class to next element.
   *
   * @returns {Void}
   */
  next = () => {
    this.goTo(this.index + 1);
  }

  /**
  * Move class to specified element.
  *
  * @param {Number} pos
  * @returns {Void}
  */
  goTo = (pos) => {
    this.removeClass(this.index);

    switch (true) {
      case (pos < 0):
        this.index = this.length - 1;
        break;
      case (pos > this.length - 1):
        this.index = 0;
        break;
      default:
        this.index = pos;
    }

    this.addClass(this.index);

    if (this.autoPlay) {
      this.stop();
      this.start();
    }
  }

  /**
   * Start instance autoplaying
   * 
   * @returns {Void}
   */
  start = () => {
    this.timer = setInterval(this.next.bind(this), this.time);
  }

  /**
  * Stop instance autoplaying
  *
  * @returns {Void}
  */
  stop = () => {
    clearInterval(this.timer);
  }
}
