/* 
* @Author: Marte
* @Date:   2017-09-02 16:11:11
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-02 16:35:46
*/

require(['config'],function(){
    require(['jquery'],function($){
        $('.common').load('list.html .common');
        $('.footer').load('reg.html .footer');

    });
})