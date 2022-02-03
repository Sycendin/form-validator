const form = document.querySelector('#form');
const password1El = document.querySelector("#password1");
const password2El = document.querySelector("#password2");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");



let isValid = false;
const validateForm = () =>{
    isValid = form.checkValidity()
    message.textContent = "Please fill out all fields"
    message.style.color = 'red'
    messageContainer.style.borderColor = 'red'
}
const processFormData=(e)=>{
    e.preventDefault();
    validateForm();
}
//Event listeners
form.addEventListener('submit', processFormData)