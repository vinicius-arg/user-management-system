const viewer = document.querySelector(".viewer");
const input = document.querySelector(".pass > input");

viewer.addEventListener("mousedown", () => {
    input.type = "text";
});

viewer.addEventListener("mouseup", () => {
    input.type = "password";
});