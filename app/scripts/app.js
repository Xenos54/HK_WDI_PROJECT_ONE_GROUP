angular.module('tickeyApp', ['firebase'])

  .config(function ($routeProvider){
    $routeProvider
      .when('/game_board/:id/:mySymbol', {
          templateUrl: 'views/game_board.html',
          controller: 'GameBoardCtrl'
      })
      
      // .when('/game_board', {
      //     templateUrl: 'views/match_player.html',
      //     controller: 'GameBoardCtrl'
      //  })

      .when('/match_player', {
          templateUrl: 'views/match_player.html',
          controller: 'MatchPlayerCtrl'
       })

      .when('/how_to', {
          templateUrl: 'views/how_to.html',
          controller: 'how_toCtrl'
       })

      .when('/', {
          templateUrl: 'views/home_page.html',
          controller: 'MatchPlayerCtrl'
       })

      .otherwise({
          redirectTo: '/'
      });
  });

















