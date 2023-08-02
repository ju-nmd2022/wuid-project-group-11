const shoppingCart = document.getElementById("extraShoppingCart");
const close = document.getElementById("close");

shoppingCart.style.display = "none";

<<<<<<< HEAD
addToShoppingCartButton.onclick = function () {
  localStorage.basketfull = true;
=======
button.addEventListener("click", function () {
>>>>>>> parent of 463c193 (Touch up)
  shoppingCart.style.display = "flex";
});

close.onclick = function () {
  shoppingCart.style.display = "none";
};
