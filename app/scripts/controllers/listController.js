app.controller('listController', function ($scope, $http, $firebaseObject) {
  $scope.data = [];

  $scope.getRequestList = function(){

  var ref = new Firebase(all_appURL);
  ref.authWithCustomToken(authKey, function(error, authData) {
    if (error) {
      console.log("Authentication Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });

  ref.on("value", function(snapshot) {
    console.log("Key -> " + snapshot.key());
    console.log("Object ->" + snapshot.exportVal());
    $scope.data = snapshot.val();

    //var = $.('#listTable').html();
    console.log
    _.each(snapshot.exportVal(), function(element,idx,list){
      console.log(idx + ":" + element);
      $('#listTable').append( '<tr>'+
                                    '<td>' + idx + '</td>'
                                +   '<td> ' + element.company.owner.name + '</td>'
                                +   '<td> ' + element.company.name + '</td>'
                                +   '<td> ' + element.company.registrationyear + '</td>'
                                +   '<td> <a href="#/list" >' + 'view' + '</a></td>'
                                +   '<td> ' + element.status + '</td>'
                                +   '<td> <a class="btn" href="">' + element.ios + '</a</td>'
                                +   '<td> <a class="btn" href="">' + element.android + '</a></td>'
                                +'</tr>' );

    });

  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

};

});
