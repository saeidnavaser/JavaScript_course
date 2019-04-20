# Three groups of built-in objects

**_:information_source::information_source::information_source: Browsers come with a set of built-in objects that represent things like the browser window and the current web page shown in that window. These built-in objects act like a toolkit for creating interactive web pages._**

The first thing you need to do is get to know what tools are available. You can imagine that your new toolkit has three compartments:

- BOM.
- DOM.
- Global javascript objects.

![Built in objects](./builtin_objects.png)

## BOM

All objects are created inside global object called `window` which is representing the current window or tab. It is also representing the `BOM` object.

![window](./window.png)

## DOM

The `Document Object Model` creates a model of the current web page. The topmost object is the `document` object, which representing the page as a whole. Its child objects represent other items on page.

![dom](./dom.png)

## Global JavaScript Objects

The global objects do not form a single model. They are a group of individual objects that relate to different parts of the javascript language.

Name of the global objects always start with `Capital letter` example: `String`, `Date`, `Number`, etc.

![global objects](./global_objects.png)

# Simple example about BOM

The window object represents the current browser window or tab. It is the topmost object in the Browser Object Model, and it contains other objects that tell you about the browser.

![BOM](./BOM.png)

```js
// Ahmed write them c03/js/window-object.js Program
```

---

### References and Terms:

> :gem: Check out [Standard objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
