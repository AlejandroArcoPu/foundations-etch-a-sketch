const DEFAULT_SIZE = 16;
const VALID_INPUT_SIZE = /^([0-9]|[1-7][0-9])$/;
const CONTAINER_SIZE = 400;
let container = document.querySelector(".container");

const gridMouseOver = (event) => {
  event.target.style.backgroundColor = "rgba(0,0,0,0.5)";
  event.target.style.filter = "blur(0.5px)";
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

createGrid(DEFAULT_SIZE, DEFAULT_SIZE, CONTAINER_SIZE);

let button = document.querySelector("button");
button.addEventListener("click", resizeGrid);
