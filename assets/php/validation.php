<?php
    $d=$dr='';
    if(isset($_POST['s'])){
        if($_POST['d'] !=''){
            $d=$_POST['d'];
            $ey=date('Y',strtotime($_POST['d'])); // Year
            $em=date('m',strtotime($_POST['d'])); // Month
            $ed=date('d',strtotime($_POST['d'])); // Day
            $edays = ($ey-1)*365 + ($em-1)*30 + $ed;

            $sy=date('Y'); // Year
            $sm=date('m'); // Month
            $sd=date('d'); // Day

            $sdays = ($sy-1)*365 + ($sm-1)*30 + $sd;
            $diff = ($edays - $sdays);
            if($diff>0 && $diff<=30){
                $dr="confirmed".$d;
            }else{
                $dr="denied".$d;
            }
        }else{
            $dr="enter any date";
        }
    }

?>
<form action="" method="POST">
    <input type="date" name="d" value="<?php echo $d; ?>">
    <span><?php echo $dr; ?></span>
    <br>
    <input type="submit" name="s">
</form>