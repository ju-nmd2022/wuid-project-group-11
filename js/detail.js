const shoppingCart = document.getElementById("extraShoppingCart");
const addToShoppingCartButton = document.getElementById("button");
const closeButton = document.getElementById("close");

shoppingCart.style.display = "none";

addToShoppingCartButton.onclick = function () {
  localStorage.basketfull = true;
  //shoppingCart.style.display = "flex";
};

closeButton.onclick = function () {
  shoppingCart.style.display = "none";
};
