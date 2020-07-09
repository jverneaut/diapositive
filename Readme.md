<p align="center">
  <img src="https://github.com/jverneaut/Diapositive/raw/master/github/main.jpg" width="auto" />
</p>

# Diapositive [![Build Status](https://travis-ci.com/jverneaut/Diapositive.svg?branch=master)](https://travis-ci.com/jverneaut/Diapositive)

### Diapositive is a dependency-free Javascript slideshow helper library. It does only one thing but does it well: toggling a class between slides in a deck.

Set up some markup, create a new Diapositive instance and you're ready to make incredible slideshows in seconds.

## Philosophy

As my coding style evolves, I tend to prefer simpler, to the point libraries that make life as a developer a little easier without overcomplicating things. This is why after spending hours replicating code from project to project, I began compiling some functionalities into their own self contained modules. Hopefully, this is the beginning of a series of lightweight, easy and perfomant libraries to save me and everyone else time and effort across projects.

## What does it do? Why should I use Diapositive instead of **x** or **y**?

The idea behind this library is to provide the minimum boilerplate code to quickly bootstrap interesting slideshow components.

It is only concerned with how things should work, not how they should look. By providing a tiny API surface, this library aims to simplify slideshow development to let you spend more time on styling or more valuable features.

Of course, you could use more advanced libraries to achieve the same thing. But why use a fully-fledged animation library when all you need is a simple toggling mechanism?

Why use a library at all? While the logic behind this one is rather simple, I found that replicating it multiple times a week gets cumbersome really quickly.

## Example

You can find a simple usage example in the example folder of this repository. I encourage you to play with it to get a feel of what the library is doing.

> **WARNING**: You must build the project with **npm run build** before viewing the example.

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

> Note: The selector can be either a string or a node, ie: `'ul'` and `document.querySelector('ul')` will work exactly the same.

## API

Diapositive exposes these methods to navigate between slides:

| Method                    | Description                                                                   |
| ------------------------- | ----------------------------------------------------------------------------- |
| `Diapositive.next()`      | Go to next slide. If current slide is last slide, go to first slide.          |
| `Diapositive.prev()`      | Go to previous slide. If current slide is first slide, go to last slide.      |
| `Diapositive.goTo(index)` | Go to slide at given 0 based index.                                           |
| `Diapositive.start()`     | Start Diapositive autoplay. Time is configurable via Diapositive.time option. |
| `Diapositive.stop()`      | Stop Diapositive autoplay.                                                    |

## Events

#### Diapositive.on(event, callback)

Currently Diapositive only supports the `change` event. It triggers at the beginning of a slide change via `prev`, `next`, `goTo` or if the `autoPlay` option is set to `true`.

The current diapositive index is passed to the callback function.

```js
diapositive.on('change', (index) => {
  console.log('Slide changed to:', index);
});

// Equivalent
diapositive.onchange = index => console.log('Slide changed to:', index);
```

## Options

Diapositive takes an optional `options` object. If none is specified, reasonable defaults are used.

| Option            | Type      | Default  | Description                                                                    |
| ----------------- | --------- | -------- | ------------------------------------------------------------------------------ |
| `autoPlay`        | `boolean` | `false`  | If the Diapositive instance should loop automatically                          |
| `activeClassName` | `string`  | `active` | The className added to the active slide                                        |
| `prevClassName`   | `string`  |          | The className added to the previous slide                                      |
| `nextClassName`   | `string`  |          | The className added to the next slide                                          |
| `startAt`         | `number`  | `0`      | The first focused slide when a new Diapositive instance is created (0 indexed) |
| `time`            | `number`  | `2000`   | Delay between slides if autoplay is set to true                                |

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
  <li class="diapo__slide">4 – My fourth slide</li>
</ul>
```

```js
import Diapositive from 'diapositive';

const diapo = new Diapositive('.diapo', {
  className: 'diapo__slide--active',
  autoPlay: true,
  time: 3000
});
```

```css
.diapo {
  height: 100vh;
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

  /* Animation */
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

