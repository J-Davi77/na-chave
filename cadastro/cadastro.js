const inputs = document.querySelectorAll(".input-container input");
const maskPasswordImg = document.querySelector("#mask-password");

function handleFocus(inp) {
    const label = inp.previousElementSibling;
    label.classList.add("onfocus");
}

function maskPassword() {
    const inputSenha = document.querySelector("#senha");
    if (inputSenha.type === "password") {
        inputSenha.type = "text";
        maskPasswordImg.src = "../assets/imgs/eye-off.svg";
    } else {
        inputSenha.type = "password";
        maskPasswordImg.src = "../assets/imgs/eye.svg";
    }
}

function handleBlur(inp) {
    const label = inp.previousElementSibling;
    if (inp.value.length <= 0) label.classList.remove("onfocus");
}

maskPasswordImg.addEventListener("click", maskPassword);
inputs.forEach((inp) => inp.addEventListener("focus", () => handleFocus(inp)));
inputs.forEach((inp) => inp.addEventListener("blur", () => handleBlur(inp)));
