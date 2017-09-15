/* 
* @Author: Marte
* @Date:   2017-09-10 16:11:23
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-14 20:34:28
*/

/* 
* @Author: Marte
* @Date:   2017-09-10 14:01:26
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-10 16:13:12
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
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var code = document.getElementById('code');

    var vcode = document.querySelector('.vcode');
    var error = document.querySelector('#error');
    var btn = document.querySelector('button');



    vcode.innerHTML = vCode();
    vcode.onclick = function(){
        vcode.innerHTML = vCode();
    }

    code.onblur = function(){
        if(code.value == ''){
            error.style.display = 'none';
        }else{
            error.style.display = 'block';
            if(code.value.toLowerCase() !== vcode.innerHTML){
                error.innerHTML = "验证码不正确";
            }else{
                error.innerHTML = "";
            }
        }  
    }
    
    
    btn.onclick = function(){
        var _username = username.value.trim();
        var _password = password.value.trim();
        var _code = code.value.trim();

        if(_username==='' || _password==='' || _code===''){
            alert('请输入完整的登录信息');
            return;
        }else{
            // 发起ajax请求
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
                    var res = xhr.responseText;
                    console.log(res);
                    if(res == 'null'){
                        vcode.innerHTML = vCode();
                        alert("帐号不存在");
                        return;
                    }else if(res == 'ok'){
                        location.href = '../index.html';
                    }else{
                        alert("密码不正确");
                        vcode.innerHTML = vCode();
                    }
                }
            }
            xhr.open('get',`/project/src/api/login.php?username=`+username.value+'&'+password.value,true);
            xhr.send();
            


        }
    }





})
