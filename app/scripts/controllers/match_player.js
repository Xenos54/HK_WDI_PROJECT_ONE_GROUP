angular.module('tickeyApp')
	.controller('MatchPlayerCtrl',function ($scope, angularFire, $location) {
		$scope.waitingRoom ={};
		var waitingRoomRef= new Firebase("https://ticdb.firebaseio.com/");
		$scope.promise = angularFire(waitingRoomRef, $scope, "waitingRoom");


		$scope.promise.then (function () {
			if ($scope.waitingRoom.xJoined == true) {
			$scope.joinWaitingRoom();
		} else {
			$scope.createWaitingRoom();
		}
	    });

		$scope.createWaitingRoom = function() {
			$scope.waitingRoom ={xJoined: true, gameBoardNumber: generateGameBoardNumber()};
			$scope.noticeMessage = "You are x, waiting or oppenent.";

			waitingRoomRef.on('child_removed', function(snapshot){
				// should double check if the I am paired
				"https//localhost"
				$location.path('game_board/' + $scope.waitingRoom.gameBoardNumber + '/x');
				console.log("createWaitingRoom")
			})
		}

$scope.joinWaitingRoom=function(){
	var gameBoardNumber= $scope.waitingRoom.gameBoardNumber;
	$scope.waitingRoom={};
	$location.path('game_board' + gameBoardNumber + '/o');
}

function generateGameBoardNumber() {
			return Math.floor(Math.random()*16777215).toString(16);
	}
});












