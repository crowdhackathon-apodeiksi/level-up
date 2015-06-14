<?php 
header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");


  //--------------------------------------------------------------------------
  // Example php script for fetching data from mysql database
  //--------------------------------------------------------------------------
  $host = "localhost";
  $user = "...";
  $pass = "...";
  $databaseName = "...";
  

  //--------------------------------------------------------------------------
  // 1) Connect to mysql database
  //--------------------------------------------------------------------------
  $con = mysqli_connect($host,$user,$pass, $databaseName);
	mysqli_set_charset( $con ,"utf8" );
	
if($_POST['prosfora_id']!=""){

	$prosfora_id=$_POST['prosfora_id'];
	$status=$_POST['status'];
	$katanalotis_id=$_POST['katanalotis_id'];
	$katanalotis_id=$_POST['katanalotis_id'];
	
  //--------------------------------------------------------------------------
  // 2) Query database for data
  //--------------------------------------------------------------------------
 // $result = mysqli_query($con, "SELECT * FROM $tableName WHERE lastname='$name[0]'");          //query
 // $array = mysqli_fetch_row($result);                          //fetch result    
 
   $result_pontoi = mysqli_query($con, "SELECT 1 FROM epixeiriseis_prosfores, katanalotes WHERE epixeiriseis_prosfores.prosfora_id='$prosfora_id' AND epixeiriseis_prosfores.pontoi>(SELECT katanalotes.pontoi FROM katanalotes WHERE katanalotes.katanalotis_id='$katanalotis_id')");
   $result_yes=mysqli_fetch_row($result_pontoi);
		//error_log(print_r($result_yes,true));
		

 if ( $result_yes!=[1]){
 
 $result = mysqli_query($con, "INSERT INTO katanalotes_prosfores ( katanalotis_id, prosfora_id, status) VALUES ('$katanalotis_id','$prosfora_id','$status')");   
 $update_pontoi=mysqli_query($con,"UPDATE katanalotes SET pontoi=pontoi-(SELECT pontoi FROM epixeiriseis_prosfores WHERE prosfora_id='$prosfora_id') WHERE katanalotis_id = '$katanalotis_id'");
 $update_clicks=mysqli_query($con,"UPDATE epixeiriseis_prosfores SET clicks=clicks+1 WHERE prosfora_id = '$prosfora_id'");
 
  echo json_encode('EXIST');
 }else{
	 
	 echo json_encode('NOT EXIST');
 } 
  //--------------------------------------------------------------------------
  // 3) echo result as json 
  //--------------------------------------------------------------------------
  //echo json_encode($arithmos_apodeikseon);

  //echo $array;
}
  
?>