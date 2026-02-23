document
  .getElementById("validation_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // taking a boolian value as  a flag value
    let isValid = true;
    //Name Validations
    let nameval = document.getElementById("Username").value.trim();
    if (nameval.length <= 0) {
      document.getElementById("usernameerror").textContent =
        "Enter Your Name first, it's mandatory";
      isValid = false;
    } else {
      document.getElementById("usernameerror").textContent = "";
    }

    //Email Validations
    let emailval = document.getElementById("Email").value.trim();
    if (emailval.length <= 0) {
      document.getElementById("emailerror").textContent =
        "Enter Your Email , it's mandatory";
      isValid = false;
    } else {
      document.getElementById("emailerror").textContent = "";
    }

    // final output

    if (isValid) {
      console.log("Form submitted successfully!");
      console.log("Username:", nameval);
      console.log("Email:", emailval);
      alert("Form submitted successfully!");
    }
  });
