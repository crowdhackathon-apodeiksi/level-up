var katanalotis_id='katanalotis_id';

function receive_eksodaepixeirisi_data() {

    $.ajax({     
		type: "POST",	
		url: '.../receive_eksodaepixeirisi_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
    
	html="<div class='grid' data-appbuilder-object='grid2' data-position='static'>"    
		"</div>";
	
	
$.each( data, function( key, value ) {

html+="<br><div class='grid' data-appbuilder-object='grid2' data-position='static'>"+"<br />"+
				"<div class='container col3'>ΕΠΙΧΕΙΡΗΣΗ</div>"+
				"<div class='container col2' data-appbuilder-object='container'>"+value[0]+"</div>"+	
				"<div class='container col3'>ΕΞΟΔΑ</div>"+         
				"<div class='container col2' data-appbuilder-object='container'>"+value[1]+" &euro;</div>"      
		"</div>";
 
});

	  

$('#deikse_statistika').html(html);


      } 
    });
  } 
  
  function receive_eksodakatigoria_data() {

    $.ajax({     
		type: "POST",	
		url: '.../receive_eksodakatigoria_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
    
	html="<div class='grid' data-appbuilder-object='grid2' data-position='static'>"    
		"</div>";
	
	
$.each( data, function( key, value ) {

html+="<br><div class='grid' data-appbuilder-object='grid2' data-position='static'>"+"<br />"+
				"<div class='container col3'>ΚΑΤΗΓΟΡΙΑ</div>"+
				"<div class='container col2' data-appbuilder-object='container'>"+value[0]+"</div>"+	
				"<div class='container col3'>ΕΞΟΔΑ</div>"+         
				"<div class='container col2' data-appbuilder-object='container'>"+value[1]+" &euro;</div>"      
		"</div>";
 
});



$('#deikse_statistika').html(html);


      } 
    });
  } 
  
  function receive_eksodamina_data() {

    $.ajax({     
		type: "POST",	
		url: '.../receive_eksodamina_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
    
	html="<div class='grid' data-appbuilder-object='grid2' data-position='static'>"    
		"</div>";
	
	
$.each( data, function( key, value ) {

html+="<br><div class='grid' data-appbuilder-object='grid2' data-position='static'>"+"<br />"+
				"<div class='container col3'>ΜΗΝΑΣ</div>"+
				"<div class='container col2' data-appbuilder-object='container'>"+"2015"+value[0]+"</div>"+	
				"<div class='container col3'>ΕΞΟΔΑ</div>"+         
				"<div class='container col2' data-appbuilder-object='container'>"+value[1]+" &euro;</div>"      
		"</div>";
 
});

//////////////////////////////KERDOS///////////////////////

$('#deikse_statistika').html(html);


      } 
    });
  } 
  function receive_kerdosepixeirisi_data() {

    $.ajax({     
		type: "POST",	
		url: '.../receive_kerdosepixeirisi_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
    
	html="<div class='grid' data-appbuilder-object='grid2' data-position='static'>"    
		"</div>";
	
	
$.each( data, function( key, value ) {

html+="<br><div class='grid' data-appbuilder-object='grid2' data-position='static'>"+"<br />"+
				"<div class='container col3'>ΕΠΙΧΕΙΡΗΣΗ</div>"+
				"<div class='container col2' data-appbuilder-object='container'>"+value[0]+"</div>"+	
				"<div class='container col3'>ΕΞΟΔΑ</div>"+         
				"<div class='container col2' data-appbuilder-object='container'>"+value[1]+" &euro;</div>"      
		"</div>";
 
});



$('#deikse_statistika').html(html);


      } 
    });
  } 
  
  function receive_kerdoskatigoria_data() {

    $.ajax({     
		type: "POST",	
		url: '.../receive_kerdoskatigoria_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
    
	html="<div class='grid' data-appbuilder-object='grid2' data-position='static'>"    
		"</div>";
	
	
$.each( data, function( key, value ) {

html+="<br><div class='grid' data-appbuilder-object='grid2' data-position='static'>"+"<br />"+
				"<div class='container col3'>ΚΑΤΗΓΟΡΙΑ</div>"+
				"<div class='container col2' data-appbuilder-object='container'>"+value[0]+"</div>"+	
				"<div class='container col3'>ΕΞΟΔΑ</div>"+         
				"<div class='container col2' data-appbuilder-object='container'>"+value[1]+" &euro;</div>"      
		"</div>";
 
});



$('#deikse_statistika').html(html);


      } 
    });
  } 
  
  function receive_kerdosmina_data() {

    $.ajax({     
		type: "POST",	
		url: '.../receive_kerdosmina_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
   
	html="<div class='grid' data-appbuilder-object='grid2' data-position='static'>"    
		"</div>";
	
	
$.each( data, function( key, value ) {

html+="<br><div class='grid' data-appbuilder-object='grid2' data-position='static'>"+"<br />"+
				"<div class='container col3'>ΜΗΝΑΣ</div>"+
				"<div class='container col2' data-appbuilder-object='container'>"+"2015"+value[0]+"</div>"+	
				"<div class='container col3'>ΕΞΟΔΑ</div>"+         
				"<div class='container col2' data-appbuilder-object='container'>"+value[1]+" &euro;</div>"      
		"</div>";
 
});



$('#deikse_statistika').html(html);


      } 
    });
  } 
  
  
  
  
  ////////////////////////SYNOLO////////
  function receive_synoloepixeirisi_data() {

    $.ajax({     
		type: "POST",	
		url: '.../receive_synoloepixeirisi_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
    

	html="<div class='grid' data-appbuilder-object='grid2' data-position='static'>"    
		"</div>";
	
	
$.each( data, function( key, value ) {

html+="<br><div class='grid' data-appbuilder-object='grid2' data-position='static'>"+"<br />"+
				"<div class='container col3'>ΕΠΙΧΕΙΡΗΣΗ</div>"+
				"<div class='container col2' data-appbuilder-object='container'>"+value[0]+"</div>"+	
				"<div class='container col3'>ΕΞΟΔΑ</div>"+         
				"<div class='container col2' data-appbuilder-object='container'>"+value[1]+" &euro;</div>"      
		"</div>";
 
});



$('#deikse_statistika').html(html);


      } 
    });
  } 
  
  function receive_synolokatigoria_data() {

    $.ajax({     
		type: "POST",	
		url: '.../receive_synolokatigoria_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
    

	html="<div class='grid' data-appbuilder-object='grid2' data-position='static'>"    
		"</div>";
	
	
$.each( data, function( key, value ) {

html+="<br><div class='grid' data-appbuilder-object='grid2' data-position='static'>"+"<br />"+
				"<div class='container col3'>ΚΑΤΗΓΟΡΙΑ</div>"+
				"<div class='container col2' data-appbuilder-object='container'>"+value[0]+"</div>"+	
				"<div class='container col3'>ΕΞΟΔΑ</div>"+         
				"<div class='container col2' data-appbuilder-object='container'>"+value[1]+" &euro;</div>"      
		"</div>";
 
});



$('#deikse_statistika').html(html);


      } 
    });
  } 
  
  function receive_synolomina_data() {

    $.ajax({     
		type: "POST",	
		url: '.../receive_synolomina_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
    

	html="<div class='grid' data-appbuilder-object='grid2' data-position='static'>"    
		"</div>";
	
	
$.each( data, function( key, value ) {

html+="<br><div class='grid' data-appbuilder-object='grid2' data-position='static'>"+"<br />"+
				"<div class='container col3'>ΜΗΝΑΣ</div>"+
				"<div class='container col2' data-appbuilder-object='container'>"+"2015"+value[0]+"</div>"+	
				"<div class='container col3'>ΕΞΟΔΑ</div>"+         
				"<div class='container col2' data-appbuilder-object='container'>"+value[1]+" &euro;</div>"      
		"</div>";
 
});



$('#deikse_statistika').html(html);


      } 
    });
  } 
