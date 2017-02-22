//home controller
var debug = true;
var fine = false;

app.controller('homeController', ['$scope', '$http', '$compile', function ($scope, $http, $compile) {
  $( "#accordion").accordion({
    heightStyle: "fill"
  });

  $scope.firebase_status = "";

/*form to object */
  var formToObj = function (obj, name, value) {
     var path = name.split('.'),
     current = obj,
     len = path.length - 1,
     i = 0;
     for (; i < len; i++) {
         current[path[i]] = current[path[i]] || {};
         current = current[path[i]];
     }
     if ( 0 < path[i].indexOf( "[]" ) ) {
         name = path[i].replace('[]', '');
         current[name] = current[name] || [];
         current[name].push(value);
     } else {
         current[path[i]] = value;
     }
     return obj;
  };

  jQuery.fn.serializeObject = function () {
     var o = {},
     a = this.serializeArray(),
     i = 0,
     len = a.length;
     for (; i < len; i++) {
         o = formToObj(o, a[i].name, a[i].value);
     }

     //form.reset();
     return o;
  };

  $scope.productListKeys = ['name','image', 'price', 'discount'];
  $scope.product = [];
  $scope.item = getObject();

  $scope.remove = function (arr, valToRemove) {
    var narr = [];
    _.each(arr,function(value, index,arr){
      if(debug)console.log('value->' + value + ":" + valToRemove);
      if(debug)console.log('inside remove() :  ' + (""+value).search(valToRemove));

      if((""+value).search(valToRemove) >= 0) {

      }else{
        narr.push(value);
      }
    });
    if(debug)console.log(arr);
    if(debug)console.log(narr)
    return narr;
  };
  //ServiceTable
  $scope.serviceListKeys = ['servicename','price', 'discount','description'];
  $scope.service = [];
  $scope.serviceitem = ServicegetObject();

  $scope.serviceremove = function (arr, valToRemove) {
    var narr = [];
    _.each(arr,function(value, index,arr){
      if(debug)console.log('inside remove() :  ' + (""+value).search(valToRemove));

      if((""+value).search(valToRemove) >= 0) {

      }else{
        narr.push(value);
      }
    });
    if(debug)console.log(arr);
    if(debug)console.log(narr)
    return narr;
  };




  $scope.submitRequest = function() {
    var data = $('form').serializeObject();
    data.product = $scope.product;
    data.service = $scope.service;
    data.ios = "";
    data.android = "";
    data.status = "New";
    data.requestDate = "Date to be passed";
    if(debug)console.log(data);
    var response = ref.push(data);
    console.log('response :' + response);
  };


  function getObject() {
    var f = new File([""], "");
    var emptyObj = {name:'', image:f, price:'',discount:''};
    return emptyObj;
  }
  //service--
  function ServicegetObject() {
    var f = new File([""], "");
    var emptyObj = {servicename:'',price:'',discount:'',description:''};
    return emptyObj;
  }

  //TODO: Deleting row functionality is not working
  $scope.deleterow = function(index) {
    console.log('Deleting row id :' + "row_" + index);
    //document.getElementById("row_"+no).outerHTML="";
    //remove from ui
    $('#product_row_'+index).remove();
    $scope.product.splice(index-1,1);
    if(debug)console.log("$scope.product :" + $scope.product);
    //remove from $scope.product list

  };

  //service delete row--
  $scope.servicedeleterow = function(index) {
    console.log('Deleting row id :' + "row_" + index);
    //document.getElementById("row_"+no).outerHTML="";
    //remove from ui
    $('#service_row_'+index).remove();
    $scope.service = $scope.remove($scope.service,("service_row_"+index));
    //remove from $scope.service list

  };

//product table addrow--
  $scope.addrow = function(tableName) {
    console.log("Tablename :"+ tableName);

    if(debug)console.log(tableName);
    if(debug)console.log("values of item :" + _.values($scope.item));
    if(debug)console.log("json string of item :" + JSON.stringify($scope.item));

    if(debug)console.log("Productlist :" + $scope.product);

    //TODO: table name should be externalised
    var tableName = 'productTable';
    var table = document.getElementById(tableName);
    var table_len = (table.rows.length)-1;

    var html = "<tr id='product_row_" + table_len + "'>";
        _.each($scope.productListKeys, function(value, index, list) {
            if(fine)console.log('fetching values ' + value + '-' +  $scope.item[value]);
              html += "<td id='" + value + "_row_" + table_len + "'>" + $scope.item[value] + "</td>";
        });

        html += "<td><span class='glyphicon glyphicon-pencil' click='edit_row(" + table_len + ")'</span></td><td><span class='glyphicon glyphicon-floppy-saved' ng-click='save_row(" + table_len + ")'</span></td>";
        html += "<td><a id='deleteProduct_"+ table_len +"' class='btn' ng-click='deleterow(" + table_len + ");'> <span class='glyphicon glyphicon-trash'></span></a> </td>";
        html += "</tr>";

        var t_html = $compile(html)($scope);
        if(debug)console.log(t_html);

        $('#productTableBody').append(t_html);
        $scope.product.push($scope.item);
        //clear off input fields;
        $scope.item = getObject();
  };

//service--table add row
  $scope.serviceaddrow = function(tableName) {
  console.log("Tablename :"+ tableName);

  if(debug)console.log(tableName);
  if(debug)console.log("values of item :" + _.values($scope.serviceitem));
  if(debug)console.log("json string of item :" + JSON.stringify($scope.serviceitem));

  if(debug)console.log("Servicelist :" + $scope.service);

  //TODO: table name should be externalised
  var tableName = 'serviceTable';
  var table = document.getElementById(tableName);
  var table_len = (table.rows.length)-1;

  var html = "<tr id='service_row_" + table_len + "'>";
      _.each($scope.serviceListKeys, function(value, index, list) {
          if(debug)console.log('fetching values ' + value + '-' +  $scope.serviceitem[value]);
            html += "<td id='" + value + "_row_" + table_len + "'>" + $scope.serviceitem[value] + "</td>";
      });

      html += "<td><span class='glyphicon glyphicon-pencil' click='edit_row(" + table_len + ")'</span></td><td><span class='glyphicon glyphicon-floppy-saved' ng-click='save_row(" + table_len + ")'</span></td>";
      html += "<td><a id='deletetService_"+ table_len +"' class='btn' ng-click='servicedeleterow(" + table_len + ");'> <span class='glyphicon glyphicon-trash'></span></a> </td>";
      html += "</tr>";

      var t_html = $compile(html)($scope);
      if(debug)console.log(t_html);

      $('#serviceTableBody').append(t_html);
      $scope.service.push($scope.serviceitem);
      //clear off input fields;
      $scope.serviceitem = ServicegetObject();
};

}]);
