function showPasswordToggle(){
    var passowrField=document.getElementById('password')
    var passowordToggle=document.getElementById('togglePassword');
    if(passowrField.value.length>0){
        passowordToggle.style.display='inline-block'
    }
    else{
        passwordToggle.style.justifyContent="flex-end"
    }

}
function showPassword(){
    let PasswordInput=document.getElementById('password');
    if(PasswordInput.type === "password"){
        PasswordInput.type="text";
        togglePassword.textContent="hide";
    }
    else{
        PasswordInput.type="password"
        togglePassword.textContent="show";
    }
}
function validateForm(){
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const emailError = document.getElementById(
        "email-error"
    );
    const passwordError = document.getElementById(
        "password-error"
    );
    emailError.textContent = "";
    passwordError.textContent = "";
    let isValid = true;
    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address or phonenumber.";
        isValid = false;
    }

    if (password === "" || password.length < 7) {
        passwordError.textContent =
            "Your password must contain between 4 and 60 characters";
        isValid = false;
    }
   
    return isValid;
   
}