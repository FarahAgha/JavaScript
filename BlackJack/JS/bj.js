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
let gameover = false;
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
  gameover = false;
  playerWon = false;

  // new deck creation 
  deck = createDeck();

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

//return the next card for the player
function getNextCard(){
  return deck.shift() ;
}

// get the string value of th card
function getCardString(card){
  return card.value + ' of ' +  card.suit;
}

// show game status
function showStatus(){
  if(!gameStarted){
    textArea.innerText = 'Welcome to BlackJack!';
  }
}