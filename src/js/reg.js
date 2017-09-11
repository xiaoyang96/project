/* 
* @Author: Marte
* @Date:   2017-08-31 21:39:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-11 08:58:45
*/

require(['config'],function(){
    require(['common'],function(){
        require(['jquery'],function($){
        

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
    
})