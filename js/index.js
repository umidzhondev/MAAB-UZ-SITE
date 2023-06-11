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

// Check if form has already been submitted
const isSubmitted = sessionStorage.getItem("isSubmitted");

if (isSubmitted) {
  submitButton.disabled = true;
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  if (isSubmitted) {
    // If form has already been submitted, do nothing
    return;
  }

  // Disable the submit button to prevent multiple submissions
  submitButton.disabled = true;

  // Show loading state
  submitButton.value = "Loading...";

  // Get form data
  const formData = new FormData(contactForm);

  // Convert form data to JSON object
  const jsonData = {};
  for (const [key, value] of formData.entries()) {
    jsonData[key] = value;
  }
  const jsonPayload = JSON.stringify(jsonData);

  // Make a POST request to the backend API
  fetch(contactForm.action, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonPayload,
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

        // Store information that form has been submitted
        sessionStorage.setItem("isSubmitted", true);
        submitButton.disabled = true;
      } else {
        // Handle errors if the request was not successful
      }
    })
    .catch((error) => {
      // Restore the submit button and remove loading state
      submitButton.disabled = false;
      submitButton.value = "Send";

      // Handle network errors
    });
});
