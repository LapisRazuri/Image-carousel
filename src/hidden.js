const img0 = document.getElementById("0");

img0.removeAttribute("hidden");


export function displayNext(NextIndex) {
  const next = NextIndex;
  const nextImg = document.getElementById(next.toString());

  if (next > 0) {
    const index = next - 1;
    const image = document.getElementById(index.toString());

    image.setAttribute("hidden", "hidden");

    nextImg.removeAttribute("hidden");
    
  } else {
    const index = 3;
    const image = document.getElementById(index.toString());

    console.log(index);
    console.log(image);

    image.setAttribute("hidden", "hidden");
    nextImg.removeAttribute("hidden");
  }
}

export function displayPrevious(PreviousIndex) {
  const previous = PreviousIndex;
  const previousImg = document.getElementById(previous.toString());

  console.log(previous);
  console.log(previousImg);

  // image.removeAttribute("hidden");

  if (previous >= 0 && previous < 3) {
    const index = previous + 1;
    const image = document.getElementById(index.toString());

    console.log(index);
    console.log(image);

    image.setAttribute("hidden", "hidden");

    previousImg.removeAttribute("hidden");
  } else {
    const index = 0;
    const image = document.getElementById(index.toString());

    console.log(index);
    console.log(image);

    image.setAttribute("hidden", "hidden");
    previousImg.removeAttribute("hidden");
  }
}
