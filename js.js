alert("PLEASE LET IT WORK!!!!!!!!!!!!!!!!");

var TEMP = document.getElementById("temp");
var CARD = TEMP.querySelector(".card");
var TARGET = document.getElementById("target");

class player {
constructor(name){
    this.name = name;
    this.hand = [];
    this.ingame;
}

illustrate(){
    var dom =document.getElementById("player_" +this.name) || document.createElement.createElement("div");
    dom.classList.add("player" +this.name);

}
takeCard() {
console.log("i am taking a card")
}
joinGame(){
   alert(this.name + " is playing");
}
}
 
class Deck{
constructor(num){
this.cardCount = num;
this.cards     = [];
this.pos       = 0;
this.make();
}

make(){
for(var i = 0; i < this.cardCount; i++){
    var card = new Card(i);
    this.cards.push(card);        
}}

shuffle(){
 for (var i = 0; i < this.cards.length; i++){
        //randomly choose a card to switch
        var rnd = Math.floor(Math.random() * this.cards.length)
        
        //now, the cards are able to switch
        var card1 = this.cards[i];
        var card2 = this.cards[rnd];

        this.cards[i] = card2;
        this.cards[rnd] = card1;
    }
return this.cards;
}
deal(player){
    alert("i dealt to " + player.name);
    player.hand.push(this.cards[this.pos]);
    this.pos++;
}
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

illustrate(target){
    target = document.getElementById(player) || TARGET; 
    var cardCopy = CARD.cloneNode(true);
    //cardCopy.innerHTML = "silver"+ this.id;
    cardCopy.style.backgroundPositionX = -(this.id) + "00%";
    cardCopy.style.backgroundPositionY = Math.floor(this.id/-13) + "00%";

    target.append(cardCopy);
}
}


class game {
constructor(players , deck ){
this.state   = {};
this.players = players; 
this.deck    = deck;
this.turn    = 0;
this.play()
}

notOver(){
    console.log("not over for " +  this.players[0]);
return this.turn === 1;
}


chooseWinner(){
this.winner = this.activePlayer;
alert("we win!! " + this.activePlayer.name)
  return this.activeplayer;  
    };



play = function(){
       
    alert("playing")
//step 1: shuffle deck

this.deck.shuffle()

//step 2: deal the cards
for(var i = 0; i< this.players.length; i++){
    this.players[i].joinGame(this);
    this.deck.deal(this.players[i])

}

//alert("hello " + this.players[0]);
this.deck.deal(this.players[0]);

//alert("hello " + this.players[1]);
this.deck.deal(this.players[1]);
//game loop


for (var n = 0; n< 2; n++){
    var p1VAL = this.players[0].hand[0].val;
    var p2VAL = this.players[1].hand[0].val;
   
    
this.turn ++
}
//this.chooseWinner(p1VAL, p2VAL);

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
var steve = new player("steve");
var sue   = new player("sue");
var marieAntoniet = new Deck(52);
var newgame = new game([steve, sue], marieAntoniet);

