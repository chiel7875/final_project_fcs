<?php
header("Content-Type: application/json");
require 'config.php';
// retrieve data from frontend  
$id = json_decode(file_get_contents("php://input"), true);
$id = $data['id'];
$product = $data['product'];
$price = $data['price'];
$sql = "UPDATE products SET product = '$product', price = '$price' WHERE id = $id";
if ($conn->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}
?>