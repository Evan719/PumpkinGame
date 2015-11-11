// JavaScript Document


var gametitle = "Pumpkin Game";
var pumpkinpatch = "";
var numpumpkins = 0;
document.getElementById("title").innerHTML = gametitle;


function addPumpkin(event) {
	numpumpkins++;
	var randomPumpkin = Math.floor((Math.random() * 4) + 1);
	var xAdjust = 300;
	var yAdjust = 10;
	var x = event.clientX - xAdjust;
    var y = event.clientY + yAdjust;
	pumpkinpatch += "<div onclick='explodepumpkin(this, event)' class='pumpkin" + randomPumpkin + "' style='left: " + x + "px; top:" + y + "px;'></div>";
	document.getElementById("container").innerHTML = pumpkinpatch;
	document.getElementById("numbertitle").innerHTML = numpumpkins;
}
function resetFunction(){
	document.getElementById("container").innerHTML = "";
}

// ignore the code down here, it is Jquery.
$("#container").mousemove(function(e){
      $('.follow').css({'top': e.clientY + 20, 'left': e.clientX - 50});
});