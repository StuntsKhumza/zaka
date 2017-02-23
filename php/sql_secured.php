<?php

class sqlClass {
	
	private $connectionObj = null;
	
	public function initialize(){
		
		require_once('sql_connections.php');
		
		$sqlConnectionClass = new connections();
		$sqlConnectionClass->initialize($this->connectionObj);
		if ($this->connectionObj != null){
//echo "1";
		} else {
//			echo "0";
		}
					
	}

	 
	public function authenticate(){

		return "123";

	}
	
	
}
