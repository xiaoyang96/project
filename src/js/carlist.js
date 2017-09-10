/* 
* @Author: Marte
* @Date:   2017-09-02 16:11:11
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-10 20:54:18
*/

require(['config'],function(){
    require(['jquery','common'],function($){
        $('.header').load('list.html .header');
        $('.common_footer').load('list.html .common_footer');

        $('.footer').load('reg.html .footer');
        
    });
})