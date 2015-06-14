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
	$tableName = "katanalotes-apodeikseis";
	$katanalotis_id=$_POST['katanalotis_id'];
	
  //--------------------------------------------------------------------------
  // 2) Query database for data
  //--------------------------------------------------------------------------
 $result = mysqli_query($con, "SELECT  epixeiriseis.eponymia,epixeiriseis.dieythinsi, epixeiriseis_prosfores.titlos, epixeiriseis_prosfores.keimeno, epixeiriseis_prosfores.pontoi, epixeiriseis_prosfores.kerdos,epixeiriseis_prosfores.clicks,epixeiriseis_prosfores.prosfora_id   FROM epixeiriseis, epixeiriseis_prosfores WHERE epixeiriseis_prosfores.epixeirisi_id=epixeiriseis.afm ");  

while ($row=mysqli_fetch_row($result)){
	
	$array[] = $row;
}


  //--------------------------------------------------------------------------
  // 3) echo result as json 
  //--------------------------------------------------------------------------
  echo json_encode($array);

  //echo $array;
}
  
?>