/**
 * 
 */

const pixelCountX = 30;
const pixelCountY = 30;

const seedLength = 13;
const videoIsPossible = true;

const videoSeedIndex = 0;
const plusIndex = [ 1, 2, 3 ];
const timesIndex = [ 4, 5, 6 ];
const powIndex = [ 7, 8, 9 ];
const timesAfterPowIndex = [ 10, 11, 12 ];

var linearNoiseArray;

// --Animation--
function initVideoNoise(imageSeed, animationSpeed) {
	var steps = [];// = new double[seedLength];

	steps[videoSeedIndex] = 0;
	
	for (i = 0; i < 3; i++) {
		steps[plusIndex[i]] = 3000 / animationSpeed;
		steps[timesIndex[i]] = 3000 / animationSpeed;
		steps[powIndex[i]] = 3000 / animationSpeed;
		steps[timesAfterPowIndex[i]] = 3000 / animationSpeed;
	}
	linearNoiseArray =  new LinearNoiseArray(seedLength, steps, imageSeed, videoSeedIndex);
}

// --Animation--
function iterateVideoNoise() {
	return linearNoiseArray.iterate();
}

function getImage(seedArray) {
	img = createImage(pixelCountX, pixelCountY);
	img.loadPixels();
	for (i = 0; i < img.width; i++) {
		for (j = 0; j < img.height; j++) {
			var rgb = colorFunction1(seedArray, i + j * img.width);
			img.set(i, j, color(rgb[0], rgb[1], rgb[2]));
		}
	}
	img.updatePixels();
	return img;
}

function colorFunction1(t, index) {
	var r = Math.pow((index + t[plusIndex[0]] * 256) * t[timesIndex[0]] * 1,
			t[powIndex[0]] * 2)
			* t[timesAfterPowIndex[0]] * 10;
	var g = Math.pow((index + t[plusIndex[1]] * 256) * t[timesIndex[1]] * 1.5,
			t[powIndex[1]] * 2)
			* t[timesAfterPowIndex[1]] * 10;
	var b = Math.pow((index + t[plusIndex[2]] * 256) * t[timesIndex[2]] * 2,
			t[powIndex[2]] * 2)
			* t[timesAfterPowIndex[2]] * 10;
	var rgb = [ (r % 256), (g % 256), (b % 256) ];
	return rgb;
}


