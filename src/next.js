export const images = Array.from(document.getElementsByClassName("img"));

import { changeColor } from "./dom";
let item = images[0];
let index = images.indexOf(item);

changeColor(index);
images[index].classList.add("zoom-in");
images[index].classList.add("fade");



export function nextImg() {
  let nextItem = "";
  let nextIndex = "";
  console.log(index);
  console.log(images.length);

  if (index >= 0 && index < images.length - 1) {
    nextIndex = index + 1;
    nextItem = images[nextIndex];

    console.log(nextIndex);

    index = nextIndex;
    console.log(index);
    return nextIndex;
  } else {
    nextItem = images[0];
    nextIndex = images.indexOf(nextItem);

    index = nextIndex;
    console.log(nextItem);
    console.log(index);
    return nextIndex;
  }
}

export function previousImg() {
  let previousItem = "";
  let previousIndex = "";

  if (index > 0 && index <= images.length - 1) {
    previousIndex = index - 1;
    previousItem = images[previousIndex];

    console.log(previousIndex);

    index = previousIndex;
    console.log(index);
    return previousIndex;
  } else {
    previousItem = images[3];
    previousIndex = images.indexOf(previousItem);

    index = previousIndex;

    console.log(item);
    console.log(index);
    return previousIndex;
  }
}

export function show( number ) {
    const thisImage = document.getElementById(number.toString());

    console.log(thisImage)
    thisImage.removeAttribute("hidden");

    index = number;

    return thisImage;
}

export function hide(displayed, willDisplay) {
    if (displayed !== willDisplay){
        displayed.setAttribute('hidden', 'hidden');
    }
}

export function changeIndex (indexNo) {

    index = indexNo

}




        
 


    


