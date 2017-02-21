<?php
session_start();


if (!empty($_GET)){
	
	
	
	$logins = array('username'=>'', 'password'=> '');
	
	
	$in_username = $_GET['username'];
	
	
	$in_password = $_GET['password'];
	
	
	if (strtoupper ($in_username) == strtoupper ('investec')){
		
		
		if ($in_password == '123'){
			
			$_SESSION['session_active'] = 1;

			die(json_encode(array('status'=>200, 'message'=>'Welcome', 'name'=>'Nkosinathi')));
			
		}
		else {
			$_SESSION['session_active'] = 0;
			die(json_encode(array('status'=>405, 'message'=>'Please check username/password combination')));
			
		}
		
		
	}
	else {
		
		$_SESSION['session_active'] = 0;
		die(json_encode(array('status'=>404, 'message'=>'Please check username/password combination')));
		
		
	}
	
	
}
else {
	
     die(json_encode(array('status'=>401, 'message'=>'Empty request')));
	
}





?>