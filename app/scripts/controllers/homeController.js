//home controller
app.controller('homeController', ['$scope', '$http', function ($scope, $http) {
  $( "#accordion" ).accordion();

    }]);

    function edit_row(no)
    {
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

     name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
     image.innerHTML="<input type='file' id='image_file"+no+"' value='"+image_data+"'>";
     price.innerHTML="<input type='text' id='price_text"+no+"' value='"+price_data+"'>";
     discount.innerHTML="<input type='text' id='discount_text"+no+"' value='"+discount_data+"'>";
    }

    function save_row(no)
    {
     var name_val=document.getElementById("name_text"+no).value;
     var image_val=document.getElementById("image_file"+no).value;
     var price_val=document.getElementById("price_text"+no).value;
     var discount_val=document.getElementById("discount_text"+no).value;

     document.getElementById("name_row"+no).innerHTML=name_val;
     document.getElementById("image_row"+no).innerHTML=image_val;
     document.getElementById("price_row"+no).innerHTML=price_val;
     document.getElementById("discount_row"+no).innerHTML=discount_val;

     document.getElementById("edit_button"+no);
     document.getElementById("save_button"+no);
    }

    function delete_row(no)
    {
     document.getElementById("row"+no+"").outerHTML="";
    }

    function add_row()
    {
     var new_name=document.getElementById("new_name").value;
     var new_image=document.getElementById("new_image").value;
     var new_price=document.getElementById("new_price").value;
     var new_discount=document.getElementById("new_discount").value;

     var table=document.getElementById("productTable");
     var table_len=(table.rows.length)-1;
     var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='image_row"+table_len+"'>"+new_image+"</td><td id='price_row"+table_len+"'>"+new_price+"</td><td id='discount_row"+table_len+"'>"+new_discount+"</td><td><span class='glyphicon glyphicon-pencil' onclick='edit_row("+table_len+")'</span></td><td><span class='glyphicon glyphicon-floppy-saved' onclick='save_row("+table_len+")'</span></td><td><span class='glyphicon glyphicon-trash' onclick='delete_row("+table_len+")'</span></td></tr>";

     document.getElementById("new_name").value="";
     document.getElementById("new_image").value="";
     document.getElementById("new_price").value="";
     document.getElementById("new_discount").value="";
    }

    $(document).ready(function() {
        $('#productTable').DataTable( {
            "pagingType": "full_numbers"
        } );
    } );
