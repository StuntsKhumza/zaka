<?php

class connections{
	
	
	public $connection = null;
	
	
	function initialize($connectionObj){
		
		
		
		require_once($_SERVER['DOCUMENT_ROOT'] . '/zakaconfigs/cred.php');
		
		
		$cred = new cred();
		
		
		$servername = $cred->db_server;
		
		$username = $cred->db_username;
		
		$password = $cred->db_password;
		
		$dbname = $cred->db_databasename;
		;
		
		
		try {
			
			
			// 			Create connection
			$connectionObj = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
			
			
			// 			set the PDO error mode to exception
			$connectionObj->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			
            return $connectionObj;
			
		}
		catch (PDOException $e) {
			
			
			die($e->getMessage());
			
		}
		
		
	}
	
	
	
}

