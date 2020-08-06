  var bl = document.getElementById('banner_l')
  var br = document.getElementById('banner_r');
  var img = document.querySelector('.banner')

  var a = 1;
  bl.onclick = function() {
          a--;
          if (a < 1) {
              a = 4;
          }
          img.style.backgroundImage = 'url(uploads/banner' + a + '.jpg)';
      }
      //   br.onclick = function() {
      //       b++;
      //       if (b > 4) {
      //           b = 1;
      //       }
      //       img.src = 'uploads/banner' + b + '.jpg';
      //   }
  br.onclick = function() {
      a++;
      if (a > 4) {
          a = 1;
      }
      img.style.backgroundImage = 'url(uploads/banner' + a + '.jpg)';
  }
  setInterval(asd, 5000)

  function asd() {
      a++;
      if (a > 4) {
          a = 1;
      }
      img.style.backgroundImage = 'url(uploads/banner' + a + '.jpg)';
  }

  // 1.获取元素
  //   (1)获取导航栏
  var lis = document.querySelector('.nav').querySelectorAll('li');
  //   (2)获取需要显示的内容
  var ck = document.querySelector('.ck');
  //   (3)需要显示内容里面的标签
  var item = ck.querySelectorAll('.item');
  // 进行循环获取到每个li
  for (var i = 0; i < lis.length; i++) {
      // 对获取到的li添加属性
      lis[i].setAttribute('index', i);
      lis[i].setAttribute('a', 0);
      lis[i].setAttribute('b', 0);
      //   绑定事件 单击事件

      lis[i].onclick = function() {
          var a = 0;
          this.onclick = function() {
                  if (a == 1) {
                      this.style.backgroundColor = '';
                      ck.style.display = 'none';
                      return a = 0;
                  } else if (a == 0) {
                      ck.style.display = 'block';
                      for (var i = 0; i < lis.length; i++) {
                          //   排他思想
                          lis[i].style.backgroundColor = '';
                      }
                      //   将点击到标签背景色改为红色
                      this.style.backgroundColor = 'red';
                      var index = this.getAttribute('index');
                      for (var i = 0; i < item.length; i++) {
                          item[i].style.display = 'none';
                      }
                      item[index].style.display = 'block';
                      return a = 1;
                  }
              }
              //   if (this.getAttribute('b') === '0') {
              //       ck.style.display = 'block';
              //       for (var i = 0; i < lis.length; i++) {
              //           //   排他思想
              //           lis[i].style.backgroundColor = '';
              //       }
              //       //   将点击到标签背景色改为红色
              //       this.style.backgroundColor = 'red';
              //       var index = this.getAttribute('index');
              //       for (var i = 0; i < item.length; i++) {
              //           item[i].style.display = 'none';
              //       }
              //       item[index].style.display = 'block';
              //       this.setAttribute('b', 1);
              //       this.setAttribute('a', 0);

          //   } else if (this.getAttribute('a') === '1') {
          //       //  将点击到标签背景色改为无色
          //       this.style.backgroundColor = '';
          //       ck.style.display = 'none';

          //       this.setAttribute('b', 0);
          //   }
      }

  }

  // 核心思路： 检测用户是否按下了s 键，如果按下s 键，就把光标定位到搜索框里面
  // 使用键盘事件对象里面的keyCode 判断用户按下的是否是s键
  // 搜索框获得焦点： 使用 js 里面的 focus() 方法
  var ssk = document.querySelector('.ssk');
  document.addEventListener('keyup', function(e) {
      //   console.log(e.keyCode);
      if (e.keyCode === 83) {
          ssk.focus();
      }
  })