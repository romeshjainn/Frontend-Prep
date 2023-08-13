let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
document.body.className = "gridCenter";
container.style.display = "flex";
container.style.flexWrap = "wrap";
let count = 0;

for (let i = 100; i > 0; i--) {
  let boxes = document.createElement("div");
  container.appendChild(boxes);
  boxes.style.height = "10%";
  boxes.style.width = "10%";
  boxes.style.aspectRatio = "1";
  boxes.style.backgroundColor = "red";
  boxes.className = "gridCenter";

  boxes.innerText = i;
  count = 100 - i + 1;
  if (
    (count >= 11 && count <= 20) ||
    (count >= 31 && count <= 40) ||
    (count >= 51 && count <= 60) ||
    (count >= 71 && count <= 80) ||
    (count >= 91 && count <= 100)
  ) {
    boxes.style.border = "2px solid white"
    // container.classList.add("rowRevere");
  }
  if (
    count <= 10 ||
    (count > 20 && count <= 30) ||
    (count > 40 && count <= 50) ||
    (count > 60 && count <= 70) ||
    (count > 80 && count <= 90)
  ) {
    if (count % 2 == 0) {
      container.style.justifyContent = "row-reverse";
      boxes.style.backgroundColor = "blue";
    }
  } else {
    if (count % 2 !== 0) {
      boxes.style.backgroundColor = "blue";
    }
  }
}
