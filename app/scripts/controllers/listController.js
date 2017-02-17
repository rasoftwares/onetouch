app.controller('listController', function ($scope, $http, $firebaseObject, $compile) {
  $scope.data = [];

  $scope.removeTableBody = function (){
    if(debug) console.log('Removing table body');
    $('#requestList').empty();
  };

  $scope.deleterow = function(colidx){
    console.log('Going to delete a request :' + colidx);
    //$('#requestList').append(temp);
  };

  ref.on("value", function(snapshot) {
    $scope.data = snapshot.val();
    var cnt = 1;
    //remove exisiting request list
    $scope.removeTableBody();
    var template;
    _.each(snapshot.exportVal(), function(element,idx,list) {
      template =  '<tr>'+
                      '<td>' + cnt + '</td>' +
                      '<td> ' + element.company.owner.name + '</td>' +
                      '<td> ' + element.company.name + '</td>' +
                      '<td> ' + element.company.registrationYear + '</td>'+
                      '<td> <a href="#/list" >' + 'view' + '</a></td>' +
                      '<td> ' + element.status + '</td>' +
                      '<td> <a class="btn" href="">' + element.ios + '</a</td>' +
                      '<td> <a class="btn" href="">' + element.android + '</a></td>' +
                      '<td> <a id="row_'+ cnt +'" class="btn" ng-click="deleterow(x_'+ cnt +')">' + cnt++ + '</a></td>' +
                  '</tr>';

        var temp = $compile(template)($scope);
        console.log(temp);
        //console.log(idx);
        //angular.element('#requestList').append(temp);
        $('#requestList').append(temp);
    });

  }, function (errorObject) {
    console.log("Error reading from datasource: " + errorObject.code);
  });


  /* download android app */
  $scope.downloadAndroidApp = function () {

  };

  /* download ios app */
  $scope.downloadiIOSApp = function (){

  };


});
