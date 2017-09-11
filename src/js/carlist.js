/* 
* @Author: Marte
* @Date:   2017-09-02 16:11:11
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-11 08:55:32
*/

require(['config'],function(){
    require(['jquery','common'],function($){
        $('.header').load('list.html .header');
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

    });
})