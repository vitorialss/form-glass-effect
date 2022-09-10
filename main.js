const passField = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");

showBtn.addEventListener("click", function () {
    if (passField.type === "password") {
        passField.type = "text";
        showBtn.textContent = "ESCONDER";
        showBtn.style.color = "#3498db";
    } else {
        passField.type = "password";
        showBtn.textContent = "MOSTRAR";
        showBtn.style.color = "#222";
    }
});