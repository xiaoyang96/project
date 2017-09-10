<?php
	/*
		sql语句返回值
			* select : 数据
			* insert : true/false
			* delect : true/false
			* update : true/false
		XSS跨域脚本攻击
			* 永远不要相信客户端输入的信息的安全性
			* 对输入进行过滤
			* 对输出进行处理
	 */
	include 'connect.php';
	
	$username = isset($_GET['username']) ? $_GET['username'] : '';

	//查看用户名是否已经存在
	$sql = "select * from user where username='$username'";
	$result = $conn->query($sql);

	// 如果用户名已经存在
	// 给前端返回一个fail
	if($result->num_rows>0){
		echo "fail";
	}


	// 释放查询内存(销毁)
	//$result->free();

	//关闭连接
	$conn->close();
?>