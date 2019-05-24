export default class Diapositive {
  /**
   * Construct Diapositive.
   * 
   * @constructs Diapositive
   * @param {String} selector
   * @param {Object} options
   */
  constructor(selector, options) {
    // this.options = defaults;
    const { className, autoPlay, time, startAt } = options;
    this.el = document.querySelector(selector);
    this.className = className || 'active';
    this.autoPlay = autoPlay || false;
    this.time = time || 1000;

    this.POSITION = startAt || 0;
    this.LENGTH = this.el.children.length;

    this.childrens = [];
    for (let i = 0; i < this.LENGTH; i++) {
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
  removeClass = (pos) => {
    this.childrens[pos].className = this.childrens[pos].className.replace(' ' + this.className, '');
    this.childrens[pos].className = this.childrens[pos].className.replace(this.className, '');
  }


  /**
  * Add class to element at specified position.
  * 
  * @param {Number} pos
  * @return {Void}
  */
  addClass = (pos) => {
    this.childrens[pos].className += this.childrens[pos].className.length ? ' ' + this.className : '' + this.className;
  }

  /**
   * Move class to previous element.
   * 
   * @return {Void}
   */
  prev = () => {
    this.goTo(this.POSITION - 1);
  }

  /**
   * Move class to next element.
   *
   * @return {Void}
   */
  next = () => {
    this.goTo(this.POSITION + 1);
  }

  /**
  * Move class to specified element.
  *
  * @param {Number} pos
  * @return {Void}
  */
  goTo = (pos) => {
    this.removeClass(this.POSITION);

    switch (true) {
      case (pos < 0):
        this.POSITION = this.LENGTH - 1;
        break;
      case (pos > this.LENGTH - 1):
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
  start = () => {
    this.timer = setInterval(this.next.bind(this), this.time);
  }

  /**
  * Stop instance autoplaying
  *
  * @return {Void}
  */
  stop = () => {
    clearInterval(this.timer);
  }
}
