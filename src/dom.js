

export const next = document.createElement("button");
export const previous = document.createElement("button");
export const container = document.getElementById("container");
export const circles = Array.from(document.getElementsByClassName("circle"));


container.appendChild(next);
container.insertBefore(previous, container.firstChild);



export function changeColor (index) {
    const alreadyColored = Array.from(document.getElementsByClassName("aquamarine"));

    if (alreadyColored[0]) {

        console.log(alreadyColored)
        console.log(alreadyColored[0])

        alreadyColored[0].classList.remove("aquamarine");
    }

    console.log(index)
    
    circles[index].classList.add("aquamarine");

}



