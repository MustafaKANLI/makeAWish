import React from "react";
import Card from "./Card/Card";

const Deck = () => {
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

  let newDeck = new Array();
  const popHandler = () => {
    console.log("Clicked...");

    const popThreeAndInsert = (deck) => {
      let tempDeck = new Array();
      let popped;

      for (let index = 0; index < 3; index++) {
        if (tempDeck[51] === undefined || tempDeck[51] === null) {
          popped = deck.pop();
          tempDeck[index] = popped;
        }
      }
      return tempDeck;
    };
    newDeck = [...newDeck, ...popThreeAndInsert(deck)];
    for (let index = 0; index < newDeck.length; index++) {
      console.log("new ---", newDeck[index]);
    }
  };

  return (
    <div>
      Card
      <div>
        <button onClick={popHandler}>Click</button>
        {deck.map((item) => (
          <Card
            suits={item.Suit}
            values={item.Value}
            key={item.Value + item.Suit}
          />
        ))}
      </div>
    </div>
  );
};

export default Deck;
