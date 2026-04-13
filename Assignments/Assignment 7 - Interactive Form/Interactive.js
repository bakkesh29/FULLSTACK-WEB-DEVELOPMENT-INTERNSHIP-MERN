document.getElementById("myForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let valid = true;

    // Clear old messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("successMsg").innerText = "";

    // Validation
    if(name === ""){
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    if(email === ""){
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    }

    if(password.length < 6){
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        valid = false;
    }

    // Success
    if(valid){
        document.getElementById("successMsg").innerText = "✅ Form submitted successfully!";
    }

});
