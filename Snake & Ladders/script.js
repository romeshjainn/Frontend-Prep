let container = document.createElement("div");
let button = document.createElement("button");
container.className = "container";
document.body.appendChild(container);
document.body.appendChild(button);
button.innerText = "button";
document.body.className = "gridCenter";
container.style.display = "flex";
container.style.flexWrap = "wrap";
let boxes;
let store = document.createElement("div");
container.appendChild(store);
let boxCount = 0;
let arr = [];
let count = 0;
for (let i = 100; i > 0; i--) {
  boxes = document.createElement("div");
  container.appendChild(boxes);
  boxes.style.height = "10%";
  boxes.style.width = "10%";
  boxes.style.aspectRatio = "1";
  boxes.style.backgroundColor = "red";
  boxes.className = "gridCenter";
  boxes.style.color = "white";
  boxes.innerText = i;
  boxCount = 100 - i + 1;
  arr.push(boxes);

  if (
    boxCount <= 10 ||
    (boxCount > 20 && boxCount <= 30) ||
    (boxCount > 40 && boxCount <= 50) ||
    (boxCount > 60 && boxCount <= 70) ||
    (boxCount > 80 && boxCount <= 90)
  ) {
    if (boxCount % 2 == 0) {
      container.style.justifyContent = "row-reverse";
      boxes.style.backgroundColor = "blue";
    }
  } else {
    if (boxCount % 2 !== 0) {
      boxes.style.backgroundColor = "blue";
    }
  }
}
console.log(arr);
count = arr.length;

button.onclick = function () {
  count--;
  console.log(boxCount);
  let currentBox = arr[count];

  if (currentBox) {
    currentBox.style.border = "2px solid white";
  }
};
// button.onclick = function () {
//   count = count+1;
//   console.log(count)
//   if (boxes === 2) {
//     let pawn = document.createElement("div");
//     pawn.className = "pawn";
//     boxes.appendChild(pawn);
//   }
// };
// if (
//   (count >= 11 && count <= 20) ||
//   (count >= 31 && count <= 40) ||
//   (count >= 51 && count <= 60) ||
//   (count >= 71 && count <= 80) ||
//   (count >= 91 && count <= 100)
// ) {
// }
// else {
//   // store.appendChild(boxes);
//   // boxes.style.border = "2px solid white";

// }
