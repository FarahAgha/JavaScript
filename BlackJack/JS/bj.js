/*
* BlackJack Card Game
* Created By Farah
*/

// Cards variables - suits and values
let suits  = ['Hearts', 'Clubs', 'Diamonds',  'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack','Ten', 'Nine', 'Eight', 'Seven', 
              'Six', 'Five', 'Four', 'Three', 'Two' ];


//DOM variables 
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayutton = document.getElementById('stay-button');

//Game variables 
let gameStarted = false;
let gameOver = false;
let playerWon = false;
let dealerCards = [];
let playerCards = [];
let dealerScore = 0;
let playerScore = 0;
let deck = [];



hitButton.style.display = 'none';
stayutton.style.display = 'none';
showStatus();

//Event Listner when game is started 
newGameButton.addEventListener('click', function(){

  gameStarted = true;
  gameOver = false;
  playerWon = false;

  // new deck creation 
  deck = createDeck();
  shuffleDeck(deck);

  //serve dealer
  dealerCards = [ getNextCard(), getNextCard()];

  //serve player 
  playerCards = [ getNextCard(), getNextCard()];

  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayutton.style.display = 'inline';
  showStatus();

});


//Creating deck to start the game
function createDeck(){
  let deck = [];
  for(let suitIdx = 0; suitIdx < suits.length; suitIdx++)
  {
    for(let valueIdx = 0; valueIdx < values.length; valueIdx++)
    {
      let card = {
          suit: suits[suitIdx], 
          value: values[valueIdx]
        };
      deck.push( card );
    }
  }

  return deck;
}

//Shuffel Deck randomly
function shuffleDeck(deck){
  for( let i = 0 ; i < deck.length; i++){

    let swapIndex = Math.trunc(Math.random() * deck.length);

    let temp = deck[swapIndex];
    deck[swapIndex] = deck[i];
    deck[i] = temp;
  }
  
}

// Assign values to the card to calculate score
function getCardNumericValue(card){
  switch(card.value){
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case "Six":
      return 6;
    case 'Seven':
      return 7;
    case "Eight":
      return 8;
    case "Nine":
      return 9;
    default:
      return 10;
  }
}

// Calculate score for the players
function getScore(cardArray){
  let score =0;
  let hasAce = false;

  for( let i = 0 ; i < cardArray.length; i++){
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if(card.value == 'Ace'){
      hasAce = true;
    }
  }
  //ace is one or 11 points
  if(hasAce && score + 10 <=21) {
    return score + 10;
  }

  return score;
}

//updating scores for the players
function updateScores(){
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);

}

// show game status
function showStatus(){

  if(!gameStarted){
    textArea.innerText = 'Welcome to BlackJack!';
    return;
  }

  //show dealer cards on page
  let dealerCardsString ='';

  for( let i = 0 ; i < dealerCards.length; i++){
    dealerCardsString +=  getCardString(dealerCards[i]) + '\n';
  }

  //show player cards on page
  let playerCardsString = '';
  for( let i = 0 ; i < playerCards.length; i++){
    playerCardsString +=  getCardString(playerCards[i]) + '\n';
    
  }

  updateScores();

  textArea.innerText = 
    '\nDealer cards are :- \n'
      + dealerCardsString
      + '(Score:- '
      + dealerScore
      + ')\n\n' +
    '\nPlayer cards are :- \n'
      + playerCardsString
      + '(Score:- '
      + playerScore
      + ')\n\n'

  if (gameOver){
    if(PlayerWon){
      textArea.innerText +=  "You Win !! ";
    }
    else{
      textArea.innerText += "Dealer Wins."
    }
    newGameButton.style.display = 'inline';
    hitButton.style.display = 'none';
    stayutton.style.display = 'none';
  }
}

//return the next card for the player
function getNextCard(){
  return deck.shift() ;
}

// get the string value of th card
function getCardString(card){
  return card.value + ' of ' +  card.suit;
}

