import "./style.css";
import { next, previous, changeColor, circles, zoomIn } from "./dom.js";
import { nextImg, show, hide, changeIndex } from "./next.js";
import { previousImg, images } from "./next.js";
import { displayNext, displayPrevious } from "./hidden.js";
import { pic0, pic1, pic2, pic3} from "./image.js"
import { theOneDisplayed } from "./currentDisplay.js";


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


setInterval(function () {
            
    const next = nextImg();

    console.log(next)
    displayNext(next);
    
    changeIndex(next);
    changeColor(next);
    images[next].classList.add("zoom-in");
    images[next].classList.add("fade");

}, 7000)









