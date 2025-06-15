window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loading-screen").classList.add("hidden");
    document.body.classList.add("loaded");
  }, 2000);
});

const acc = document.querySelectorAll(".accordion");
acc.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

function menu() {
  window.location.href = "menu.html";
}
