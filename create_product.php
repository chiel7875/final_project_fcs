<?php
header("Content-Type: application/json");
require 'config.php';
$data = json_decode(file_get_contents("php://input"), true);
$product = $data['product'];
$price = $data['price'];
$sql = "INSERT INTO products (product, price) VALUES ('$product', '$price')";
if ($conn->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}
?>