let container = document.querySelector(".container");

const gridMouseOver = (event) => {
  event.target.style.backgroundColor = "rgba(0,0,0,0.5)";
  event.target.style.filter = "blur(0.5px)";
};

for (let j = 1; j <= 16 * 16; j++) {
  let newDiv = document.createElement("div");
  newDiv.addEventListener("mouseover", gridMouseOver);
  newDiv.style.width = `${400 / 16}px`;
  newDiv.style.height = `${400 / 16}px`;
  newDiv.classList.add("grid");
  container.appendChild(newDiv);
  if (j % 16 === 0) {
    let newDiv2 = document.createElement("div");
    newDiv2.classList.add("test");
    container.appendChild(newDiv2);
  }
}
