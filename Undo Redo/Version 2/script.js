let nameInput = document.getElementById("name");
let numberInput = document.getElementById("number");
let emailInput = document.getElementById("email");
let inputArr = [emailInput, numberInput, nameInput];

let undo = document.getElementById("undo");
let redo = document.getElementById("redo");
let count = -1;
let store = [];
let not = false;

undo.onclick = function () {
  if (!not) {
    store.push(emailInput.value, numberInput.value, nameInput.value);
    not = true;
  }

  count++;
  let currentInputs = [emailInput, numberInput, nameInput];
  currentInputs[count].value = " ";
};

redo.onclick = function () {
  let storeCount = store.length - 1;
  let inputCount = inputArr.length - 1;

  inputArr[inputCount].value = store[storeCount];

  store.pop();
  inputArr.pop();
};
