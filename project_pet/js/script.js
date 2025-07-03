

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const sideMenu = document.getElementById("side-menu");
  const menuIcon = document.getElementById("menu-icon");

  toggleBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("open");

    menuIcon.textContent = sideMenu.classList.contains("open") ? "✖" : "☰";
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuIcon = document.getElementById("menu-icon");
  const sideMenu = document.getElementById("side-menu");

  menuToggle.addEventListener("click", () => {
    sideMenu.classList.toggle("open");

    // Cambiar ícono
    if (sideMenu.classList.contains("open")) {
      menuIcon.textContent = "✖";
    } else {
      menuIcon.textContent = "☰";
    }
  });

  // Cierra el menú al hacer clic en un enlace
  sideMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      sideMenu.classList.remove("open");
      menuIcon.textContent = "☰";
    });
  });
});
