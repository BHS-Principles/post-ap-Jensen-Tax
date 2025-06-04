alert("PLEASE LET IT WORK!!!!!!!!!!!!!!!!");


var TEMP = document.getElementById("temp");
var CARD = TEMP.querySelector(".card");
var TARGET = document.getElementById("target");

class player {
constructor(_name){

}
dealMeIn

}



class Card {
constructor(num){

this.id         = num;
this.suit       = Math.floor(num/13);
this.val        = num % 13 +1;
this.background = "mine.svg"
this.suits      = ["H", "S", "C", "D"];
}

getSuit(){
    return suit;
}

draw(){
      var cardCopy = CARD.cloneNode(true);
    cardCopy.innerHTML = "silver"+ this.id;
    cardCopy.style.backgroundPositionX = -(this.id) + "00%";
    cardCopy.style.backgroundPositionY = Math.floor(this.id/-13) + "00%";

    TARGET.append(cardCopy);
}
}

class Deck{
constructor(num){
this.cardCount = num;
this.cards     = [];
make();
}

make(){
for(var i = 0; i<this.cardCount; i++){
    var card = new Card(i);
    this.cards.push(card);        
}}

shuffle(){
 for (var i = 0; i < this.cards.length; i++){
        //randomly choose a card to switch
        var rnd = Math.floor(Math.random() * deck.length)
        
        //now, the cards ae able to switch
        var card1 = this.cards[i];
        var card2 = this.cards[rnd]

        this.cards[i] = card2;
        this.cards[rnd] = card1;
    }
return this.cards;
}
}



/*for(var i=0; i < 52; i++){
    var cardCopy = CARD.cloneNode(true);
    cardCopy.innerHTML = "silver"+ i;
    cardCopy.style.backgroundPositionX = -(i) + "00%";
    cardCopy.style.backgroundPositionY = Math.floor(i/-13) + "00%";
    TARGET.append(cardCopy);
};*/

/*var makeDeck = function(howMany){
    var deck = [];

    for(var i = 0; i<howMany; i++){
        var card = new Card(i);
        deck.push(card);
        
    }

    return deck; 
}
*/

/*var shuffle = function(deck) {
    
    for (var i = 0; i < deck.length; i++){
        //randomly choose a card to switch
        var rnd = Math.floor(Math.random() * deck.length)
        
        //now, the cards ae able to switch
        var card1 = deck[i];
        var card2 = deck[rnd]

        deck[i] = card2;
        deck[rnd] = card1;
    }
return deck
}*/

Deck.make(52);
DECK.shuffle();
console.log(DECK);


DECK[j].draw();







//var LIST = ["tralalero tralala","chicken jockey","everything else"];

//var BTN = document.getElementById("myButton");

//var theAction = function(event) {
//console.log(event);
//};


//for (var i = 0; i < 3; i++) {
//var newBTN = BTN.cloneNode(true);
//newBTN.innerHTML = LIST[i];
//document.body.append(newBTN);
//alert("CHECK MeOUT!!!!!!!! "  + LIST[i] );

//newBTN.addEventListener("click", (e)=>{console.log(e)});};





/*var setCard = function(rank, suit) {
const cardwidth = 10
const cardheight = 15
var x = -rank * cardwidth
var y = -suit * cardheight
 var cardElement = document.getElementById('card');
 cardElement.style.backgroundPosition = `${x}rem ${y}rem`;
};



setCard(12, 1);
*/

