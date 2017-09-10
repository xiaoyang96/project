/* 
* @Author: Marte
* @Date:   2017-09-08 17:37:34
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-10 21:23:36
*/

document.addEventListener('DOMContentLoaded',function(){
    var goods_l = document.getElementsByClassName('goods_l')[0];
    // console.log(goods_l);
    var goods_c = document.getElementsByClassName('goods_c')[0];
    var content = document.getElementsByClassName('content')[0];
    var addCar = document.querySelector('.addCar')

    var params = location.search.substring(1).split('=');
    var guid = params[1];
    console.log(guid);

    // 发起ajax请求
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState ===4 && (xhr.status === 200 || xhr.status === 304)){
            var res = xhr.responseText;

            try{
                res = JSON.parse(res);
            }catch(err){
                try{
                    res = eval('(' + res + ')');
                }catch(e){

                }
            }
            console.log(res);

            // 数据写入
            goods_l.innerHTML = `<div class="lxzoom"><img src="/project/src/img/${res.imgurl1}"  data-big="/project/src/img/${res.imgurl1}" id="goodsUrl" /></div>
            <div class="xiaotu"></div>`;

            var xiaotu = document.getElementsByClassName('xiaotu')[0];

            for(var i=1;i<6;i++){
                if(res['imgurl'+i]===''|| res['imgurl'+i]===null){
                    break;
                }
                var img =document.createElement('img');
                var imgurl = '/project/src/img/'+ res['imgurl'+i];
                img.setAttribute('src',imgurl);
                xiaotu.appendChild(img);
            }

            goods_c.innerHTML = `<h4 id="title">${res.title}</h4>
            <p id="tedian">${res.tedian}</p>
            <p class="cuxiao">促销-天天特价</p>
            <p class="price">价格<span>￥</span><span id="price">${res.price}</span></p>
            <p class="wuliu">物流<span>配送至</span><span>请选择地区<i class="iconfont icon-arrow-down"></i></span></p>
            <p>服务<span>由<span id="store">${res.store}</span>发货，并提供售后服务</span></p>
            <div class="qty">数量<div><i class="iconfont icon-jianhao1"></i><span>1</span><i class="iconfont icon-jiahao"></i></div></div>
            <div class="btns clear"><button class="buy">立即购买</button><button class="addCar"><i class="iconfont icon-gouwuche"></i>加入购物车</button></div>
            <p class="fuwu">服务承诺<i class="iconfont icon-013"></i>7天无理由退换货</p>`;

            content.innerHTML = `<img src="/project/src/img/${res.imgjs}" />`;
        }
    }

    xhr.open('get',`/project/src/api/goods.php?guid=${guid}`,true);
    xhr.send();



    var arr_goods = [];

    // 先查看当前购物车有无cookie
    var cookies = document.cookie;
    // console.log(cookies);

    // 有cookie时进行以下判断
    if(cookies.length>0){
        // 拆分成数组
        cookies = cookies.split('; ');
        //['cartlist=[{},{}]','myname=laoxie','myClass=h51704']
        // console.log(cookies);
        cookies.forEach(function(item){
            // 对数组每一项再进行拆分
            var arr = item.split('=');
            if(arr[0] === 'carlist'){
                arr_goods = JSON.parse(arr[1]);
            }
        })
    }

    // addCar.onclick = function(){
        
    // }


    // 点击添加到购物车
    // datalist.onclick = function(e){
    //     e =e || window.event;
    //     var target = e.target || e.srcElement;
    //     if(target.tagName.toLowerCase() ==='button'){
    //         var currentLi = target.parentNode.parentNode;
    //         var guid = currentLi.getAttribute('data-guid');

    //         // 判断cookie中是否已经存在当前商品
    //         // arr_goods = [{guid:1,title:xx}，{guid:2,title:xx}，{guid:3,title:xx}]
    //         for(var i=0;i<arr_goods.length;i++){
    //             // 存在时，数量加一
    //             if(arr_goods[i].guid === guid){
    //                 arr_goods[i].qty++;
    //                 break;
    //             }
    //         }

    //         // arr_goods中不存在当前商品时
    //         if(i===arr_goods.length){
    //             //获取点击按钮对应商品信息
    //             var goods = {
    //                 guid:guid,
    //                 imgurl:currentLi.children[0].children[0].src,
    //                 title:currentLi.children[2].innerText,
    //                 price:currentLi.children[1].children[0].innerText,
    //                 qty:1
    //             }
    //             arr_goods.push(goods);
    //         }
            

    //         // * JSON.stringify() 把对象/数组转成json字符串
    //         // * JSON.parse() 把“json字符串”转成对象/数组

    //         //存入cookie
    //         //cookie只能保留字符串（json字符串）
    //         document.cookie = 'carlist=' + JSON.stringify(arr_goods); 
    //         console.log(goods);

    //     }
    // }


});