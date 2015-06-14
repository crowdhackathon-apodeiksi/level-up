
function scan(){

 $( "#afm").val('123456789');
 $( "#aaapodeiksis").val('1');
 $( "#imerominia").val('2015-06-10');
 $( "#ora").val('01:59');
 $( "#synolikiaksia").val('1');
 $( "#aksiafpa").val('1');
 $( "#katigoria").val('ΓΕΝΙΚΑ');
}

function add_prosfora_id(prosfora_id){
console.log(prosfora_id);
$('[name=prosfora]').attr( "id", prosfora_id );

receive_prosfora_data(prosfora_id);

}

function code_scan(){
	
	var resultDiv;

document.addEventListener("deviceready", init, false);

	
		cordova.plugins.barcodeScanner.scan(
		function (result) {
			console.log(result);
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);
	
}

