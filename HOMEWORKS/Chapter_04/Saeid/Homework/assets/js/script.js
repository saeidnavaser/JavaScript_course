//Create h1 tag for title of page and write the title
let h1OfTitle = document.createElement("h1"); // h1 tag
textOfTitle = document.createTextNode("Cats of Chapter 04"); //text of title
h1OfTitle.appendChild(textOfTitle);
document.body.appendChild(h1OfTitle);

// Array of cats
let Cats = [
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

// Create container
let cardOfContainer = document.createElement("div"); // div of container
cardOfContainer.setAttribute("class", "container"); // class of container
document.body.appendChild(cardOfContainer);

// Create function for our cards
const cardOfImages = () => {
  // create for loop to print cards
  for (let i = 0; i <= Cats.length; i++) {
    // Create card
    let cardOftCat = document.createElement("div"); // Create a div for Card
    cardOftCat.setAttribute("class", "card"); // Create attribute of class

    // Create img
    let imageOfCats = document.createElement("img");
    imageOfCats.setAttribute("class", "img");
    imageOfCats.src = Cats[i].url;

    // Create name
    let nameTitle = document.createElement("h3"); // h3 tag
    textOfName = document.createTextNode("name: "); //text of title
    let name = document.createElement("p");
    printName = document.createTextNode(
      Cats[i].url.substring(Cats[i].url.lastIndexOf("/"), 70).replace("/", "")
    ); //name

    cardOftCat.appendChild(imageOfCats); // Image
    cardOftCat.appendChild(nameTitle);
    nameTitle.appendChild(textOfName);
    cardOftCat.appendChild(name);
    name.appendChild(printName); // Name
    cardOfContainer.appendChild(cardOftCat); // Card
  }
};
cardOfContainer.innerHTML = cardOfImages(); // Container
