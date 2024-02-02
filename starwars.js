// JavaScript Document

var rights=0;
var wrongs=0;
var qs=0;

function quiz(guess){
console.log(guess);	
	
if(guess==="right"){
	rights=rights+1;
}
	
else {
	wrongs=wrongs+1;
}
	
console.log("rights="+rights+"wrongs="+wrongs);	
qs=qs+1;
document.getElementById("q"+qs).style.display="none";

if(qs<10) {
document.getElementById("q"+(qs+1)).style.display="block";	
 }	
else{
	showresults();
 }
}

function showresults(){
	
	if(rights<5){
	document.getElementById("results").innerHTML=("You got "+rights+" answers right!<p> <img src='Images /luke.png'></p><p>The force may not be with you!</p>");
	}
	
	else if (rights<10){
	document.getElementById("results").innerHTML=("You got "+rights+" answers right!<p><img src= 'Images /masteryoda.png'></p><p>May the force be with you.</p>");
	}
	
	else{
	document.getElementById("results").innerHTML=("You got "+rights+" answers right!<p><img src='Images /maytheforce.jpeg'></p><p>You are a Star Wars fan!</p>");
	}
	
	document.getElementById("results").style.display="block";

}