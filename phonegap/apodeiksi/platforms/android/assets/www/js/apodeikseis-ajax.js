var katanalotis_id='katanalotis_id';


function receive_apodeikseis_data() {

    $.ajax({     
		type: "POST",	
		url: '.../receive_apodeikseis_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
    
	html="";
	
var	i=0;
$.each( data, function( key, value ) {

	if (value[7]==1){
		official='<span style="color:red; font-weight: bold;">NAI</span>';
		}else if(value[7]==0){
			var official='<span >ΟΧΙ</span>';}
i+=1;	

html+="<li><span style='font-weight: bold;' >"+i+"</span>. ΑΦΜ: "+value[0]+"<br>ΑΑ ΑΠΟΔΕΙΞΗΣ: "+value[1]+"<br>ΗΜΕΡΟΜΗΝΙΑ: "+value[2]+" "+value[3]+"<br>ΣΥΝΟΛΙΚΗ ΑΞΙΑ: "+value[4]+" ΑΞΙΑ ΦΠΑ: "+value[5]+"<br>ΚΑΤΗΓΟΡΙΑ: "+value[6]+"<br>ΕΠΙΒΕΒΑΙΩΜΕΝΗ: "+official+"</li>";

});

$('#katanalotesapodeikseis').html(html);

      } 
    });
  }
