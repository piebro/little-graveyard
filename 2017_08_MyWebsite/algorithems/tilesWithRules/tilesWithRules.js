/**
 * 
 */


	var tilesCountX = 10;
	var tilesCountY = 10;

	var debugOn = false;

	const videoSeedIndex = 0;
	const gridSeedIndex = 1;
	
	const simpleBowSeedIndex = [ 2 ];
	const linesWithAdgesSeedIndex = [ 3, 4 ];
	const randomBezierSeedIndex = [[ 5, 5 + 7 ] ];

	var linearNoiseArrayVar;

	var seedLength = 20;
	var videoPossible = false;


	function getImage(imgSeed) {
		var graphic = createGraphics(windowWidth, windowHeight);

		var tileW = Math.round(graphic.width / tilesCountX);
		var tileH = graphic.height / tilesCountY;
		var offsetX = Math.round( tileW);
		var offsetY = Math.round( tileH);

		var gridSeed = imgSeed[gridSeedIndex] * 100000000;
		var tilesBool = randomGrid(gridSeed, tilesCountX, tilesCountY);
		setSettings(Math.round(tileW), Math.round(tileH), 5, offsetX, offsetY);

		var rgb1 = [ 100, 0, 200 ];
		var rgb2 = [ 200, 100, 100 ];
		var rgb3 = [ 0, 200, 150 ];

		var allTiles = [
			// simpleColor(imgSeed[2]),
				simpleBow(imgSeed[simpleBowSeedIndex[0]], rgb2),
				lineWithEdge(imgSeed[linesWithAdgesSeedIndex[0]], rgb3),
				lineWithEdge(imgSeed[linesWithAdgesSeedIndex[1]], rgb1),
// randomBezier(Arrays.copyOfRange(imgSeed, randomBezierSeedIndex[0][0],
// randomBezierSeedIndex[0][1]), rgb1),
				];

// graphic.beginDraw();
		graphic.background(255);
		for (var i = 0; i < allTiles.length; i++) {
			drawTileImage(allTiles[i], graphic, tilesBool, tileW, tileH, offsetX, offsetY);
		}
// graphic.endDraw();

		if (debugOn)
			drawDebug(graphic, tilesCountX, tilesCountY);

		return graphic.get();
	}

	function drawTileImage(tiles, graphic, tilesBool, tileW, tileH, offsetX, offsetY) {
		for (var i = 0; i < tilesCountX; i++) {
			for (var j = 0; j < tilesCountY; j++) {
				var sideConnected = getSideConnected(tilesBool, i, j);
				var img = tiles[sideConnected];
				graphic.image(img, tileW * i - offsetX, tileH * j - offsetY, tileW + 2 * offsetX, tileH + 2 * offsetY);
			}
		}

	}

	function getSideConnected( tiles, i, j) {
		var sideConnected = 0;

		if (i < (tiles.length - 1) && (tiles[i + 1][j] == tiles[i][j])) {
			sideConnected += 0b0001;
		}
		if (j < (tiles[0].length - 1) && (tiles[i][j + 1] == tiles[i][j])) {
			sideConnected += 0b0010;
		}
		if (i > 0 && (tiles[i - 1][j] == tiles[i][j])) {
			sideConnected += 0b0100;
		}
		if (j > 0 && (tiles[i][j - 1] == tiles[i][j])) {
			sideConnected += 0b1000;
		}
		return sideConnected;
	}

	
	/**
	 * 
	 */
	    var w;
	    var h;
	    var strokeWeight;
	    var mw;
	    var mh;
	    var twh;
	    var thh;

		function setSettings(widthVar, heightVar, strokeWeightVar, offsetXVar,
				offsetYVar) {
			strokeWeight = strokeWeightVar;

			w = widthVar + 2 * offsetXVar;
			h = heightVar + 2 * offsetYVar;

			mw =  w / 2;
			mh =  h / 2;
			twh = mw - offsetXVar;
			thh = mh - offsetYVar;

		}

		function randomBezier(seed, rgb) {
			var ran = new MyRandom(seed[0] * 10000000);
			var tiles = new Array(16);
			var temp = new Array(16);
			for (var i = 0; i < 16; i++) {
				temp[i] = createGraphics(w, h);
// //temp[i].beginDraw();
				temp[i].strokeWeight(strokeWeight);
				temp[i].strokeCap(PApplet.PROJECT);
				temp[i].noFill();
				temp[i].stroke(rgb[0], rgb[1], rgb[2]);
// //temp[i].endDraw();
			}
			
			var mult = new Array(6);// float[6];
			for(var i=1; i<7; i++) {
				mult[i-1] = (float)(seed[i]*4-1);
			}

			// keine Verbindung
			temp[0].beginDraw();
			temp[0].endDraw();

			// rechts
			temp[1].beginDraw();
			var x10 = mw + twh;
			var y10 = mh;
			var x11 = mw-twh + mult[0] * twh * 2 * ran.nextFloat();
			var y11 = mh-thh + mult[0] * thh * 2* ran.nextFloat();
			var x12 = mw-twh + mult[1] * twh * 2 * ran.nextvar();
			var y12 = mh-thh + mult[1] * thh * 2* ran.nextvar();
			var x13 = mw + twh;
			var y13 = mh;
			temp[1].bezier(x10, y10, x11, y11, x12, y12, x13, y13);
			temp[1].endDraw();

			// unten
			temp[2] = copyTileWithRotation(temp[1], PApplet.PI / 2);

			// rechts unten
			temp[3].beginDraw();
			var x30 = mw + twh;
			var y30 = mh;
			var x31 = mw + mult[2] * twh * ran.nextvar();
			var y31 = mh + mult[2] * thh * ran.nextvar();
			var x32 = mw + mult[3] * twh * ran.nextvar();
			var y32 = mh + mult[3] * thh * ran.nextvar();
			var x33 = mw;
			var y33 = mh + thh;
			temp[3].bezier(x30, y30, x31, y31, x32, y32, x33, y33);
			temp[3].endDraw();

			// links
			temp[4] = copyTileWithRotation(temp[1], PApplet.PI);

			// rechts links
			temp[5].beginDraw();
			var x50 = mw + twh;
			var y50 = mh;
			var x51 = mw-twh + mult[4] * twh * 2 * ran.nextvar();
			var y51 = mh-thh + mult[4] * thh * 2* ran.nextvar();
			var x52 = mw-twh + mult[5] * twh * 2 * ran.nextvar();
			var y52 = mh-thh + mult[5] * thh * 2* ran.nextvar();
			var x53 = mw - twh;
			var y53 = mh;
			temp[5].bezier(x50, y50, x51, y51, x52, y52, x53, y53);
			temp[5].endDraw();

			// unten links
			temp[6] = copyTileWithRotation(temp[3], PApplet.PI / 2);

			// rechts unten links
			temp[7] = addGrahics(temp[3], temp[6]);

			// oben
			temp[8] = copyTileWithRotation(temp[1], PApplet.PI / 2 * 3);

			// rechts oben
			temp[9] = copyTileWithRotation(temp[3], PApplet.PI / 2 * 3);

			// unten oben
			temp[10] = copyTileWithRotation(temp[5], PApplet.PI / 2);

			// rechts unten oben
			temp[11] = copyTileWithRotation(temp[7], PApplet.PI / 2 * 3);

			// unten oben
			temp[12] = copyTileWithRotation(temp[3], PApplet.PI);

			// unten oben
			temp[13] = copyTileWithRotation(temp[7], PApplet.PI);

			// unten oben
			temp[14] = copyTileWithRotation(temp[7], PApplet.PI / 2);

			// unten oben
			temp[15] = addGrahics(temp[7], temp[13]);

			for (var i = 0; i < 16; i++) {
				tiles[i] = temp[i].get();
			}
			return tiles;
		}

		function simpleBow(alpha, rgb) {
			var tiles = new Array(16);
			var temp = new Array(16)
			for (var i = 0; i < 16; i++) {
				temp[i] = createGraphics(w, h);
				// temp[i].beginDraw();
				temp[i].strokeWeight(strokeWeight);
				temp[i].strokeCap(PROJECT);
				temp[i].noFill();
				temp[i].stroke(rgb[0], rgb[1], rgb[2]);
				// temp[i].endDraw();
			}
			var d = alpha / 2;

			// keine Verbindung
// temp[0].beginDraw();
			temp[0].ellipse(mw, mh, (d *2 +0.5) * twh, (d *2 +0.5)* thh);
// temp[0].endDraw();

			// rechts
// temp[1].beginDraw();
			temp[1].line(mw + twh, mh, mw, mh);
// temp[1].endDraw();

			// unten
			temp[2] = copyTileWithRotation(temp[1], PI / 2);

			// rechts unten
// temp[3].beginDraw();
			temp[3].bezier(mw + twh, mh, mw + (d * twh), mh, mw, mh + (d * thh), mw, mh + thh);
// temp[3].endDraw();

			// links
			temp[4] = copyTileWithRotation(temp[1], PI);

			// rechts links
// temp[5].beginDraw();
			temp[5].line(mw + twh, mh, mw - twh, mh);
// temp[5].endDraw();

			// unten links
			temp[6] = copyTileWithRotation(temp[3], PI / 2);

			// rechts unten links
			temp[7] = addGrahics(temp[3], temp[6]);

			// oben
			temp[8] = copyTileWithRotation(temp[1], PI / 2 * 3);

			// rechts oben
			temp[9] = copyTileWithRotation(temp[3], PI / 2 * 3);

			// unten oben
			temp[10] = copyTileWithRotation(temp[5], PI / 2);

			// rechts unten oben
			temp[11] = copyTileWithRotation(temp[7], PI / 2 * 3);

			// unten oben
			temp[12] = copyTileWithRotation(temp[3], PI);

			// unten oben
			temp[13] = copyTileWithRotation(temp[7], PI);

			// unten oben
			temp[14] = copyTileWithRotation(temp[7], PI / 2);

			// unten oben
			temp[15] = addGrahics(temp[7], temp[13]);

			for (var i = 0; i < 16; i++) {
				tiles[i] = temp[i].get();
			}
			return tiles;
		}

		function lineWithEdge(alpha, rgb) {
			var tiles = new Array(16);
			var temp = new Array(16)
			for (var i = 0; i < 16; i++) {
				temp[i] = createGraphics(w, h);
				// temp[i].beginDraw();
				temp[i].strokeWeight(strokeWeight);
				temp[i].strokeCap(PROJECT);
				temp[i].stroke(rgb[0], rgb[1], rgb[2]);
				// temp[i].endDraw();
			}
			var d = alpha * twh;

			// keine Verbindung
// temp[0].beginDraw();
			temp[0].line(mw - d / 2, mh - d / 2, mw + d / 2, mh - d / 2);
			temp[0].line(mw + d / 2, mh - d / 2, mw + d / 2, mh + d / 2);
			temp[0].line(mw + d / 2, mh + d / 2, mw - d / 2, mh + d / 2);
			temp[0].line(mw - d / 2, mh + d / 2, mw - d / 2, mh - d / 2);
// temp[0].endDraw();

			// rechts
// temp[1].beginDraw();
			temp[1].line(mw + twh, mh, mw + d, mh - d);
			temp[1].line(mw + twh, mh, mw + d, mh + d);
// temp[1].endDraw();

			// unten
			temp[2] = copyTileWithRotation(temp[1], PI / 2);

			// rechts unten
// temp[3].beginDraw();
			temp[3].line(mw + twh, mh, mw + d, mh + d);
			temp[3].line(mw + d, mh + d, mw, mh + thh);
// temp[3].endDraw();

			// links
			temp[4] = copyTileWithRotation(temp[1], PI);

			// rechts links
// temp[5].beginDraw();
			temp[5].line(mw - twh, mh, mw - d, mh + d);
			temp[5].line(mw - d, mh + d, mw + d, mh - d);
			temp[5].line(mw + d, mh - d, mw + twh, mh);
// temp[5].endDraw();
			
			// unten links
			temp[6] = copyTileWithRotation(temp[3], PI / 2);

			// rechts unten links
			temp[7] = addGrahics(temp[3], temp[6]);

			// oben
			temp[8] = copyTileWithRotation(temp[1], PI / 2 * 3);

			// rechts oben
			temp[9] = copyTileWithRotation(temp[3], PI / 2 * 3);

			// unten oben
			temp[10] = copyTileWithRotation(temp[5], PI / 2);

			// rechts unten oben
			temp[11] = copyTileWithRotation(temp[7], PI / 2 * 3);

			// unten oben
			temp[12] = copyTileWithRotation(temp[3], PI);

			// unten oben
			temp[13] = copyTileWithRotation(temp[7], PI);

			// unten oben
			temp[14] = copyTileWithRotation(temp[7], PI / 2);

			// unten oben
			temp[15] = addGrahics(temp[7], temp[13]);

			for (var i = 0; i < 16; i++) {
				tiles[i] = temp[i].get();
			}
			return tiles;
		}

		function simpleBlackAndWhite(seed) {
			var ran = new MyRandom(seed * 1000000);
			var tiles = new Array(16);
			for (var i = 0; i < 16; i++) {
				var temp = createGraphics(w, h);
// temp.beginDraw();
				temp.fill(ran.nextInt(255));
				temp.noStroke();
				temp.rect(mw - twh, mh - thh, mw + twh, mh + thh);
// temp.endDraw();
				tiles[i] = temp.get();
			}
			return tiles;
		}

		function simpleColor(seed) {
			var ran = new MyRandom((long) (seed * 1000000));
			var tiles = new Array(16);
			for (var i = 0; i < 16; i++) {
				var temp = createGraphics(w, h);
// temp.beginDraw();
				var c = color(ran.nextInt(255), ran.nextInt(255), ran.nextInt(255));
				temp.fill(c);
				temp.noStroke();
				temp.rect(mw - twh, mh - thh, mw + twh, mh + thh);
// temp.endDraw();
				tiles[i] = temp.get();
			}
			return tiles;
		}

		function copyTileWithRotation(graphic, rotation) {
			var wh = graphic.width / 2;
			var hh = graphic.height / 2;
			var out = createGraphics(graphic.width, graphic.height);
// out.beginDraw();
			out.translate(wh, hh);
			out.rotate(rotation);
			out.image(graphic.get(), -wh, -hh);
// out.endDraw();
			return out;
		}

		function addGrahics(graphic1, graphic2) {
			var out = createGraphics(graphic1.width, graphic1.height);
// out.beginDraw();
			out.image(graphic1.get(), 0, 0);
			out.image(graphic2.get(), 0, 0);
// out.endDraw();
			return out;
		}
		/**
		 * 
		 */

		function randomGrid(seed, tilesX, tilesY) {
				var ran = new myRandom(seed);
				var tiles = array2Dim(tilesX, tilesY);// new
														// boolean[tilesX][tilesY];
				ran.nextDouble();
				for (var i = 0; i < tilesX; i++) {
					for (var j = 0; j < tilesY; j++) {
						tiles[i][j] = ran.nextBoolean();
					}
				}

				return tiles;
			}

