import "./style.css";
import { next, previous, changeColor } from "./dom.js";
import { nextImg } from "./next.js";
import { previousImg } from "./next.js";
import { displayNext, displayPrevious } from "./hidden.js";

next.addEventListener("click", function () {
  const nextIndex = nextImg();
  displayNext(nextIndex);
  changeColor(nextIndex);
});

previous.addEventListener("click", function () {
  const previousIndex = previousImg();
  displayPrevious(previousIndex);
  changeColor(previousIndex);
});
