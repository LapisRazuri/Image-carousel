import "./style.css";
import { next, previous, changeColor, circles } from "./dom.js";
import { nextImg, show, hide } from "./next.js";
import { previousImg } from "./next.js";
import { displayNext, displayPrevious } from "./hidden.js";
import { pic0, pic1, pic2, pic3} from "./image.js"
import { circle0, theOneDisplayed } from "./currentDisplay.js";


next.addEventListener("click", function () {
  const nextIndex = nextImg();
  displayNext(nextIndex);
  changeColor(nextIndex);
});

previous.addEventListener("click", function() {
  const previousIndex = previousImg();
  displayPrevious(previousIndex);
  changeColor(previousIndex);
});

circles.forEach(function(circle, index) {
    circle.addEventListener('click', function () {
        const displayed = theOneDisplayed();
        const circleNo = index;
    
        const willDisplay = show(circleNo);
        hide(displayed, willDisplay);
        changeColor(index);
    } )
})









