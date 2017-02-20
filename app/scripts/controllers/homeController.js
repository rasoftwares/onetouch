//home controller
var debug = true;

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
    $scope.product = $scope.remove($scope.product,("product_row_"+index));
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
            if(debug)console.log('fetching values ' + value + '-' +  $scope.item[value]);
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






























function edit_row(no) {
     document.getElementById("edit_button"+no);
     document.getElementById("save_button"+no);

     var name=document.getElementById("name_row"+no);
     var image=document.getElementById("image_row"+no);
     var price=document.getElementById("price_row"+no);
     var discount=document.getElementById("discount_row"+no);

     var name_data=name.innerHTML;
     var image_data=price.innerHTML;
      var price_data=price.innerHTML;
     var discount_data=discount.innerHTML;


  };


    /*function for servie catalog*/

          function edit_rows(no)
          {
           document.getElementById("edit_button"+no);
           document.getElementById("save_button"+no);

           var s_name=document.getElementById("s_name_row"+no);
           var s_price=document.getElementById("s_price_row"+no);
           var s_discount=document.getElementById("s_discount_row"+no);
           var s_discription=document.getElementById("s_discription_row"+no);

           var s_name_data=s_name.innerHTML;
           var s_price_data=s_price.innerHTML;
           var s_discount_data=s_discount.innerHTML;
           var s_discription_data=s_discount.innerHTML;

           s_name.innerHTML="<input type='text' id='s_name_text"+no+"' value='"+s_name_data+"'>";
           s_price.innerHTML="<input type='text' id='s_price_text"+no+"' value='"+s_price_data+"'>";
           s_discount.innerHTML="<input type='text' id='s_discount_text"+no+"' value='"+s_discount_data+"'>";
           s_discription.innerHTML="<input type='text' id='s_discription_text"+no+"' value='"+s_discription_data+"'>";
          }

          function save_rows(no)
          {
           var s_name_val=document.getElementById("s_name_text"+no).value;
           var s_price_val=document.getElementById("s_price_text"+no).value;
           var s_discount_val=document.getElementById("s_discount_text"+no).value;
           var s_discription_val=document.getElementById("s_discription_text"+no).value;

           document.getElementById("s_name_row"+no).innerHTML=s_name_val;
           document.getElementById("s_price_row"+no).innerHTML=s_price_val;
           document.getElementById("s_discount_row"+no).innerHTML=s_discount_val;
           document.getElementById("s_discription_row"+no).innerHTML=s_discription_val;


           document.getElementById("edit_button"+no);
           document.getElementById("save_button"+no);
          }

          function delete_rows(no)
          {
           document.getElementById("row"+no+"").outerHTML="";
          }

          function add_rows()
          {
           var new_s_name=document.getElementById("new_s_name").value;
           var new_s_price=document.getElementById("new_s_price").value;
           var new_s_discount=document.getElementById("new_s_discount").value;
           var new_s_discription=document.getElementById("new_s_discription").value;


           var table=document.getElementById("ServiceTable");
           var table_len=(table.rows.length)-1;
           var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='s_name_row"+table_len+"'>"+new_s_name+"</td><td id='s_price_row"+table_len+"'>"+new_s_price+"</td><td id='s_discount_row"+table_len+"'>"+new_s_discount+"</td><td id='s_discription_row"+table_len+"'>"+new_s_discription+"</td><td><span class='glyphicon glyphicon-pencil' onclick='edit_rows("+table_len+")'</span></td><td><span class='glyphicon glyphicon-floppy-saved' onclick='save_rows("+table_len+")'</span></td><td><span class='glyphicon glyphicon-trash' onclick='delete_rows("+table_len+")'</span></td></tr>";

           document.getElementById("new_s_name").value="";
           document.getElementById("new_s_price").value="";
           document.getElementById("new_s_discount").value="";
           document.getElementById("new_s_discription").value="";
          }

          function deleterow(index) {
            console.log('Deleting row id :' + "row_" + index);
            //document.getElementById("row_"+no).outerHTML="";
            $('#row_'+index).remove();
          };

//var a = data;
//var b = productdata;
//console.log(JSON.stringify(mergeObjs(a, b)));

//});
//});
  //}]);
