/* eslint no-trailing-spaces: ["error", { "skipBlankLines": true }] */

const READLINE = require("readline-sync");
const SUITS = ["Clubs", "Hearts", "Diamonds", "Spades"];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const INITIAL_DEAL = 2;
const ADDITIONAL_CARDS = 1;
const FACE_CARD_VALUE = 10;
const ACE_HIGH_VALUE = 11;
const DIFFERENCE_BETWEEN_ACE_HIGH_LOW_VALUE = 10;
const CARD_LIMIT = 21;
const DEALER_LIMIT = 17;
const MAX_ROUND_WINS = 3;

function prompt(message) {
  console.log(`=> ${message}\n`);
}

function displayRoundNumber(round) {
  console.log(`+ - - - - - - +`);
  console.log(`|  ROUND # ${round}  |`);
  console.log(`+ - - - - - - +\n`);
}

function initializeDeck(suits, values) {
  let deck = [];
  suits.map(cardSuit => {
    return values.map(cardValue => {
      return deck.push([cardSuit, cardValue]);
    });
  });
  return deck;
}

function deal(deck, amountOfCards) {
  let hand = [];
  let cardCount = 0;
  do {
    let cardIndex = Math.floor(Math.random() * deck.length);
    let card = deck.splice(cardIndex, 1);
    hand.push(card);
    cardCount += 1;
  } while (cardCount < amountOfCards);
  return hand.flat();
}

function displayHand(hand, currentPlayer) {
  if (currentPlayer === "Dealer") {
    prompt(`${currentPlayer}'s hand: ${hand[0][1]} of ${hand[0][0]} and ?`);
    return;
  }
  let playerHand = hand.map(nestedArr => `${nestedArr[1]} of ${nestedArr[0]}`);
  if (playerHand.length === 2) {
    prompt(`Your hand: ${playerHand.join(" and ")}`);
  } else {
    prompt(`Your hand: ${playerHand.slice(0, playerHand.length - 1)
      .join(", ")}, and ${playerHand[playerHand.length - 1]}`);
  }
}

function hitOrStay() {
  prompt("Would you like to hit or stay?");
  let answer = READLINE.question().toLowerCase();
  while (!["h", "hit", "s", "stay"].includes(answer)) {
    prompt("That's not a valid answer. Type 'h' to hit or 's' to stay.");
    answer = READLINE.question().toLowerCase();
  }
  console.log("\n");
  return answer;
}

function calculateTotal(hand) {
  let totalAces = 0;
  hand = hand.map(element => {
    if (["King", "Queen", "Jack"].includes(element[1])) {
      return FACE_CARD_VALUE;
    } else if ("Ace".includes(element[1])) {
      totalAces += 1;
      return ACE_HIGH_VALUE;
    } else return element[1];
  });
  let total = hand.reduce((a, b) => a + b, 0);
  while (total > CARD_LIMIT && totalAces > 0) {
    total -= DIFFERENCE_BETWEEN_ACE_HIGH_LOW_VALUE;
    totalAces -= 1;
  }
  return total;
}

function bustOrStay(score, player) {
  if (score > CARD_LIMIT) {
    prompt(`${player} busted!`);
  } else {
    prompt(`${player} stayed.`);
  }
}

function displayFinalScores(playerScore, dealerScore) {
  console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n");
  prompt(`Your score is ${playerScore}. The dealer's score is ${dealerScore}.`);
}

function selectRoundWinner(playerScore, dealerScore) {
  if (playerScore > CARD_LIMIT) {
    return "Dealer";
  } else if (dealerScore > CARD_LIMIT) {
    return "Player";
  } else if (playerScore > dealerScore) {
    return "Player";
  } else if (playerScore === dealerScore) {
    return "Tie";
  } else {
    return "Dealer";
  }
}

function displayWinningMessage(winner) {
  if (winner === "Player") {
    prompt("You win!");
  } else if (winner === "Dealer") {
    prompt("The dealer wins!");
  } else {
    prompt("It's a tie!");
  }
}

