// eslint-disable-next-line
const diapositive = new Diapositive('.slider', {
  className: 'slider-el--active',
  startAt: 0,
  autoPlay: true,
  time: 1000,
});

document.getElementById('prev').onclick = diapositive.prev;
document.getElementById('next').onclick = diapositive.next;

document.getElementById('play').onclick = diapositive.start;
document.getElementById('pause').onclick = diapositive.stop;

document.getElementById('1').onclick = () => diapositive.goTo(0);
document.getElementById('2').onclick = () => diapositive.goTo(1);
document.getElementById('3').onclick = () => diapositive.goTo(2);
document.getElementById('4').onclick = () => diapositive.goTo(3);
