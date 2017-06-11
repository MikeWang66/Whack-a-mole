window.onload= function() {
	//设置初始变量
	var c= 30;
	var in_game= 0;
	var score= 0;
	document.getElementById('time').value= c;
	document.getElementById('state').value= "Game Over";
	document.getElementById('score').value= score;
	var t;
	//倒计时函数
	function timecount() {
		document.getElementById('time').value= c;
		if(c> 0) {
			c-=1;
			t= setTimeout(timecount, 1000);
		}
		//结束游戏
		else {
			document.getElementById('state').value== "Game Over";
			stoptime();
			in_game= 0;
			clear();
			alert("Game Over!\nYour score is: " + score+".");
		}
	}
	

	// 判断是否打中地鼠
	for (var i= 0; i< 60; i++) {
		document.getElementsByClassName("button")[i].onclick= function() {
			if (in_game== 1) {
				if(event.currentTarget.style.backgroundColor== 'blue') {
					score= score+1;
					document.getElementById("score").value= score;
					var select= Math.floor(Math.random()*60+1);
					document.getElementById("button"+select).style.backgroundColor = "blue";
					event.currentTarget.style.backgroundColor = "white";
				}
				else {
					score -= 1;
					document.getElementById("score").value= score;
				}
			}
		}
	}
	//清除地鼠
	function clear() {
		for(var i= 1; i<= 60; i++) {
			document.getElementById("button"+ i).style.backgroundColor= "white";
		}
	}

	// 停止时间
	function stoptime() {
		clearTimeout(t);
	}
	// 按下开始按钮后各变化
	document.getElementById("start").onclick= function() {
		if (in_game== 0) {
			in_game= 1;
			c= 30;
			var select = Math.floor(Math.random()*60+1);
			document.getElementById("button"+select).style.backgroundColor = "blue";
			document.getElementById('state').value= "Playing";
			document.getElementById('score').value= 0;
			document.getElementById('time').value= 30;
			timecount();
			return;
	}
		if(in_game== 1) {
			document.getElementById('state').value== "Game Over";
			stoptime();
			in_game= 0;
			clear();
			alert("Game Over!\nYour score is: " + score+".");
		}
	}
}
