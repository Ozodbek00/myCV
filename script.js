const btn = document.querySelector("#btnClick");
const btn2 = document.querySelector("#btnClick2");
const section = document.querySelector(".pop_up");

btn.addEventListener("click", show);
btn2.addEventListener("click", hide);

function show() {
    section.id = "show";
}

function hide() {
    section.id = "hide";
}