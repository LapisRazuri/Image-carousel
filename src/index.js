import './style.css';
import { next, previous, changeColor } from './dom.js';
import { nextImg } from './next.js';
import { previousImg } from './next.js';
import { displayNext, displayPrevious } from './hidden.js';



    // const img = document.createElement("div");
    // const body = document.getElementsByTagName("body");

    // const theCat = new Image();
    // theCat.src = cat;

    // console.log(theCat);
    // console.log(body)

    // body[0].appendChild(theCat);


// import Icon from './icon.png';






next.addEventListener( 'click', function () {
    const nextIndex = nextImg();
    displayNext(nextIndex);
    changeColor(nextIndex);
    

});

previous.addEventListener('click', function () {
    const previousIndex = previousImg();
    displayPrevious(previousIndex);
    changeColor(previousIndex);

})


