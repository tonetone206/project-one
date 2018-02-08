var dealerCards = [];
var playerCards = [];


function getACard(turn) {
var card = cards[Math.floor(Math.random() * cards.length)]
 if (turn === "Dealer") {
 	dealerCards.push(card.img)
	var ul = document.getElementById("dealercard")
	var li = document.createElement('li');
	li.innerHTML = card.img;
	ul.appendChild(li);
 } else {
 	playerCards.push(card.img)
 	var ul = document.getElementById("playercard")
	var li = document.createElement('li');
	li.innerHTML = card.img;
	ul.appendChild(li);
 }
return card.points;
}


var counter = 0;

function GenerateNewCard() {
  counter +=1;
  var d = document.getElementById("HUM").innerHTML = "";
  var e = document.getElementById("COMP").innerHTML = "";
  var f = document.getElementById("COUNT").innerHTML = counter;
  var a = parseInt(document.getElementById("dealer").value = 0);
  var res = document.getElementById("dealer");
  var aa = parseInt(document.getElementById("you").value = 0);
  var resa = document.getElementById("You");
  // resa.value = a + getACard("You");
  res.value = aa + getACard("Dealer");
}

function COMPUTER() {
  var a = parseInt(document.getElementById("dealer").value);
  var res = document.getElementById("dealer");
  while(res.value < 31) {
  var b = parseInt(document.getElementById("dealer").value);
  res.value = b + getACard("Dealer");
  }
}

function HUMAN() {
  var a = parseInt(document.getElementById("you").value);
  var res = document.getElementById("you");
  res.value = a + getACard("You");
  if(res.value > 31) {
    whoWonC += 1;
    document.getElementById("COMPW").innerHTML = whoWonC;
    var a = document.getElementById("COMP").innerHTML = "I WIN";
  }
}
var whoWonH = 0;
var whoWonC = 0;

function determineWinner() {
    var a = parseInt(document.getElementById("you").value);
    var b = parseInt(document.getElementById("dealer").value);
    if(b > 31)
{
    whoWonH += 1;
    document.getElementById("HUMW").innerHTML = whoWonH;
    var winner = document.getElementById("HUM").innerHTML = "I WIN";
    return;
}
  if(a==b) {
    var a = document.getElementById("HUM").innerHTML = "TIE";
    var b = document.getElementById("COMP").innerHTML = "TIE";
  }
  if(a>b) {
    whoWonH += 1;
    document.getElementById("HUMW").innerHTML = whoWonH;
    var a = document.getElementById("HUMW").innerHTML = "I WIN";
  }
  if(b>a) {
    whoWonC += 1;
    document.getElementById("COMPW").innerHTML = whoWonC;
    var g = document.getElementById("COMP").innerHTML = "I WIN!";
  }
}

document.getElementById("HIT").addEventListener("click", function() {
	HUMAN();
});
document.getElementById("STAND").addEventListener("click", function() {
	COMPUTER();
	determineWinner();
});
document.getElementById("DEAL").addEventListener("click", function() {
	GenerateNewCard()
});



