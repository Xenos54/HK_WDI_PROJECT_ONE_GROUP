function changeSquareContent(location, className) {
	document.getElementById('cell' + location).classList.add(className); 
	document.getElementById('cell' + location).innerHTML = className;
};

var currentPlayer = "x";


function makeNextMoveAt(location) {
  markSquareAsOccupiedAt(location);
  swapCurrentPlayerToOpponent();
};

function markSquareAsOccupiedAt(location) {
  if (currentPlayer == "x") {
  	changeSquareContent(location, "x");
  } else {
  	changeSquareContent(location, "o");
  }
}

function swapCurrentPlayerToOpponent() {
  if (currentPlayer == "x") {
  	currentPlayer = "o";
  } else {
  	currentPlayer = "x";
  }	
}


function handleClick(location) {
	if (currentSquareClickedAlready(location)) {
		// do nothing
	} else {
		makeNextMoveAt(location);
    console.log (topRow);
	}
}



// Homework 1
// this function need to return true or false
function currentSquareClickedAlready(location) {
  // TODO
  // check if the square at location has been occupied
  // 
  // ... check to see if the input location already has either an x or o assigned to it, ie from the markSquareAsOccupiedAt function
  var currentSquareContent = document.getElementById('cell' + location).innerHTML;
  if ((currentSquareContent =="x") || (currentSquareContent == "o") ){
    return true;
  } else {
    return false;
  }
}

// Homework 2

var xWins =["x","x","x"];
var topRow =[];
// this function need to return true or false
function isTopHorizontalThreeOccupiedByMe() {
  // check if the top three square is occupied by X
  //pick up the contents of the top row. create a new ARRAY for this.
  var topRow = [document.getElementById('cell1').innerHTML,document.getElementById('cell2').innerHTML,document.getElementById('cell3').innerHTML];
  //check if theyre all the same (ie the index refs), if so return true, else false.


  //if true, alert(you win)
}




















