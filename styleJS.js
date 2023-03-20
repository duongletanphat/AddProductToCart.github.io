let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Product 1",
    picture: "1.png",
    price: 23000,
  },
  {
    id: 2,
    name: "Product 2",
    picture: "2.png",
    price: 30000,
  },
  {
    id: 3,
    name: "Product 3",
    picture: "3.png",
    price: 45000,
  },
  {
    id: 4,
    name: "Product 4",
    picture: "4.png",
    price: 100000,
  },
  {
    id: 5,
    name: "Product 5",
    picture: "5.png",
    price: 65000,
  },
  {
    id: 6,
    name: "Product 6",
    picture: "6.png",
    price: 353000,
  },
];

let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="image/${value.picture}"/>
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()}</div>
      <button onclick="addToCard(${key})">Add To Card</button>
    `;
    list.appendChild(newDiv);
  });
}
initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  }
  reloadCart();
}

function reloadCart() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
      <div><img src="image/${value.picture}"/></div>
      <div>${value.name}</div>
      <div>${value.price.toLocaleString()}</div>
      <div>
        <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
      <div class="count">${value.quantity}</div>
      <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</div>
      </div>
    `;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  console.log(key, quantity);
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCart();
}