var cards = [
{
	"suit": "clubs",
	"value": "A",
	"img": "Ace of &#9827",
	"points": 11
},
{
	"suit": "clubs",
	"value": "2",
	"img": "2 &#9827",
	"points": 2
},
{
	"suit": "clubs",
	"value": "3",
	"img": "3 &#9827",
	"points": 3
},
{
	"suit": "clubs",
	"value": "4",
	"img": "4 &#9827",
	"points": 4
},
{
	"suit": "clubs",
	"value": "5",
	"img": "5 &#9827",
	"points": 5
},
{
	"suit": "clubs",
	"value": "6",
	"img": "6 &#9827",
	"points": 6
},
{
	"suit": "clubs",
	"value": "7",
	"img": "7 &#9827",
	"points": 7
},
{
	"suit": "clubs",
	"value": "8",
	"img": "8 &#9827",
	"points": 8
},
{
	"suit": "clubs",
	"value": "9",
	"img": "9 &#9827",
	"points": 9
},
{
	"suit": "clubs",
	"value": "10",
	"img": "10 &#9827",
	"points": 10
},
{
	"suit": "clubs",
	"value": "J",
	"img": "Jack of &#9827",
	"points": 10
},
{
	"suit": "clubs",
	"value": "Q",
	"img": "Queen of &#9827",
	"points": 10
},
{
	"suit": "clubs",
	"value": "K",
	"img": "King of &#9827",
	"points": 10
},
{
	"suit": "diamonds",
	"value": "A",
	"img": "Ace of &#9830",
	"points": 11
},
{
	"suit": "diamonds",
	"value": "2",
	"img": "2 &#9830",
	"points": 2
},
{
	"suit": "diamonds",
	"value": "3",
	"img": "3 &#9830",
	"points": 3
},
{
	"suit": "diamonds",
	"value": "4",
	"img": "4 &#9830",
	"points": 4
},
{
	"suit": "diamonds",
	"value": "5",
	"img": "5 &#9830",
	"points": 5
},
{
	"suit": "diamonds",
	"value": "6",
	"img": "6 &#9830",
	"points": 6
},
{
	"suit": "diamonds",
	"value": "7",
	"img": "7 &#9830",
	"points": 7
},
{
	"suit": "diamonds",
	"value": "8",
	"img": "8 &#9830",
	"points": 8
},
{
	"suit": "diamonds",
	"value": "9",
	"img": "9 &#9830",
	"points": 9
},
{
	"suit": "diamonds",
	"value": "10",
	"img": "10 &#9830",
	"points": 10
},
{
	"suit": "diamonds",
	"value": "J",
	"img": "Jack of &#9830",
	"points": 10
},
{
	"suit": "diamonds",
	"value": "Q",
	"img": "Queen of &#9830",
	"points": 10
},
{
	"suit": "diamonds",
	"value": "K",
	"img": "King of &#9830",
	"points": 10
},
{
	"suit": "hearts",
	"value": "A",
	"img": "Ace of &#9829",
	"points": 11
},
{
	"suit": "hearts",
	"value": "2",
	"img": "2 &#9829",
	"points": 2
},
{
	"suit": "hearts",
	"value": "3",
	"img": "3 &#9829",
	"points": 3
},
{
	"suit": "hearts",
	"value": "4",
	"img": "4 &#9829",
	"points": 4
},
{
	"suit": "hearts",
	"value": "5",
	"img": "5 &#9829",
	"points": 5
},
{
	"suit": "hearts",
	"value": "6",
	"img": "6 &#9829",
	"points": 6
},
{
	"suit": "hearts",
	"value": "7",
	"img": "7 &#9829",
	"points": 7
},
{
	"suit": "hearts",
	"value": "8",
	"img": "8 &#9829",
	"points": 8
},
{
	"suit": "hearts",
	"value": "9",
	"img": "9 &#9829",
	"points": 9
},
{
	"suit": "hearts",
	"value": "10",
	"img": "10 &#9829",
	"points": 10
},
{
	"suit": "hearts",
	"value": "J",
	"img": "Jack of &#9829",
	"points": 10
},
{
	"suit": "hearts",
	"value": "Q",
	"img": "Queen of &#9829",
	"points": 10
},
{
	"suit": "hearts",
	"value": "K",
	"img": "King of &#9829",
	"points": 10
},
{
	"suit": "spades",
	"value": "A",
	"img": "Ace of &#9824",
	"points": 11
},
{
	"suit": "spades",
	"value": "2",
	"img": "2 &#9824",
	"points": 2
},
{
	"suit": "spades",
	"value": "3",
	"img": "3 &#9824",
	"points": 3
},
{
	"suit": "spades",
	"value": "4",
	"img": "4 &#9824",
	"points": 4
},
{
	"suit": "spades",
	"value": "5",
	"img": "5 &#9824",
	"points": 5
},
{
	"suit": "spades",
	"value": "6",
	"img": "6 &#9824",
	"points": 6
},
{
	"suit": "spades",
	"value": "7",
	"img": "7 &#9824",
	"points": 7
},
{
	"suit": "spades",
	"value": "8",
	"img": "8 &#9824",
	"points": 8
},
{
	"suit": "spades",
	"value": "9",
	"img": "9 &#9824",
	"points": 9
},
{
	"suit": "spades",
	"value": "10",
	"img": "10 &#9824",
	"points": 10
},
{
	"suit": "spades",
	"value": "J",
	"img": "Jack of &#9824",
	"points": 10
},
{
	"suit": "spades",
	"value": "Q",
	"img": "Queen of &#9824",
	"points": 10
},
{
	"suit": "spades",
	"value": "K",
	"img": "King of &#9824",
	"points": 10
},
]


// var API_URL = 'https://deckofcardsapi.com/api/deck/';
// var draw_API = 'https://deckofcardsapi.com/api/deck/y5t68920wik8/draw/?count=52';


// $.get(draw_API).done(function(data) {
// 	// var result = JSON.parse(data);
// 	console.log(data);
// });





// var cardDeck = [];

// want cards to appear randomly on table when START is clicked

// player clicks their card selection 
// then player clicks a card to switch with their selection
// then the two bots take their turn

// check for 31 auto win  
// knock button causing 1 more round of play

// RESULTS
// check scores for winner and loser
// show alert for winner and loser


// var cardValues = { '1':       1,
//                    '2':       2,
//                    '3':       3,
//                    '4':       4,
//                    '5':       5,
//                    '6':       6,
//                    '7':       7,
//                    '8':       8,
//                    '9':       9,
//                    '10':      10,
//                    'JACK':    10,
//                    'QUEEN':   10,
//                    'KING':    10,
//                    'ACE':     11,
//                   }