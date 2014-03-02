/*
Author: Robert Hashemian
http://www.hashemian.com/

You can use this code in any manner so long as the author's
name, Web address and this disclaimer is kept intact.
********************************************************
SRC: http://scripts.hashemian.com/js/countdown.js

n.b. With disclaimer above intact, it's worth noting that this
code has been heavily gutted to serve my needs.
-John Silvestri

*/

function calcage(secs, num1, num2) {
  s = ((Math.floor(secs/num1))%num2).toString();
  return "<b>" + s + "</b>";
}

function CountBack(secs) {
	if (secs < 0) {
		document.getElementById("cntdwn").innerHTML = FinishMessage;
	}else{
		DisplayStr = DisplayFormat.replace(/%%H%%/g, calcage(secs,3600,24));
		DisplayStr = DisplayStr.replace(/%%M%%/g, calcage(secs,60,60));
		DisplayStr = DisplayStr.replace(/%%S%%/g, calcage(secs,1,60));

		document.getElementById("cntdwn").innerHTML = DisplayStr;

		countdown_timeout = setTimeout("CountBack(" + (secs-1) + ")", 1000);
	}
}

function start_countdown(target_date_in){
  	var ddiff = target_date_in - Date.now();
	gsecs = ddiff / 1000;
	CountBack(gsecs);
}

function stop_countdown(){
	clearTimeout(countdown_timeout);
	document.getElementById("cntdwn").innerHTML = FinishMessage;
}
