let id = document.querySelector(".input1");
let password = document.querySelector(".input2");
let button = document.querySelector("button");

button.addEventListener("click", function (event) {
    event.preventDefault();

    if(id.value === "12345" && password.value === "12345") {
        alert("Siz MARS SPACE ga kirdingiz")
    } else {
        alert("Bunday akkaunt yo'q")
    }
});