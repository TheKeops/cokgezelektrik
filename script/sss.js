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

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("site-theme", next);


  const logo = document.getElementById("cokgezelektrik_logo");
  if(next === "dark") {
    logo.src = "image/cokgezelektrik_dark.PNG";
  } else {
    logo.src = "image/cokgezelektrik.PNG";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("site-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const logo = document.getElementById("cokgezelektrik_logo");
  logo.src = savedTheme === "dark" ? "image/cokgezelektrik_dark.PNG" : "image/cokgezelektrik.PNG";
});