function displayCurrentMatchTotal(gamePoints, currentPlayer) {
  let rounds = "rounds";
  if (gamePoints === 1) rounds = "round";
  if (currentPlayer === "Player") currentPlayer = "You";
  prompt(`${currentPlayer} won ${gamePoints} ${rounds}.`);
}

function startNextRound() {
  console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n");
  prompt("Ready to start to the next round?");
  let answer = READLINE.question().toLowerCase();
  while (!["y", "yes"].includes(answer)) {
    prompt("Type 'y' or 'yes' when you're ready to continue.");
    answer = READLINE.question().toLowerCase();
  }
  console.clear();
}

function displayBestOf5Winner(playerGamesWon, dealerGamesWon) {
  console.log("* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * \n");
  if (playerGamesWon >= MAX_ROUND_WINS) {
    prompt("You won best out of 5! You are the ultimate champ!");
  } else if (dealerGamesWon >= MAX_ROUND_WINS) {
    prompt("The dealer won best out of 5! AI is taking over the world.");
  }
  console.log("* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * \n");
}

function playAgain() {
  prompt("Good game! Would you like to play again? y/n");
  let answer = READLINE.question().toLowerCase();
  while (!["y", "yes", "n", "no"].includes(answer)) {
    prompt("Type 'y' to continue or 'n' to quit.");
    answer = READLINE.question().toLowerCase();
  }
  console.log("\n");
  return answer;
}

while (true) {
  prompt("Let's play 21!");
  prompt("Best out of 5 wins!");
  let round = 1;
  let playerWins = 0;
  let dealerWins = 0;
  
  while (true) {
    displayRoundNumber(round);
    
    let deck = initializeDeck(SUITS, VALUES);
    
    let playerHand = deal(deck, INITIAL_DEAL);
    displayHand(playerHand, "Player");
    let playerScore = calculateTotal(playerHand);
    
    let dealerHand = deal(deck, INITIAL_DEAL);
    displayHand(dealerHand, "Dealer");
    let dealerScore = calculateTotal(dealerHand);
    
    prompt(`It's your turn first. Your current total is ${playerScore}.`);
    
    while (playerScore < CARD_LIMIT) {
      let hit = hitOrStay();
      if (hit[0] === "s") break;
      let newCard = deal(deck, ADDITIONAL_CARDS).flat();
      playerHand.push(newCard);
      displayHand(playerHand, "Player");
      playerScore = calculateTotal(playerHand);
      prompt(`Your score: ${playerScore}`);
    }
    
    bustOrStay(playerScore, "You");
    
    if (playerScore <= CARD_LIMIT) {
      prompt(`It's the Dealer's turn. Their current total is ${dealerScore}`);
      while (dealerScore < DEALER_LIMIT) {
        prompt(`The dealer hits.`);
        let newCard = deal(deck, ADDITIONAL_CARDS).flat();
        dealerHand.push(newCard);
        dealerScore = calculateTotal(dealerHand);
        prompt(`Dealer score: ${dealerScore}`);
      }
      bustOrStay(dealerScore, "Dealer");
    }
    
    displayFinalScores(playerScore, dealerScore);
    
    let winner = selectRoundWinner(playerScore, dealerScore);
    
    displayWinningMessage(winner);
    
    if (winner === "Player") {
      playerWins += 1;
    } else if (winner === "Dealer") {
      dealerWins += 1;
    }
  
    displayCurrentMatchTotal(playerWins, "Player");
    displayCurrentMatchTotal(dealerWins, "Dealer");
    
    if (playerWins >= MAX_ROUND_WINS || dealerWins >= MAX_ROUND_WINS) break;
    
    round += 1;
    startNextRound();
  }
  
  displayBestOf5Winner(playerWins, dealerWins);
  
  let anotherRound = playAgain();
  if (anotherRound === "n") break;
  console.clear();
}

prompt("Thanks for playing!");
