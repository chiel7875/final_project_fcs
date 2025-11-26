<?php
header("Content-Type: application/json");
require 'config.php';
$sql = "SELECT * FROM products";
$result = $conn->query($sql);
$product = $data('product');
$price = $data('price');
$products = [];
while($row = $result->fetch_assoc()) {
    $products[] = $row;
}
echo json_encode($products);
?>