import React from "react";

const Card = () => {
  const spades = [
    "S1",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6",
    "S7",
    "S8",
    "S9",
    "S10",
    "S11",
    "S12",
    "S13",
  ];
  const hearts = [
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "H7",
    "H8",
    "H9",
    "H10",
    "H11",
    "H12",
    "H13",
  ];
  const diamonds = [
    "D1",
    "D2",
    "D3",
    "D4",
    "D5",
    "D6",
    "D7",
    "D8",
    "D9",
    "D10",
    "D11",
    "D12",
    "D13",
  ];
  const clubs = [
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
    "C6",
    "C7",
    "C8",
    "C9",
    "C10",
    "C11",
    "C12",
    "C13",
  ];

  let deck = spades.concat(hearts, clubs, diamonds);

  function shuffle(array, n) {
    array.sort(() => Math.random() - 0.5);
  }

  shuffle(deck, 52);

  for (let index = 0; index < deck.length; index++) {
    console.log(deck[index]);
  }

  let newDeck = [];

  function popD(deck) {
    const temp = [];
    let popped;

    for (let index = 0; index < 3; index++) {
      popped = deck.pop();
      temp[index] = popped;
    }

    return temp;
  }

  newDeck = [...newDeck, ...popD(deck)];
  newDeck = [...newDeck, ...popD(deck)];
  newDeck = [...newDeck, ...popD(deck)];

  //newDeck = popD(deck, newDeck);

  for (let index = 0; index < newDeck.length; index++) {
    console.log("new ---", newDeck[index]);
  }

  console.log(newDeck.length);
  console.log(deck.length);

  console.log(newDeck[newDeck.length - 1]);

  function compare(newDeck, deckAce, deckKing) {
    let value = newDeck[newDeck.length - 1];
    value = value.substring(1);
    console.log("value in compare = ", value);

    if (
      deckKing[deckKing.length - 1] - value === 1 ||
      value - deckAce[deckAce.length - 1] === 1
    ) {
      return true;
    } else {
      console.log(deckKing[deckKing.length - 1] - value);
      console.log(value - deckAce[deckAce.length - 1]);
      return false;
    }
  }

  let deckAce = [0];
  let deckKing = [14];

  //compare(newDeck, deckAce, deckKing);
  console.log("*/*/*/*/", compare(newDeck, deckAce, deckKing));

  while (compare(newDeck, deckAce, deckKing) === true) {
    let value = newDeck[newDeck.length - 1];
    value = value.substring(1);

    if (deckKing[deckKing.length - 1] - value === 1) {
      deckKing = [...deckKing, value];
    } else {
      deckAce = [...deckAce, value];
    }
    newDeck.pop();
  }

  console.log(deckAce, "-----------", deckKing);

  return <div>Card</div>;
};

export default Card;
