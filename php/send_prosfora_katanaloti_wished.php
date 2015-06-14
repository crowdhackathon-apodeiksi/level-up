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
	
  //--------------------------------------------------------------------------
  // 2) Query database for data
  //--------------------------------------------------------------------------
 // $result = mysqli_query($con, "SELECT * FROM $tableName WHERE lastname='$name[0]'");          //query
 // $array = mysqli_fetch_row($result);                          //fetch result    

 $result = mysqli_query($con, "INSERT INTO katanalotes_prosfores ( katanalotis_id, prosfora_id, status) VALUES ('$katanalotis_id','$prosfora_id','$status')");   

  //SOS EAN THN DIASTRAVSOSI KANEI TO CCN 1//
  
  //--------------------------------------------------------------------------
  // 3) echo result as json 
  //--------------------------------------------------------------------------
  //echo json_encode($arithmos_apodeikseon);

  //echo $array;
}
  
?>