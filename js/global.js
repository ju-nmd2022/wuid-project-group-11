if (localStorage.currentShoe) {
  document.querySelector(".basketbadge").style.display = "block";
}

document.querySelector(".logo").addEventListener("click", function(){
  window.location = "/index.html";
});
