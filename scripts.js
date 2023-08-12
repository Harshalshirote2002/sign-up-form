const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const form = document.getElementById('sign-up-form');

function submitEvent(e){
    if(!(password.value==confirmPassword.value)){
        e.preventDefault();
        alert("Passwords do not match. Please try again.");
    }
    else{
        alert("Sign up successful!");
    }
}

form.addEventListener('submit', submitEvent)



