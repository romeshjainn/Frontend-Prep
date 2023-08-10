let undo = document.getElementById("undo");
let redo = document.getElementById("redo");
let count = -1;
let store = [];
let store2 = [];;
undo.onclick = function () {
  let nameInput = document.getElementById("name").value;
  let numberInput = document.getElementById("number");
  let emailInput = document.getElementById("email");

    
    // let name = nameInput.value;
    // let number = numberInput.value;
    // let email = emailInput.value;
    // store.push(email, number, name);
    count++;
    
    store.push(emailInput, numberInput, nameInput);
    store[count].value = " ";
    // for (let i = 0; i < store.length; i++){
    //     store[i].value = "2";
    // }
    // store[1] = "55";
    // numberInput.value = "55";
    
    // name.value() = " ";
//   let remove = store.length - 1;
    // document.getElementById("email").v?alue = "";
    
//   document.getElementById("number").value = "";
//   document.getElementById("name").value = "";
  console.log(store);
};
// redo.onclick = function () {
//     email.value = store.length - 1;
//     console.log(email)
// }
