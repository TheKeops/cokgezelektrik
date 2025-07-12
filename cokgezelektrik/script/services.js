window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loading-screen").classList.add("hidden");
    document.body.classList.add("loaded");
  }, 2000);
});

function callAndRedirect() {
  window.location.href = "tel:+905356566554";
}

function menu() {
  window.location.href = "menu.html";
}
