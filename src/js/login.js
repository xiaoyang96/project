/* 
* @Author: Marte
* @Date:   2017-08-31 21:38:15
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-11 08:58:09
*/
require(['config'],function(){
    require(['jquery'],function($){
        $('.footer').load('reg.html .footer');


        $('.title li').eq(0).addClass('active');
        $('.tab .content').first().nextAll().hide();
        $('.title').on('click','li',function(){
            var idx =$(this).index();
            $(this).addClass('active').siblings('li').removeClass('active');
            $('.tab .content').eq(idx).fadeIn().siblings('.content').fadeOut();
        });


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
