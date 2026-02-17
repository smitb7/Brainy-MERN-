 document.getElementById("myForm").addEventListener("submit" ,function(event) {
    let isValid = true;

    // name validations 
    let name = document.getElementById("name").value.trim()
        if(name.length < 3){
            document.getElementById("nameError").textContent = "Name Must Contain at least 3 characters "

            isValid= false;}
            else{
                document.getElementById("nameerr").textContent=""

            }


    // Email Varification
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[a-zA-Z0-9._+-] + @[a-zA-Z0-9.-] + \.[a-zA-Z]{2, }$/;

    if(!emailPattern.test(email)){
        document.getElementById("emailerr").textContent = "Enter a Valid Email Address"
        isValid = false ;
    }else{
        document.getElementById("emailerr").textContent ="";
    }


    // Password Validation

    let password = document.getElementById("password").value
    
    if(password.length < 6){
        document.getElementById("passworderr").textContent = "Password must contain at least 6 char's"
        isValid = false;


    }else{
        document.getElementById("passworderr").textContent = "";
    }

    // phone Validation

    let phone = document.getElementById("phone").value.trim();

    let phonePattern = /^\d{10}$/;

    if(!phonePattern.test(phone)){
        document.getElementById("phoneerr").textContent="Enter a valid number ";
        isValid = false;
    }else{
        document.getElementById("phoneerr").textContent= " "

    }
    if(!isValid){
        event.preventDefault();
    }




});