const shoppingCart = document.getElementById("extraShoppingCart");
const addToShoppingCartButton = document.getElementById("button");
const closeButton = document.getElementById("close");
let selectedSize = "0";

shoppingCart.style.display = "none";

addToShoppingCartButton.onclick = function () {
  if(selectedSize === "0"){
    // User should not be able to continue before choosing size
  } else{
    localStorage.currentShoe = selectedSize;
    shoppingCart.style.display = "flex";
  }
};

closeButton.onclick = function () {
  shoppingCart.style.display = "none";
};

// Advised by Arash Tarafar
for(element of document.querySelectorAll(".sizes td")){
  element.addEventListener("click", function(){
    this.classList.add("selected");
    selectedSize = this.innerHTML;
  });
}