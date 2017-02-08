
// navigation Controller for all of the applications menu and associated configurations

angular.module('oneTouchApp').controller('navController', function($scope){
  $scope.applicationName = 'One Touch Apps';
  $scope.search_title="GO";

  /* Dynamic menu and it's properties */
  $scope.menuItems = [{"name":"Home", "url": "/", "onClick":"home", "visible" : true},
                    {"name":"Settings", "url": "settings", "onClick":"settings", "visible" : false},
                    {"name":"List", "url": "/list", "onClick":"list", "visible" : true}
             ];

  //enable Search form field if the below setting is set to true
  $scope.enableSearch = false;

  $scope.settings = function(){ };

});
