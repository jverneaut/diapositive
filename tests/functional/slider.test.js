import html from '../fixtures/html';

import Diapositive from '../../dist/diapositive';

describe('Diapositive', () => {
  beforeEach(() => {
    document.body.innerHTML = html;
  });

  test('should have first slide active by default', () => {
    const diapositive = new Diapositive('.slider', { activeClassName: 'active' });
    expect(document.querySelectorAll('.slider-el')[0].classList.contains('active')).toBe(true);
  });

  test('should move to the next slide when `next()` is called', () => {
    const diapositive = new Diapositive('.slider', { activeClassName: 'active'});
    expect(document.querySelectorAll('.slider-el')[0].classList.contains('active')).toBe(true);
    expect(document.querySelectorAll('.slider-el')[1].classList.contains('active')).toBe(false);
    
    diapositive.next();
    
    expect(document.querySelectorAll('.slider-el')[0].classList.contains('active')).toBe(false);
    expect(document.querySelectorAll('.slider-el')[1].classList.contains('active')).toBe(true);
  });

  test('should move to the prev slide when `next()` is called', () => {
    const diapositive = new Diapositive('.slider', { activeClassName: 'active', startAt: 2});
    expect(document.querySelectorAll('.slider-el')[2].classList.contains('active')).toBe(true);
    expect(document.querySelectorAll('.slider-el')[1].classList.contains('active')).toBe(false);

    diapositive.prev();

    expect(document.querySelectorAll('.slider-el')[2].classList.contains('active')).toBe(false);
    expect(document.querySelectorAll('.slider-el')[1].classList.contains('active')).toBe(true);
  });

  test('should move to the first slide when `next()` is called on the last slide', () => {
    const diapositive = new Diapositive('.slider', { activeClassName: 'active', startAt: 3 });
    expect(document.querySelectorAll('.slider-el')[3].classList.contains('active')).toBe(true);
    expect(document.querySelectorAll('.slider-el')[0].classList.contains('active')).toBe(false);

    diapositive.next();

    expect(document.querySelectorAll('.slider-el')[3].classList.contains('active')).toBe(false);
    expect(document.querySelectorAll('.slider-el')[0].classList.contains('active')).toBe(true);
  });

  test('should move to the last slide when `prev()` is called on the first slide', () => {
    const diapositive = new Diapositive('.slider', { activeClassName: 'active', startAt: 0 });
    expect(document.querySelectorAll('.slider-el')[0].classList.contains('active')).toBe(true);
    expect(document.querySelectorAll('.slider-el')[3].classList.contains('active')).toBe(false);

    diapositive.prev();

    expect(document.querySelectorAll('.slider-el')[0].classList.contains('active')).toBe(false);
    expect(document.querySelectorAll('.slider-el')[3].classList.contains('active')).toBe(true);
  });
});
