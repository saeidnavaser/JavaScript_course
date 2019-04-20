# Chapter 2 examples

example found in **c2/js/example.js**

```js
// Create variables for the welcome message
var greeting = "Howdy ";
var name = "Molly";
var message = ", please check your order:";
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// Create variables to hold details about the sign
var sign = "Montague House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
var el = document.getElementById("greeting");
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents
var elSign = document.getElementById("userSign");
elSign.textContent = sign;

// Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById("subTotal");
elSubTotal.textContent = "$" + subTotal;

// Get the element that has an id of shipping then update its contents
var elShipping = document.getElementById("shipping");
elShipping.textContent = "$" + shipping;

// Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = "$" + grandTotal;

// Note: textContent does not work in IE8 or earlier - see explanation on website
```

## HOMEWORK_1

Try to create variables and change the values accordingly. Create new variables, assign a new value to them and try to show them on the page.

## HOMEWORK_2

Calculate the surface area of basketball. Radius is 13 cm. If the value is between 314 cm2 and 313 cm2 then show the message "This is basketball", otherwise show a message saying "This is not basketball"

To compare the value use If statement like the following

```js
if (surfaceArea >= 313.5 && surfaceArea <= 314) {
  // TODO show a pesific message
} else {
  // TODO show other message
}
```
