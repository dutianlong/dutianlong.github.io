	window.onload = function(){
			setInterval(function(){
				var p = document.createElement('p')
				var body = document.querySelector('body')
				p.style.backgroundColor=fn()
			 	body.appendChild(p)
			 },300)
			
		}

		function fn(){
			var r = Math.floor(Math.random()*256)
			var g = Math.floor(Math.random()*256)
			var b = Math.floor(Math.random()*256)
			var rgb = 'rgb('+r+','+g+','+b+')'
			return rgb
		}