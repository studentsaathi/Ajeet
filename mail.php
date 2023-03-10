<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <h1 style="text-align: center;">Send Email</h1>
    <?php
    $to="ajeetsinghbhabua@gmail.com";
    $subject="student saathi Email";
    $msg="Solve problems";

    $result=mail($to,$subject,$msg);

    if($result){
        echo "Email Sent";
    }
    else{
        echo "Email Not Sent";
    }



    ?>
    
</body>
</html>