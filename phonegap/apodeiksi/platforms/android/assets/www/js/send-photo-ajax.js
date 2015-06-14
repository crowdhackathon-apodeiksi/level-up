function send_photo_ajax(photo) {

    //-----------------------------------------------------------------------
    // 2) Send a http request with AJAX http://api.jquery.com/jQuery.ajax/
    //-----------------------------------------------------------------------
    $.ajax({     
		type: "POST",	
		url: '.../get_photo.php',                  //the script to call to get data          
		data: {photo:photo},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     


	  //data format      
      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
        //var id = data[0];              //get id
        //var email = data[9]; 
        //var phone = data[10];  
		  //get name
        //--------------------------------------------------------------------
        // 3) Update html content
        //--------------------------------------------------------------------
		
		
    //    $(".email").val(email);

		//$(".phone").val(phone);
		
		
		//Set output element html
        //recommend reading up on jquery selectors they are awesome 
        // http://api.jquery.com/category/selectors/
      } 
    });
  } 
