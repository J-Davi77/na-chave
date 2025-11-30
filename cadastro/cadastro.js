const inputs = document.querySelectorAll(".input-container input");

function handleFocus(inp) {
    const label = inp.previousElementSibling;
    label.classList.add("onfocus");
}

function handleBlur(inp) {
    const label = inp.previousElementSibling;
    if (inp.value.length <= 0) label.classList.remove("onfocus");
}

inputs.forEach((inp) => inp.addEventListener("focus", () => handleFocus(inp)));
inputs.forEach((inp) => inp.addEventListener("blur", () => handleBlur(inp)));
