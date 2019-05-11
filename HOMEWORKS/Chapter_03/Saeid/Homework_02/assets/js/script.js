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
};

