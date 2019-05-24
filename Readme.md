![main image](docs/main.jpg)

### Diapositive is a dependency-free Javascript slideshow building library. It does only one thing but does it well: adding a class to the current slide.

## Philosophy

The idea behind this library is to provide boilerplate code to quickly bootstrap interesting slideshow components.

It is only concerned with how things should work, not how they should look. By providing a tiny API surface, this library aims to simplify slideshow development to let you spend more time on styling or more valuable features.

## Getting started

Download latest version with NPM...

```bash
npm install diapositive
```

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

document.getElementById('prev').onclick = diapo.prev.bind(diapo);
document.getElementById('next').onclick = diapo.next.bind(diapo);
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

