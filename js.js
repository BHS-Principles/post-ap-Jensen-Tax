alert("PLEASE LET IT WORK!!!!!!!!!!!!!!!!")
var LIST = [
"tralalero tralala",
"chicken jockey",
"everything else"
];

var BTN = document.getElementById("myButton");

var theAction = function(event) {
console.log(event);
};


for (var i = 0; i < 3; i++) {
var newBTN = BTN.cloneNode(true);
newBTN.innerHTML = LIST[i];
document.body.append(newBTN);
//alert("CHECK MeOUT!!!!!!!! "  + LIST[i] );

newBTN.addEventListener("click", theAction);
};

