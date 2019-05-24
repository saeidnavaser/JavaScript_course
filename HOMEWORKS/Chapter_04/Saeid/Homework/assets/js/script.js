//Create h1 tag for title of page and write the title
let h1OfTitle = document.createElement("h1"); // h1 tag
textOfTitle = document.createTextNode("Cats of Chapter 04"); //text of title
h1OfTitle.appendChild(textOfTitle);
document.body.appendChild(h1OfTitle);

// Array of Cats
let cats = [
  {
    breeds: [],
    id: "2f9",
    url: "https://26.media.tumblr.com/tumblr_m3o5vhPKBa1rtuomto1_250.jpg",
    width: 500,
    height: 333
  },
  {
    breeds: [],
    id: "3h0",
    url: "https://25.media.tumblr.com/tumblr_m3kg02GkLw1qjc1a7o1_250.jpg",
    width: 900,
    height: 600
  },
  {
    breeds: [],
    id: "3v7",
    url: "https://cdn2.thecatapi.com/images/3v7.gif",
    width: 245,
    height: 245
  },
  {
    breeds: [],
    id: "58l",
    url: "https://25.media.tumblr.com/tumblr_kop8wzgxHa1qzv5pwo1_250.jpg",
    width: 385,
    height: 500
  },
  {
    breeds: [],
    id: "9qn",
    url: "https://24.media.tumblr.com/tumblr_m27vjmHY8Y1qh66wqo1_250.png",
    width: 600,
    height: 800
  },
  {
    breeds: [],
    id: "aad",
    url: "https://24.media.tumblr.com/tumblr_m1vu8mrE0z1qze0hyo1_250.jpg",
    width: 1344,
    height: 1008
  },
  {
    breeds: [],
    id: "ae4",
    url: "https://cdn2.thecatapi.com/images/ae4.gif",
    width: 430,
    height: 242
  },
  {
    breeds: [],
    id: "auf",
    url: "https://25.media.tumblr.com/tumblr_m0v0feUY3X1qzwfgto1_250.png",
    width: 561,
    height: 554
  },
  {
    breeds: [],
    id: "dqn",
    url: "https://25.media.tumblr.com/tumblr_m4f8t9JGy11qejbiro1_250.jpg",
    width: 560,
    height: 480
  }
];

