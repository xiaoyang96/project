<?php
	include 'connect.php';
	
	$username = isset($_GET['username']) ? $_GET['username'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';

	// 密码md5加密
	$password = md5($password);


	//查看用户名是否存在
	$sql = "select * from user where username='$username'";
	$result = $conn->query($sql);

	// 如果用户名不存在
	// 给前端返回一个null
	if(!($result->num_rows>0)){
		echo "null";
	}else{
		$sql = "select * from user where username='$username' and password='$password'";

		// echo "$sql";

		// 获取查询结果
		$result = $conn->query($sql);

		$row = $result->fetch_row();

		//print_r($row[0]);

		if($row[0]){
			echo 'ok';
		}else{
			echo 'fail';
		}
	}

	
	

	// 释放查询内存(销毁)
	$result->free();

	//关闭连接
	$conn->close();
?>