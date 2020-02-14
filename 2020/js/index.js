// window.onload = function(){
// 			alert("(◕ˇ∀ˇ◕)欢迎浏览我的官网(◕ˇ∀ˇ◕)");
// 		}
		// $(document).ready(function() {
		// 	var flag=1;
		// 	$(".top11").click(function(event) {
		// 		if(flag==1)
		// 		{
		// 			$(this).addClass('music');
		// 			$(".bottom11").addClass('ro');

		// 			flag=0;
		// 			$("audio")[0].load();
		// 			$("audio")[0].play();

		// 		}
		// 		else
		// 		{
		// 			$(this).removeClass('music');
		// 			flag=1;
		// 			$("audio")[0].pause();
		// 			$(".bottom11").removeClass('ro');


		// 		}
		// 	});
		// });




		$(function(){
			var oL = $('#wrap ul li').size();
			var Deg = 360/oL;
			var xDeg = 0,yDeg = -10,xs = 0,ys = 0,p=null;

			for (var i=oL-1;i>=0;i--){
				
				$('#wrap ul li').eq(i).css({
					transition:"1s "+(oL-i)*0.15+"s transform,.5s "+(1+oL*0.15)+"s opacity",
					'transform':'rotateY('+Deg*i+'deg) translateZ(350px)'
				});
			}

			
			$(document).mousedown(function(e){
				clearInterval(p);
				var x1 = e.clientX;
				var y1 = e.clientY;
				$(this).bind('mousemove',function(e){
					xs = e.clientX - x1;
					ys = e.clientY - y1;
					x1 = e.clientX;
					y1 = e.clientY;
					xDeg += xs*0.3;
					yDeg -= ys*0.1;
					// console.log( xs )
					$('#wrap').css('transform',"perspective(800px) rotateX("+yDeg+"deg) rotateY("+xDeg+"deg)");
				});
			}).mouseup(function(){
				$(this).unbind('mousemove');
				p = setInterval(function(){
					if(Math.abs(xs)<0.5&&Math.abs(ys)<0.5){clearInterval(p)};
					xs = xs*0.95;
					ys = ys*0.95
					xDeg += xs*0.3;
					yDeg -= ys*0.1;
					$('#wrap').css('transform',"perspective(800px) rotateX("+yDeg+"deg) rotateY("+xDeg+"deg)");
					// console.log(xs+','+ys);
				},30);
			});

	});
