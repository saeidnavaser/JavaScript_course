// We send new price value
let oldDate = new Date(2019, 4, 30);
let newDate = oldDate.toDateString();
let newPrice = newDate + " Price : 1,797 Euro";

// function of new price
let updatePrice = () => {
    let elPrice = document.getElementById("new_price");
    elPrice.textContent = newPrice;
};

// Call the function
updatePrice();




/* error
let newPrice = new Date(2019, 4, 30) + "Price : 1,797 Euro";


// function of new price
let updatePrice = () => {
    let elPrice = document.getElementById("new_price");
    elPrice.textContent = newPrice;
};

// Call the function
updatePrice();*/


/* error
/*let newDate = new Date(2019, 4, 30);
let newPrice = "1,797 Euro";

let elPrice = document.getElementById("new_price").innerHTML = d.toDateString();
elPrice.textContent = `in ${newDate}, price is : ${newPrice};

console.log()*/


