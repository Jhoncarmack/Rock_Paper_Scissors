function getComputerChoice() {
  let randomly = Math.floor(Math.random() * 3) + 1;
  if (randomly == 1) {
    return "가위";
  } else if (randomly == 2) {
    return "바위";
  } else {
    return "보";
  }
}
console.log(getComputerChoice());
function getHumanChoice() {}
