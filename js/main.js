var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

function checkForMatch() {
  var gameBoardFeedback = document.getElementById("game-board-feedback");

  if (cardsInPlay[0] === cardsInPlay[1]) {
    gameBoardFeedback.textContent = "You found a match!";
  } else {
    gameBoardFeedback.textContent = "Sorry, try again.";
  }
}

function flipCard() {
  var cardId = this.getAttribute("data-id");
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  this.setAttribute("src", cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

function reset() {
  cardsInPlay = [];
  createBoard();
}

function createBoard() {
  const gameBoard = document.getElementById("game-board");
  const gameBoardFeedback = document.getElementById("game-board-feedback");
  gameBoard.innerHTML = "";
  gameBoardFeedback.textContent = "";

  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);

    gameBoard.appendChild(cardElement);
  }
}

function createActions() {
  const button = document.getElementById("game-reset");
  button.addEventListener("click", reset);
}

createBoard();
createActions();
