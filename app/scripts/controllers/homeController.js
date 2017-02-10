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
           var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='s_name_row"+table_len+"'>"+new_s_name+"</td><td id='s_price_row"+table_len+"'>"+new_s_price+"</td><td id='s_discount_row"+table_len+"'>"+new_s_discount+"</td><td id='s_discription_row"+table_len+"'>"+new_s_discription+"</td><td><span class='glyphicon glyphicon-plus' onclick='edit_rows("+table_len+")'</span></td><td><span class='glyphicon glyphicon-edit' onclick='save_rows("+table_len+")'</span></td><td><span class='glyphicon glyphicon-trash' onclick='delete_rows("+table_len+")'</span></td></tr>";

           document.getElementById("new_s_name").value="";
           document.getElementById("new_s_price").value="";
           document.getElementById("new_s_discount").value="";
           document.getElementById("new_s_discription").value="";
          }
