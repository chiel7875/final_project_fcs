<?php
header("Content-Type: application/json");
require "config.php";

$id = $_GET["id"];

$sql = "SELECT * FROM orders WHERE id = $id";
$result = $conn->query($sql);

echo json_encode($result->fetch_assoc());
?>