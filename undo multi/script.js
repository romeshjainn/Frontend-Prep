let nameInput = document.getElementById("name");
let numberInput = document.getElementById("number");
let emailInput = document.getElementById("email");

let undo = document.getElementById("undo");
let redo = document.getElementById("redo");
let count = -1;
let store = [];
let varStore = [];;
undo.onclick = function () {
    

    if (store.length === 0) {
      store.push(emailInput.value, numberInput.value, nameInput.value);
      console.log(store);
    }
    //   const number = numberInput.value;
    //   const email = emailInput.value;
    //   const name = nameInput.value;
    //   store.push(email, number, name);
    //   const arr = store;
    //   console.log(arr);
    
    
    count++;
    varStore.push(emailInput, numberInput, nameInput);
    varStore[count].value = " ";
   
};

console.log(arr)
