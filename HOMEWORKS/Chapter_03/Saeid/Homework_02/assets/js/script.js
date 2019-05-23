//Create h1 tag for title of page and write the title
let h1OfTitle = document.createElement("h1"); // h1 tag
textOfTitle = document.createTextNode("Shopping cart"); //text of title
h1OfTitle.appendChild(textOfTitle);
document.body.appendChild(h1OfTitle);

// Create function for our cards
const divOfContainerAndCard = () => {
  // Create container of shopping cart
  let cardOfContainer = document.createElement("div"); // div of container
  cardOfContainer.setAttribute("class", "container"); // class of container

  // header of our shopping cart
  let headerOfCart = document.createElement("div"); // Create a div for Card
  headerOfCart.setAttribute("class", "header"); // Create attribute of class

  let socialIconOfHeader = document.createElement("div"); // div of social icon in header
  socialIconOfHeader.setAttribute("class", "social");
  socialIconOfHeader.innerHTML +=
    '<a href="#"><span><i class="far fa-heart"></i></span></a>' +
    '<a href="#"><span><i class="fas fa-share-alt"></i></span></a>' +
    '<a href="#"><span><i class="fas fa-american-sign-language-interpreting"></i></span></a>' +
    '<a href="#"><span><i class="fas fa-chart-line"></i></span></a>';
  headerOfCart.appendChild(socialIconOfHeader);

  let titleOfHeader = document.createElement("div"); // div of header title
  titleOfHeader.setAttribute("class", "title");
  titleOfHeader.innerHTML +=
    "<h3>HP Spectre 15.6 Inch / FHD IPS Touch Privacy Screen Convertible Laptop</h3>" +
    "<span>product code WH5710517</span>";
  headerOfCart.appendChild(titleOfHeader);

  let starsOfHeader = document.createElement("div"); // div of stars in header
  starsOfHeader.setAttribute("class", "stars");
  starsOfHeader.innerHTML +=
    '<span><i class="fas fa-star"></i></span>' +
    '<span><i class="fas fa-star"></i></span>' +
    '<span><i class="fas fa-star"></i></span>' +
    '<span><i class="fas fa-star"></i></span>' +
    '<span><i class="fas fa-star"></i></span><br>' +
    "<span>3 customer reviews</span>";
  headerOfCart.appendChild(starsOfHeader);

  // main card of our shopping cart
  let mainCardOfCart = document.createElement("div"); // div of main card
  mainCardOfCart.setAttribute("class", "main_card"); // class attribute

  let galleryOfMainCard = document.createElement("div"); // div of first img
  galleryOfMainCard.setAttribute("class", "gallery");
  galleryOfMainCard.innerHTML +=
    '<img id="first_img" src="assets/img/1.jpg" alt=""></img>';
  let listOfGallery = document.createElement("div"); // crate div for slid gallery
  listOfGallery.setAttribute("class", "slid_gal");
  listOfGallery.innerHTML +=
    '<img onclick="change_img(this)" src="assets/img/1.jpg" alt=""></img>' +
    '<img onclick="change_img(this)" src="assets/img/2.jpg" alt=""></img>' +
    '<img onclick="change_img(this)" src="assets/img/3.jpg" alt=""></img>' +
    '<img onclick="change_img(this)" src="assets/img/4.jpg" alt=""></img>';
  galleryOfMainCard.appendChild(listOfGallery);
  mainCardOfCart.appendChild(galleryOfMainCard);

  let contentOfMainCard = document.createElement("div"); // div of content in main card
  contentOfMainCard.setAttribute("class", "content");
  let listOfContentItems = document.createElement("div"); // div of content in main card
  listOfContentItems.setAttribute("class", "co_list");
  listOfContentItems.innerHTML +=
    '<h4><strong>Brand :</strong><a href="#"><span> HP</span></a>&emsp;&emsp;&emsp;<strong>Group :</strong><a href="#"><span> PC and Laptop</span></a></h4>' +
    '<h4><strong>Color :</strong><a href="#"><span> Dark Ash Silver</span></a>&emsp;<a href="#"><span> Poseidon Blue</span></a></h4>' +
    '<h4><i class="far fa-check-circle"></i><strong> Guarantee :</strong><a href="#"><span> Amazon</span></a></h4>' +
    '<h4><strong>Seller :</strong><a href="#"><span> HP</span></a>&emsp;&emsp;&emsp;<strong>style :</strong><a href="#"><span> UHD Touch</span></a>&emsp;<a href="#"><span> FHD Touch + HP SureView</span></a></h4>' +
    '<h4><strong>Size Name :</strong><a href="#"><span> 1TB HDD</span></a>&emsp;<a href="#"><span> 512 GB SSD</span></a></h4>';
  contentOfMainCard.appendChild(listOfContentItems);
  let textOfContent = document.createElement("div"); // div of content text
  textOfContent.setAttribute("class", "co_content");
  textOfContent.innerHTML +=
    "<p> . Prozessor: Intel Core i7-8265u quad<br>" +
    "Besonderheiten: Ein Laptop der sich Ihnen anpasst - Nutzen Sie den Spectre x360 in 4 Modi (Laptop-,<br>" +
    "Tablet-, Stand-, Tent-Position). Leicht konvertierbar, robust und mobil<br>" +
    "Elegnantes, leichtes und hochwertig verarbeitetes Unibody Gehäuse aus Aluminium. Beleuchtete Tastatur,<br>" +
    "integrierter Fingerabdruckleser, IR Webcam; Grafikkarte. Nvidia GeForce MX150 (2GB DDR5 dediziert)<br>" +
    "Durch aktuelle Hochleistungshardware sind Sie für anspruchsvolle Anwendungen gerüstet und kommen mit<br>" +
    "einer Akkuladung durch den Tag<br>" +
    "Lieferumfang: HP Spectre x360 15-df0106ng (15,6 Zoll/UHD IPS Touch) Convertible Laptop in poseidon blau" +
    "</p>";
  contentOfMainCard.appendChild(textOfContent);
  let btnOfContent = document.createElement("div"); // div of content btn
  btnOfContent.setAttribute("class", "co_price");
  btnOfContent.innerHTML +=
    "<h4><strong> Our price :</strong><span>EUR 1,699.00</span></h4>" +
    "<p><button>Add to basket</button></p>" +
    "<span id='new_price'>New price</span>";
  contentOfMainCard.appendChild(btnOfContent);

  mainCardOfCart.appendChild(contentOfMainCard);

  let tableOfMainCard = document.createElement("div"); // div of table in main card
  tableOfMainCard.setAttribute("class", "specification");
  tableOfMainCard.innerHTML +=
    '<table><tr><td class="first_td">Shipping </td><td class="second_td">Prime</td></tr><tr><td class="first_td">Sold By </td><td class="second_td">Amazon.de</td></tr><tr><td class="first_td">Computer Memory Size </td><td class="second_td">16 GB</td></tr><tr><td class="first_td">Processor (CPU) Model </td><td class="second_td">Core i7</td></tr><tr><td class="first_td">Processor (CPU)<br> Manufacturer </td><td class="second_td">Intel</td></tr><tr><td class="first_td">Display Size </td><td class="second_td">15.6 inches</td></tr><tr><td class="first_td">Graphics Description </td><td class="second_td">NVIDIA GeForce MX150</td></tr><tr><td class="first_td">Hard disk Description </td><td class="second_td">SSD</td></tr><tr><td class="first_td">Hard Disk Size </td><td class="second_td">512 GB</td></tr><tr><td class="first_td">Item Weight </td><td class="second_td">2.18 kg</td></tr><tr><td class="first_td">Operating System </td><td class="second_td">Windows 10 Home 64</td></tr></table>';
  mainCardOfCart.appendChild(tableOfMainCard);

  // footer of our shopping cart
  let footerOfCart = document.createElement("div"); // Create a div for Card
  footerOfCart.setAttribute("class", "footer"); // Create attribute of class

  cardOfContainer.appendChild(headerOfCart);
  cardOfContainer.appendChild(mainCardOfCart);
  cardOfContainer.appendChild(footerOfCart);
  document.body.appendChild(cardOfContainer);
};
divOfContainerAndCard();

// We send new price value
let oldDate = new Date(2019, 4, 30);
let newDate = oldDate.toDateString();
let newPrice = newDate + " Price : 1,797 Euro";

// function of new price
let updatePrice = () => {
  let elPrice = document.getElementById("new_price");
  elPrice.textContent = newPrice;
};

// Call the function updatePrice
updatePrice();

// This is a function of img changing in our gallery
let changePhoto = document.getElementById("first_img");
function change_img(image) {
  changePhoto.src = image.src;
}
