window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loading-screen").classList.add("hidden");
    document.body.classList.add("loaded");
  }, 2000);
});

const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => showSlide(index + 1), 5000);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    showSlide(index + 1);
  } else if (e.key === "ArrowLeft") {
    showSlide(index - 1);
  }
});

document.getElementById("prev").addEventListener("click", () => {
  showSlide(index - 1);
});
document.getElementById("next").addEventListener("click", () => {
  showSlide(index + 1);
});

function callAndRedirect() {
  window.location.href = "tel:+905356566554";

  setTimeout(function () {
    window.location.href = "thanks.html"
  }, 50);
}

function menu(){
  window.location.href = "menu.html"
}

function checkConnection() {
  if (!navigator.onLine) {
    window.location.href = "/offline.html";
  }
  else {
    if (window.location.pathname === "/offline.html") {
      window.location.href = "index.html";
    }
  }
}

window.addEventListener('load', checkConnection);

setInterval(checkConnection, 3000);

window.addEventListener('offline', checkConnection);
