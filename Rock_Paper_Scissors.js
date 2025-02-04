function getComputerChoice() {
  let randomly = Math.floor(Math.random() * 3) + 1;
  if (randomly == 1) {
    return "가위";
  } else if (randomly == 2) {
    return "바위";
  } else if (randomly == 3) {
    return "보";
  } else {
    console.log("undefined");
  }
}
console.log(getComputerChoice());
let user = Number(prompt("원하는 것을 내세요 : 1 가위 : 2 바위 : 3 보"));

function getHumanChoice() {
  if (user == 1) {
    return "가위";
  } else if (user == 2) {
    return "바위";
  } else if (user == 3) {
    return "보";
  } else {
    console.log("undefined");
  }
}
console.log(getHumanChoice(user));
