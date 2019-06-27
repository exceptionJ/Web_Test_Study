/*alert(navigator.appName);

alert(navigator.appVersion);

alert(navigator.userAgent);

alert(navigator.platform);

alert(navigator.plugins);

for(var i=0; i<=navigator.plugins.length; i++) {
    document.write('文件名'+navigator.plugins[i].name+'<br>');
    document.write('磁盘文件名'+navigator.plugins[i].filename+'<br>');
    document.write('描述信息'+navigator.plugins[i].description+'<br>');
    document.write('<br/>');
    
}


//检测浏览器版本(opera)
document.write(navigator.userAgent);

var client = function(){            //创建一个对象

    var engine ={
        ie:false,
        gecko:false,
        webkit:false,
        khtml:false,
        opera:false,

        ver:0
    };

   

        if(window.opera){
            engine.opera=true;
            engine.ver=window.opera.version();
        }
        return{
            engine:engine
        } 

       
}();
if(client.engine.opera){
    alert('目前使用的浏览器引擎为:'+client.engine.ver);
}

*/
document.write(navigator.userAgent);
var client = function(){            //创建一个对象

    var engine ={
        ie:false,
        gecko:false,
        webkit:false,
        khtml:false,
        opera:false,

        ver:0
    };

        var ua =navigator.userAgent;
        if(window.opera){
            engine.opera=true;
            engine.ver=window.opera.version();
        }else if(/AppleWebKit\/(\S+)/.test(ua)){
            engine.webkit=true;
            engine.ver =RegExp['$1'];
        }
        else if(/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
            engine.gecko=true;
            engine.ver=RegExp['$1'];
        }
        return{
            engine:engine
        } 

       
}();
if(client.engine.webkit){
    alert('目前使用的浏览器引擎为:'+client.engine.ver);
}else if(client.engine.opera){
    alert('目前使用的浏览器引擎版本为:'+client.engine.ver);
}else if(client.engine.gecko){
    alert('目前使用的浏览器引擎版本为:'+client.engine.ver);
}




