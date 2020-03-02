import html from '../fixtures/html';

import Diapositive from '../../dist/diapositive';

describe('Diapositive', () => {
  beforeEach(() => {
    document.body.innerHTML = html;
  });

test('should work with string selector', () => {
    const selector = '.slider';
    const diapositive = new Diapositive(selector);
    expect(diapositive.index).toBe(0);
  });

  test('should work with node selector', () => {
    const selector = document.querySelector('.slider');
    const diapositive = new Diapositive(selector);
    expect(diapositive.index).toBe(0);
  });

  test('should start at 0 by default', () => {
    const diapositive = new Diapositive('.slider');
    expect(diapositive.index).toBe(0);
  });

  test('should start at index setup in `startAt`', () => {
    const diapositive = new Diapositive('.slider', { startAt: 2 });
    expect(diapositive.index).toBe(2);
  });
});
