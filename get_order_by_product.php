<?php
header("Content-Type: application/json");
require "config.php";
$raw = file_get_contents("php://input");
$data = json_decode(file_get_contents("php://input"), true); //hyda new ma kna ekhdinu 
$product_id = $data["product_id"];
$quantity   = $data["quantity"];
$sql = "INSERT INTO orders (product_id, quantity) VALUES ('$product_id', '$quantity')";
if ($conn->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}
?>
