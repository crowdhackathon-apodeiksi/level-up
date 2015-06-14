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
	
if($_POST['katanalotis_id']!=""){
	$tableName = "superuser";
	$katanalotis_id=$_POST['katanalotis_id'];
	
  //--------------------------------------------------------------------------
  // 2) Query database for data
  //--------------------------------------------------------------------------
 $result = mysqli_query($con, "SELECT vraveia FROM $tableName");          //query
  $array = mysqli_fetch_row($result);                          //fetch result    

  //--------------------------------------------------------------------------
  // 3) echo result as json 
  //--------------------------------------------------------------------------
  echo json_encode($array);

  //echo $array;
}
  
?>