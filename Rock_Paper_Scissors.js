const body = document.querySelector("body");
const btnR = document.createElement("button");
const btnS = document.createElement("button");
const btnP = document.createElement("button");
const div = document.createElement("div");
const p = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

btnR.classList = "button";
btnS.classList = "button";
btnP.classList = "button";
btnR.textContent = "Rock";
btnS.textContent = "Scissors";
btnP.textContent = "Paper";
body.appendChild(btnR);
body.appendChild(btnS);
body.appendChild(btnP);
body.appendChild(p);
body.appendChild(p2);
body.appendChild(p3);
div.textContent = "Result: ";
body.appendChild(div);

const button = document.querySelectorAll("button");
button.forEach((item) => {
  item.style.width = "150px";
  item.style.height = "200px";
});
btnR.addEventListener("click", rock);
btnP.addEventListener("click", paper);
btnS.addEventListener("click", scissors);

function getComputerChoice() {
  let randomly = Math.floor(Math.random() * 3) + 1;

  if (randomly == 1) {
    p2.textContent = "Computer chose SCISSORS.";
    return "SCISSORS";
  } else if (randomly == 2) {
    p2.textContent = "Computer chose ROCK.";
    return "ROCK";
  } else if (randomly == 3) {
    p2.textContent = "Computer chose PAPER.";
    return "PAPER";
  } else {
    console.log("undefined");
  }
}
// let choice;
// function getHumanChoice(select) {
//   // choice = String(prompt("원하는 것을 내세요 : 1 SCISSORS : 2 ROCK : 3 PAPER"));
//   if (choice.toUpperCase() === "ROCK") {
//     p3.textContent = "당신이 낸 수는 ROCK 입니다.";
//     return "ROCK";
//   } else if (choice.toUpperCase() === "SCISSORS") {
//     p3.textContent = "당신이 낸 수는 SCISSORS 입니다.";
//     return "SCISSORS";
//   } else if (choice.toUpperCase() === "PAPER") {
//     p3.textContent = "당신이 낸 수는 PAPER 입니다.";
//     return "PAPER";
//   }
// }
let humanScore = 0;
let computerScore = 0;
let score = 0;
function playRound(humanChoice, computerChoice) {
  ++score;

  if (humanChoice === "ROCK") {
    if (computerChoice === "ROCK") {
      p3.textContent = "It's a tie. Both chose Rock.";
    } else if (computerChoice === "SCISSORS") {
      p3.textContent = "You win! Rock beats Scissors.";
      ++humanScore;
    } else if (computerChoice === "PAPER") {
      p3.textContent = "You lose! Paper beats Rock.";
      ++computerScore;
    }
  }
  if (humanChoice === "SCISSORS") {
    if (computerChoice === "ROCK") {
      p3.textContent = "You lose! Rock beats Scissors.";
      ++computerScore;
    } else if (computerChoice === "SCISSORS") {
      p3.textContent = "It's a tie. Both chose Scissors.";
    } else if (computerChoice === "PAPER") {
      p3.textContent = "You win! Scissors beats Paper.";

      ++humanScore;
    }
  }
  if (humanChoice === "PAPER") {
    if (computerChoice === "ROCK") {
      p3.textContent = "You win! Paper beats Rock.";

      ++humanScore;
    } else if (computerChoice === "SCISSORS") {
      p3.textContent = "You lose! Scissors beats Paper.";

      ++computerScore;
    } else {
      p3.textContent = "It's a tie. Both chose Paper.";
    }
  }
  if (score >= 5) {
    if (humanScore > computerScore) {
      div.textContent = `"Game Over! Human Wins! ${humanScore} : ${computerScore}"`;
      // setTimeout(() => {
      //   alert(`최종스코어: "${humanScore} : ${computerScore}"`);
      // }, 1000);
    } else if (computerScore > humanScore) {
      div.textContent = `"Game Over! Computer Wins! ${humanScore} : ${computerScore}"`;
      // setTimeout(() => {
      //   alert(`최종스코어: "${humanScore} : ${computerScore}"`);
      // }, 1000);
    }
    setTimeout(() => {
      body.style.display = "none";
      if (humanScore > computerScore) {
        alert("You Win!");
      } else if (computerScore > humanScore) {
        alert("You Lose!");
      }
    }, 1500);
  }
}
// let score = 0;

// function playGame() {
//   const humanSelection = getHumanChoice(choice);
//   const computerSelection = getComputerChoice();
//   playRound(humanSelection, computerSelection);

//   if (humanScore > computerScore) {
//     p3.textContent = "당신이 이겼습니다.";
//   } else if (humanScore < computerScore) {
//     p3.textContent = "당신이 졌습니다. 컴퓨터 승리!";
//   } else {
//     p3.textContent = "무승부";
//   }
// }
// playGame();
// playGame();
// playGame();
// playGame();
// playGame();
function rock() {
  p.textContent = "You chose Rock";
  // getComputerChoice();
  playRound("ROCK", getComputerChoice());
  // return "ROCK";
}
function scissors() {
  p.textContent = "You chose Scissors";
  // getComputerChoice();
  playRound("SCISSORS", getComputerChoice());
  // return "SCISSORS";
}

function paper() {
  p.textContent = "You chose Paper";
  // getComputerChoice();
  playRound("PAPER", getComputerChoice());
  // return "PAPER";
}
