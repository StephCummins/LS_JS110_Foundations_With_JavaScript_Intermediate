/*eslint no-trailing-spaces: ["error", { "skipBlankLines": true }]*/

const READLINE = require("readline-sync");
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

function initializeDeck() {
  let deck = [["C", 2], ["C", 3], ["C", 4], ["C", 5], ["C", 6], ["C", 7],
    ["C",8], ["C", 9], ["C", 10], ["C", "Jack"], ["C", "Queen"], ["C", "King"],
    ["C", "Ace"], ["D", 2], ["D", 3], ["D", 4], ["D", 5], ["D", 6], ["D", 7],
    ["D", 8], ["D", 9], ["D", 10], ["D", "Jack"], ["D", "Queen"], ["D", "King"],
    ["D", "Ace"], ["H", 2], ["H", 3], ["H", 4], ["H", 5], ["H", 6], ["H", 7],
    ["H", 8], ["H", 9], ["H", 10], ["H", "Jack"], ["H", "Queen"], ["H", "King"],
    ["H", "Ace"], ["S", 2], ["S", 3], ["S", 4], ["S", 5], ["S", 6], ["S", 7],
    ["S", 8], ["S", 9], ["S", 10], ["S", "Jack"], ["S", "Queen"], ["S", "King"],
    ["S", "Ace"]];
  return deck;
}

function deal(deck, amountOfCards) {
  let hand = [];
  let cardCount = 0;
  do {
    let cardIndex = Math.floor(Math.random() * deck.length);
    let card = deck.splice(cardIndex, 1);
    hand.push(card[0][1]);
    cardCount += 1;
  } while (cardCount < amountOfCards);
  return hand;
}

function displayHand(hand, currentPlayer) {
  if (currentPlayer === "Dealer") {
    prompt(`${currentPlayer}'s hand: ${hand[0]} and ?`);
  } else if (hand.length === 2) {
    prompt(`Your hand: ${hand.join(" and ")}`);
  } else {
    prompt(`Your hand: ${hand.slice(0, hand.length - 1)
      .join(", ")} and ${hand[hand.length - 1]}`);
  }
}

function hitOrStay() {
  prompt("Would you like to hit or stay?");
  let answer = READLINE.question().toLowerCase();
  while (!["h", "hit", "s", "stay"].includes(answer)) {
    prompt("That's not a valid answer. Hit or stay?");
    answer = READLINE.question().toLowerCase();
  }
  return answer;
}

function calculateTotal(hand) {
  let totalAces = 0;
  hand = hand.map(element => {
    if (["King", "Queen", "Jack"].includes(element)) {
      return FACE_CARD_VALUE;
    } else if ("Ace".includes(element)) {
      totalAces += 1;
      return ACE_HIGH_VALUE;
    } else return element;
  });
  console.log(hand);
  let total = hand.reduce((a, b) => a + b, 0);
  console.log(total);
  while (total > CARD_LIMIT && totalAces > 0) {
    total -= DIFFERENCE_BETWEEN_ACE_HIGH_LOW_VALUE;
    totalAces -= 1;
  }
  console.log(total);
  return total;
}

function displayScores(playerScore, dealerScore) {
  prompt(`Your score is ${playerScore}.`);
  prompt(`The dealer's score is ${dealerScore}.`);
}

function displayRoundWinner(playerScore, dealerScore) {
  if (playerScore > CARD_LIMIT) {
    prompt("You busted!");
    return "Dealer";
  } else if (dealerScore > CARD_LIMIT) {
    prompt("The dealer busted!");
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
  prompt("Ready to start the next round?");
  let answer = READLINE.question().toLowerCase();
  while (!["y", "yes"].includes(answer)) {
    prompt("Type 'y' or 'yes' when you're ready to continue.");
    answer = READLINE.question().toLowerCase();
  }
  console.clear();
}

function displayBestOf5Winner(playerGamesWon, dealerGamesWon) {
  if (playerGamesWon >= MAX_ROUND_WINS) {
    prompt("You won best out of 5! You are the ultimate champ!");
  } else if (dealerGamesWon >= MAX_ROUND_WINS) {
    prompt("The dealer won best out of 5! AI is taking over the world.");
  }
}

function playAgain() {
  prompt("Good game! Would you like to play again? y/n");
  let answer = READLINE.question().toLowerCase();
  while (!["y", "yes", "n", "no"].includes(answer)) {
    prompt("That's not a valid answer. Hit or stay?");
    answer = READLINE.question().toLowerCase();
  }
  return answer;
}

while (true) {
  prompt("Let's play 21!");
  prompt("Best out of 5 wins!");
  let round = 1;
  let playerWins = 0;
  let dealerWins = 0;
  
  while (true) {
    prompt(`Round #${round}`);
    
    let deck = initializeDeck();
    
    let playerHand = deal(deck, INITIAL_DEAL);
    displayHand(playerHand, "Player");
    let playerScore = calculateTotal(playerHand);
    
    let dealerHand = deal(deck, INITIAL_DEAL);
    displayHand(dealerHand, "Dealer");
    let dealerScore = calculateTotal(dealerHand);
    
    while (playerScore < CARD_LIMIT) {
      let hit = hitOrStay();
      if (hit[0] === "s") break;
      let newCard = deal(deck, ADDITIONAL_CARDS);
      playerHand.push(newCard);
      playerHand = playerHand.flat();
      displayHand(playerHand, "Player");
      playerScore = calculateTotal(playerHand);
    }
    
    if (playerScore <= CARD_LIMIT) {
      while (dealerScore < DEALER_LIMIT) {
        let newCard = deal(deck, ADDITIONAL_CARDS);
        dealerHand.push(newCard);
        dealerHand = dealerHand.flat();
        dealerScore = calculateTotal(dealerHand);
      }
    }
    
    displayScores(playerScore, dealerScore);
    
    let winner = displayRoundWinner(playerScore, dealerScore);
    
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
