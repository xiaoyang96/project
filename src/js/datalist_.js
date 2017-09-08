/* 
* @Author: Marte
* @Date:   2017-09-08 17:37:34
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-08 20:13:01
*/

document.addEventListener('DOMContentLoaded',function(){
    var goods_l = document.getElementsByClassName('goods_l')[0];
    // console.log(goods_l);
    var goods_c = document.getElementsByClassName('goods_c')[0];
    var content = document.getElementsByClassName('content')[0];


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

});