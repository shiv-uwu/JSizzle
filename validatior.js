// ---------- //
// -SHIV-UWU- //
// ---------- //

console.log("Made by github.com/shiv-uwu")

function validateForm() { // function to validate form
    var name = document.forms[0]["name"].value; // get name from form
    var email = document.forms[0]["email"].value; // get email from form
    var phone = document.forms[0]["phone"].value; // get phone from form

    if (!isValidName(name)) { // check if name is valid
      alert("Please enter a valid name");
      return false;
    }

    if (!isValidEmail(email)) { // check if email is valid
      alert("Please enter a valid email address");
      return false;
    }

    if (!isValidPhone(phone)) { // check if phone is valid
      alert("Please enter a valid 10-digit phone number");
      return false;
    }

    return true; // return true if all fields are valid
  }

  function isValidName(name) { // function to check if name is valid
    var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return name.match(nameRegex);
  }
 
  function isValidEmail(email) { // function to check if email is valid
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(emailRegex);
  }

  function isValidPhone(phone) { // function to check if phone is valid
    var phoneRegex = /^\d{10}$/;
    return phone.match(phoneRegex);
  }