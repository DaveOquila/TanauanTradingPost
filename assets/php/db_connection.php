<?php
    $con = mysqli_connect("210.14.26.177","psdnuser","bfRM4LAsnX","poseidon");

    if (mysqli_connect_errno()){
	    echo "Failed to connect to MySQL: " . mysqli_connect_error();
	    die();
	}
?>