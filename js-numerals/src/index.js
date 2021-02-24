import { stringifyNumber } from "./utils/numbers";
import { Number } from "./utils/numbersClass";

let span = document.getElementById("stringified");
let input = document.getElementById("input");
input.addEventListener("input", (ev) => {
    span.innerText = stringifyNumber(parseInt(ev.target.value));
});
