angular.module('tickeyApp', [])
  .config(function ($routeProvider){
    $routeProvider
      .when('/game_board', {
          templateUrl: 'views/game_board.html',
          controller: 'GameBoardCtrl'
      })


      .when('/how_to', {
          templateUrl: 'views/how_to.html',
          controller: 'how_toCtrl'
      })


      .otherwise({
          redirectTo: '/'
      })
  });


















