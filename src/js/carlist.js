/* 
* @Author: Marte
* @Date:   2017-09-02 16:11:11
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-12 23:18:06
*/

require(['config'],function(){
    require(['jquery','common'],function($){
        require(['fly'],function(){
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


            var offset = $('.addCars').offset();
            $(".addCar").click(function(event) { console.log(1)
                    var img = $(this).parent().parent().parent().children().children().children('img').attr('src');
                    console.log(img); 
                    //获取当前点击图片链接   
                    var flyer = $('<img class="flyer-img" src="' + img + '">').css({"width":"50","height":"50"}); //抛物体对象   
                    flyer.fly({   
                        start: {   
                            left: event.pageX,//抛物体起点横坐标   
                            top: event.pageY //抛物体起点纵坐标   
                        },   
                        end: {   
                            left: offset.left +10,//抛物体终点横坐标   
                            top: offset.top - 50, //抛物体终点纵坐标   
                        },   
                        onEnd: function() {   
                            $("#tip").show().animate({width: '200px'},300).fadeOut(500);////成功加入购物车动画效果   
                            this.destory(); //销毁抛物体   
                        }   
                    });   
                });   


        })
        

        

    });
})