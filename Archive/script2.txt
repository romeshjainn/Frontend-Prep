let nameInput = document.getElementById("name");
let numberInput = document.getElementById("number");
let emailInput = document.getElementById("email");

let undo = document.getElementById("undo");
let redo = document.getElementById("redo");
let arrInput = [emailInput, numberInput, nameInput];
let store = [];
let count = 0;
let not = false;
let not2 = false;


undo.onclick = function () {
  if (!not2) {
    let input = nameInput.value;
    let number = numberInput.value;
    let email = emailInput.value;
    store.push(input, number, email);
      not2 = true;
}

if (!not) {
    arrInput[count].value = " ";
    count++;
  }
};

redo.onclick = function () {
  store.reverse();
  count--;
  arrInput[count].value = store[count];
};
