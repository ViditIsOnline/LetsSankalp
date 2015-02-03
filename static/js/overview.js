var state = 1;
var pat = document.getElementById("overview").src;
console.log(pat);
$( "#c1" ).click(function() {
	if(state!=1){
		document.getElementById("overview").style.transform="scaleY(0)"; 
		setTimeout(function(){
			$("#overview").replaceWith(
				"<div id=\"overview\" class=\"panel-body text-center border-less\"><img class=\"img-responsive\" src=\"" + pat + "\" ><h2>Project Overview 1</h2></div>"
			);
		}, 2000);
		state=1;
	}	
});

$( "#c2" ).click(function() {
	if(state!=2){
		document.getElementById("overview").style.transform="scaleY(0)"; 
		setTimeout(function(pat){
			$("#overview").replaceWith(
				"<div id=\"overview\" class=\"panel-body text-center border-less\"><img class=\"img-responsive\" src=\"" + pat + "\" >	<h2>Project Overview 2</h2></div>"
			);
		}, 2000,pat);
		state=2;
	}	
});
$( "#c3" ).click(function() {
	if(state!=3){
		document.getElementById("overview").style.transform="scaleY(0)"; 
		setTimeout(function(){
			$("#overview").replaceWith(
				"<div id=\"overview\" class=\"panel-body text-center border-less\"><img class=\"img-responsive\" src=\"" + pat + "\" >	<h2>Project Overview 3</h2></div>"
			);
		}, 2000);
		state=3;
	}	
});
$( "#c4" ).click(function() {
	if(state!=4){
		document.getElementById("overview").style.transform="scaleY(0)"; 
		setTimeout(function(){
			$("#overview").replaceWith(
				"<div id=\"overview\" class=\"panel-body text-center border-less\"><img class=\"img-responsive\" src=\"" + pat + "\" >	<h2>Project Overview 4</h2></div>"
			);
		}, 2000);
		state=4;
	}	
});
$( "#c5" ).click(function() {
	if(state!=5){
		document.getElementById("overview").style.transform="scaleY(0)"; 
		setTimeout(function(){
			$("#overview").replaceWith(
				"<div id=\"overview\" class=\"panel-body text-center border-less\"><img class=\"img-responsive\" src=\"" + pat + "\" >	<h2>Project Overview 5</h2></div>"
			);
		}, 2000);
		state=5;
	}	
});
$( "#c6" ).click(function() {
	if(state!=6){
		document.getElementById("overview").style.transform="scaleY(0)"; 
		setTimeout(function(){
			$("#overview").replaceWith(
				"<div id=\"overview\" class=\"panel-body text-center border-less\"><img class=\"img-responsive\" src=\"" + pat + "\" >	<h2>Project Overview 6</h2></div>"
			);
		}, 2000);
		state=6;
	}	
});
$( "#c7" ).click(function() {
	if(state!=7){
		document.getElementById("overview").style.transform="scaleY(0)"; 
		setTimeout(function(){
			$("#overview").replaceWith(
				"<div id=\"overview\" class=\"panel-body text-center border-less\"><img class=\"img-responsive\" src=\"" + pat + "\" >	<h2>Project Overview 7</h2></div>"
			);
		}, 2000);
		state=7;
	}	
});
$( "#c8" ).click(function() {
	if(state!=8){
		document.getElementById("overview").style.transform="scaleY(0)"; 
		setTimeout(function(){
			$("#overview").replaceWith(
				"<div id=\"overview\" class=\"panel-body text-center border-less\"><img class=\"img-responsive\" src=\"" + pat + "\" >	<h2>Project Overview 8</h2></div>"
			);
		}, 2000);
		state=8;
	}	
});
$( "#c9" ).click(function() {
	if(state!=9){
		document.getElementById("overview").style.transform="scaleY(0)"; 
		setTimeout(function(){
			$("#overview").replaceWith(
				"<div id=\"overview\" class=\"panel-body text-center border-less\"><img class=\"img-responsive\" src=\"" + pat + "\" >	<h2>Project Overview 9</h2></div>"
			);
		}, 2000);
		state=9;
	}	
});
$( "#c10" ).click(function() {
	if(state!=10){
		document.getElementById("overview").style.transform="scaleY(0)"; 
		setTimeout(function(){
			$("#overview").replaceWith(
				"<div id=\"overview\" class=\"panel-body text-center border-less\"><img class=\"img-responsive\" src=\"" + pat + "\" >	<h2>Project Overview 10</h2></div>"
			);
		}, 2000);
		state=10;
	}	
});