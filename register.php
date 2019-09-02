<?php
  include 'tolet_connect.php';

$name =$_POST['name'];
$last=$_POST['last'];
$email=$_POST['email'];
$password=$_POST['password'];



$sql="insert into user12(first,last,email,password)values('$name','$last',$email','$password')";



  if(mysqli_query($con,$sql))
 {
  echo ("RegistrationSuccess"); 
  }

  else
  {
      echo 'Registrationfailure';
    
  } 
  mysqli_close($con);

?>