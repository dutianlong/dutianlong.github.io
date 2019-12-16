// 倒计时跳转页面
var i = 4; 
var intervalid; 
intervalid = setInterval("fun()", 1000); 
function fun() { 
if (i == 0) { 
window.location.href = "./shop.html"; 
clearInterval(intervalid); 
} 
document.getElementById("mes").innerHTML = i; 
i--; 
} 



// 返回顶部 滚动监听
$(document).scroll(function(){
    var z= $(document).scrollTop();
    if(z<600){
        
        $('.hdb').css('display','none');
    }else{
        
        $('.hdb').css('display','block');
    }
})
$('.fhdb div').click(function(){
   $('html,body').animate({scrollTop:'0px'},0)
})



// 手机导航移入效果
$('.nav-dh').mouseover(function(){
	$('.downad').slideDown(500);
})
// 手机导航移入效果
$('.dhsecond_content li').eq(1).siblings().mouseover(function(){
	$('.downad').slideUp(500);
})
// 隐藏移出效果
$('.downad').hover(function(){
	$(this).css('display','block');
},function(){
	$(this).slideUp(500);
})

// 选项卡固定
$(document).scroll(function(){
                var z= $(document).scrollTop();
                if(z<858){
                    $('.options').addClass('fixtop1').removeClass('fixtop2');
                    
                }else{
                    $('.options').addClass('fixtop2').removeClass('fixtop1');
                   
                }
        })



