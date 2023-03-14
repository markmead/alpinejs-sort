# Alpine JS Sort

Sort data in Alpine JS without writing any JavaScript 🦜

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-sort@latest/dist/sort.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
yarn add -D alpinejs-sort

npm install -D alpinejs-sort
```

```js
import Alpine from 'alpinejs'
import sort from 'alpinejs-sort'

Alpine.plugin(sort)

Alpine.start()
```

## Examples

In all of these examples `asc` is the default, but this can be changed through
Alpine JS.

_You can move the `x-sort` onto the same element as the `x-data` if you wish._

### Simple Array

```html
<div x-data="{ items: ['D post', 'A post', 'C post', 'B post'], type: 'asc' }">
  <select x-model="type">
    <option value="asc">Asc</option>
    <option value="desc">Desc</option>
  </select>

  <ul x-sort.items="type">
    <template x-for="item in items">
      <li x-text="item"></li>
    </template>
  </ul>
</div>
```

Here we simply pass `asc` or `desc` as the array does not contain objects.

### Array of Objects

```html
<div
  x-data="{
      items: [
        { title: 'D post' },
        { title: 'A post' },
        { title: 'C post' },
        { title: 'B post' }
      ],
      type: 'asc.title'
    }"
>
  <select x-model="type">
    <option value="asc.title">Title (Asc)</option>
    <option value="desc.title">Title (Desc)</option>
  </select>

  <ul x-sort.items="type">
    <template x-for="item in items">
      <li x-text="item.title"></li>
    </template>
  </ul>
</div>
```

Here we pass `asc.title` or `desc.title` as we want to sort on an object
property. This translate to:

> Sort by asc or desc order based on the value of `title`.

### Array of Objects (Nested)

```html
<div
  x-data="{
    items: [
        { title: { main: 'D post', sub: 'D' } },
        { title: { main: 'A post', sub: 'A' } },
        { title: { main: 'C post', sub: 'C' } },
        { title: { main: 'B post', sub: 'B' } }
    ],
    type: 'asc.title.main'
  }"
>
  <select x-model="type">
    <option value="">Please select</option>
    <option value="asc.title.main">Title (Asc)</option>
    <option value="desc.title.main">Title (Desc)</option>
  </select>

  <ul x-sort.items="type">
    <template x-for="item in items">
      <li x-text="item.title.main"></li>
    </template>
  </ul>
</div>
```

This is the same logic as the previous example.

_The nesting should go as far as you need! `item.title.main.translated.en`? Go
for it._

Here we pass `asc.title.main` or `desc.title.main` as we want to sort on a
nested object property. This translate to:

> Sort by asc or desc order based on the value of `main` in the `title` object.

## Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-sort)
![](https://img.shields.io/npm/v/alpinejs-sort)
![](https://img.shields.io/npm/dt/alpinejs-sort)
![](https://img.shields.io/github/license/markmead/alpinejs-sort)
