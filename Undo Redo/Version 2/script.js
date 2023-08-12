let nameInput = document.getElementById("name");
let numberInput = document.getElementById("number");
let emailInput = document.getElementById("email");
let inputArr = [];

let undo = document.getElementById("undo");
let redo = document.getElementById("redo");
let store = [];
let not = false;
let count = 0;

undo.onclick = function () {
  if (!not) {
    inputArr = document.querySelectorAll("input");
    for (let i = 0; i < inputArr.length; i++) {
      store.push(inputArr[i].value);
    }
    not = true;
    count = inputArr.length - 1; 
  }

  if (count >= 0) {
    inputArr[count].value = " ";
    count--;
  }
};
redo.onclick = function () {
  if (count < store.length - 1) {
    count++;
    inputArr[count].value = store[count];
  }
};
