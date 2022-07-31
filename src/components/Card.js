import React from "react";

const Card = () => {
  var suits = ["spades", "diamonds", "clubs", "hearts"];
  var values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
  ];

  let deck = new Array();

  function getDeck() {
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
      }
    }

    return deck;
  }

  function shuffle(deck) {
    // for 1000 turns
    // switch the values of two random cards

    deck = getDeck();
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor(Math.random() * deck.length);
      let location2 = Math.floor(Math.random() * deck.length);
      let tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
  }
  shuffle(deck);
  //getDeck();

  console.log(deck);

  return <div>Card</div>;
};

export default Card;
