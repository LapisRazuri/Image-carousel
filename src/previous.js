import { images } from './dom.js';

let currentItem = images[3];
let nextItem = "";

function nextImg() {
    if (index >= 0 && index < images.length - 1){
        const currentIndex = images.indexOf(currentItem);
        const nextIndex = ( currentIndex + 1 );
              nextItem = images[nextIndex];

        currentItem = nextItem;
    } else {
        nextItem = images[0]
    };
};
