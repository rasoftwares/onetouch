var app = angular.module('oneTouchApp', ['ngRoute', 'firebase']);

//TODO: Declaring all of the global variables
//firebase reference global object across application
var ref;
var firebaseURL = 'https://onetouch-d52d4.firebaseio.com/';
var environment = 'dev';
var dataStore = 'request';
var authKey = 've8PdopndzS3yD35SMF6KAd4VKpHQuxUotXNeHGw';
var appURL = firebaseURL + environment + "/" + dataStore +".json?auth="+ authKey;
var all_appURL = firebaseURL + environment + "/" + dataStore ;
//Source directory where all of the html fragments are placed
var src_dir = "app/views/";


/* Routing logic of the app */
app.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/',{ templateUrl: src_dir +'home.html'})
    .when('/list',{ templateUrl: src_dir +'list.html'})
    .when('/settings',{ templateUrl: src_dir +'settings.html'})
    .otherwise({redirectTo: '/'});
}]);

// Routing logic ends

app.controller('AppCtrl', ['$scope', '$http', function ($scope, $http, $compile) {
    //setup firebase
    if(ref == null) {
      console.log("creating new firebase object and attaching to controller")
      ref = new Firebase(all_appURL);
      ref.authWithCustomToken(authKey, function(error, authData) {
        if (error) {
          console.log("Authentication Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });
    }
    else{
      console.log("Firebase already connected");
    }
  }])
  .filter('pretty', function() {
    return function (input) {
      var temp;
      try {
        temp = angular.fromJson(input);
      }
      catch (e) {
        temp = input;
      }

      return angular.toJson(temp, true);
    };
  });

function print(message){
  if ( console && console.log ) {
      console.log(message);
    }
}

//view data from json :

function isObject(arg) {
  return Object.prototype.toString.call(arg)==='[object Object]';
}

function populateForm(a) {
  if (!isObject(a)) return;
  for (var i in a) {
    var el = document.getElementById(i) || document.querySelector('[name=' + i + ']');
    if (el.type==='radio') el = document.querySelectorAll('[name=' + i + ']');
    switch (typeof a[i]) {
      case 'number':
        el.checked = a[i];
        break;
      case 'object':
        if (el.options && a[i] instanceof Array) {
          for (var j=0, jmax=el.options.length; j<jmax; ++j) {
            if (a[i].indexOf(el.options[j].value)>-1) el.options[j].selected = true;
          }
        }
        break;
      default:
        if (el instanceof NodeList) {
          for (var k=0, kmax=el.length; k<kmax; ++k) {
            if (el[k].value===a[i]) el[k].checked = true;
          }
        } else {
          el.value = a[i];
        }
    }
  }

}
