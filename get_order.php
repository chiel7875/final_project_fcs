<?php
header("Content-Type: application/json");
require 'config.php';
$sql = "SELECT * FROM orders";
$result = $conn->query($sql);
$order_name = $data['order_name'];
$quantity = $data['quantity'];
$orders = [];
while($row = $result->fetch_assoc()) {
    $orders[] = $row;
}
echo json_encode($orders);

?>