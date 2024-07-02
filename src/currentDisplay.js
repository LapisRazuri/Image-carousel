import { images } from "./next.js";


export function theOneDisplayed () {
    const displayed = images.filter(image => !image.hasAttribute("hidden"));
    console.log(displayed)
    return displayed[0]; //this is an array of divs that do not have hidden attribute
};










