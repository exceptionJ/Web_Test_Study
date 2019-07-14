window.onload = function () {
    var uList = document.getElementsByTagName('li');
    var dv = document.getElementsByClassName('bg');

for(var i=0; i<uList.length;i++){
    uList[i].onmouseover = (
        function (n){
            return function(){
                for(var j=0;j<dv.length;j++){
                    dv[j].style.display = "none";
                }
                dv[n].style.display = "block";
            }
        }
    )(i)
}




    // uList[0].onmouseover = function () {
    //     // alert('111');
    //     dv[0].style.display = 'block';
    //     dv[1].style.display = 'none';
    //     dv[2].style.display = 'none';
    //     dv[3].style.display = 'none';
    // }
    // uList[1].onmouseover = function () {
    //     // alert('111');
    //     dv[1].style.display = 'block';
    //     dv[0].style.display = 'none';
    //     dv[2].style.display = 'none';
    //     dv[3].style.display = 'none';
    // }
    // uList[2].onmouseover = function () {
    //     // alert('111');
    //     dv[2].style.display = 'block';
    //     dv[0].style.display = 'none';
    //     dv[1].style.display = 'none';
    //     dv[3].style.display = 'none';
    // }
    // uList[3].onmouseover = function () {
    //     // alert('111');
    //     dv[3].style.display = 'block';
    //     dv[0].style.display = 'none';
    //     dv[1].style.display = 'none';
    //     dv[2].style.display = 'none';
    // }
    //   }
    //   uList[0].addEventListener(click,function () {
    //     uList[0].style.backgroundColor='red'
    //     });

  
}