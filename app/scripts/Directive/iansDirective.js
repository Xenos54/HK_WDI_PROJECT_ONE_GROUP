angular.module('tickeyApp')
  .directive("iansDirective",function(){
    return{
      restrict: 'A',
      link: function(scope, element, attrs) {      	
        console.log("linked");


        element.bind('click', function() {
          alert("MessageGoesHere");
        });
      }
  }
 })
