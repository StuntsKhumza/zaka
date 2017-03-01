<?php
session_start();

require_once('sql_secured.php');
header('Content-Type: application/json');
$query = "";

if (isset($_GET['q'])){
	
	$query = $_GET['q'];
	
}
else {
	
	
	response(400,'Request not specified',null);
	
}


$sql = new sqlClass();


$sql->initialize();


//get request

switch ($query) {
	
	
	case "authenticate":
	
    response($sql->authenticate($_GET));

	break;

	 default:

	response(400,'Request Type not specified',null);

	break;
	
	
}


function response($status,$message,$data){
	
	
	http_response_code($status);
	
	
	$response = array('status'=>$status,'message'=>$message, 'data'=> $data);
	
	
	echo json_encode($response);
	
	
}
