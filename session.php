<?php

session_start();

//get request
if (isset($_GET)) {

    if (isset($_GET['q'])) {

        if ($_GET['q'] == 'check_session') {

            if (isset($_SESSION['session_active'])) {

                if ($_SESSION['session_active'] == 1) {

                    $response = array('status' => 200);

                    die(json_encode($response));
                    
                } else {

                    $response = array('status' => 400);

                    die(json_encode($response));
                }
            } else {

                $response = array('status' => 400);

                die(json_encode($response));
            }
        } else if ($_GET['q'] == 'close_session') {

            $_SESSION['session_active'] = 0;

              $response = array('status' => 201);

                    die(json_encode($response));

        }//
    }



    
} else {

    $response = array('status' => 400);

    die(json_encode($response));
}


