<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

  // Validate.
  // if()
  // {
  //   return http_response_code(400);
  // }

  // Store.
  $sql = "INSERT INTO `patient`(`id`,`name`,`gender`) VALUES (null,'{$name}','{$gender}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $patient = [
      'name' => $name,
      'gender' => $gender,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode($patient);
  }
  else
  {
    http_response_code(422);
  }
}