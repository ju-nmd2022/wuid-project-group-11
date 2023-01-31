const shoppingCart = document.getElementById("extraShoppingCart");
const shoppingCartShoe = document.getElementById("shoppingcartShoe");
const messageInCart = document.getElementById("messageInCart");
const button = document.getElementById("button");
const close = document.getElementById("close");

shoppingCart.style.display = "none";

button.addEventListener("click", function () {
  shoppingCart.style.display = "flex";
});

close.onclick = function () {
  shoppingCart.style.display = "none";
};
