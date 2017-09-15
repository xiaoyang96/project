document.addEventListener('DOMContentLoaded',function(){

    var carList = document.getElementById('carList');
    var totalPrice = document.querySelector('#totalPrice');
    var Del = document.querySelector('#Del');

    console.log(totalPrice);
    /*
        读取cookie中的carlist
        把json字符串转换成对象/数组：JSON.parse()
        json字符串格式：
            1.必须用双引号
            2.不能右注释
    */
   
    // 拿到所有的cookie
    var cookies = document.cookie;
    console.log(cookies);

    var carlist = [];

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
                carlist = JSON.parse(arr[1]);
            }
        })
    }
    // 得到json字符串
    console.log(carlist);
    // 将"json字符串"转成对象或是数组，写进页面
    // JSON.parse()
    render();

    // 清空购物车
    // * 删除cookie
    // * 删除DOM节点
    // * 重置价格
    Del.onclick = function(){
        // 删除cookie
        Cookie.remove('carlist');

        // 删除DOM节点
        carList.innerHTML = '';

        totalPrice.innerHTML = 0;
    }

    // 事件委托实现删除单个商品效果
    // * 删除cookie中对应的商品数据
    // * 删除对应DOM节点
    carList.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;


        if(target.tagName.toLowerCase() === 'span'){
            // 获取当前li
            var currentLi = target.parentNode;

            var guid = currentLi.getAttribute('data-guid');

            // 删除DOM
            currentLi.parentNode.removeChild(currentLi);


            // 删除cookie
            // 1）先找到cookie中对应的数据，并删除它
            // 2）重写cookie
            carlist.forEach(function(item,idx){
                if(item.guid === guid){
                    carlist.splice(idx,1);
                }
            });

            var now = new Date();
            now.setDate(now.getDate()+8);
            Cookie.set('carlist',JSON.stringify(carlist),now);

            render();
        }
    }



    function render(){
        var totalPrice = 0;
        var ul = document.createElement('ul');
        ul.innerHTML = carlist.map(function(item){
            totalPrice += item.price*item.qty; 
            return `<li data-guid="${item.guid}">
            <input type="checkbox">
            <img src="${item.imgurl}">
            <p class="title">${item.title}</p>
            <p class="qty"><span id="jian">-</span><span id="qty">${item.qty}</span><span id="jia">+</span></p>
            <p class="price">${item.price}</p>
            <p class="Price">${(item.qty*item.price).toFixed(2)}</p>
            <span id="btnDel">&times;</span>
            </li>`
        }).join('');

        console.log(totalPrice);
        carList.innerHTML = '';
        carList.appendChild(ul);
        totalPrice.innerHTML = totalPrice.toFixed(2);
    }

})

