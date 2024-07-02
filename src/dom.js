import cat from "./assets/A_Cat.jpg";
import crow from "./assets/A_Crow.jpg";
import salmon from "./assets/Salmon_Meuniere.jpg";
import lake from "./assets/The_Lake.jpg";

const aCat = new Image();
const aCrow = new Image();
const aSalmon = new Image();
const aLake = new Image();

const img0 = document.getElementById("0");
const img1 = document.getElementById("1");
const img2 = document.getElementById("2");
const img3 = document.getElementById("3");

aCat.src = cat;
aCrow.src = crow;
aSalmon.src = salmon;
aLake.src = lake;

export const pic0 = img0.appendChild(aCat);
export const pic1 = img1.appendChild(aCrow);
export const pic2 = img2.appendChild(aSalmon);
export const pic3 = img3.appendChild(aLake);

pic0.classList.add("images");
pic1.classList.add("images");
pic2.classList.add("images");
pic3.classList.add("images");

export const images = Array.from(document.getElementsByClassName("img"));
export const next = document.createElement("button");
export const previous = document.createElement("button");
export const container = document.getElementById("container");

const circles = Array.from(document.getElementsByClassName("circle"));

container.appendChild(next);
container.insertBefore(previous, container.firstChild);

export function changeColor(index) {
  const alreadyColored = Array.from(
    document.getElementsByClassName("aquamarine"),
  );

  if (alreadyColored[0]) {
    console.log(alreadyColored);
    console.log(alreadyColored[0]);

    alreadyColored[0].classList.remove("aquamarine");
  }

  circles[index].classList.add("aquamarine");
}
