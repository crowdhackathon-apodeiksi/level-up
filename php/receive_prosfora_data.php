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
	
  //--------------------------------------------------------------------------
  // 2) Query database for data
  //--------------------------------------------------------------------------
 $result = mysqli_query($con, "SELECT epixeiriseis.eponymia,epixeiriseis.dieythinsi, epixeiriseis_prosfores.titlos, epixeiriseis_prosfores.keimeno, epixeiriseis_prosfores.pontoi, epixeiriseis_prosfores.kerdos,epixeiriseis_prosfores.clicks,epixeiriseis_prosfores.prosfora_id,epixeiriseis_prosfores.clicks FROM epixeiriseis, epixeiriseis_prosfores WHERE prosfora_id='$prosfora_id' AND epixeiriseis_prosfores.epixeirisi_id=epixeiriseis.afm");  

$row=mysqli_fetch_row($result);



  //--------------------------------------------------------------------------
  // 3) echo result as json 
  //--------------------------------------------------------------------------
  echo json_encode($row);

  //echo $array;
}
  
?>