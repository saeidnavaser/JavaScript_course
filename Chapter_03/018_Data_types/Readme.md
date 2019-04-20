# Data types

In JavaScript there are six data types:

- Five of them are described as `simple` (or `primitive`) data types.
- The sixth is the object (and is referred to as a complex data type).

| Key       | Value type                |
| --------- | ------------------------- |
| String    | "JavaScript is awesome!!" |
| Number    | 1,2,2.5,...               |
| Boolean   | true, false               |
| Undefined | Undefined                 |
| Null      | null                      |
| Object    | {}                        |

Whenever you have a value that is a string, you can use the properties and methods of the String object on that valu e. This example stores the phrase "Home sweet home " in a variable.

```js
let saying = "Home sweet home ";
```

When you declare a variable in JavaScript, It will be wrapped under the hood with objects according to the type of the variable. In our example we define a string and for that javaScript wrap the variable with special methods that we can use. The methods are:

![string object](./stringobject.png)

Each character in a string is automatically given a number, called an `index` number. Index numbers always start at **zero** and not one (just like for items in an array).

![String methods](./stringexample.png)

---

### References and Terms:

> :gem: Read more about [Data type structure in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
