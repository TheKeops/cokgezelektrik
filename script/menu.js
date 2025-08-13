function go_index() {
    window.location.href = "index.html";
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


function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("site-theme", next);


  const logo = document.getElementById("cokgezelektrik_logo");
  if(next === "dark") {
    logo.src = "image/cokgezelektrik_dark.png";
  } else {
    logo.src = "image/cokgezelektrik.png";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("site-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const logo = document.getElementById("cokgezelektrik_logo");
  logo.src = savedTheme === "dark" ? "image/cokgezelektrik_dark.png" : "image/cokgezelektrik.png";
});