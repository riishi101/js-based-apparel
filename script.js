const input = document.getElementById("input");
const submitArrow = document.getElementById("submitArrow");
const signupForm = document.querySelector(".signupForm");
const email = document.getElementById("email");

function showError(input) {
  const formEmail = input.parentElement;
  formEmail.className = "signupForm error";
}

function showSuccess(input) {
  const formEmail = input.parentElement;
  formEmail.classList.remove("error"); // Remove error class on success
  formEmail.classList.add("success");
}

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    email.value = "";
    alert("Email sent successfully!");
  } else {
    showError(input);
  }
}

// event listener
submitArrow.addEventListener("click", function (e) {
  e.preventDefault();

  checkEmail(email);
});
