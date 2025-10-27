function openModal(src, caption) {
        document.getElementById("imgModal").style.display = "block";
        document.getElementById("modalImage").src = src;
        document.getElementById("modalCaption").innerText = caption;
      }

      function closeModal() {
        document.getElementById("imgModal").style.display = "none";
      }

      function openFullscreen(imgElement) {
        const modal = document.getElementById("fullscreenModal");
        const modalImg = document.getElementById("fullscreenImg");
        modal.style.display = "flex";
        modalImg.src = imgElement.src;
      }

      function closeFullscreen() {
        document.getElementById("fullscreenModal").style.display = "none";
      }

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
        const email = "info@libertygardenestate.com";
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

      // Trigger fade-in once DOM is ready
      document.addEventListener("DOMContentLoaded", () => {
        requestAnimationFrame(() => {
          document.body.classList.add("fade-in");
        });
      });

      function openBuildingModal4(button) {
  const modal = document.getElementById("buildingModal4");
  modal.style.display = "block";
  modal.scrollIntoView({ behavior: "smooth", block: "center" });
}
function closeBuildingModal4() {
  document.getElementById("buildingModal4").style.display = "none";
}
function changeModalView4(view, event) {
  const image = document.getElementById("modalBuildingImage4");
  image.style.opacity = 0;
  setTimeout(() => {
    if (view === "front") image.src = "../images/property2.jpeg";
    if (view === "side") image.src = "../images/property3.jpeg";
    if (view === "back") image.src = "../images/slide2.jpeg";
    image.style.opacity = 1;
  }, 200);
  event.target.parentElement.querySelectorAll(".view-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

function openBuildingModal3(button) {
  const modal = document.getElementById("buildingModal3");
  modal.style.display = "block";
  modal.scrollIntoView({ behavior: "smooth", block: "center" });
}
function closeBuildingModal3() {
  document.getElementById("buildingModal3").style.display = "none";
}
function changeModalView3(view, event) {
  const image = document.getElementById("modalBuildingImage3");
  image.style.opacity = 0;
  setTimeout(() => {
    if (view === "front") image.src = "../images/about-estate.jpeg";
    // if (view === "side") image.src = "../images/property4.jpeg";
    // if (view === "back") image.src = "../images/slide3.jpeg";
    image.style.opacity = 1;
  }, 200);
  event.target.parentElement.querySelectorAll(".view-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}
