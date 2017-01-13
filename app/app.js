angular.module('app', ['dynform'])
  .controller('AppCtrl', ['$scope', function ($scope) {
    $scope.Form = {
      "fieldset-A": {
        "type": "fieldset",
        "label": "Company",
        "fields": {
          "companyname": {
            "type": "text",
            "label": "CompanyName",
            "placeholder": "text"
          },
          "registration no":{
            "type": "text",
            "label": "Registration no",
            "placeholder": "text"
          },
		    "title": {
            "type": "text",
            "label": "Title",
            "placeholder": "title"
          },
          "Registration Year": {
            "type": "date",
            "label": "Registration Year",
            "placeholder": "date"
          },
          "shortDescription": {
            "type": "textarea",
            "label": "ShortDescription",
            "placeholder": "ShortDescription"
          },
     "coordinates-fieldset": {
            "type": "fieldset",
            "label": "Owner",
        "fields": {
              "OwnerName": {
                "type": "text",
                "label": "OwnerName",
                "placeholder": "OwnerName",
               },
			    "photograph": {
                "type": "text",
                "label": "Image",
				"placeholder": "Url",
			    "source": ""
               },
          
		  }
			 
          },
	        		  
        }      
	 
	  },
  "fieldset-B": {
            "type": "fieldset",
            "label": "Contact",
        "fields": {
               "registeredAddress": {
                "type": "textarea",
                "label": "RegisteredAddress",
                "placeholder": "registeredAddress",
                },
				"officeAddress": {
                "type": "textarea",
                "label": "OfficeAddress",
                "placeholder": "officeAddress",
                },
					
			  "landlineNumber": {
                "type": "number",
                "label": "LandlineNumber",
                "placeholder": "LandlineNumber",
                },
			  "mobileNumber": {
                "type": "number",
                "label": "MobileNumber",
                "placeholder": "mobileNumber",
                },
				"emailId": {
                "type": "email",
                "label": "EmailId",
                "placeholder": "emailid"
                },
			       }
          },
	 
		   
	 "fieldset-c": {
            "type": "fieldset",
            "label": "website",
        "fields": {
             "website": {
                "type": "text",
                "label": "website",
                "placeholder": "website"
                },
				 "aboutcompany": {
                "type": "textarea",
                "label": "AboutCompany",
                "placeholder": "aboutcompany"
                },
				 "aboutBusiness": {
                "type": "textarea",
                "label": "AboutBusiness",
                "placeholder": "aboutBusiness"
                },
				}
			 	
          },
				
    "fieldset-D": {
            "type": "fieldset",
            "label": "Gallary",
         "fields": {
             "name1": {
                "type": "text",
                "label": "Image",
				"placeholder": "Url",
                 "source": ""
                },
				  "name2": {
                "type": "text",
                "label": "Image",
				"placeholder": "Url",
                 "source": ""
                },
			      "name3": {
                "type": "text",
                "label": "Image",
				"placeholder": "Url",
                 "source": ""
                },
				}
        },
           
	"fieldset-E": {
            "type": "fieldset",
            "label": "Product",
            "fields": {
             "productname": {
                "type": "text",
                "label": "ProductName",
                 "placeholder": "productname"
                },
				 "price": {
                "type": "number",
                "label": "Price",
                 "placeholder": "price"
                },
				 "Discount": {
                "type": "number",
                "label": "Discount",
                 "placeholder": "discount"
                },
				 }
          },
	"fieldset-F": {
            "type": "fieldset",
            "label": "Services",
            "fields": {
             "productname": {
                "type": "text",
                "label": "ServiceName",
                 "placeholder": "servicename"
                },
				 "description": {
                "type": "textarea",
                "label": "description",
                 "placeholder": "description"
			
                },
				"brandImageIcon": {
                "type": "text",
                "label": "brandImageIcon",
				"placeholder": "Url",
                 "source":""
                },
				"copyright": {
                "type": "text",
                "label": "Copyright",
                "placeholder": "copyright"
                },
				 "applicationType": {
                "type": "text",
                "label": "ApplicationType",
                 "placeholder": "applicationType"
                },
				 "category": {
                "type": "text",
                "label": "Category",
                 "placeholder": "category"
                },
				 "type": {
                "type": "text",
                "label": "Type",
                 "placeholder": "type"
                },
				"item": {
                "type": "text",
                "label": "Item",
                 "placeholder": "Item"
                },
				"summary": {
                "type": "textarea",
                "label": "Summary",
                "placeholder": "summary"
				 
                },
	}
	   },
      "submit": {
        "type": "submit",
        "label": "submit"
      }
   
    };
    $scope.stdFormData = {};
   // $scope.urlFormData = {};
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