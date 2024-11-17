const DEFAULT_SIZE = 16;
const VALID_INPUT_SIZE = /^([0-9]|[1-7][0-9])$/;
const CONTAINER_SIZE = 400;
const INITIAL_OPACITY = 0.1;
let colorMode = "black";
let container = document.querySelector(".container");

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const gridMouseOver = (event) => {
  if (event.target.style.opacity < 1) {
    if (colorMode === "black") {
      event.target.style.backgroundColor = "rgb(0,0,0)";
    } else {
      event.target.style.backgroundColor = `rgb(${getRandomInt(
        255
      )},${getRandomInt(255)},${getRandomInt(255)})`;
    }

    event.target.style.opacity =
      Number(event.target.style.opacity) + INITIAL_OPACITY;
  }
};

const createGrid = (width, height, containerSize) => {
  for (let j = 1; j <= width * height; j++) {
    let newDiv = document.createElement("div");
    newDiv.addEventListener("mouseover", gridMouseOver);
    newDiv.style.width = `${containerSize / width}px`;
    newDiv.style.height = `${containerSize / height}px`;
    newDiv.classList.add("grid");
    container.appendChild(newDiv);
    if (j % width === 0) {
      let newDiv2 = document.createElement("div");
      newDiv2.classList.add("test");
      container.appendChild(newDiv2);
    }
  }
};

createGrid(DEFAULT_SIZE, DEFAULT_SIZE, CONTAINER_SIZE);

const resizeGrid = () => {
  let size = prompt("Please enter the size of grid");
  let allGrids = document.querySelectorAll(".grid");
  allGrids.forEach((element) => {
    element.remove();
  });
  if (VALID_INPUT_SIZE.test(size) && size) {
    createGrid(size, size, CONTAINER_SIZE);
  } else {
    alert(
      "You did not enter a valid number or less than 80! Applied default 16x16."
    );
    createGrid(DEFAULT_SIZE, DEFAULT_SIZE, CONTAINER_SIZE);
  }
};

let buttonSquares = document.querySelector("button");
buttonSquares.addEventListener("click", resizeGrid);

let radioButtons = document.querySelectorAll('input[name="mode"]');
radioButtons.forEach((element) => {
  element.addEventListener("change", (e) => {
    colorMode = e.target.value;
  });
});
