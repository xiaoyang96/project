/* 
* @Author: Marte
* @Date:   2017-08-31 22:09:45
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-12 23:02:35
*/

// 配置文件
require.config({
    // baseUrl:'../lib',//基于html文件的路径,一般不设置
    paths:{
        // 这里的路径也是基于baseUrl
        'jquery':'../lib/jquery-3.2.1',
        'jqueryui':'../lib/jquery-ui-1.12.1/jquery-ui',
        'unslider':'../lib/unslider-150203225543/unslider.min',
        'lxzoom':'../lib/lxzoom',
        'fly':'../lib/jquery.fly.min'
    },
    shim:{
        // 设置依赖
        // 表示jqueryui依赖jquery
        jqueryui:['jquery'],
        banner:['common'],
        unslider:['jquery'],
        fly:['jquery']
    
    
    }
})