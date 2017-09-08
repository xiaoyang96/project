/* 
* @Author: Marte
* @Date:   2017-09-05 20:21:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-08 21:56:50
*/


require(['config'],function(){
    require(['jquery','lxzoom'],function($){
        $('.common_header').load('list.html .common_header');
        $('.common_footer').load('list.html .common_footer');
        $('.footer').load('reg.html .footer');

        new LxZoom({width: 300,height:300,position:'right'}).init();


        var lxzoom = document.querySelector('.lxzoom');
        var smallImg = lxzoom.children[0];
        var xiaotu = document.querySelector('.xiaotu');
        xiaotu.onmouseenter = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.tagName.toLowerCase()==='img'){
                var src = target.src;
            }
        }
        xiaotu[src] = src;


    });
})