// Create function for our cards
const divOfContainerAndCard = () => {
  // Create container
  let cardOfContainer = document.createElement("div"); // div of container
  cardOfContainer.setAttribute("class", "container"); // class of container

  // first card
  let cardOfFirstCat = document.createElement("div"); // Create a div for Card
  cardOfFirstCat.setAttribute("class", "card"); // Create attribute of class
  cardOfFirstCat.innerHTML +=
    "<img src='https://26.media.tumblr.com/tumblr_m3o5vhPKBa1rtuomto1_250.jpg'  class='img'>";
  cardOfFirstCat.innerHTML +=
    "<h3>name: </h3><p>" + cats[0].url.slice(28, 63) + "</p>"; //Print the Msg

  // second card
  let cardOfSecondCat = document.createElement("div"); // Create a div for Card
  cardOfSecondCat.setAttribute("class", "card"); // Create attribute of class
  cardOfSecondCat.innerHTML +=
    "<img src='https://25.media.tumblr.com/tumblr_m3kg02GkLw1qjc1a7o1_250.jpg'  class='img'>";
  cardOfSecondCat.innerHTML +=
    "<h3>name: </h3><p>" + cats[1].url.slice(28, 63) + "</p>"; //Print the Msg

  // third card
  let cardOfThirdCat = document.createElement("div"); // Create a div for Card
  cardOfThirdCat.setAttribute("class", "card"); // Create attribute of class
  cardOfThirdCat.innerHTML +=
    "<img src='https://cdn2.thecatapi.com/images/3v7.gif'  class='img'>";
  cardOfThirdCat.innerHTML +=
    "<h3>name: </h3><p>" + cats[2].url.slice(34, 43) + "</p>"; //Print the Msg

  // fourth card
  let cardOfFourthCat = document.createElement("div"); // Create a div for Card
  cardOfFourthCat.setAttribute("class", "card"); // Create attribute of class
  cardOfFourthCat.innerHTML +=
    "<img src='https://25.media.tumblr.com/tumblr_kop8wzgxHa1qzv5pwo1_250.jpg'  class='img'>";
  cardOfFourthCat.innerHTML +=
    "<h3>name: </h3><p>" + cats[3].url.slice(28, 63) + "</p>"; //Print the Msg

  // fifth card
  let cardOfFifthCat = document.createElement("div"); // Create a div for Card
  cardOfFifthCat.setAttribute("class", "card"); // Create attribute of class
  cardOfFifthCat.innerHTML +=
    "<img src='https://24.media.tumblr.com/tumblr_m27vjmHY8Y1qh66wqo1_250.png'  class='img'>";
  cardOfFifthCat.innerHTML +=
    "<h3>name: </h3><p>" + cats[4].url.slice(28, 63) + "</p>"; //Print the Msg

  // sixth card
  let cardOfSixthCat = document.createElement("div"); // Create a div for Card
  cardOfSixthCat.setAttribute("class", "card"); // Create attribute of class
  cardOfSixthCat.innerHTML +=
    "<img src='https://24.media.tumblr.com/tumblr_m1vu8mrE0z1qze0hyo1_250.jpg' class='img'>";
  cardOfSixthCat.innerHTML +=
    "<h3>name: </h3><p>" + cats[5].url.slice(28, 63) + "</p>"; //Print the Msg

  // seventh card
  let cardOfSeventhCat = document.createElement("div"); // Create a div for Card
  cardOfSeventhCat.setAttribute("class", "card"); // Create attribute of class
  cardOfSeventhCat.innerHTML +=
    "<img src='https://cdn2.thecatapi.com/images/ae4.gif'  class='img'>";
  cardOfSeventhCat.innerHTML +=
    "<h3>name: </h3><p>" + cats[6].url.slice(34, 43) + "</p>"; //Print the Msg

  // eighth card
  let cardOfEighthCat = document.createElement("div"); // Create a div for Card
  cardOfEighthCat.setAttribute("class", "card"); // Create attribute of class
  cardOfEighthCat.innerHTML +=
    "<img src='https://25.media.tumblr.com/tumblr_m0v0feUY3X1qzwfgto1_250.png' class='img'>";
  cardOfEighthCat.innerHTML +=
    "<h3>name: </h3><p>" + cats[7].url.slice(28, 63) + "</p>"; //Print the Msg

  // ninth card
  let cardOfNinthCat = document.createElement("div"); // Create a div for Card
  cardOfNinthCat.setAttribute("class", "card"); // Create attribute of class
  cardOfNinthCat.innerHTML +=
    "<img src='https://25.media.tumblr.com/tumblr_m4f8t9JGy11qejbiro1_250.jpg'  class='img'>";
  cardOfNinthCat.innerHTML +=
    "<h3>name: </h3><p>" + cats[8].url.slice(28, 63) + "</p>"; //Print the Msg

  cardOfContainer.appendChild(cardOfFirstCat);
  cardOfContainer.appendChild(cardOfSecondCat);
  cardOfContainer.appendChild(cardOfThirdCat);
  cardOfContainer.appendChild(cardOfFourthCat);
  cardOfContainer.appendChild(cardOfFifthCat);
  cardOfContainer.appendChild(cardOfSixthCat);
  cardOfContainer.appendChild(cardOfSeventhCat);
  cardOfContainer.appendChild(cardOfEighthCat);
  cardOfContainer.appendChild(cardOfNinthCat);
  document.body.appendChild(cardOfContainer);
};
divOfContainerAndCard();
