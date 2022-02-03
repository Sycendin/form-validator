const form = document.querySelector('#form');
const password1El = document.querySelector("#password1");
const password2El = document.querySelector("#password2");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");



let isValid = false;
let passwordsMatch = false;
const validateForm = () =>{
    isValid = form.checkValidity()
    // Error message
    if (!isValid){
        message.textContent = "Please fill out all fields"
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
        return;
    }
    if (password1El.value === password2El.value){
        passwordsMatch = true;
        password1El.style.borderColor = 'green'
        password2El.style.borderColor = 'green'
    }
    else{
        passwordsMatch = false;
        message.textContent = "Make sure passwords match"
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
        password1El.style.borderColor = 'red'
        password2El.style.borderColor = 'red'
        return;

    }
    if (isValid && passwordsMatch){
        message.textContent = "Sucessfully registered."
        message.style.color = 'green'
        messageContainer.style.borderColor = 'green'
    }
}

const storeFormData = () =>{
    const user = {
        name:form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    console.log(user)
}
const processFormData=(e)=>{
    e.preventDefault();
    // validate form
    validateForm();
    //Submit if valid
    if (isValid && passwordsMatch){
        storeFormData();
    }
}
//Event listeners
form.addEventListener('submit', processFormData)