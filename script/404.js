function return_menu_func() {
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
