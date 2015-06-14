var katanalotis_id='katanalotis_id';


function receive_prosfores_data() {

    $.ajax({     
		type: "POST",	
		url: '.../receive_prosfores_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
    
	html="";
	
$.each( data, function( key, value ) {

html+="<li><a href='#"+value[7]+"' name='"+value[7]+"' onclick='return add_prosfora_id(this.name); '><h3>"+value[2]+" </h3><span style='font-weight: bold;' >"+value[4]+" ΠΟΝΤΟΙ, "+value[5]+" ΕΥΡΩ ΚΕΡΔΟΣ, "+value[6]+" CLICKS, </span><br>"+value[3]+"</a></li>";

});

$('#epixeiseisprosfores').html(html);

      } 
    });
  }
  
  function receive_prosfora_data(prosfora_id) {

    $.ajax({     
		type: "POST",	
		url: '.../receive_prosfora_data.php',                  //the script to call to get data          
		data: {prosfora_id:prosfora_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
    

var html="<h2>"+data[2]+"</h2><p style='font-weight: bold;'>"+data[3]+"</p><p>"+data[0]+", "+data[1]+"<br>ΠΟΝΤΟΙ: "+data[4]+" ΚΕΡΔΟΣ: "+data[5]+" ΕΥΡΩ"
+"<br>ΤΗΝ ΠΡΟΣΦΟΡΑ ΤΗΝ ΕΠΕΛΕΞΑΝ: "+data[8]+" ΚΑΤΑΝΑΛΩΤΕΣ</p>"
;
$('#epixeiseisprosfora').html(html);

      } 
    });
  }
  
  
  function send_prosfora_choose(prosfora_id) {

 
    $.ajax({     
		type: "POST",	
		url: '.../send_prosfora_katanaloti_chosen.php',                  //the script to call to get data          
		data: {prosfora_id:prosfora_id,katanalotis_id:katanalotis_id,status:'CHOSEN'},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  if (data=='NOT EXIST'){
		  alert ('ΟΙ ΠΟΝΤΟΙ ΣΑΣ ΔΕΝ ΕΙΝΑΙ ΑΡΚΕΤΟΙ');
	  }else if (data=='EXIST'){receive_pers_data(katanalotis_id); alert ('ΑΓΟΡΑΣΤΗΚΕ ΕΠΙΤΥΧΩΣ'); }

      } 
    });
  }
  
    function send_prosfora_reject(prosfora_id) {

    $.ajax({     
		type: "POST",	
		url: '.../send_prosfora_katanaloti_rejected.php',                  //the script to call to get data          
		data: {prosfora_id:prosfora_id,katanalotis_id:katanalotis_id,status:'REJECTED'},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");

      } 
    });
  }
  
      function send_prosfora_wishlist(prosfora_id) {

    $.ajax({     
		type: "POST",	
		url: '.../send_prosfora_katanaloti_wished.php',                  //the script to call to get data          
		data: {prosfora_id:prosfora_id,katanalotis_id:katanalotis_id,status:'WISHED'},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");

      } 
    });
  }
