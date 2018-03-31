/*
* BlackJack Card Game
* Created By Farah
*/

// Cards and Suits
let suits  = ["Hearts", "Clubs", "Diamonds",  "Spades"];
let values = ["Ace", "King", "Queen", "Jack","Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two" ]

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
        }
      deck.push( card );
    }
  }
  return deck;
}

//return the next card for the player
function getNextCard(){
  return deck.shift() ;
}

// new deck creation 
let deck=createDeck();

// get the string value of th card
function getCardString(card){
  return card.suit + " of " + card.value;
}

//temp values assigned for the card
let playerCards = [ getNextCard(), getNextCard()];

// temp view of the card on console
console.log("Welcome to Black Jack");
console.log("  Player Cards", getCardString(playerCard[0]) );
console.log("  Player Cards", getCardString(playerCard[1]) );
