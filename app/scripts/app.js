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
		makeNextMoveAt(location)
	}
}

// Homework 1
// this function need to return true or false
function currentSquareClickedAlready(location) {
  // TODO
  // check if the square at location has been occupied
  // 
  // ... your code here
  // ... your code here
}

// Homework 2
// this function need to return true or false
function isTopHorizontalThreeOccupiedByMe() {
  // TODO
  // check if the top three square is occupied by X
  // 
  // ... your code here
}




















