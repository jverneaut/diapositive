const diapositive = new Diapositive('.slider', {
  className: 'slider-el--active',
  startAt: 0,
  autoPlay: true,
  time: 1000
});

document.getElementById('prev').onclick = diapositive.prev.bind(diapositive);
document.getElementById('next').onclick = diapositive.next.bind(diapositive);

document.getElementById('play').onclick = diapositive.start.bind(diapositive);
document.getElementById('pause').onclick = diapositive.stop.bind(diapositive);

document.getElementById('1').onclick = diapositive.goTo.bind(diapositive, 0);
document.getElementById('2').onclick = diapositive.goTo.bind(diapositive, 1);
document.getElementById('3').onclick = diapositive.goTo.bind(diapositive, 2);
document.getElementById('4').onclick = diapositive.goTo.bind(diapositive, 3);
