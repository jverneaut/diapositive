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
    Object.keys(allOptions).forEach((key) => {
      this[key] = allOptions[key];
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
  removeClassAtIndex = (index) => {
    this.childrens[index].className = this.childrens[index].className.replace(` ${this.className}`, '');
    this.childrens[index].className = this.childrens[index].className.replace(this.className, '');
  }


  /**
  * Add class to element at specified index.
  *
  * @param {Number} index
  * @returns {Void}
  */
  addClassAtIndex = (index) => {
    this.childrens[index].className += this.childrens[index].className.length ? ` ${this.className}` : `${this.className}`;
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
  * @param {Number} index
  * @returns {Void}
  */
  goTo = (index) => {
    this.removeClassAtIndex(this.index);

    switch (true) {
      case (index < 0):
        this.index = this.length - 1;
        break;
      case (index > this.length - 1):
        this.index = 0;
        break;
      default:
        this.index = index;
    }

    this.addClassAtIndex(this.index);

    this.onchange.call(this, this.index);

    if (this.playing) {
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
    if (!this.playing) {
      this.timer = setInterval(this.next.bind(this), this.time);
      this.playing = true;
    }
  }

  /**
  * Stop instance autoplaying
  *
  * @returns {Void}
  */
  stop = () => {
    if (this.playing) {
      clearInterval(this.timer);
      this.playing = false;
    }
  }

  /**
  * Bind event to callback function
  *
  * @param {String} event
  * @param {Function} callback
  * @returns {Void}
  */
  on = (event, callback) => {
    switch (event) {
      case 'change':
        this.onchange = callback;
        break;
      default:
        console.warn('Unrecognized event:', event);
        break;
    }
  }
}
