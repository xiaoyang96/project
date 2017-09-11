/* 
* @Author: Marte
* @Date:   2017-09-01 14:33:09
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-11 08:54:29
*/

require(['config'],function(){
    require(['../lib/jquery-3.2.1','common','../lib/unslider-150203225543/unslider.min'],function(){
        jQuery(function($){
            // $('.footer').load('./html/reg.html .footer')
            // var unslider04 = $('#b04').unslider({
            //     dots: true
            // }),
            // data04 = unslider04.data('unslider');
             
            // $('.unslider-arrow04').click(function() {
            //     var fn = this.className.split(' ')[1];
            //     data04[fn]();
            // });
            
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


             
            



            Carousel();
            
            
            $('.mt1 header span').eq(0).addClass('active');
            $('.mc1 .content').first().nextAll().hide();
            $('.mt1').on('mouseover','header span',function(){
                var idx = $(this).index();
                $(this).addClass('active').siblings('span').removeClass('active');
                $('.mc1 .content').eq(idx).show().siblings('.content').hide();
            });   
            
            $('.mt2 header span').eq(0).addClass('active');
            $('.mc2 .content').first().nextAll().hide();
            $('.mt2').on('mouseover','header span',function(){
                var idx = $(this).index();
                $(this).addClass('active').siblings('span').removeClass('active');
                $('.mc2 .content').eq(idx).show().siblings('.content').hide();
            });   

            $('.mt3 header span').eq(0).addClass('active');
            $('.mc3 .content').first().nextAll().hide();
            $('.mt3').on('mouseover','header span',function(){
                var idx = $(this).index();
                $(this).addClass('active').siblings('span').removeClass('active');
                $('.mc3 .content').eq(idx).show().siblings('.content').hide();
            });   

            $('.mt4 header span').eq(0).addClass('active');
            $('.mc4 .content').first().nextAll().hide();
            $('.mt4').on('mouseover','header span',function(){
                var idx = $(this).index();
                $(this).addClass('active').siblings('span').removeClass('active');
                $('.mc4 .content').eq(idx).show().siblings('.content').hide();
            });   

            $('.mt5 header span').eq(0).addClass('active');
            $('.mc5 .content').first().nextAll().hide();
            $('.mt5').on('mouseover','header span',function(){
                var idx = $(this).index();
                $(this).addClass('active').siblings('span').removeClass('active');
                $('.mc5 .content').eq(idx).show().siblings('.content').hide();
            });   
        })
        
    });
})