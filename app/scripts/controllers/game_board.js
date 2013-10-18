'use strict';

angular.module('tickeyApp')
  .controller('GameBoardCtrl', function ($scope, $timeout, $routeParams, angularFire) {
    $scope.gameBoardId = $routeParams.id;
    $scope.mySymbol = $routeParams.mySymbol;    
    $scope.myTurn = false;
    
    $scope.gameBoard = [];
    var gameBoardRef = new Firebase("https://ticdb.firebaseio.com/room/" + $routeParams.id);
    $scope.promise = angularFire(gameBoardRef, $scope, "gameBoard", []);

    $scope.promise.then (function () {
      $scope.gameBoard = ["", "", "", "", "", "", "", "", ""];
      if ($routeParams.mySymbol == 'x') {
        console.log("I am First Move: Symbol: " + $routeParams.mySymbol);
        $scope.myTurn = true;
      } else {
        console.log("I am Second Move: Symbol: " + $routeParams.mySymbol);
        $scope.myTurn = false;
      }
    });
    
    gameBoardRef.on('value', function(snapshot) {
      console.log("wait received");
      if (!$scope.myTurn) {
        if (snapshot.val() != null) {
          if (!arrays_equal(snapshot.val(), $scope.gameBoard)) {
            console.log("diff gameboard");

            // TODO what to do after opponent move

            if ($scope.isLosing()) {
              // print losing
              // redirect to match player if play again
            } else if ($scope.isDraw()) {
              // print draw
              // redirect to match player if play again
            } else {
              $scope.myTurn = true;
            }

          } else {
            console.log("same gameboard"); 
          }
        } else {
          console.log("snapshot is empty");
        }
      } else {
        console.log("it is my turn but I receive ");
      }
    });
            
    $scope.handleClick = function(location) {
      if ($scope.myTurn) {
        // TODO what to do after my click

        $scope.gameBoard[location - 1] = $scope.mySymbol;
      
        if ($scope.isWinning()) {
          // print winning
          // redirect to match player if play again
        } else if ($scope.isDraw()) {
          // print draw
          // redirect to match player if play again
        } else {
          $scope.myTurn = false;
        }  
      }
    }
    
    $scope.isLosing = function() {
      return false; 
    }
    $scope.isWinning = function() {
      return false; 
    }
    $scope.isDraw = function() {
      return false; 
    }    
    function arrays_equal(a,b) { return !(a<b || b<a); }
  });

// $scope.leaderData = {name:
//   {
//     SeededValue: 1
//   }
// };

// p.then(function(){
// console.log("Data Loaded!");
// });

// $scope.getName = function(){
//   $scope.userName = prompt("What's your name?");
// console.log($scope.userName);
// }

// $scope.addWinToLeaderBoard = function(){
//   if ($scope.userName){
//     if ($scope.leaderBoard.name.hasOwnProperty($scope.userName)){
//       $scope.leaderData.name[$scope.userName]++;}
//     else {
//       $scope.leaderData.name[$scope.userName]=1;
//     }
//   }
// };

//     $scope.name = "Tickety";
//     $scope.currentSymbol = "x";

//     $scope.click = function(){
//       alert("I've been clicked!");
//     };

//     $scope.minutes = "00"; $scope.seconds ="00";

//     $scope.startTimer = function() {
//       $scope.seconds = "01";

//       $timeout(function() {
//       	console.log("1");
//       }, 1000);
//     }

//     $scope.endTimer = function() {
//       $scope.seconds = "01";
//     }

//     $scope.handleClick = function(location) {
//       handleClickInternal(location);
//     }    

//     function handleClickInternal(location) {
//       if (notOccupied(location)) {
//         makeNextMove(location, $scope.currentSymbol);

//         if (isWinning($scope.currentSymbol)) {
//           alert( $scope.currentSymbol + "wins!");
//         } else {
//           swapSymbol();
//           selectRandomSquare($scope.currentSymbol);
//           swapSymbol();
//         }
//       } else {
//         // do nothing
//       }
//     }

//     function makeNextMove(location, symbol) {
//       document.getElementById("cell" + location).innerHTML = symbol;
//     }

//     function swapSymbol() {
//       if ($scope.currentSymbol == "x") {
//         $scope.currentSymbol = "o";
//       } else {
//         $scope.currentSymbol = "x";
//       }
//     }
//     function notOccupied(location) {
//       var contentAtLocation = document.getElementById("cell" + location).innerHTML;
//       var result = (contentAtLocation == "");
//       return result;
//     }

//     function isWinning(currentPlayer) {
//       for (var i=1; i <= 9; i += 3) {
//         if (isSameSymbolsIn(i, i + 1, i +2, currentPlayer)) {
//           return true;
//         }
//       }
//       // check vertical
//       for (var i=1; i <= 3; i++) {
//         if (isSameSymbolsIn(i, i + 3, i +6, currentPlayer)) {
//           return true;
//         }
//       }
//       // check diagonal
//       return isDiagonalSameSymbols(currentPlayer);
//     }
//     function isSameSymbolsIn(first_cell_id, second_cell_id, third_cell_id, currentPlayer) {
//       var first_comparison = document.getElementById("cell" + first_cell_id).innerHTML == currentPlayer;
//       var second_comparison = document.getElementById("cell" + second_cell_id).innerHTML == currentPlayer;
//       var third_comparison = document.getElementById("cell" + third_cell_id).innerHTML == currentPlayer;
//       var result = first_comparison && second_comparison && third_comparison;
//       return result;
//     }

//     function isDiagonalSameSymbols(currentPlayer) {
//       var firstDiagonalCheck = (document.getElementById("cell1").innerHTML == currentPlayer &&
//         document.getElementById("cell5").innerHTML == currentPlayer &&
//         document.getElementById("cell9").innerHTML == currentPlayer);
//       var secondDiagonalCheck = (document.getElementById("cell3").innerHTML == currentPlayer &&
//         document.getElementById("cell5").innerHTML == currentPlayer &&
//         document.getElementById("cell7").innerHTML == currentPlayer);
//       return firstDiagonalCheck || secondDiagonalCheck;
//     }

//     $scope.clearBoard = function() {
//       for ( var i=1 ; i <= 9; i++ ) {
//         var currentCell = document.getElementById("cell" + i);

//         // <div class="cell x">x</div>
//         // <div class="cell o">o</div>
//         // <div class="cell">x</div>
//         currentCell.innerHTML = "";
//         currentCell.classList.remove("x");
//         currentCell.classList.remove("o");
//       }
    
//     }

//     function restartGame() {
//       // setTimeout(function() { clearBoard(); }, 1000);
//       $scope.currentSymbol = "x";
//       clearBoard();
//     }

//     function selectRandomSquare(currentPlayer) {
//       var randomNumber;

//       do {
//         randomNumber = Math.floor((Math.random()*9)+1);
//       } while( !notOccupied(randomNumber) );

//       makeNextMove(randomNumber, currentPlayer);
//     }    
//   });


// // angular.module('newLocalStorageApp')
// //   .controller('MainCtrl',function ($scope, localStorageService){
// //     localStorageService.add("names", ["Matt", "peter", "Someone Else"])
// //   });