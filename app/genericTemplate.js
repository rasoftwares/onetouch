var templateData = {
      "fieldset-A": {
        "type": "fieldset",
        "label": "Company",
        "fields": {
          "companyName": {
            "type": "text",
            "label": "CompanyName",
            "placeholder": "text"
          },
          "registrationNo":{
            "type": "text",
            "label": "RegistrationNo",
            "placeholder": "text"
          },
		    "title": {
            "type": "text",
            "label": "Title",
            "placeholder": "title"
          },
          "RegistrationYear": {
            "type": "date",
            "label": "RegistrationYear",
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
                "placeholder": "OwnerName"
               },
			    "photograph": {

				"id":"file",
                "type": "file",
                "label": "Photograph",
				"placeholder": "Url",
				"alt":"fileDispalyarea"

				}
		  }
          }

        }

	  },
  "fieldset-B": {
            "type": "fieldset",
            "label": "Contact",
        "fields": {
               "registeredAddress": {
                "type": "textarea",
                "label": "RegisteredAddress",
                "placeholder": "registeredAddress"
                },
				"officeAddress": {
                "type": "textarea",
                "label": "OfficeAddress",
                "placeholder": "officeAddress"
                },

			  "landlineNumber": {
                "type": "number",
                "label": "LandlineNumber",
                "placeholder": "LandlineNumber"
                },
			  "mobileNumber": {
                "type": "number",
                "label": "MobileNumber",
                "placeholder": "mobileNumber"
                },
				"emailId": {
                "type": "email",
                "label": "EmailId",
                "placeholder": "emailid"
                }
			       }
          },


	 "fieldset-c": {
            "type": "fieldset",
            "label": "Website",
        "fields": {
             "website": {
                "type": "text",
                "label": "Website",
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
                }
				}

          },

    "fieldset-D": {
            "type": "fieldset",
            "label": "Gallary",
         "fields": {
             "name1": {
                "type": "file",
                "label": "Image",
				"placeholder": "Url",
                 "source": ""
                },
				  "name2": {
                "type": "file",
                "label": "Image",
				"placeholder": "Url",
                 "source": ""

                },
			      "name3": {
                "type": "file",
                "label": "Image",
				"placeholder": "Url",
                 "source": ""
                }
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
                }
				 }
          },
	"fieldset-F": {
            "type": "fieldset",
            "label": "Services",
            "fields": {
             "Servicename": {
                "type": "text",
                "label": "ServiceName",
                 "placeholder": "servicename"
                },
				 "description": {
                "type": "textarea",
                "label": "Description",
                 "placeholder": "description"

                },
				"brandImageIcon": {
				"id":"brandImageIcon",
			    "name":"brandImageIcon",
                "type": "file",
                "label": "BrandImageIcon",
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

                }
	       }
	   }
  }
