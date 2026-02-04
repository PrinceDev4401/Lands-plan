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

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-shadow");
  } else {
    navbar.classList.remove("navbar-shadow");
  }
});

// open email
function openEmail() {
  const email = "Libertygardensestate100@gmail.com";
  const subject = "Inquiry About Liberty Gardens Estate";
  const body = `Hello Liberty Gardens Estate,

I would like to learn more about your properties.

Regards,`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  try {
    // Always try default email app first
    window.location.href = mailtoLink;

    // Optional fallback: if on desktop and mailto fails, open Gmail
    if (!isMobile) {
      setTimeout(() => {
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`,
          "_blank"
        );
      }, 2000);
    }
  } catch (error) {
    console.error("Email link failed:", error);
  }
}

// Animation on page load
// Trigger fade-in once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.body.classList.add("fade-in");
  });
});

const headers = document.querySelectorAll(".process-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const currentItem = header.parentElement;

    // Close all others
    document.querySelectorAll(".process-item").forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("active");
        item.querySelector(".process-content").style.maxHeight = null;
      }
    });

    // Toggle current
    currentItem.classList.toggle("active");
    const content = currentItem.querySelector(".process-content");

    if (currentItem.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});
