// * Navbar Menu
const nav = document.querySelector("#mobile__menu");
const navBtn = document.querySelector(".navbar--open--icon");
const navLinks = document.querySelectorAll(".nav__link");
const select = document.getElementById("change-language");

// * Navbar Menu Toggle Event
navBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  navBtn.children[0].classList.toggle("active-burger");
});

// * Navbar Menu Close
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    nav.classList.remove("open");
    navBtn.children[0].classList.remove("active-burger");
  }
});

document.querySelector("#nowYear").textContent = new Date().getFullYear();

localStorage.setItem("language", "en");

select.value = localStorage.getItem("language");
select.dispatchEvent(new Event("change"));

let pagesPath = [
  "/pages/data-analytics.html",
  "/pages/data-visualization.html",
  "/pages/data-engineering.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/index.html",
];

const contactForm = document.getElementById("contactForm");
const submitButton = document.querySelector(".form__button");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Disable the submit button to prevent multiple submissions
  submitButton.disabled = true;

  // Show loading state
  submitButton.value = "Loading...";

  // Get form data
  const formData = new FormData(contactForm);

  // Make a POST request to the backend API
  fetch(contactForm.action, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      // Restore the submit button and remove loading state
      submitButton.disabled = false;
      submitButton.value = "Send";

      if (response.ok) {
        // Show success message
        alert("Form submitted successfully!");
        contactForm.reset(); // Clear the form fields

        // Disable form submission after success
        contactForm.removeEventListener("submit", onSubmit);
      } else {
        // Handle errors if the request was not successful
        alert("An error occurred. Please try again.");
      }
    })
    .catch((error) => {
      // Restore the submit button and remove loading state
      submitButton.disabled = false;
      submitButton.value = "Send";

      // Handle network errors
      alert("A network error occurred. Please try again.");
    });
});
