const emailInput = document.querySelector("#email");
const form = document.querySelector("form");
const errorMsg = document.querySelector(".error");
const successMsg = document.querySelector(".success");
const emailPattern = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
let validForm = false;

emailInput.addEventListener("input", e => {
    if(emailPattern.test(e.target.value)){
        successMsg.classList.remove("hide");
        validForm = true;
    }
    if(e.target.value.length > 0) {
        errorMsg.classList.add("hide");      
    } else {
        errorMsg.classList.remove("hide");
        errorMsg.textContent = "Check your email please";
        errorMsg.style.color = "var(--light-red)"
        successMsg.classList.add("hide");
        validForm = false;
    }
})

form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(emailInput.value);

    if(emailInput.value.length === 0 || validForm === false) {
        errorMsg.classList.remove("hide");
    } else {
        errorMsg.classList.add("hide");
    }
})