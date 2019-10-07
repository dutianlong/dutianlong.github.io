
//==========buy详情页放大镜================
    // alert($)
    // 绑定鼠标事件
    // 鼠标指针放置事件
    $('.simgs').mouseover(function(){
        // 鼠标移入,显示放大的图片
        $('.bimgs').show();
        // 鼠标移入,像素块显示
        $('.xs').show();

        // 计算像素块的宽高
        var w = $('.bimgs').width()/$('.dt').width() * $('.simgs').width();
        var h = $('.bimgs').height()/$('.dt').height() * $('.simgs').height();

        $('.xs').width(w);
        $('.xs').height(h);

    // 鼠标移出事件函数
    }).mouseout(function(){
        // 鼠标移出,隐藏放大镜效果
        $('.bimgs').hide();
        // 鼠标移出,隐藏像素粒效果
        $('.xs').hide()

        // 鼠标移动位置事件函数
    }).mousemove(function(e){
        // 鼠标位置
        var x = e.pageX;
        var y = e.pageY;
        // 获取simgs元素距离文档顶部的偏移量
        var t = $('.simgs').offset().top;
        var l = $('.simgs').offset().left;
        // 设置像素块.xs的移动距离
        var xsl = x -l-($('.xs').width()/2);
        var xst = y -t-($('.xs').height()/2);
        // 越界判断
        // 顶部与底部
        if(xst <= 0){xst = 0};
        var maxtop = $('.simgs').height()-$('.xs').height();
        if(xst >= maxtop){xst = maxtop};
        // 左侧和右侧
        if(xsl <= 0){xsl = 0};
        var maxleft = $('.simgs').width()-$('.xs').width();
        if(xsl >= maxleft){xsl = maxleft};

        // 像素块移动
        $('.xs').css({top:xst+'px',left:xsl+'px'});

        // 计算放大镜移动的距离
        var bigTop = xst * 2;
        var bigLeft = xsl * 2;
        $('.dt').css({top:-bigTop+'px',left:-bigLeft+'px'})
    });

    // 获取ul中 的图片
    $('.imgs li').click(function(){
        // 获取路径
        var s = $(this).find('img').attr('src');
        // 图片替换
        $('.xt').attr('src',s);
        $('.dt').attr('src',s);
    });



    //获取页面中所以得选项
    $('.options div').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        // 在jquery中提供一个方法 index 代表当前元素的索引
        var n = $(this).index();
           
        //找到对应的卡片,添加类,其它的移除类
        $('.card div').eq(n).addClass('active').siblings().removeClass('active');
         if(n==0){
                $('.buyxxk').css('height','10565px');
            }else if(n == 1){
                $('.buyxxk').css('height','1885px');
            }else if(n == 2){
                $('.buyxxk').css('height','200px');
            }else{
                $('.buyxxk').css('height','900px');
            }
    })


    // 购物加减
    var i=1;
    $('.gmup').click(function(){
        // alert(1);
        if(i<99){
            i++;
            num.value=i;
        }   
    });
    $('.gmdown').click(function(){
        // alert(2);
        i--;
        if (i<=1) {i=1};
        num.value=i;
        
    });


    // 购物页面颜色类型选择
    $('.ygl').click(function(){
        $(this).addClass('duyiwuer').siblings().removeClass('duyiwuer');
    })