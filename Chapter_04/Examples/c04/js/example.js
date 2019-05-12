var table = 3; // Unit of table
var operator = "addition"; // Type of calculation
var i = 1; // Set counter to 1
var msg = ""; // Message

function render(op) {
  switch (op) {
    case "subtraction":
      operator = "-";
      break;
    case "multiplication":
      operator = "*";
      break;
    case "division":
      operator = "/";
      break;
    default:
      operator = "+";
  }
  drawOnHTML();
}

var el = document.getElementById("blackboard");
function drawOnHTML() {
  i = 1;
  msg = "";
  while (i < 11) {
    let result = 0;
    if (operator === "/") {
      result = eval(i + operator + table).toFixed(2);
    } else {
      result = eval(i + operator + table);
    }
    msg += i + " " + operator + " " + table + " = " + result + "<br />";
    i++;
  }
  el.innerHTML = msg;
}

render();

// if (operator === "addition") {
//   // Do addition
//   while (i < 11) {
//     msg += i + " + " + table + " = " + (i + table) + "<br />";
//     i++;
//   }
// } else {
//   // Do multiplication
//   while (i < 11) {
//     msg += i + " - " + table + " = " + (i - table) + "<br />";
//     i++;
//   }
// }

// Write the message into the page
