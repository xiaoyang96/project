/* 
* @Author: Marte
* @Date:   2017-09-05 20:21:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-05 20:21:31
*/

require(['config'],function(){
    require(['jquery'],function($){
        $('.common_header').load('list.html .common_header');
        $('.common_footer').load('list.html .common_footer');

        $('.footer').load('reg.html .footer');

    });
})