// Regex used in type=”email” from W3C
const emailRegEx =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const form = document.getElementById("main-form");
const emailContainer = document.querySelector(".input-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!emailRegEx.test(form.email.value)) {
    emailContainer.classList.add("input-error");
  } else {
    form.email.value = "";
  }
});

form.addEventListener("focusout", () => {
  emailContainer.classList.remove("input-error");
});
