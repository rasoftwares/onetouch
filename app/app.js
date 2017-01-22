var app = angular.module('app', ['dynform']);

app.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    var environment = "dev";
    var dataStore = "request";
    var authKey = "ve8PdopndzS3yD35SMF6KAd4VKpHQuxUotXNeHGw";
    var appURL = "https://onetouch-d52d4.firebaseio.com/"+ environment + "/" + dataStore +".json?auth="+ authKey;

    

    $scope.formData = { };

    $scope.fromTemplate = templateData;


    $scope.processForm = function () {
        /* Handle the form submission... */
        console.log("Processing Submit Action");
        console.log($scope.formData);
    };


//data to object (json):
  $scope.formDataToObject = function (elForm) {
    console.log("---->" + elForm);

  if (!elForm instanceof Element) return;
  var fields = elForm.querySelectorAll('input, select, textarea'),
    a = {};
  for (var i=0, imax=fields.length; i<imax; ++i) {
    var field = fields[i],
      sKey = field.name || field.id;
    if (field.type==='button' || field.type==='image' || field.type==='submit' || !sKey) continue;
    switch (field.type) {
      case 'checkbox':
        a[sKey] = +field.checked;
        break;
      case 'radio':
        if (a[sKey]===undefined) o[sKey] = '';
        if (field.checked) a[sKey] = field.value;
        break;
      case 'select-multiple':
        var b = [];
        for (var j=0, jmax=field.options.length; j<jmax; ++j) {
          if (field.options[j].selected) a.push(field.options[j].value);
        }
        a[sKey] = a;
        break;
      default:
        a[sKey] = field.value;
    }
  }
    console.log("Data :" + a);

     //var submissionsRef = new Firebase('https://form-example-22b8c.firebaseio.com/submissions');

   //data format:
   var data = a;

   $http({
      method: 'POST',
      url: appURL,
      data: data
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log("Saved data successfully" + response.status);
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log("Failed to save data" + response.status);
        console.log("ERROR" + response.error);

      });


  /*submissionsRef.push(data, function(err) {
    if (err) {
        window.alert('Error when submitting data: ' + err.message);
    }
   });
  window.alert('Submitted answers: \n' + JSON.stringify(data, null, 2));
 */
    //console.log('Form data:' + JSON.stringify(a, null, 2));
    Form.reset();

    return a;
  
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
  
  

 
 
 //view data:
 var aFormData = {
  "companyName": "rablion",
  "registrationNo": "1234",
  "title": "catalog",
  "RegistrationYear": "2016",
  "shortDescription": "software",
  "OwnerName": "ownerer",
  "photograph": "",
  "registeredAddress": "kelambakkam",
  "officeAddress": "kelambakkam",
  "landlineNumber": "03334444",
  "mobileNumber": "1234567890",
  "emailId": "mail@gamil.com",
  "website": "www.rablion.com",
  "aboutcompany": "it",
  "aboutBusiness": "it",
  "name1": "",
  "name2": "",
  "name3": "",
  "productname": "catalog",
  "price": "1000",
  "Discount": "20",
  "Servicename": "avrs",
  "description": "shopping",
  "brandImageIcon": "",
  "copyright": "@avrs",
  "applicationType": "moblie app",
  "category": "textile",
  "type": "product",
  "item": "all",
  "summary": "textil business"
};




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
          for (var j=0, jmax=el.length; j<jmax; ++j) {
            if (el[j].value===a[i]) el[j].checked = true;
          }
        } else {
          el.value = a[i];
        }
    }
  }

}
