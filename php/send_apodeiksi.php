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
  $tableName = "katanalotes_apodeikseis";

  //--------------------------------------------------------------------------
  // 1) Connect to mysql database
  //--------------------------------------------------------------------------
  $con = mysqli_connect($host,$user,$pass, $databaseName);
	mysqli_set_charset( $con ,"utf8" );
	



if($_POST['synolikiaksia']!=""){
    
	$katanalotis_id=$_POST['katanalotis_id'];
	$fpa=$_POST['afm'];
	$aaapodeiksis=$_POST['aaapodeiksis'];
	$imerominia=$_POST['imerominia'];
	$ora=$_POST['ora'];
	$synolikiaksia=$_POST['synolikiaksia'];
	$aksiafpa=$_POST['aksiafpa'];
	$ccn=$_POST['ccn'];
	$katigoria=$_POST['katigoria'];
	$dimosiopoiisi=$_POST['dimosiopoiisi'];	
	$code=$fpa."#".$aaapodeiksis."#".$imerominia."#".$ora."#".$synolikiaksia."#".$aksiafpa;

  //--------------------------------------------------------------------------
  // 2) Query database for data
  //--------------------------------------------------------------------------
 // $result = mysqli_query($con, "SELECT * FROM $tableName WHERE lastname='$name[0]'");          //query
 // $array = mysqli_fetch_row($result);                          //fetch result    

  $result_apodeiksi_exist = mysqli_query($con, "SELECT 1 FROM katanalotes_apodeikseis WHERE code = '$code'");
  $result_yes=mysqli_fetch_row($result_apodeiksi_exist);
 //error_log(print_r($result_yes,true));

 if ( $result_yes!=[1]){
	 
 $result_count = mysqli_query($con, "SELECT 1 FROM  epixeiriseis_apodeikseis WHERE code = '$code'");
 $arithmos_apodeikseon=mysqli_num_rows($result_count);
 
 if($arithmos_apodeikseon==[1]){
	  
	  $result = mysqli_query($con, "INSERT INTO katanalotes_apodeikseis ( katanalotis_id, afm, aaapodeiksis, imerominia, ora, synolikiaksia, aksiafpa, ccn, code,katigoria,dimosiopoiisi) VALUES ('$katanalotis_id','$fpa','$aaapodeiksis','$imerominia','$ora','$synolikiaksia','$aksiafpa','1','$code','$katigoria','$dimosiopoiisi')");   
      echo json_encode('OFFICIAL'); 
 }else{
	 $result = mysqli_query($con, "INSERT INTO katanalotes_apodeikseis ( katanalotis_id, afm, aaapodeiksis, imerominia, ora, synolikiaksia, aksiafpa, ccn, code,katigoria,dimosiopoiisi) VALUES ('$katanalotis_id','$fpa','$aaapodeiksis','$imerominia','$ora','$synolikiaksia','$aksiafpa','0','$code','$katigoria','$dimosiopoiisi')");   
	 echo json_encode('NOT OFFICIAL'); 
	 
 }
  
  $update_pontoi=mysqli_query($con,"UPDATE katanalotes SET pontoi=pontoi+1 WHERE katanalotis_id = '$katanalotis_id'");
  $update_pontoi=mysqli_query($con,"UPDATE katanalotes SET synolikoipontoi=synolikoipontoi+1 WHERE katanalotis_id = '$katanalotis_id'"); 
  
 }else{
	echo json_encode('EXIST'); 
	 
 }

  }
  
?>