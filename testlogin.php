<?php

if (!empty($_GET)){
	
	
	
	$logins = array('username'=>'', 'password'=> '');
	
	
	$in_username = $_GET['username'];
	
	
	$in_password = $_GET['password'];
	
	
	if ($in_username == 'investec'){
		
		
		if ($in_password == '123'){
			
			die(json_encode(array('status'=>200, 'message'=>'Welcome', 'name'=>'Nkosinathi')));
			
		}
		else {
			
			die(json_encode(array('status'=>405, 'message'=>'Please check username/password combination')));
			
		}
		
		
	}
	else {
		
		
		die(json_encode(array('status'=>404, 'message'=>'Please check username/password combination')));
		
		
	}
	
	
}
else {
	
     die(json_encode(array('status'=>401, 'message'=>'Empty request')));
	
}





?>