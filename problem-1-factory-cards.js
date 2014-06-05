function makeCard(id) {
    var card = {id:id};
    card.isValid = function(num, low, high) {
        if ((typeof num)!= "number")
            return NaN;
        if (!Number.isInteger(num))
            return NaN;
        if (num < low || num > high)
            return NaN;
        return true;
    },
    card.rank = makeCard.rank;
    card.suit = makeCard.suit;
    card.cardId = makeCard.cardId;
    card.color = makeCard.color;
    card.ownName = makeCard.ownName;
    card.precedes = makeCard.precedes;
    card.sameColor = makeCard.sameColor;
    card.nextInSuit = makeCard.nextInSuit;
    card.prevInSuit = makeCard.prevInSuit;
    return card;
}
makeCard.rank = function() {
    return this.isValid(this.id, 0, 51) && ((Math.floor(this.id/4)) + 1);
}
makeCard.suit = function() {
    return this.isValid(this.id,0,51) && ((this.id % 4) + 1);
}
makeCard.cardId = function(rank, suit) {
    return this.isValid(this.rank(),1,13) && this.isValid(this.suit(),1,4) && (((this.rank() - 1) * 4) + (this.suit() - 1));
}
makeCard.color = function() {
    var suit = this.suit();
    if (suit < 3) {
        return "red";
    } else if ((suit > 2) && (suit < 5)) {
        return "black";
    } else {
        return NaN;
    }
}
makeCard.ownName = function() {
    var rankNames = ['','Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
    var suitNames = ['','Hearts','Diamonds','Spades','Clubs'];
    return this.rank() && this.suit() && (rankNames[this.rank()]+" of "+suitNames[this.suit()]);
}
makeCard.precedes = function(cardObj) {
    var diff = (cardObj.rank() - this.rank());
    if (isNaN(cardObj.rank() - this.rank())) {
        return NaN;
    } else {
        return (diff == 1) || (diff == -12); 
    }
}
makeCard.sameColor = function(cardObj) {
    var colorA = this.color();
    var colorB = cardObj.color();
    if (Number.isNaN(colorA) || Number.isNaN(colorB))
        return NaN;
    return colorA == colorB;
}
makeCard.nextInSuit = function() {
    nextCard = this.isValid(this.id, 0, 51) && (this.id)+4;
    if (nextCard > 51) nextCard -= 52;
    return nextCard;
}
makeCard.prevInSuit = function() {
    prevCard = this.isValid(this.id, 0, 51) && (this.id)-4;
    if (prevCard < 0) prevCard += 52;
    return prevCard;
}

var card1 = makeCard(1);
card1.rank();
card1.suit();
card1.cardId();
card1.color();
card1.ownName();
card1.precedes(card2);
card1.precedes(card3);
card1.nextInSuit();
card1.prevInSuit();

var card2 = makeCard("boo");
card2.rank();
card2.suit();
card2.cardId();
card2.color();
card2.ownName();


var card3 = makeCard(51);
card3.rank();
card3.suit();
card3.cardId();
card3.color();
card3.ownName();
card3.precedes(card1);

var card4 = makeCard(30);
card4.rank();
card4.suit();
card4.color();
card4.precedes(card1);
card4.precedes(card3);
card4.sameColor(card1);
card4.sameColor(card3);