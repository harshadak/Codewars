// 8 kyu

// Define a card suit
// You get any card as an argument. Your task is to return a suit of this card.

function defineSuit(card) {
  var cardLen = card.length - 1;
  if (card[cardLen] == '♣') {
    return "clubs";
  } else if (card[cardLen] == '♦') {
    return "diamonds";
  } else if (card[cardLen] == '♥') {
    return "hearts";
  } else {
    return "spades";
  }
}