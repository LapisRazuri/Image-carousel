

export const next = document.createElement("button");
export const previous = document.createElement("button");
export const container = document.getElementById("container");
export const circles = Array.from(document.getElementsByClassName("circle"));


container.appendChild(next);
container.insertBefore(previous, container.firstChild);

next.classList.add("btn");
previous.classList.add("btn");

next.textContent = "NEXT";
previous.textContent = "BACK";

export function changeColor (index) {
    const alreadyColored = Array.from(document.getElementsByClassName("aquamarine"));

    if (alreadyColored[0]) {
        alreadyColored[0].classList.remove("aquamarine");
    }
    
    circles[index].classList.add("aquamarine");
}



