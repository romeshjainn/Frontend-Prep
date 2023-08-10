let nameInput = document.getElementById("name");
let numberInput = document.getElementById("number");
let emailInput = document.getElementById("email");

let undo = document.getElementById("undo");
let redo = document.getElementById("redo");
let count = -1;
let store = [];
let varStore = [];
let not = false;
undo.onclick = function () {
  if (!not) {
    const number = numberInput.value;
    const email = emailInput.value;
    const name = nameInput.value;
    store.push(email, number, name);
    not = true;
  }
  console.log(store);

  count++;
  varStore.push(emailInput, numberInput, nameInput);
  varStore[count].value = " ";
};

console.log(arr);
