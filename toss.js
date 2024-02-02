// JavaScript Document

function cointoss() {
	document.getElementById("coin").style.animation = "";

	var guess = prompt("heads or tails?");
	var answer = Math.random();
	console.log(answer);
	
	if (answer < 0.5) {
		answer = "heads";
		document.getElementById("coin").src = "heads.png";
	}
	else {
		answer="tails";
		document.getElementById("coin").src = "tails.png";
	}
	
	if (guess===answer) {
		document.getElementById("message").innerHTML = "You Win!";
		document.getElementById("coin").style.animation = "heartbeat 2s";
	}
	else{
		document.getElementById("message").innerHTML = "You Lose!";
		document.getElementById("coin").style.animation = "wobble-hor-bottom 2s";
	}

}