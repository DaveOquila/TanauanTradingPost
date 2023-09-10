<?php 

    $username = $_POST['username'];
    $password = $_POST['password'];
    $access = array(
        [
            'name' => 'admin',
            'pw' => 'password'
        ],
        [  
            'name' => 'admin',
            'pw' => 'password'
        ]
    );
    $result = [];
    
    if ($username != '' || $password != '' || $gameName != '') {
        if ($access[0]['name'] == $username && $access[0]['pw'] == $password) {
            array_push($result, 1);
        }else if ($access[1]['name'] == $username && $access[1]['pw'] == $password){
            array_push($result, 2);
        }else if($username != 'admin'){
            array_push($result, 'Wrong Input.');
        }else if ($username == '' || $password != ''){
            array_push($result, 'Please fill up the username field.');
        }else if($username != '' || $password == ''){
            array_push($result, 'Please fill up the password field.');
        }else{
            array_push($result, 'Incorrect username or password');
        }
    }else{
        array_push($result, 'Please fill up all empty field.');
    }
    
    

    echo json_encode($result);
    
?>