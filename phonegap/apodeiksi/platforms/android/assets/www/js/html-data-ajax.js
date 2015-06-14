

function receive_katigories_data(katanalotis_id) {

    $.ajax({     
		type: "POST",	
		url: '.../receive_katigories_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
    
var html1="";
	
$.each( data, function( key, value ) {

html1+="<option value='"+value[0]+"'>";
 
});

var html2="<option value=''>ΟΛΕΣ ΟΙ ΚΑΤΗΓΟΡΙΕΣ</OPTION>";

$.each( data, function( key, value ) {

html2+="<option value='"+value[0]+"'>"+value[0]+"</option>";
 
});


$('#katigories').html(html1);
$('#prosforeskatigories').html(html2);

      } 
    });
  } 
