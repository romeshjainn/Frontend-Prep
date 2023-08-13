let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
container.style.display = "flex";
// container.style.flexDirection = "row";
container.style.flexWrap = "wrap";
// container.style.gap = "2px";
let count = 0;

for (let i = 100; i > 0; i--) {
  let boxes = document.createElement("div");
  container.appendChild(boxes);
  boxes.style.height = "10%";
  boxes.style.width = "10%";
  boxes.style.aspectRatio = "1";
  boxes.style.backgroundColor = "red";

  boxes.innerText = i;
  if (i <= 10) {
    if (i % 2 == 0) {
      boxes.style.backgroundColor = "blue";
    }
  }
  if (i>=10 &&i <= 20) {
    if (i % 2 !== 0) {
      boxes.style.backgroundColor = "blue";
    }
  }
  if (i>20 &&i <= 30) {
    if (i % 2 == 0) {
      boxes.style.backgroundColor = "blue";
    }
  }
  if (i>=30 &&i <= 40) {
    if (i % 2 !== 0) {
      boxes.style.backgroundColor = "blue";
    }
  }
  if (i>40 &&i <= 50) {
    if (i % 2 == 0) {
      boxes.style.backgroundColor = "blue";
    }
  }
  if (i>=50 &&i <= 60) {
    if (i % 2 !== 0) {
      boxes.style.backgroundColor = "blue";
    }
  }
  if (i>60 &&i <= 70) {
    if (i % 2 == 0) {
      boxes.style.backgroundColor = "blue";
    }
  }
  if (i>=70 &&i <= 80) {
    if (i % 2 !== 0) {
      boxes.style.backgroundColor = "blue";
    }
  }
  if (i>80 &&i <= 90) {
    if (i % 2 == 0) {
      boxes.style.backgroundColor = "blue";
    }
  }
  if (i >= 90 && i <= 100) {
    if (i % 2 !== 0) {
      boxes.style.backgroundColor = "blue";
    }
  }
}
