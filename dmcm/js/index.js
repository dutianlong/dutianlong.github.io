 $(".list").click(function () {
            var index = $(this).index();
            $(this).stop().animate({width: "615px"}, 500).siblings("li").stop().animate({
                width: "80px"
            }, 500)
            $('.wrap').eq(index).fadeIn().siblings(".wrap").fadeOut();
        })