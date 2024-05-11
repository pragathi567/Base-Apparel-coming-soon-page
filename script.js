let formEl = document.querySelector(".form");
let buttonEl = document.querySelector(".button");
let errorIcon = document.querySelector(".error-icon");
let errorMsg = document.querySelector(".error-msg");
let inputEl = document.querySelector("#input");

formEl.addEventListener("submit",validateForm);
buttonEl.addEventListener("click",validateForm);

function validateForm(e){
    e.preventDefault();
    const inputValue = inputEl.value;
    //console.log(inputValue);
    if(inputValue === ''){
        errorMsg.innerHTML = "Provide a Email address";
        errorIcon.style.display = "block";
        inputEl.value = "";
    }
    else if(!isEmail(inputValue)){
        errorMsg.innerHTML = "Provide a  valid email address";
        inputEl.classList.add("input-error");
        inputEl.classList.remove("input");
        errorIcon.style.display = "block";
        inputEl.value = "";
    }
    else{
        inputEl.classList.add("input");
        inputEl.classList.remove("input-error");
        errorIcon.style.display = "none";
        errorMsg.innerHTML = "";
    }
}

function isEmail(inputVal){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(inputVal);
}