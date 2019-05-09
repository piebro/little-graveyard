/**
 * 
 */

	const helpText = "here should be the helptext";

	const colorRangeProb = [ [ 2, 0 ], [ 2, 10 ], [ 4, 40 ], [ 16, 40 ], [ 128, 0 ] ];
	const colorOffsetProb = [ [ -128, 0 ], [ -10, 10 ], [ 0, 10 ], [ 0, 80 ], [ 0, 10 ], [ 10, 10 ], [ 128, 0 ] ];
	const noiseScaleProb = [ [ 0.5, 0 ], [ 1, 5 ], [ 4, 30 ], [ 5, 80 ], [ 6, 30 ], [ 10, 5 ], [ 15, 0 ] ];
	const multiplierProb = [ [ 0.1, 0 ], [ 1, 10 ], [ 1, 80 ], [ 1, 10 ], [ 3, 10 ], [ 10, 10 ], [ 20, 0 ] ];
	const backgroundIfOffProb = [ [ 0, 0 ], [ 0, 10 ], [ 0, 0 ], [ 255, 0 ], [ 255, 20 ], [ 255, 0 ] ];
	
	const normColorRangeProb = normChoiseAndProb(colorRangeProb);
	const normColorOffsetProb = normChoiseAndProb(colorOffsetProb);
	const normNoiseScaleProb = normChoiseAndProb(noiseScaleProb);
	const normMultiplierProb = normChoiseAndProb(multiplierProb);
	const normBackgroundIfOffProb = normChoiseAndProb(backgroundIfOffProb);
	
	const videoSeedIndex = 16;
	const colorRangeIndex = 0;
	const colorOffsetIndex = [1, 2, 3];
	const noiseScaleIndex = [4, 5, 6];
	const multiplierIndex = [7, 8, 9];
	const backgroundIfOffIndex = [10, 11, 12];
	const colorOnIndex = 13;
	const noiseSeedIndex = [14, 15, 16];
	
	function normChoiseAndProb(choiseAndProb) {
		var newChoiseAndProb = array2Dim(choiseAndProb.length, 2);//[];
		
		var sum = 0;
		for(var i=0; i<choiseAndProb.length; i++) {
			sum += choiseAndProb[i][1];
		}
		var temp = choiseAndProb[0][1] / sum;
		newChoiseAndProb[0][0] = choiseAndProb[0][0];
		newChoiseAndProb[0][1] = temp / 2;

		for (var i = 1; i < choiseAndProb.length; i++) {
			newChoiseAndProb[i][0] = choiseAndProb[i][0];	
			newChoiseAndProb[i][1] = newChoiseAndProb[i - 1][1] + temp / 2;
			temp = choiseAndProb[i][1] / sum;
			newChoiseAndProb[i][1] += temp / 2;
		}
		return newChoiseAndProb;
	}
	
	function getIfColorOn(randomDouble) {
		var colorOn= [];
		if (randomDouble < 0.4) {
			colorOn[0] = true;
			colorOn[1] = true;
			colorOn[2] = true;
		} else if (randomDouble < 0.5) {
			colorOn[0] = false;
			colorOn[1] = true;
			colorOn[2] = true;
		} else if (randomDouble < 0.6) {
			colorOn[0] = true;
			colorOn[1] = false;
			colorOn[2] = true;
		} else if (randomDouble < 0.7) {
			colorOn[0] = true;
			colorOn[1] = true;
			colorOn[2] = false;
		} else if (randomDouble < 0.8) {
			colorOn[0] = true;
			colorOn[1] = false;
			colorOn[2] = false;
		} else if (randomDouble < 0.9) {
			colorOn[0] = false;
			colorOn[1] = true;
			colorOn[2] = false;
		} else {
			colorOn[0] = false;
			colorOn[1] = false;
			colorOn[2] = true;
		}
		return colorOn;
	}
	
	
	
	/**
	 * 
	 */

	var linearNoiseArrayVar;

	var resX = 100;
	var resY = 100;
		
	var colorRange;
	var colorRangeDivider;
	var colorOffset = [];
	var noiseScale = [];
	var colorOn = [];
	var multiplier = [];
	var backgroundIfOff = [];
	var noiseOffsetX = [];
	var noiseOffsetY = [];

	var videoPossible = false;
	var seedLength = 20;

	function getImage(imageSeed) {

		getVariablesFromRandom(imageSeed);

		var rgb = array3Dim(resX, resY, 3);//[[[]]];

		rgb = addColor(imageSeed[noiseSeedIndex[0]], rgb, 0, resX, resY);
		rgb = addColor(imageSeed[noiseSeedIndex[1]], rgb, 1, resX, resY);
		rgb = addColor(imageSeed[noiseSeedIndex[2]], rgb, 2, resX, resY);
		
		var img = createImage(resX, resY, RGB);
		img.loadPixels();
		
		for (var x = 0; x < resX; x++) {
			for (var y = 0; y < resY; y++) {
				var index = (x + y * resX)*4;
				
				img.pixels[index+0] = rgb[x][y][0];
				img.pixels[index+1] = rgb[x][y][1];
				img.pixels[index+2] = rgb[x][y][2];
				img.pixels[index+3] = 255;

			}
		}

		img.updatePixels();

		return img;
	}

	function addColor(imageSeed, rgb, colorIndex, resX, resY) {
		if (colorOn[colorIndex]) {
			var temp;
			var noisSeed = imageSeed * Math.pow(15, 10);
			noiseSeed(noisSeed);
			
			for (var x = 0; x < resX; x++) {
				for (var y = 0; y < resY; y++) {

					var relX = x / resX;
					var relY = y / resY;
					
					// temp = noise mit scale
					temp = noise(relX * noiseScale[colorIndex], relY * noiseScale[colorIndex]);

//					if(x==0 && y==0){console.log(1, temp)}
					
					// temp = Farbe zwischen 0 und 255 in colorRange veschiedene Etappen
					temp = Math.round(temp * colorRange) * colorRangeDivider;

					// temp wird mit einer zahl multipliziert
					temp = temp * multiplier[colorIndex];

					// temp wir verschoben in eine Richtung
					temp = (temp + colorOffset[colorIndex]);

					// temp wird auf eine Zahl zwischen 0 und 256 gebracht
					temp = (temp + 256) % 256;
					
					

					// temp wird hier als tor Anteil hinzugefuegt
					rgb[x][y][colorIndex] = Math.round(temp);
				}
			}
		} else {
			for (var x = 0; x < resX; x++) {
				for (var y = 0; y < resY; y++) {
					rgb[x][y][colorIndex] = backgroundIfOff[colorIndex];
				}
			}
		}
		return rgb;
	}

	function getVariablesFromRandom(ranDouble) {
		colorRange = Math.round(choiceSelector(ranDouble[colorRangeIndex],
				normColorRangeProb));
		colorRangeDivider = 256 / colorRange;

		for (var i = 0; i < 3; i++) {
			colorOffset[i] =  Math.round(choiceSelector(ranDouble[colorOffsetIndex[i]],
					normColorOffsetProb));
			noiseScale[i] =   choiceSelector(ranDouble[noiseScaleIndex[i]],
					normNoiseScaleProb);
			multiplier[i] =   choiceSelector(ranDouble[multiplierIndex[i]],
					normMultiplierProb);
			backgroundIfOff[i] =  Math.round(choiceSelector(ranDouble[backgroundIfOffIndex[i]],
					normBackgroundIfOffProb));
			colorOn = getIfColorOn(ranDouble[colorOnIndex]);
		}
	}

	function choiceSelector(ranValue, normChoiseAndProb) {
		for (var i = 1; i < normChoiseAndProb.length; i++) {
			
			if (ranValue < normChoiseAndProb[i][1]) {
				var absProbLength = normChoiseAndProb[i][1] - normChoiseAndProb[i - 1][1];
				var posInbetweenProcentage = (ranValue - normChoiseAndProb[i - 1][1]) / absProbLength;
				var out = normChoiseAndProb[i - 1][0]
						+ posInbetweenProcentage * (-normChoiseAndProb[i - 1][0] + normChoiseAndProb[i][0]);
				return out;
			}
		}
		return 0;
	}
