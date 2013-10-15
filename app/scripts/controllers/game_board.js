'use strict';

angular.module('tickeyApp')
  .controller('GameBoardCtrl', function ($scope, $timeout) {
    
    $scope.name = "Tickety";
    $scope.currentSymbol = "x";

    $scope.click = function(){
      alert("I've been clicked!");
    };

    $scope.minutes = "00"; $scope.seconds ="00";

    $scope.startTimer = function() {
      $scope.seconds = "01";

      $timeout(function() {
      	console.log("1");
      }, 1000);
    }

    $scope.endTimer = function() {
      $scope.seconds = "01";
    }

    $scope.handleClick = function(location) {
      handleClickInternal(location);
    }    

    function handleClickInternal(location) {
      if (notOccupied(location)) {
        makeNextMove(location, $scope.currentSymbol);

        if (isWinning($scope.currentSymbol)) {
          alert( $scope.currentSymbol + "wins!");
        } else {
          swapSymbol();
          selectRandomSquare($scope.currentSymbol);
          swapSymbol();
        }
      } else {
        // do nothing
      }
    }

    function makeNextMove(location, symbol) {
      document.getElementById("cell" + location).innerHTML = symbol;
    }

    function swapSymbol() {
      if ($scope.currentSymbol == "x") {
        $scope.currentSymbol = "o";
      } else {
        $scope.currentSymbol = "x";
      }
    }

    //
    //<div class="cell">X</div>
    function notOccupied(location) {
      var contentAtLocation = document.getElementById("cell" + location).innerHTML;
      var result = (contentAtLocation == "");
      return result;
    }

    function isWinning(currentPlayer) {
      // check first row horizontal winning condition
      // isSameSymbolsIn(1, 2, 3, currentPlayer);

      // wrong !!
      for (var i=1; i <= 9; i += 3) {
        if (isSameSymbolsIn(i, i + 1, i +2, currentPlayer)) {
          return true;
        }
      }

      // check vertical
      for (var i=1; i <= 3; i++) {
        if (isSameSymbolsIn(i, i + 3, i +6, currentPlayer)) {
          return true;
        }
      }

      // check diagonal
      return isDiagonalSameSymbols(currentPlayer);
    }

    function isSameSymbolsIn(first_cell_id, second_cell_id, third_cell_id, currentPlayer) {
      var first_comparison = document.getElementById("cell" + first_cell_id).innerHTML == currentPlayer;
      var second_comparison = document.getElementById("cell" + second_cell_id).innerHTML == currentPlayer;
      var third_comparison = document.getElementById("cell" + third_cell_id).innerHTML == currentPlayer;

      var result = first_comparison && second_comparison && third_comparison;

      return result;
    }

    function isDiagonalSameSymbols(currentPlayer) {
      var firstDiagonalCheck = (document.getElementById("cell1").innerHTML == currentPlayer &&
        document.getElementById("cell5").innerHTML == currentPlayer &&
        document.getElementById("cell9").innerHTML == currentPlayer);
      var secondDiagonalCheck = (document.getElementById("cell3").innerHTML == currentPlayer &&
        document.getElementById("cell5").innerHTML == currentPlayer &&
        document.getElementById("cell7").innerHTML == currentPlayer);
      return firstDiagonalCheck || secondDiagonalCheck;
    }

    //<button ng-click="clearBoard()">clear the board now</button>

    //<button></button>
    $scope.clearBoard = function() {
      for ( var i=1 ; i <= 9; i++ ) {
        var currentCell = document.getElementById("cell" + i);

        // <div class="cell x">x</div>
        // <div class="cell o">o</div>
        // <div class="cell">x</div>
        currentCell.innerHTML = "";
        currentCell.classList.remove("x");
        currentCell.classList.remove("o");
      }
      // clear class list
    }

    // Lab 2
    function restartGame() {
      // setTimeout(function() { clearBoard(); }, 1000);
      $scope.currentSymbol = "x";
      clearBoard();
    }

    // Lab 3
    function selectRandomSquare(currentPlayer) {
      var randomNumber;

      do {
        randomNumber = Math.floor((Math.random()*9)+1);
      } while( !notOccupied(randomNumber) );

      makeNextMove(randomNumber, currentPlayer);
    }    
  });

// Lab 1
// angular.module('newLocalStorageApp')
//   .controller('MainCtrl',function ($scope, localStorageService){
//     localStorageService.add("names", ["Matt", "peter", "Someone Else"])
//   });