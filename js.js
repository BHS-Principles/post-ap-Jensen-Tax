//const { listen } = require("express/lib/application");

alert("PLEASE LET IT WORK!!!!!!!!!!!!!!!!");
//var LIST = [{ magicMetal: silver},{},{},{}];


var TEMP = document.getElementById("temp");
var CARD = TEMP.querySelector(".card");
var TARGET = document.getElementById("target");



for(var i=0; i < 52; i++){
    var cardCopy = CARD.cloneNode(true);
    cardCopy.innerHTML = "silver"+ i;
    cardCopy.style.backgroundPositionX = -(i) + "00%";
    cardCopy.style.backgroundPositionY = Math.floor(i/-13) + "00%";
    TARGET.append(cardCopy);
};

var shuffle = function() {
console.log(Math.floor(Math.random()*52));

}











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



//var setCard = function(rank, suit,) {
//const cardwidth = 10
//const cardheight = 15
//var x = -rank * cardwidth
//var y = -suit * cardheight
 //var cardElement = document.getElementById('card');
 //cardElement.style.backgroundPosition = `${x}rem ${y}rem`;
//};



//setCard(12, 1);





