let cartPrice = 0;
let cucumber = 2;
let tomato = 3;
let potatoes = 1;
let carrot = 2;
let beet = 2;
let onion = 1.5;
function addPricceCucumber() {
  cartPrice += cucumber;
  console.log(cartPrice);
}
function minusPricceCucumber() {
  cartPrice -= cucumber;
  console.log(cartPrice);
}

function addPricceTomato() {
  cartPrice += tomato;
  console.log(cartPrice);
}
function minusPricceTomato() {
  cartPrice -= tomato;
  console.log(cartPrice);
}

function addPriccePotatoes() {
  cartPrice += potatoes;
  console.log(cartPrice);
}
function minusPriccePotatoes() {
  cartPrice -= potatoes;
  console.log(cartPrice);
}

function addPricceCarrot() {
  cartPrice += carrot;
  console.log(cartPrice);
}
function minusPricceCarrot() {
  cartPrice -= carrot;
  console.log(cartPrice);
}

function addPricceBeet() {
  cartPrice += beet;
  console.log(cartPrice);
}
function minusPricceBeet() {
  cartPrice -= beet;
  console.log(cartPrice);
}

function addPricceOnion() {
  cartPrice += onion;
  console.log(cartPrice);
}
function minusPricceOnion() {
  cartPrice -= onion;
  console.log(cartPrice);
}
if (cartPrice > 15) {
  cartPrice *= 0.9;
}
function checkOrderAmount() {
  if (cartPrice > 15) {
    cartPrice *= 0.9;
  }
  alert("the amount of your order is " + cartPrice);
}
