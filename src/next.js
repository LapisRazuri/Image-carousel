import { images } from './dom.js';

let currentItem = images[0];
let currentIndex = images.indexOf(currentItem);
let nextItem = "";
let nextIndex = ""
console.log(currentItem)


export function nextImg() {
    console.log(currentIndex);
    console.log(images.length);

    if (currentIndex >= 0 && currentIndex < images.length - 1){
        nextIndex = ( currentIndex + 1 );
        nextItem = images[nextIndex];

        console.log(nextIndex)

        currentIndex = nextIndex;
        console.log(currentIndex);
    } else {
        nextItem = images[0];
        nextIndex = images.indexOf(currentItem);

        currentIndex = nextIndex;
        console.log(nextItem);
        console.log(currentIndex);
    };
};