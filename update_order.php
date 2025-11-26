<?php
header("Content-Type: application/json");
require 'config.php';
$id = json_decode(file_get_contents("php://input"), true);
$id = $data['id'];
$order_name = $data['order_name'];
$quantity = $data['quantity'];
$sql = "UPDATE orders SET order_name = '$order_name', quantity = '$quantity' WHERE id = $id";
if ($conn->query($sql)) {
    echo json_encode(["status" => "success"]);

} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}
?>