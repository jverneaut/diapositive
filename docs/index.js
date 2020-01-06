const { Diapositive } = window;

const slider1 = new Diapositive('.slider-1', {
  autoPlay: true,
  time: 2000,
});

const slider2 = new Diapositive('.slider-2', {
  autoPlay: true,
  time: 2000,
});

document
  .querySelector('.slider-2-controls .next')
  .addEventListener('click', () => {
    slider2.next();
  });

document
  .querySelector('.slider-2-controls .prev')
  .addEventListener('click', () => {
    slider2.prev();
  });

document
  .querySelector('.slider-2-controls .play')
  .addEventListener('click', () => {
    slider2.start();
  });

document
  .querySelector('.slider-2-controls .pause')
  .addEventListener('click', () => {
    slider2.stop();
  });

const slider3 = new Diapositive('.slider-3', {
  autoPlay: true,
  time: 2000,
  prevClassName: 'prev',
  nextClassName: 'next',
});

const slider4 = new Diapositive('.slider-4', {
  autoPlay: true,
  time: 2000,
});

slider4.on('change', (index) => {
  document.querySelector('.slider-4-indicator strong').innerHTML = index;
});
