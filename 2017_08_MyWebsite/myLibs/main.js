/**
 * 
 */

// constants:
const defaultAnimationSpeed = 1;
const defaultFPS = 30;
const animationSpeed = 1;

// vaiables:
var allSeeds = [];
var currentSeedIndex = -1;
var animationOn = false;
var newImageDrawn = false;

// main-strucure Functions

function setup() {
	unloadScrollBars();
	disableScroll();
	frameRate(defaultFPS);
	createCanvas(windowWidth, windowHeight);
	noSmooth();
	newImage();
}

function draw() {
	animation();
}

function keyPressed() {
	if (keyCode == LEFT_ARROW) {
		showPreviewImage();
	} else if (keyCode == RIGHT_ARROW) {
		showNextImage();
	} else if (key == 'F') {
		alert("here comes the fullscreen")
		// var fs = fullscreen();
		// fullscreen(!fs);
	} else if (key == ' ') {
		if (videoIsPossible) {
			startStopAnimation();
		}
	} else if (key == 'T') {
		var seed = 123123123;
		var ran = new myRandom(seed);
		alert(ran.getSeed());
	}
}

//function touchEnded() {
function touchEnded() {
	if (mouseY < windowHeight * 0.7) {
		if (mouseX < windowWidth * 0.4) {
			showPreviewImage();
		} else if (mouseX > windowWidth * 0.6) {
			showNextImage();
		}
	} else {
		if (videoIsPossible) {
			startStopAnimation();
		}
	}

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	seed = allSeeds[currentSeedIndex];
	createAndShowImage(seed)
}

// main feature functions

function newImage() {
	// erzeugt ein neues Bild und zeigt es an
	var seed = Math.random();
	// var seed = 123123123;
	currentSeedIndex = allSeeds.length;
	allSeeds[currentSeedIndex] = seed;
	createAndShowImage(seed)
	newImageDrawn = true;
	animationOn = false;
}

function showNextImage() {
	// damit man in den Bilder vorwaerts gehen kann
	if (currentSeedIndex < allSeeds.length - 1) {
		currentSeedIndex++;
		seed = allSeeds[currentSeedIndex];
		createAndShowImage(seed)
		newImageDrawn = true;
		animationOn = false;
	} else {
		newImage();
	}
}

function showPreviewImage() {
	// damit man in den Bilder vorwaerts gehen kann
	if (currentSeedIndex > 0) {
		currentSeedIndex--;
		seed = allSeeds[currentSeedIndex];
		createAndShowImage(seed)
		newImageDrawn = true;
		animationOn = false;
	}
}

function createAndShowImage(seed) {
	var arraySeed = randomDoubeArray(seed, seedLength);
	var img = getImage(arraySeed);
	image(img, 0, 0, windowWidth, windowHeight);
}

function animation() {
	if (animationOn) {
		var imageSeedArray = iterateVideoNoise();
		var img = getImage(imageSeedArray);
		image(img, 0, 0, windowWidth, windowHeight);
	}
}

function startStopAnimation() {
	// --Animation-- startet oder stoppt die animation
	if (animationOn) {
		animationOn = false;
	} else {

		if (newImageDrawn) {
			var seed = allSeeds[currentSeedIndex];
			var imgSeed = randomDoubeArray(seed, seedLength);
			// var videoSeed = randomLongArray(seed, seedLength);
			initVideoNoise(imgSeed, animationSpeed);
			newImageDrawn = false;
		}
		animationOn = true;
	}
}

// tool Functions

function randomDoubeArray(seed, count) {
	var ran = new myRandom(seed);
	var t = [];
	for (var i = 0; i < count; i++) {
		t[i] = ran.nextDouble();
	}
	return t;
}

function array2Dim(dim1, dim2) {
	out = new Array(dim1)
	for (var i = 0; i < dim1; i++) {
		out[i] = new Array(dim2);
	}
	return out;
}

function array3Dim(dim1, dim2, dim3) {
	out = new Array(dim1)
	for (var i = 0; i < dim1; i++) {
		out[i] = new Array(dim2);
		for (var j = 0; j < dim2; j++) {
			out[i][j] = new Array(dim3);
		}
	}
	return out;
}

function unloadScrollBars() {
	document.documentElement.style.overflow = 'hidden'; // firefox, chrome
	document.body.scroll = "no"; // ie only
}

function disableScroll() {
	var keys = {
		37 : 1,
		38 : 1,
		39 : 1,
		40 : 1,
		32 : 1
	};

	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
			e.preventDefault();
		e.returnValue = false;
	}

	function preventDefaultForScrollKeys(e) {
		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		}
	}

	if (window.addEventListener) // older FF
		window.addEventListener('DOMMouseScroll', preventDefault, false);
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older,
	// browsers,IE
	window.ontouchmove = preventDefault; // mobile
	document.onkeydown = preventDefaultForScrollKeys;
}