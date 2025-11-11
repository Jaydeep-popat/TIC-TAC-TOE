//SCRIPT FILE

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn");
let heading = document.querySelector("h1");
let ticked = 0;
let main = document.querySelector(".container");
let gotWinner = false;
let darkMode = document.querySelector("#mode");
let footer = document.querySelector(".footer");
let crtmode = "light";

const pattorns = [
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let turnO = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "<P style='color:rgb(32, 233, 38)'>O</P>";
      turnO = false;
      ticked++;
    } else {
      box.innerHTML = "<P style='color:rgb(255, 0, 0)'>X</P>";
      turnO = true;
      ticked++;
    }
    box.disabled = true;
    cheakWinner();
  });
});

const enableBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  let turnO = true;
  enableBtn();
  heading.innerText = "TIC - TAC - TOE ";
  ticked = 0;
  gotWinner = false;
};

const showWinner = (winner) => {
  heading.innerText = `congratulations, the winner is ${winner}.`;
  gotWinner = true;
  last = true;
};

const cheakWinner = () => {
  for (let pattorn of pattorns) {
    
    let pos1val = boxes[pattorn[0]].innerText;
    let pos2val = boxes[pattorn[1]].innerText;
    let pos3val = boxes[pattorn[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
        for (let box of boxes) {
          box.disabled = true;
        }
      }
    }
  }

  if (ticked == 9 && gotWinner == false) {
    drow();
  }
  console.log(ticked);
};
const drow = () => {
  heading.innerText = "DROW";
};
darkMode.addEventListener("click", () => {
  
  if (crtmode === "light") {
    heading.style.backgroundColor = "rgb(80, 80, 80)";
    heading.style.color = "white";
    darkMode.style.backgroundColor = "white";
    darkMode.style.color = "black";
    main.style.backgroundColor = "black";
    footer.style.backgroundColor = "black";
    resetBtn.style.backgroundColor = "white";
    resetBtn.style.color = "black";
    darkMode.innerText = "LIGHT MODE";

    for (let box of boxes) {
      box.style.backgroundColor = "black";
      box.style.boxShadow = "0.6vh 0.6vh 0.6vh green,-0.6vh -0.6vh 0.6vh green";
      box.style.transition = "ease-in-out 1s";
      box.style.color = "white";
    }
    heading.style.transition = "ease-in-out 1s";
    main.style.transition = "ease-in-out 1s";
    footer.style.transition = "ease-in-out 1s";
    resetBtn.style.transition = "ease-in-out 1s";
    darkMode.style.transition = "ease-in-out 1s";

    crtmode = "dark";
  } else {
    heading.style.backgroundColor = "rgb(231, 110, 110)";
    heading.style.color = "black";
    darkMode.style.backgroundColor = "black";
    darkMode.style.color = "white";
    main.style.backgroundColor = "rgb(142, 245, 245)";
    footer.style.backgroundColor = "rgb(142, 245, 245)";
    resetBtn.style.backgroundColor = "white";
    resetBtn.style.color = "black";
    darkMode.innerText = "DARK MODE";

    for (let box of boxes) {
      box.style.backgroundColor = "white";
      box.style.boxShadow =
        "0.6vh 0.6vh 0.6vh inset#0c0c0c84,-0.6vh -0.6vh 0.6vh #1512124e";
      box.style.transition = "ease-in-out 1s";
    }
    heading.style.transition = "ease-in-out 1s";
    main.style.transition = "ease-in-out 1s";
    footer.style.transition = "ease-in-out 1s";
    resetBtn.style.transition = "ease-in-out 1s";
    darkMode.style.transition = "ease-in-out 1s";

    crtmode = "light";
  }
});
resetBtn.addEventListener("click", resetGame);