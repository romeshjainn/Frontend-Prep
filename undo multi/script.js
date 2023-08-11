let nameInput = document.getElementById("name");
let numberInput = document.getElementById("number");
let emailInput = document.getElementById("email");
let inputArr = [];
inputArr.push(emailInput, numberInput, nameInput);

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

redo.onclick = function () {
    let storeCount = store.length - 1;
    let inputCount = inputArr.length - 1;

    inputArr[inputCount].value = store[storeCount];

    store.pop();
    inputArr.pop();

    console.log(store);
    console.log(inputArr);
};


// console.log(arr);
