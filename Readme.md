![main image](https://github.com/jverneaut/Diapositive/raw/master/github/main.jpg)

### Diapositive is a dependency-free Javascript slideshow building library. It does only one thing but does it well: adding a class to the current slide.

## Philosophy

The idea behind this library is to provide boilerplate code to quickly bootstrap interesting slideshow components.

It is only concerned with how things should work, not how they should look. By providing a tiny API surface, this library aims to simplify slideshow development to let you spend more time on styling or more valuable features.

## Example

You can find a simple usage example in the example folder. I encourage you to play with it to get a feel of what the library is doing.

## Getting started

Download latest version with NPM...

```bash
npm install diapositive
```

(you can also link to the lib in html head with unpkg: `<script src="https://unpkg.com/diapositive@latest/dist/diapositive.js"></script>`)

...then create some markup...

```html
<ul>
  <li>Julien</li>
  <li>André</li>
  <li>Marcel</li>
</ul>

<button id="prev">Previous</button>
<button id="next">Next</button>
```

...and finally initialize Diapositive.
```js
import Diapositive from 'diapositive';

const diapo = new Diapositive('ul');

document.getElementById('prev').onclick = diapo.prev;
document.getElementById('next').onclick = diapo.next;
```

You're all set! Now Diapositive will take care of adding an `active` class to the correct element.

```html
<ul>
  <li class="active">Julien</li>
  <li>André</li>
  <li>Marcel</li>
</ul>

...Next button clicked...

<ul>
  <li>Julien</li>
  <li class="active">André</li>
  <li>Marcel</li>
</ul>
```

## API

Diapositive exposes these methods to navigate between slides:

#### Diapositive.next()
Go to next slide. If current slide is last slide, go to first slide.

#### Diapositive.prev()
Go to previous slide. If current slide is first slide, go to last slide.

#### Diapositive.goTo(index)
Go to slide at given 0 based index.

#### Diapositive.start()
Starts Diapositive autoplay. Time is configurable via Diapositive.time option.

#### Diapositive.stop()
Stops Diapositive autoplay.

## Options

Diapositive takes an optional `options` object. If none is specified, reasonable defaults are used.

```js
options = {
  autoPlay: false, // if the Diapositive instance should loop automatically
  className: 'active', // the className added to the active slide
  startAt: 0, // the first focused slide when a new Diapositive instance is created (0 indexed)
  time: 2000, // delay between slides if autoplay is set to true
}
```

## Styling

As intended, this library only provides minimal functionality. You are responsible for everything styling related.

The simplest example would be something like this:
```css
ul li {
  display: none;
}

ul li.active {
  display: block;
}
```

To get more control, you should probably overlay all your slides with position absolute in a fixed height container. That way, you will be able to stage great css animations with minimal effort.

```html
<ul class="diapo">
  <li class="diapo__slide">1 – My first slide</li>
  <li class="diapo__slide">2 – My second slide</li>
  <li class="diapo__slide">3 – My third slide</li>
  <li class="diapo__slide">4 – My fourth slide</li>
</ul>
```

```js
import Diapositive from 'diapositive';

const diapo = new Diapositive('diapo', {
  className: 'diapo__slide--active',
  autoPlay: true,
  time: 3000
});
```

```css
.diapo {
  height: 600px;
  width: 100vw;
  position: relative;
  margin: 0;
  padding: 0;
}

.diapo__slide {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 4rem;

  // Animation
  transition: 0.3s all;
  opacity: 0;
  transform: scale(0.8);
  pointer-events: none;
}

.diapo__slide--active {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
```

Note the use of the `pointer-events` css property. As your slides will sit on top of each other, you need to make sure that the user can only interact with the current slide only.
