import { stringifyNumber } from "./utils/numbers";

let span = document.getElementById("stringified");
let input = document.getElementById("input");
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    span.innerText = stringifyNumber(parseInt(input.value));
});
