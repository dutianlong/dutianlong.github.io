 $(function () {
      
      $(".wrap>ul>li").mouseenter(function () {
        
        $(this).css("opacity", "1").siblings().css("opacity", "0.4");
      });
      
      $(".wrap").mouseleave(function () {
        //让所有的li都变亮
        //$("li");
        //$(".wrap li");
        //$(".wrap>ul>li")
        
        //$(this).children().children("li");
        $(this).find('li').css("opacity", 1);
      });
    });