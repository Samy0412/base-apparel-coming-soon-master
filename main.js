// To disable the form from submitting
const form = document.querySelector("#form");
// To display the error message
const errorDiv = document.querySelector("#show-error");
// Tos display the error-icon
const errorIcon = document.querySelector("#icon-error");
// To validate the email
const email = document.querySelector("#email");

function isValid(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener("submit", (event) => {
  // All validation checks are run in this method.
 
  let incorrectInput = "";

  if (!email.value) {
    incorrectInput = "Please provide an email";
  } else if (!isValid(email.value)) {
    incorrectInput = "Please provide a valid email";
  }

  if (incorrectInput !== "") {
    // Change the error div tag to display the error message(s)
    errorDiv.innerText = incorrectInput;
    // display the error-icon
    errorIcon.style.opacity = 1;
    //Change the color of the input box
    email.style.borderColor = "hsl(0, 93%, 68%)";
    email.style.opacity = 1;
    // Prevent the form button from submitting again, before fixing the issues
    event.preventDefault();
  } else {
    //reset the error message
    errorDiv.innerText = "";
    //hide the error icon
    errorIcon.style.opacity = 0;
    //reset the color of the input border
    email.style.borderColor = "hsl(0, 36%, 70%)";
    email.style.opacity = 0.4;
  }
  // email.value = "";
  // Prevent the form button from submitting because it is only for demonstration
  event.preventDefault();
});
