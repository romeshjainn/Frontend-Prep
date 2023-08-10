let input = document.getElementById("userInput");
let undo = document.getElementById("undo");
let redo = document.getElementById("redo");
let store = [];
let count = 0;
let lengthCount = 0;

undo.onclick = function () {
  const userInput = input.value.split("");
  if (userInput.length > 0) {
    let removedChar = userInput.pop();
    input.value = userInput.join("");
    store.push(removedChar);
    console.log(store);
    console.log(userInput);
  } else {
    alert("type something")
  } 
};

redo.onclick = function () {
  const userInput = input.value.split("");
  lengthCount = store.length;
  console.log(lengthCount);
  if (lengthCount > 0) {
    userInput.push(store[lengthCount - 1]);
    input.value = userInput.join("");
    store.pop();
    console.log(userInput);
  }
};

