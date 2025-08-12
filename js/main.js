function toggleMenu() {
  const menu = document.getElementById("navbarMenu");
  const toggleBtn = document.getElementById("menuToggle");
  const icon = toggleBtn.querySelector("i");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    icon.classList.remove("bx-menu");
    icon.classList.add("bx-x");
  } else {
    icon.classList.remove("bx-x");
    icon.classList.add("bx-menu");
  }
}

setTimeout(() => {
  const tooltip = document.querySelector(".whatsapp-tooltip");
  if (tooltip) tooltip.style.display = "none";
}, 10000);
