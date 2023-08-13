let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
container.style.display = "flex";
// container.style.flexDirection = "row";
container.style.flexWrap = "wrap";
// container.style.gap = "2px";
let count = 0;

for (let i = 100; i > 0; i--) {
  let boxes = document.createElement("div");
  container.appendChild(boxes);
  boxes.style.height = "10%";
  boxes.style.width = "10%";
  boxes.style.aspectRatio = "1";
  boxes.style.backgroundColor = "red";

  boxes.innerText = i;
  count = 100 - i + 1;

  if (
    count <= 10 ||
    (count > 20 && count <= 30) ||
    (count > 40 && count <= 50) ||
    (count > 60 && count <= 70) ||
    (count > 80 && count <= 90)
  ) {
    if (count % 2 == 0) {
      boxes.style.backgroundColor = "blue";
    }
  } else {
    if (count % 2 !== 0) {
      boxes.style.backgroundColor = "blue";
    }
  }
}
