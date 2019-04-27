let radius = 13; //This is the Radius of our Ball
let pi = 3.14; // This is number of pi
let surfaceArea = (4 / 3) * pi * radius * radius * radius; //Here is surface area of basketball

let el = document.getElementById("ball_02");
if (surfaceArea >= 313 && surfaceArea <= 314) {
  // Our value is between 313 and 314 cm2
  el.textContent = "This is basketball"; //Show the message of surfaceArea
} else {
  el.textContent = "This is not basketball"; //Show the message of surfaceArea
}
