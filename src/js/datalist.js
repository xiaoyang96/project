/* 
* @Author: Marte
* @Date:   2017-09-05 20:21:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-09 17:18:43
*/


require(['config'],function(){
    require(['jquery'],function($){
        require(['lxzoom','common'],function(){
            $('.common_header').load('list.html .common_header');
            $('.common_footer').load('list.html .common_footer');
            $('.footer').load('reg.html .footer');

            new LxZoom({width: 450,height:350,position:'right'}).init();


            var lxzoom = document.querySelector('.lxzoom');
            var smallImg = lxzoom.children[0];
            var lxzoomBig = document.querySelector('.lxzoom-big');
            // console.log(lxzoomBig);
            var bigImg = lxzoomBig.children[0];
            // console.log(bigImg);
            var xiaotu = document.querySelector('.xiaotu');
            // console.log(xiaotu);

            xiaotu.onmouseover = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.tagName.toLowerCase()==='img'){
                    var srcurl = target.getAttribute('src');
                    console.log(srcurl);
                    smallImg.setAttribute('src',srcurl);
                    bigImg.setAttribute('src',srcurl);
                }
                
            }
            

        });
    })
    
})