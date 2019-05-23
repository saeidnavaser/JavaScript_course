//Create h1 tag for title of page and write the title
let h1OfTitle = document.createElement("h1"); // h1 tag
textOfTitle = document.createTextNode("Surface Of Balls"); //text of title
h1OfTitle.appendChild(textOfTitle);
document.body.appendChild(h1OfTitle);

let radius = ["5 cm2", "3.35 cm2", "4.3 cm2"];
let balls = ["Basketball", "Tennis ball", "Football"];
//let msgOfRadius = "Radius: "; //(This is correct too but I try different way to print the Msg )
//let msgOfBall = "This is a ";

// Write msg of Basketball
let msgOfBasket = "<h3>Radius: </h3><p>" + radius[0] + "</p>";
msgOfBasket += "<h3>This is a </h3><p>" + balls[0] + ".</p>";

// Write msg of Tennis ball
let msgOfTennis = "<h3>Radius: </h3><p>" + radius[1] + "</p>";
msgOfTennis += "<h3>This is a </h3><p>" + balls[1] + ".</p>";

// Write msg of Football
let msgOfFoot = "<h3>Radius: </h3><p>" + radius[2] + "</p>";
msgOfFoot += "<h3>This is a </h3><p>" + balls[2] + ".</p>";

//Create function for cards
const createCard = () => {
  // Create container a then 3 cards for our balls
  let cardOfContainer = document.createElement("div"); // div of container
  cardOfContainer.setAttribute("class", "container"); // class of container

  // first card
  let cardOfBasket = document.createElement("div"); // Create a div for Card
  cardOfBasket.setAttribute("class", "card"); // Create attribute of class
  cardOfBasket.innerHTML +=
    "<img src='./assets/img/basketball.jpg' alt='basketball img'  class='img'>";
  /*cardOfBasket.innerHTML +=
    msgOfRadius + radius[0] + "<br></br>" + msgOfBall + balls[0] + ".";*/
  cardOfBasket.innerHTML += msgOfBasket; // Print the Msg

  //second card
  let cardOfTennis = document.createElement("div"); // Create a div for Card
  cardOfTennis.setAttribute("class", "card"); // Create attribute of class
  cardOfTennis.innerHTML +=
    "<img src='./assets/img/tennisball.jpg' alt='basketball img'  class='img'>";
  /*cardOfTennis.innerHTML +=
    msgOfRadius + radius[1] + "<br></br>" + msgOfBall + balls[1] + ".";*/
  cardOfTennis.innerHTML += msgOfTennis; // Print the Msg

  //third card
  let cardOfFoot = document.createElement("div"); // Create a div for Card
  cardOfFoot.setAttribute("class", "card"); // Create attribute of class
  cardOfFoot.innerHTML +=
    "<img src='./assets/img/football.jpg' alt='basketball img'  class='img'>";
  /*cardOfFoot.innerHTML +=
    msgOfRadius + radius[2] + "<br></br>" + msgOfBall + balls[2] + ".";*/
  cardOfFoot.innerHTML += msgOfFoot; // Print the Msg

  cardOfContainer.appendChild(cardOfBasket);
  cardOfContainer.appendChild(cardOfTennis);
  cardOfContainer.appendChild(cardOfFoot);
  document.body.appendChild(cardOfContainer);
};
createCard();
