/* 
* @Author: Marte
* @Date:   2017-09-05 20:21:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-11 08:57:20
*/


require(['config'],function(){
    require(['jquery'],function($){
        require(['lxzoom','common'],function(){
            $('.common_header').load('list.html .common_header');
            $('.common_footer').load('list.html .common_footer');
            $('.footer').load('reg.html .footer');

            $(window).on('scroll',function(){
                var scrollTop = $(window).scrollTop();
                if(scrollTop>400){
                    $('.returnTop').fadeIn();
                }else{
                    $('.returnTop').fadeOut();
                }
            });
            $('.returnTop').on('click',function(){
                $('html,body').animate({'scrollTop':0});
            });

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