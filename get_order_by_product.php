<?php
header("Content-Type: application/json");
require "config.php";
$product_id = $_GET["product_id"];
$sql = "SELECT * FROM orders
        WHERE product_id = $product_id
        ORDER BY ordered_at DESC
        LIMIT 10";
$result = $conn->query($sql);
$orders = [];
while ($row = $result->fetch_assoc()) {
    $orders[] = $row;
}
echo json_encode($orders);
?>
