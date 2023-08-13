// Create pawn element
let pawn = document.createElement("div");
pawn.className = "pawn";
let pawn2 = document.createElement("div");
pawn2.className = "pawn2";

// Create container element
let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

// Create buttons for controlling the game
let button = document.createElement("button");
let start = document.createElement("button");
start.innerText = "Start";
button.innerText = "Roll Dice";
document.body.appendChild(button);
document.body.appendChild(start);

// Set up grid center layout
document.body.className = "gridCenter";
container.style.display = "flex";
container.style.flexWrap = "wrap";

// Set up store area
let store = document.createElement("div");
container.appendChild(store);

// Create and initialize variables
let boxes;
let boxCount = 0;
let arr = [];
let count = 0;

// Create the grid of boxes
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

  // Apply specific styling for certain boxes
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

// Append the pawn to a specific box
arr[99].appendChild(pawn);
arr[99].appendChild(pawn2);

// Create and set up snake and ladder images
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

// Set up snake and ladder image sources
snake1.className = "s1";
snake1.src = "img/s1.png";
snake2.src = "img/s2.png";
snake3.src = "img/s3.png";
snake4.src = "img/s4.png";
snake5.src = "img/s5.png";
snake6.src = "img/s6.png";
ladder1.src = "img/l1.png";
ladder2.src = "img/l2.png";
ladder3.src = "img/l3.png";
ladder4.src = "img/l4.png";

// Append images to specific boxes
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

// Set up dice roll functionality
let curBox = 99;
let check = 0;
button.onclick = function () {
  check++;
  if (check % 1  == 0) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    curBox -= randomNumber;
    if (curBox < 0) {
      curBox = 0;
    }
    arr[curBox].innerText = " ";
    arr[curBox].appendChild(pawn);
    
  }
  else {
    console.log("hello");
  }
};

// Reset the game
start.onclick = function () {
  location.reload();
};
