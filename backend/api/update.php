<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ((int)$request->id < 1 || trim($request->name) == '' || (float)$request->gender < 0) {
    return http_response_code(400);
  }

  // Sanitize.
  $id    = mysqli_real_escape_string($con, (int)$request->id);
  $name = mysqli_real_escape_string($con, trim($request->name));
  $gender = mysqli_real_escape_string($con, (float)$request->gender);

  // Update.
  $sql = "UPDATE `patient` SET `name`='$name',`gender`='$gender' WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}