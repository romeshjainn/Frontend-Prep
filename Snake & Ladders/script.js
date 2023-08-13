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
      boxes.style.backgroundColor = "grey";
    }
  } else {
    if (boxCount % 2 !== 0) {
      boxes.style.backgroundColor = "grey";
    }
  }
}
arr[99].appendChild(pawn);
let snake1 = document.createElement("img");
let snake2 = document.createElement("img");
let snake3 = document.createElement("img");
let snake4 = document.createElement("img");
let snake5 = document.createElement("img");
let snake6 = document.createElement("img");
let ladder1 = document.createElement("img");
let ladder2 = document.createElement("img");
let ladder3 = document.createElement("img");
let ladder4 = document.createElement("img");

snake1.className = "s1";
snake1.src = "img/s1.png"
snake2.src = "img/s2.png"
snake3.src = "img/s3.png";
snake4.src = "img/s4.png"
snake5.src = "img/s5.png"
snake6.src = "img/s6.png"

ladder1.src = "img/l1.png"
ladder2.src = "img/l2.png"
ladder3.src = "img/l3.png"
ladder4.src = "img/l4.png"

arr[12].appendChild(snake1);
arr[87].appendChild(snake2);
arr[63].appendChild(snake3);
arr[19].appendChild(snake4);
arr[50].appendChild(snake5);
arr[58].appendChild(snake6);

arr[83].appendChild(ladder1);
arr[16].appendChild(ladder2);
arr[44].appendChild(ladder3);
arr[20].appendChild(ladder4);





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
