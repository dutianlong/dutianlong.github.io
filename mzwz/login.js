// 输入手机号码----------------------------------------------
$('.ming').focus(function(){
	$('.f_top1').css('border','1px solid #32A5E7')
})
$('.ming').blur(function(){
	$('.f_top1').css('border','1px solid #ccc')
})
// 验证码----------------------------------------------------
$('.yanzm').focus(function(){
	$('.f_top2').css('border','1px solid #32A5E7')
})
$('.yanzm').blur(function(){
	$('.f_top2').css('border','1px solid #ccc')
})

var yhm=document.getElementById('fm').user;

yhm.onblur=function(){
		// alert('失去焦点');//点击文本框获取焦点，点击文本框以外的其他位置，失去焦点；
		var val=yhm.value;
		var reg=/^[0-9][0-9]{10}$/;//必须是十一位数字
		var res=reg.test(val);
		console.log(res);
		if(res){
			alert('输入正确，请点击登陆');
		}else{
			alert('格式输入错误，请重新输入11位数字')
		}
	}
