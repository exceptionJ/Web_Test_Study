//  function People(name, age) {

//      this.name = name;
//      this.age = age;

//      this.chishi = function () {
//          return '我叫:' + this.name + '芳龄:' + this.age + "最爱吃屎~~~~~" + this.addday()
//      }
//      this.addday = function () {
//          return this.age + 1;
//      }
//  }

//  function ceshi() {}

//  var P1 = new People("谢霆锋", 88);
//  //P1.chishi();
//  console.log(P1.chishi());

//  var P2 = new People('张柏芝', 55);
//  //P2.chishi();
//  console.log(P2.chishi());


//  var color = '红色的';                                              //这个color的作用域在window里
//  var box = {
//      color: '蓝色的'
//  };                                                      //这个color的作用域在box里
//  function sayColor() {
//      alert(this.color);
//  }                                          //此时sayColor的作用域在window里，this指向的window，直接执行会返回‘红色的’
//  sayColor();                                        // 返回 红色的
//  sayColor.call(box);                              // 返回 红色的
//  sayColor.call(this);                                                           // 返回 红色的



window.onload=function () {
    var btn1=document.getElementById('btn1');
    var dv0=document.getElementById('dv0');
    var dv2=document.getElementById('dv2');
    btn1.onclick=function () {
       // alert('11111');  
              dv0.style.display='block';
              dv2.style.display='block';     
      }
      dv2.onclick=function () {
        dv0.style.display='none';
        dv2.style.display='none';
        }
  }