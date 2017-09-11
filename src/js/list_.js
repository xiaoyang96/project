/* 
* @Author: Marte
* @Date:   2017-09-08 17:39:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-11 08:59:52
*/

document.addEventListener('DOMContentLoaded',function(){
    var datalist = document.querySelector('#datalist');
    var page = document.querySelector('#page');

    var pageNo = 1;
    var qty = 15;
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
            // console.log(res);

            // 写入页面
            // 分页数量
            page.innerHTML = '';
            var pageQty = Math.ceil(res.total/qty);
            for(var i=1;i<=pageQty;i++){
                var span = document.createElement('span');
                if(i==pageNo){
                    span.className = 'active';
                }
                span.innerText = i;

                page.appendChild(span);
            }
            // 数据写入
            var ul = document.createElement('ul');
            ul.innerHTML = res.data.map(item=>{
                return `<li data-guid = "${item.guid}">
                    <a href="datalist.html?giud=${item.guid}">
                    <img src="/project/src/img/${item.imgurl1}"/></a>
                    <p class="price">￥<span>${item.price}</span></p>
                    <h4 class="title">${item.title}</h4>
                    <p class="tedian">${item.tedian}</p>
                    <p class="store">${item.store}</p>
                    <p><button>加入购物车</button></p>
                </li>`
            }).join('');

            // imgurl=${item.imgurl}&title=${item.title}&tedian=${item.tedian}&price=${item.price}&store=${item.store}&goodsName=${item.title} 
            
            datalist.innerHTML = '';
            datalist.appendChild(ul);

        }
    }

    xhr.open('get',`/project/src/api/list.php?pageNo=${pageNo}&qty=${qty}`,true);
    xhr.send();

    // 点击页码请求响应数据
    page.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.tagName.toLowerCase() === 'span'){

            pageNo = target.innerText;
            xhr.open('get',`/project/src/api/list.php?pageNo=${pageNo}&qty=${qty}`,true);
            xhr.send();
        }
    }



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

    // 点击添加到购物车
    datalist.onclick = function(e){
        e =e || window.event;
        var target = e.target || e.srcElement;
        if(target.tagName.toLowerCase() ==='button'){
            var currentLi = target.parentNode.parentNode;
            var guid = currentLi.getAttribute('data-guid');

            // 判断cookie中是否已经存在当前商品
            // arr_goods = [{guid:1,title:xx}，{guid:2,title:xx}，{guid:3,title:xx}]
            for(var i=0;i<arr_goods.length;i++){
                // 存在时，数量加一
                if(arr_goods[i].guid === guid){
                    arr_goods[i].qty++;
                    break;
                }
            }

            // arr_goods中不存在当前商品时
            if(i===arr_goods.length){
                //获取点击按钮对应商品信息
                var goods = {
                    guid:guid,
                    imgurl:currentLi.children[0].children[0].src,
                    title:currentLi.children[2].innerText,
                    price:currentLi.children[1].children[0].innerText,
                    qty:1
                }
                arr_goods.push(goods);
            }
            

            // * JSON.stringify() 把对象/数组转成json字符串
            // * JSON.parse() 把“json字符串”转成对象/数组

            //存入cookie
            //cookie只能保留字符串（json字符串）
            document.cookie = 'carlist=' + JSON.stringify(arr_goods); 
            console.log(goods);

        }
    }
});