var katanalotis_id='katanalotis_id';
$( document ).ready(function() {
   
	var katanalotis_id='katanalotis_id';
	receive_pers_data(katanalotis_id);
	receive_katigories_data(katanalotis_id);
	receive_vraveia_data();
	receive_protous_data();
   
});

function receive_pers_data(katanalotis) {

    $.ajax({     
		type: "POST",	
		url: '.../receive_pers_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
	  
        var onoma = data[4];              //get id
        var eponymo = data[5]; 
        var pontoi = data[6];
        var synolikoipontoi = data[7];  		

		$("#onoma").html(onoma);
		$("#eponymo").html(eponymo);
		$("#pontoi").html(pontoi+' πόντοι');
		
		if(synolikoipontoi>=200){
		$("#badge").html("<img src='img/badge2.png' alt='GOOD' style='float:right;margin-top:-15px;' height='70'>");
		}else if (synolikoipontoi>=100){
		$("#badge").html("<img src='img/badge1.png' alt='BEST' style='float:right;margin-top:-15px;' height='70'>");
		}
		
		//Set output element html
        //recommend reading up on jquery selectors they are awesome 
        // http://api.jquery.com/category/selectors/
      } 
    });
  } 


function sendapodeiksi() {

  var afm= $( "#afm").val();
	if (afm==""|| afm =='111111111'){alert ('ΤΟ ΑΦΜ ΔΕΝ ΕΙΝΑΙ ΣΩΣΤΟ'); exit();}
  
  var aaapodeiksis= $( "#aaapodeiksis").val();
  
		if (aaapodeiksis==""|| aaapodeiksis =='111111111'){alert ('Το AA ΑΠΟΔΕΙΞΗΣ ΔΕΝ ΕΙΝΑΙ ΣΩΣΤΟ'); exit();}
		  
  var imerominia= $( "#imerominia").val();
  
  		if (imerominia==""|| imerominia =='111111111'){alert ('Η ΗΜΕΡΟΜΗΝΙΑ ΔΕΝ ΕΙΝΑΙ ΣΩΣΤΟ'); exit();}
  
  var ora= $( "#ora").val();
  
   		if (ora==""|| ora =='111111111'){alert ('Η ΩΡΑ ΔΕΝ ΕΙΝΑΙ ΣΩΣΤΟ'); exit();}
  
  var synolikiaksia= $( "#synolikiaksia").val();
  
     		if (synolikiaksia==""|| synolikiaksia =='111111111'){alert ('Η ΣΥΝΟΛΙΚΗ ΔΕΝ ΕΙΝΑΙ ΣΩΣΤΟ'); exit();}

  var aksiafpa= $( "#aksiafpa").val();
  
       		if (aksiafpa==""|| aksiafpa =='111111111'){alert ('Η ΑΞΙΑ ΦΠΑ ΔΕΝ ΕΙΝΑΙ ΣΩΣΤΟ'); exit();}

    var ccn= $( "#ccn").val();

  var katigoria= $( "#katigoria").val();
    
  var dimosiopoiisi= $( "#dimosiopoiisi").val(); 

  sendapodeiksijax(afm,aaapodeiksis,imerominia,ora,synolikiaksia,aksiafpa,ccn,katigoria,dimosiopoiisi);

     //  persAjax(persValues);

}
 
function sendapodeiksijax(afm,aaapodeiksis,imerominia,ora,synolikiaksia,aksiafpa,ccn,katigoria,dimosiopoiisi) {

    //-----------------------------------------------------------------------
    // 2) Send a http request with AJAX http://api.jquery.com/jQuery.ajax/
    //-----------------------------------------------------------------------
    $.ajax({     
		type: "POST",	
		url: '.../send_apodeiksi.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id,afm:afm, aaapodeiksis:aaapodeiksis,imerominia:imerominia,ora:ora,synolikiaksia:synolikiaksia,aksiafpa:aksiafpa, ccn:ccn,katigoria:katigoria,dimosiopoiisi:dimosiopoiisi},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     


	  //data format      
      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
	 
	 if(data=='EXIST'){
		 alert('ΑΔΥΝΑΤΗ ΚΑΤΑΧΩΡΗΣΗ: Η ΑΠΟΔΕΙΞΗ ΕΧΕΙ ΗΔΗ ΚΑΤΑΧΩΡΗΘΕΙ.');
	  }else if (data=='OFFICIAL'){
		  alert('ΚΑΤΑΧΩΡΗΘΗΚΕ: Η ΑΠΟΔΕΙΞΗ ΕΠΙΒΕΒΑΙΩΝΕΤΕ ΑΠΟ ΤΗΝ ΕΠΙΧΕΙΡΗΣΗ');
	}else if (data=='NOT OFFICIAL'){
		  alert('ΚΑΤΑΧΩΡΗΘΗΚΕ: Η ΑΠΟΔΕΙΞΗ ΔΕΝ ΕΧΕΙ ΕΠΙΒΕΒΑΙΩΘΕΙ ΑΠΟ ΤΗΝ ΕΠΙΧΕΙΡΗΣΗ');	  
	}  
	  receive_pers_data(katanalotis_id);

      } 
    });
  } 
  
 function receive_vraveia_data() {

    $.ajax({     
		type: "POST",	
		url: '.../receive_vraveia_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);
	  
        var vraveia = data[0];              //get id


		$("#deikse_vraveia").html("<h2>ΦΕΤΙΝΑ ΒΡΑΒΕΙΑ</h2>"+vraveia);
	  }
		
    });
  } 

 function receive_protous_data() {

    $.ajax({     
		type: "POST",	
		url: '.../receive_protous_data.php',                  //the script to call to get data          
		data: {katanalotis_id:katanalotis_id},                //you can insert url argumnets here to pass to staff.php //for example "id=5&parent=6"
                              
		dataType: 'json',     

      success: function(data)          //on recieve of reply
      {
	  
	  console.log("success");
	  console.log(data);

	html="<br /><br /><div class='grid' data-appbuilder-object='grid2' data-position='static'><h2>ΚΑΤΑΤΑΞΗ ΕΩΣ ΤΩΡΑ</h2>"+ 
		"</div>";
	  
i=0;	 
$.each( data, function( key, value ) {

i+=1;
html+="<div class='grid' data-appbuilder-object='grid2' data-position='static'>"+		
				"<div class='container col1'>"+i+"</div>"+
				"<div class='container col3'>USERNAME</div>"+
				"<div class='container col2' data-appbuilder-object='container'>"+value[0]+"</div>"+	  
				"<div class='container col3'>ΣΥΝΟΛΟ ΑΠΟΔΕΙΞΕΩΝ</div>"+
				"<div class='container col2' data-appbuilder-object='container'>"+value[1]+"</div>"   

         
		"</div>";
 
});

		$("#deikse_protous").html(html);
	  }
		
    });
  }    
