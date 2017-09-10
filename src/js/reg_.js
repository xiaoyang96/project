/* 
* @Author: Marte
* @Date:   2017-09-10 14:01:26
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-10 17:32:09
*/
function vCode(){
    var arr_char = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

    var res = '';
    for(var i=0;i<4;i++){
        // 获取随机索引值
        var idx = parseInt(Math.random()*arr_char.length);

        // 根据索引值获取字符，并拼接
        res += arr_char[idx];
    }

    return res;
}


document.addEventListener('DOMContentLoaded',function(){
    var vcode = document.querySelector('.vcode');
    var btn = document.querySelector('button');
    var agree = document.querySelector('#agree');

    vcode.innerHTML = vCode();
    vcode.onclick = function(){
        vcode.innerHTML = vCode();
    }


    



    var username = document.getElementById('username');
    var error_1 = document.getElementById('error_1');
    var reg1 = /^[a-z][\da-z\-]{5,19}$/i;
    username.onblur = function(){

        if(username.value == ''){
            error_1.style.display = 'none';
        }else{
            error_1.style.display = 'block';
            if(reg1.test(username.value)){
                // 发起ajax请求
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function(){
                    if(xhr.readyState ===4 && (xhr.status === 200 || xhr.status === 304)){
                        var res = xhr.responseText;
                        console.log(res);
                        if(res=='fail'){
                            error_1.innerHTML = "该用户名已存在";
                            error_1.style.color='red';
                        }else{
                            error_1.innerHTML = "用户名合法";
                            error_1.style.color='green';
                        }
                    }
                }
                xhr.open('get',`/project/src/api/username.php?username=`+username.value,true);
                xhr.send();

            }else{
                error_1.innerHTML = "用户名不合法";
                error_1.style.color='red';
                username.value = '';
                // e.preventDefault()
                return false;
            }
        }
    }

    var password = document.getElementById('password');
    var error_2 = document.getElementById('error_2');
    var reg2 = /^\S{6,19}$/;
    password.onblur = function(){
        if(password.value == ''){
            error_2.style.display = 'none';
        }else{
            error_2.style.display = 'block'; 
            if(reg2.test(password.value)){
                error_2.innerHTML = "密码合法";
                error_2.style.color='green';
            }else{
                error_2.innerHTML = "密码不合法";
                error_2.style.color='red';
                password.value = '';
                // e.preventDefault()
                return false;
            }
        }  
    }
    
    var confirm_pwd = document.getElementById('confirm_pwd');
    var error_3 = document.getElementById('error_3');
    var reg2 = /^\S{6,19}$/;
    confirm_pwd.onblur = function(){
        if(confirm_pwd.value == ''){
            error_3.style.display = 'none';
        }else{
            error_3.style.display = 'block';
            if(confirm_pwd.value!==password.value){
                error_3.innerHTML = "两次输入的密码不一致";
                error_3.style.color='red';

                confirm_pwd.value = '';
                // e.preventDefault()
                return false;
            }else{
                error_3.innerHTML = "OK";
                error_3.style.color='green';
            }
        }
    }
    
    var code = document.getElementById('code');
    var error_4 = document.getElementById('error_4');
    var reg4 = /^[\da-z]{4}$/i;
    code.onblur = function(){
        if(code.value == ''){
            error_4.style.display = 'none';
        }else{
            error_4.style.display = 'block';
            if(code.value.toLowerCase() ==vcode.innerHTML){
                error_4.innerHTML = "OK";
                error_4.style.color='green';
                
            }else{
                error_4.innerHTML = "验证码不正确";
                error_4.style.color='red';
                code.value = '';
                // vcode.innerHTML = vCode();
                // e.preventDefault()
                return false;
            }
        }
    }
    btn.onclick = function(){
        var _username = username.value.trim();
        var _password = password.value.trim();
        var _confirm_pwd = confirm_pwd.value.trim();
        var _code = code.value.trim();

        if(_username==='' || _password==='' || _confirm_pwd==='' || _code===''){
            alert('请输入完整的注册信息');
            return;
        }else{
            if(agree.checked == false){
                alert("请勾选服务协议");
            }else{
                // 发起ajax请求
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function(){
                    if(xhr.readyState ===4 && (xhr.status === 200 || xhr.status === 304)){
                        var res = xhr.responseText;
                        console.log(res);
                        if(res=='插入数据成功'){
                            alert("注册成功");
                        }else{
                            
                        }
                    }
                }
                xhr.open('get',`/project/src/api/reg.php?username=`+username.value+'&'+password.value,true);
                xhr.send();
            }
        }
    }





})
