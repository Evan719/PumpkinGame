// JavaScript Document -- important! Note that I am using some more Jquery.
var pumpkinpatch = "";
var xAdjust = 300;
var yAdjust = 10;

// new variables - explain their purpose!
var myTimerObj; // empty timer object
var theframe = 0; // global frame count because we only want to run the explosion one at a time
var pumpkinCount = 0; // they may already of this but this is how we are changing each pumpkins ID so we can remove it.
var expbool = false; // this boolean will track if we are currently in explode mode or not
var isexploding = false; // this boolean tells if we have have an active explosion or not ( and limits speed clicking )..more on this



// We need a function to toggle 'add' and 'explode' mode here
// function to toggle 'add' and 'explode' mode
function explodetool() {
	if(!expbool){
		expbool = true;
		$(".follow").css("background","none");
		$("#thebutton").html('Add Pumpkins');
	}
	else{
		expbool = false;
		pumpkinpatch = document.getElementById("container").innerHTML; // explain this. we have to reset it or the pumpkinpatch resets
		$(".follow").css("background","url('images/pumpkinguide.png')");
		$("#thebutton").html('Explode Pumpkins');
	}

}

function addPumpkin(event) {
	var x = event.clientX - xAdjust;
    var y = event.clientY + yAdjust;
	var randomPumpkin = Math.floor((Math.random() * 4) + 1);
	pumpkinCount ++; // how I increment the pumpkins ids to make them unique. Why should they be unique? Answer that.
	// the 'explodepumpkin' method is new. explain.
	pumpkinpatch += "<div id='mypumpkin" + pumpkinCount + "' onclick='explodepumpkin(" + pumpkinCount +", this.style.left, this.style.top)' class='pumpkin" + randomPumpkin + "' style='left: " + x + "px; top:" + y + "px;'></div>";
	document.getElementById("container").innerHTML = pumpkinpatch;
}

// We need to define the explodepumpkin method here. Its what happens when he blows up.

// We need a function that fires everytime our timer ticks. It can go here.




// ignore the code down here, it is Jquery.
$("#container").mousemove(function(e){
      $('.follow').css({'top': e.clientY + 100, 'left': e.clientX - 50});
});