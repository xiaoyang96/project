/* 
* @Author: Marte
* @Date:   2017-09-02 16:10:56
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-11 08:56:40
*/

require(['config'],function(){
    require(['jquery'],function($){
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

        
    });
})

