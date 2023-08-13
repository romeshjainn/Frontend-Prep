let pawn = document.createElement("div");
pawn.className = "pawn";

let container = document.createElement("div");
let button = document.createElement("button");
let start = document.createElement("button");
container.className = "container";
document.body.appendChild(container);
document.body.appendChild(button);
document.body.appendChild(start);
start.innerText = "start";
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
  boxes.classList.add("box");
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
arr[99].appendChild(pawn);
count = arr.length - 1;
// console.log("count", count)
let curBox = 99;

button.onclick = function () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  // console.log(randomNumber);

  curBox -= randomNumber;
  arr[curBox].appendChild(pawn);
  console.log(curBox);
  console.log(randomNumber);
};

// button.onclick = function () {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].style.border = "none";
//     let pawn = arr[i].querySelector(".pawn");
//     if (pawn) {
//       arr[i].removeChild(pawn);
//     }
//   }

//   if (count > 0) {
//     count--;
//     let currentBox = arr[count];

//     if (currentBox) {
//       currentBox.style.border = "2px solid white";

//       currentBox.appendChild(pawn);
//       // currentBox.innerText = " "
//     }
//   }

// };
start.onclick = function () {
  location.reload();
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
