/**
 *  
 */

function myRandom(seed){
	
	this.seed = seed%233280;
	
	this.nextDouble = function(){
		var out = ((this.seed * 9301 + 49297) % 233280);
		this.seed = out;
		return out/233280;
	}
	
	this.nextLong = function() {
		var temp = ((this.seed * 9301 + 49297) % 233280);
		this.seed = temp;
		var out = (temp*temp*this.seed);
		return out;
	}
	
	this.nextInt = function() {
		var temp = (int)((this.seed * 9301 + 49297) % 233280);
		this.seed = temp;
		return Math.round(temp);
	}
	
	this.nextInt = function(max) {
		var temp = (int)((seed * 9301 + 49297) % 233280);
		this.seed = temp;
		return Math.round(temp%max);
	}
	
	this.nextBoolean = function() {
		var temp = this.nextDouble();
		if(temp<0.5) {
			return true;
		} else {
			return false;
		}
	}
	
}

function linearNoise(seed, minSteps, startDouble){
	this.seed = seed;
	this.ran = new myRandom(seed);
	this.counter = 0;
	this.lastDoubleVar = 0;
	this.nextDoubleVar = startDouble;
	this.changeValue = 0;
	this.stepsToNextDouble = 0;
	this.minSteps = minSteps;

	this.nextDouble = function() {
		if (this.counter == 0) {
			this.lastDoubleVar = this.nextDoubleVar;
			this.nextDoubleVar = this.ran.nextDouble();

			this.stepsToNextDouble = this.ran.nextInt(20) + this.minSteps;
			this.changeValue = (-this.lastDoubleVar + this.nextDoubleVar) / this.stepsToNextDouble;

			this.counter = this.stepsToNextDouble;
		}
		this.counter--;
		return this.lastDoubleVar + (this.stepsToNextDouble - this.counter) * this.changeValue;
	}

	this.setDouble = function(nextDouble) {
		this.counter = 0;
		this.nextDouble = nextDouble;
	}
}

function LinearNoiseArray (count, steps, imageSeed, animationSeedIndex) {
	
	this.tempRan = new myRandom(imageSeed[animationSeedIndex]);

	this.linearNoiseNessecary = [];//new boolean[count];
	this.linearNoiseArray = [];//new linearNoise()[count];
	this.originalAnimationSeed = imageSeed;

	for (i = 0; i < count; i++) {
		
		if (steps[i] == 0) {
			this.linearNoiseNessecary[i] = false;
		} else {
			this.linearNoiseNessecary[i] = true;
			var linearNoiseSeed = this.tempRan.nextLong();
			this.linearNoiseArray[i] = new linearNoise(linearNoiseSeed, steps[i], imageSeed[i]);
		}
	}

	this.iterate = function() {
		var seed = [];
//		console.log(this.linearNoiseArray[3].nextDouble());
		for (i = 0; i < this.linearNoiseArray.length; i++) {
			
			if (this.linearNoiseNessecary[i]) {
				seed[i] = this.linearNoiseArray[i].nextDouble();
				
			} else {
				seed[i] = this.originalAnimationSeed[i];
			}
		}
//		console.log(seed);
		return seed;
	}
}