<?php

    /*
        分页获取数据：
            * pageNo    
            该地址请求多条微博信息，分页获取，pageNo指定获取第几页的数据，默认值为1
            * qty
            每页数据的数量，默认值10

        json_encode():把数组转成json字符串
        * php5.4+ 使用JSON_UNESCAPED_UNICODE防止中文转义

        isset()：是否设置

        文件读取
            * fopen(url,model)
            * fread(file,length)
                * filesize(url)
            * fclose(file)
            * fwrite(file,content)
     */
    // 三元运算格式：条件?成立:不成立
    
    $page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 10;

    
    // 文件地址
    // ../上级目录
    // ./当前目录
    $file_url = './data/goodslist.json';
    // $file_url = './list.php';

    // 打开文件
    $myfile = fopen($file_url, 'r');

    // 读取打开的文件
    // 读取所有内容（文本格式）
    $content = fread($myfile, filesize($file_url));


    // 把读取到的内容转成数组
    $arr_data = json_decode($content);

    // 根据分页截取数据
    // pageNo:1    0-9
    // pageNo:2    10-19
    $res = array(
        'data'=>array_slice($arr_data, ($page_no-1)*$qty,$qty),
        'total'=>count($arr_data)
    );

    // 输出json字符串
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

    // 关闭文件
    fclose($myfile);
?>