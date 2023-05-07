// ---------- //
// -SHIV-UWU- //
// ---------- //

// note: code does not work raw, you need to add html buttons and some css to make it functional

console.log("Made by github.com/shiv-uwu")

// getting elements from html
const passwordInput = document.querySelector("#password");
const strengthDisplay = document.querySelector("#strength");
const requirementsList = document.querySelector("#requirements");

// event listener for input
passwordInput.addEventListener("input", function() {
  const password = passwordInput.value;
  
  let strength = "weak";
  let requirements = [];
  
  if (password.length >= 8) { // check if password is at least 8 characters
    requirements.push("at least 8 characters");
    strength = "medium";
    
    const containsDigit = /\d/.test(password); // check if password contains a digit
    const containsSpecialChar = /[^A-Za-z0-9]/.test(password); // check if password contains a special character
    
    if (containsDigit && containsSpecialChar) { // check if password contains a digit and a special character
      requirements.push("at least 1 digit and 1 special character");
      strength = "strong";
    } else if (containsDigit) { 
      requirements.push("at least 1 digit");
    } else if (containsSpecialChar) {
      requirements.push("at least 1 special character");
    }
  }
  
  displayStrength(strength); // display strength
  displayRequirements(requirements); // display requirements
});

function displayStrength(strength) { // function to display strength
  strengthDisplay.className = `strength-${strength}`;
  strengthDisplay.textContent = strength.charAt(0).toUpperCase() + strength.slice(1);
}

function displayRequirements(requirements) { // function to display requirements
  requirementsList.innerHTML = "";
  requirements.forEach(function(req) {
    const li = document.createElement("li");
    li.textContent = req;
    requirementsList.appendChild(li);
  });
}

