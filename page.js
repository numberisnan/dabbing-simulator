//For testing
function sprite(n) {
	if (n == 1) {
		document.querySelector("#imgcontainer").className = "bg1";
		changeSpriteState(10);
	} else {
		document.querySelector("#imgcontainer").className = "bg" + n;
		changeSpriteState(n-1);
	}
}

function changeSpriteState(n) {
	setTimeout(function() {
		sprite(n);
	}, 100)
}
//sprite(10);
//End of testing portion

//functions
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

function addEvent() {
	document.onmousemove = function(event) {
		var x = event.pageX;
		var y = event.pageY;
		var height = getHeight();
		var width = getWidth();
		var ratio = y/height;
		var frame = Math.round(x*9/width);
		var sprite = 10 - frame;
		document.querySelector("#imgcontainer").className = "bg" + sprite;
		document.querySelector(".o").style.opacity = ratio;
		if (frame > 7) {
			document.querySelector(".background").style.opacity = 1;
		} else {
			document.querySelector(".background").style.opacity = 0;
		}
		
	}
}

//One-time code
window.onresize = () => {addEvent()};
addEvent();


