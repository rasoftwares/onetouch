//home controller
app.controller('homeController', ['$scope', '$http', function ($scope, $http) {
  $( "#accordion" ).accordion();

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
     form.reset();
     return o;
  };

  $('#submit').click(function(e) {
     e.preventDefault();
     var data = $('form').serializeObject();

    // console.log(data);
     console.log(JSON.stringify(data));


  });

  /*product table */

  $(function () {
      var addInputRow = function () {
          $('#input').append($('#template').html());
      };

      addInputRow();
      $('#ActionAddRow').on('click', addInputRow);
      $('#ActionSubmit').on('click', function () {
          var productdata = $('#input tr').map(function () {
              var values = {};
              $('input', $(this)).each(function () {
                  if (this.type === 'checkbox') {
                      values[this.name] = this.checked;
                  } else {
                      values[this.name] = this.value;
                  }
              });
              return values;
          }).get()
        //console.log(productdata);
          console.log(JSON.stringify(productdata));
    });
  });

/*service table function*/

  $(function () {
      var addInputRow = function () {
          $('#serviceinput').append($('#template').html());
      };

      addInputRow();
      $('#AddRow').on('click', addInputRow);
      $('#Submit').on('click', function () {
          var servicedata = $('#serviceinput tr').map(function () {
              var values = {};
              $('input', $(this)).each(function () {
                  if (this.type === 'checkbox') {
                      values[this.name] = this.checked;
                  } else {
                      values[this.name] = this.value;
                  }
              });
              return values;
          }).get()
      //  console.log(servicedata);
          console.log(JSON.stringify(servicedata));
    });
  });

/*merge to object */
   function mergeObjs(def, obj) {
    if (typeof obj == 'undefined') {
        return def;
    } else if (typeof def == 'undefined') {
        return obj;
    }
    for (var i in obj) {
        if (obj[i] != null && obj[i].constructor == Object) {
            def[i] = mergeObjs(def[i], obj[i]);
        } else {
            def[i] = obj[i];
        }
    }
    return def;
}

//var a = data;
//var b = productdata;
//console.log(JSON.stringify(mergeObjs(a, b)));

//});
//});
  }]);
