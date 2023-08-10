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
let storeCount = -1;
let inputCount = -1;
redo.onclick = function () {
  storeCount++;
  inputCount++;

  inputArr[inputCount].value = store[storeCount];
  console.log(inputArr[inputCount]);
  console.log(store[storeCount]);
  //     inputCount;
  // emailInput.value = store[];
  // for (let i = 0; i < inputArr.length; i++){
  // }
};

// console.log(arr);
