<?php
    // 引入connect.php
    include 'connect.php';
    $imgurl = isset($_GET['imgurl']) ? $_GET['imgurl'] : null; 
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $sale = isset($_GET['sale']) ? $_GET['sale'] : null;
    $price = isset($_GET['price']) ? $_GET['price'] : null;   

    // 查找数据库中的信息 
    $sql = "select * from qianggou";

    // 执行sql语句
    $result = $conn->query($sql);

    //使用查询结果集
    //得到数组
    $row = $result->fetch_all(MYSQLI_ASSOC);

    //释放查询结果集，避免资源浪费
    $result->close();

    //把结果输出到前台
    echo json_encode($row);

    // 关闭数据库，避免资源浪费
    $conn->close();
?>