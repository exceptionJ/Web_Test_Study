window.onload = function () {


  var tinmer = null;
  var a1 = document.getElementById('oa1');
  // alert(a1);

  var dv3 = document.getElementById('dv3');
  a1.onmouseover = function () {
    //  alert('111');
    dv3.style.display = 'block'
  }
  a1.onmouseout = function () {
    tinmer = setTimeout(function () {
      dv3.style.display = 'none'
    }, 300)

  }
  dv3.onmouseover = function () {
    this.style.display = 'block'
    clearTimeout(tinmer);
  }
  dv3.onmouseout = function () {
    this.style.display = 'none'

  }
  // 图片切换
  var gzBtn = document.getElementById('c');
  var dBtn = document.getElementById('d');

   var img1 = document.getElementById('c1');
   var img2 = document.getElementById('d1');
  gzBtn.onclick = function () {
    //alert('111');
     img1.style.display = 'block'
     img2.style.display = 'none'
  }
  dBtn.onclick = function () {
     img1.style.display = 'none'
     img2.style.display = 'block'
    
  }
}