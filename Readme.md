![main image](docs/main.jpg)

### Diapositive is a dependency-free Javascript slideshow base library. It does only one thing but does it well: adding a class to the current slide.

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

document.getElementById('prev').onclick = diapo.prev.bind(this);
document.getElementById('next').onclick = diapo.next.bind(this);
```

You're all set! Now Diapositive will take care of adding an `active` class to the correct element.

```html
<ul>
    <li class="active">Julien</li>
    <li>André</li>
    <li>Marcel</li>
</ul>

...

// User clicks on Next button

...

<ul>
    <li>Julien</li>
    <li class="active">André</li>
    <li>Marcel</li>
</ul>
```
