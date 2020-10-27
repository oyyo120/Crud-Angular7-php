<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$patient = [];
$sql = "SELECT id, name, gender FROM patient";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $patient[$i]['id']    = $row['id'];
    $patient[$i]['name'] = $row['name'];
    $patient[$i]['gender'] = $row['gender'];
    $i++;
  }

  echo json_encode($patient);
}
else
{
  http_response_code(404);
}