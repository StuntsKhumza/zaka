<?php
session_start();

require_once('sql_secured.php');

$query = "";

if (isset($_POST['q'])){
	
	$query = $_POST['q'];
	
}
else {
	
	
	response(400,'Request not specified',null);
	
}


$sql = new sqlClass();


$sql->initialize();


//get request

switch ($query) {
	
	
	case "authenticate":
	
    response($sql->authenticate($_POST));

	break;
	
	
}


function response($status,$message,$data){
	
	
	http_response_code($status);
	
	
	$response = array('status'=>$status,'message'=>$message, 'data'=> $data);
	
	
	echo json_encode($response);
	
	
}
