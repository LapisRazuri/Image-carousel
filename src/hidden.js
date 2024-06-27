const img0 = document.getElementById("0");


img0.removeAttribute("hidden");

export function display(nextIndex) {
    const index= nextIndex;
    const image = document.getElementById(index.toString());

    console.log(index);
    console.log(image);

    image.removeAttribute("hidden");

    if ( index > 0 ) {
        const previousIndex = index - 1;
        const previousImage = document.getElementById(previousIndex.toString());

        console.log(previousIndex);
        console.log(previousImage);

        previousImage.setAttribute("hidden","hidden");

        image.removeAttribute("hidden")
    } else {
        const previousIndex = 3;
        const previousImage = document.getElementById(previousIndex.toString());

        console.log(previousIndex);
        console.log(previousImage);

        previousImage.setAttribute("hidden", "hidden");
        image.removeAttribute("hidden");
    } 
    
    
};