function getComputerChoice() {
  let randomly = Math.floor(Math.random() * 3) + 1;

  if (randomly == 1) {
    console.log("컴퓨터가 낸 수는 SCISSORS입니다.");
    return "SCISSORS";
  } else if (randomly == 2) {
    console.log("컴퓨터가 낸 수는 ROCK입니다.");
    return "ROCK";
  } else if (randomly == 3) {
    console.log("컴퓨터가 낸 수는 PAPER 입니다.");
    return "PAPER";
  } else {
    console.log("undefined");
  }
}
let choice;
function getHumanChoice(select) {
  choice = String(prompt("원하는 것을 내세요 : 1 SCISSORS : 2 ROCK : 3 PAPER"));
  if (choice.toUpperCase() === "ROCK") {
    console.log("당신이 낸 수는 ROCK 입니다.");
    return "ROCK";
  } else if (choice.toUpperCase() === "SCISSORS") {
    console.log("당신이 낸 수는 SCISSORS 입니다.");
    return "SCISSORS";
  } else if (choice.toUpperCase() === "PAPER") {
    console.log("당신이 낸 수는 PAPER 입니다.");
    return "PAPER";
  }
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "ROCK") {
    if (computerChoice === "ROCK") {
      console.log("비겼습니다. 둘 다 주먹이기때문입니다.");
    } else if (computerChoice === "SCISSORS") {
      console.log("이겼습니다. 주먹이 가위를 이기기 때문입니다.");
      ++humanScore;
    } else if (computerChoice === "PAPER") {
      console.log("졌습니다. 보가 주먹을 이기기 때문입니디.");
      ++computerScore;
    }
  }
  if (humanChoice === "SCISSORS") {
    if (computerChoice === "ROCK") {
      console.log("졌습니다. 주먹이 가위를 이기기 때문입니다.");
      ++computerScore;
    } else if (computerChoice === "SCISSORS") {
      console.log("비겼습니다. 둘 다 가위이기때문입니다.");
    } else if (computerChoice === "PAPER") {
      console.log("이겼습니다. 가위가 보를 이기기 때문입니다.");
      ++humanScore;
    }
  }
  if (humanChoice === "PAPER") {
    if (computerChoice === "ROCK") {
      console.log("이겼습니다. 보가 주먹을 이기기 때문입니다.");
      ++humanScore;
    } else if (computerChoice === "SCISSORS") {
      console.log("졌습니다. 가위가 보를 이기기 때문입니다.");
      ++computerScore;
    } else {
      console.log("비겼습니다. 둘 다 보자기 이기때문입니다.");
    }
  }
}
let score = 0;

function playGame() {
  const humanSelection = getHumanChoice(choice);
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  ++score;
  if (score >= 5) {
    console.log("GAME OVER");
    console.log(`Game Result : ${humanScore} : ${computerScore}`);
    if (humanScore > computerScore) {
      console.log("당신이 이겼습니다.");
    } else if (humanScore < computerScore) {
      console.log("당신이 졌습니다. 컴퓨터 승리!");
    } else {
      console.log("무승부");
    }
  }
}
playGame();
playGame();
playGame();
playGame();
playGame();
