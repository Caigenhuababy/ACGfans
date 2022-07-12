$(function() {
    var num = 0; //图的运动次数
    var timer = null; //定时器
    go();
    //先设置第一个的颜色
    $("#viewpoint-circle").find('a').eq(0).css("backgroundColor", "rgb(52, 152, 219)");
    function go() {
      timer = setInterval(function() {
        //恢复小圆点颜色
        $("#viewpoint-circle").find('a').css("backgroundColor", "rgba(0, 0, 0, .5)");
        //重设指定小圆点颜色
        $("#viewpoint-circle").find('a').eq(num%5).css("backgroundColor", "rgb(52, 152, 219)");
        //动！
        $("#index-viewpoint").find('ul').animate({"marginLeft":-640*num+"px"}, 600);
        ++num; num = num % 5;
      }, 3000);
    }
    //遍历每一个圆点添加点击事件，点击当前圆点则让num值赋为当前圆点的索引
    $("#viewpoint-circle").find('li').each(function (index) {
      $(this).click(function () {
          num = index;
          console.log(this);
          $("#viewpoint-circle").find('a').css("backgroundColor", "rgba(0, 0, 0, .5)");
          $("#viewpoint-circle").find('a').eq(num%5).css("backgroundColor", "rgb(52, 152, 219)");
          $("#index-viewpoint").find('ul').stop().animate({"marginLeft":-640*num+"px"}, 600);
      });
    });
    //左箭头点击事件
    $("#viewpoint-prev").click(function() {
      if(!num) num = 4;
      else --num;
      $("#viewpoint-circle").find('a').css("backgroundColor", "rgba(0, 0, 0, .5)");
      $("#viewpoint-circle").find('a').eq(num%5).css("backgroundColor", "rgb(52, 152, 219)");
      $("#index-viewpoint").find('ul').stop().animate({"marginLeft":-640*num+"px"}, 600);
    });
    //右箭头点击事件
    $("#viewpoint-next").click(function() {
      ++num;
      num = num % 5;
      $("#viewpoint-circle").find('a').css("backgroundColor", "rgba(0, 0, 0, .5)");
      $("#viewpoint-circle").find('a').eq(num%5).css("backgroundColor", "rgb(52, 152, 219)");
      $("#index-viewpoint").find('ul').stop().animate({"marginLeft":-640*num+"px"}, 600);
    });
 });