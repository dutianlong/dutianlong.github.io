		time="";
		function getTime(){     	
			var date=new Date();

			var year=date.getFullYear();
			var month=date.getMonth();
			var day=date.getDate();

			var hour=date.getHours();
			var minute=date.getMinutes();
			var second=date.getSeconds();
			if (hour<10) {
				hour='0'+hour;
			}
			if (minute<10) {
				minute='0'+minute;
			}
			if (second<10) {
				second='0'+second;
			}
            var x=date.getDay();//获取星期
            time=year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second
        }
        setInterval(getTime,1000);

        $(document).ready(function(){

        	$("#btn1").click(function () {

        		$(".input").show(300);
        	});
        	$("#btn4").click(function () {
        		$(".input").hide();
        	});

        	$("#btn2").click(function () {
        		$(".input").hide();
        		if($("#zhuti").val().trim().length == 0 || $("#name").val().trim().length == 0 || $("#msg").val().trim().length == 0) {
        			alert("请把所有数据填好提交!!!");
        			return;
        		}
        		var img = "img/4.jpg";
        		var zt =$("#zhuti").val();
        		var name =$("#name").val();
        		var msg =$("#msg").val().trim();
        		var select =$("#sel").val();
        		
        		if(name=='name1'){
        			var img = "img/0.jpg";
        		};
        		if(name=='name2'){
        			var img = "img/1.jpg";
        		};
        		if(name=='name3'){
        			var img = "img/2.jpg";
        		};
        		if(name=='name4'){
        			var img = "img/3.jpg";
        		};
        		$('<li><div style="border-bottom:1px dashed red;overflow: hidden; margin:0 auto;margin:10px 0 0;" class="clearfix massage"><div><div style="float: left;"><img src="'+img+'"  style="width: 100px;border-radius:50%;"></div><div style="float: left;margin:10px;"><h3>"'+zt+'"</h3><p>"'+msg+'"</p>所属校区:"'+select+'" 发布人:"'+name+'" 发布时间"'+time+'"</div></div><button style="display:block; float:right;width:100px;border-radius: 8px; color: white;background-color: rgb(102,177,255);margin-top:30px;"id="delbtn">删除</button></div></li>').prependTo("#ul");
        		$("#delbtn").on("click", function () {
        			$(this).parent().remove();
        		});
        	});

        	$("#btn3").on("click", function () {
        		$("#ul").empty();
        	});
        });