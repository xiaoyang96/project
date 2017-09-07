<?php
	include 'connect.php';
	
	$guid = isset($_GET['guid']) ? $_GET['guid'] : '';

	$sql = 'select * from goods where guid='. $guid;


	// 获取查询结果
	$result = $conn->query($sql);

	// 使用查询结果集
	$row = $result->fetch_assoc();
	
	//释放查询结果集
    $result->close();

    //把结果输出到前台(得到json字符串)
    echo json_encode($row,JSON_UNESCAPED_UNICODE);


	// 释放查询内存(销毁)
	//$result->free();

	//关闭连接
	$conn->close();
?>