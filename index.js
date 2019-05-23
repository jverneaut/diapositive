const switcher = new Switcher('.slider', {
  className: 'slider-el--active',
  startAt: 0,
  autoPlay: true,
  time: 1000
});

document.getElementById('prev').onclick = switcher.prev.bind(switcher);
document.getElementById('next').onclick = switcher.next.bind(switcher);

document.getElementById('play').onclick = switcher.start.bind(switcher);
document.getElementById('pause').onclick = switcher.stop.bind(switcher);

document.getElementById('1').onclick = switcher.goTo.bind(switcher, 0);
document.getElementById('2').onclick = switcher.goTo.bind(switcher, 1);
document.getElementById('3').onclick = switcher.goTo.bind(switcher, 2);
document.getElementById('4').onclick = switcher.goTo.bind(switcher, 3);
