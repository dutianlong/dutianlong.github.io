 var r1 = document.getElementById("r1");
        var r2 = document.getElementById("r2");
        var r3 = document.getElementById("r3");
        var r4 = document.getElementById("r4");
        var btn = document.getElementsByTagName("button")[0];
        r1.onclick = function(){
            document.body.style.backgroundImage = "url(r1.jpg)"
            this.style.width = "200px"
            r2.style.width = "100px"
            r3.style.width = "100px"
            r4.style.width = "100px"
        }
        r2.onclick = function(){
            document.body.style.backgroundImage = "url(r2.jpg)"
            r1.style.width = "100px"
            this.style.width = "200px"
            r3.style.width = "100px"
            r4.style.width = "100px"

        }
        r3.onclick = function(){
            document.body.style.backgroundImage = "url(r3.jpg)"
            r1.style.width = "100px"
            r2.style.width = "100px"
            this.style.width = "200px"
            r4.style.width = "100px"
        }
        r4.onclick = function(){
            document.body.style.backgroundImage = "url(r4.jpg)"
            r1.style.width = "100px"
            r2.style.width = "100px"
            r3.style.width = "100px"
            this.style.width = "200px"
        }
        var ocon = document.getElementById('con')
        var isshow=true;
        btn.onclick = function(){
            if(isshow){
            ocon.style.display = "none";
            btn.innerText = "显示"
            isshow = false;

            }else{
            ocon.style.display = "block";
            btn.innerText = "隐藏"
            isshow = true; 
            }

        }