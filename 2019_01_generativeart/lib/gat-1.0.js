"use strict";
let gat_old={};

gat_old.mainLoop = function(settings){
  settings.divID = "canvasFrame"
  gat.tools.createCenterFrame(settings);
  settings.engine.setup();
  let mainLoopRan = gat.Randomizer(Date.now())
  let urlArgs = checkUrlArgs();

  let seedList = urlArgs.seedList;
  let currentSeedIndex = 0;

  if(seedList.length == 0){
    seedList.push(mainLoopRan.next()%16777216);
  }

  addEventListener();

  return {
    start: function(){
      drawCurrentSeed();
    },
    next: function(){
      nextSeed();
      drawCurrentSeed();
    },
    redraw: function(){
      drawCurrentSeed();
    },
  }

  function checkUrlArgs(){
    let args = {};
    let url = new URL(window.location.href);

    let seedStr = url.searchParams.get("seed");
    if(seedStr == null){
      args.seedList = [];
    } else {
      if(!isNaN(parseInt(seedStr, 16))){
        args.seedList = [parseInt(seedStr, 16)%2147483647];
      } else {
        args.seedList = [Math.abs(gat.tools.hashCode(seedStr))%2147483647];
      }
    }

    return args;
  }

  function checkKeyDown(key){
    if (document.activeElement.tagName == "TEXTAREA") return
    if(key.key == "ArrowRight"){
      nextSeed();
      drawCurrentSeed();
    } else if(key.key == "ArrowLeft"){
      // console.log(settings)
      prevSeed();
      drawCurrentSeed();
    } else if(key.key == "s"){
      saveShownSeed(seedList, settings);
    } else if(key.key == "l"){
      let seed = seedList[currentSeedIndex].toString(16);
      seed = ("000000"+seed).slice(-6)
      prompt("The seed is "+seed+" with the link:", window.location.hostname + "?seed=" + settings.name +"_"+ seed);
    }
  }

  function addEventListener(){
    function onMobile(){

  		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  	}

    if(onMobile()){
      window.addEventListener("click", function(){
        nextSeed();
        drawCurrentSeed();
      });
    } else {
      window.addEventListener("keydown", checkKeyDown);
    }
  }

  function drawCurrentSeed(){
    let seed = seedList[currentSeedIndex];
    settings.engine.drawInFrame(settings.drawFunc,settings.divID,settings.size,seed)
  }

  function saveShownSeed(){
    let seed = seedList[currentSeedIndex].toString(16);
    if (seedList[currentSeedIndex]<16777216){ // 16^6 = 16777216
      seed = ("000000"+seed).slice(-6)
    }


    let fileName = "";
    if(settings.name != undefined) {
      fileName += settings.name + "_";
    }
    let date = new Date();
    fileName += seed;
    settings.engine.save(settings, fileName);
  }

  function prevSeed(){
    if(currentSeedIndex>0){
      currentSeedIndex--;
    }
  }

  function nextSeed(){
    currentSeedIndex++;
    if(seedList[currentSeedIndex]==undefined){
      seedList[currentSeedIndex]=mainLoopRan.next()%16777216;
    }
  }
}

gat_old.Randomizer = function(initSeed) {
  let ranObj = {
    initSeed: initSeed,
    next: function(max) {
  		this._seed = this._seed * 16807 % 2147483647;
  		if (max === undefined) {
  			return this._seed;
  		} else {
  			return this._seed % max;
  		}
  	},
    next01: function(min, max) {
  		this._seed = this._seed * 16807 % 2147483647;
      if(min == undefined){
        min = 0
      }
      if(max == undefined){
        max = min + 1
      }
  		return min + (max-min)*(this._seed / 2147483647);
  	},
    nextInt: function(min, max){
  		let d = this.next01();
  		if(max===undefined){
  			// console.log(d);
  			return Math.round(d*min);
  		} else {
  			return Math.round(d*(max-min)+min);
  		}
  	},
    nextBool: function(){
  		if(this.next01()<0.5){
  			return true;
  		} else {
  			return false;
  		}
  	},
    reset: function() {
  		/* *9973 != *16807 und +192887 damit verschieden Randomizer entstehen können aus einem Randomizer, 9973 und 192887 sind prim numbern, vllt hilft das bei der zufälligkeit des Randomizers*/
  		this._seed = (this.initSeed * 9973 + 192887) % 2147483647;
  	},
    nextArray: function(length, max){
  		let out = [];
  		for(let i=0; i<length; i++){
  			out.push(this.next(max));
  		}
  		return out;
  	},
  	next01Array: function(dim, min, max){

      let next01 = this.next01.bind(ranObj, min, max)
      return Array(dim).fill().map(next01)
  	},
  	nextColor: function(){
  		return this.nextArray(3,256);
  	},
  	nextColorArray: function(length){
  		let colorArray=[];
  		for(let i=0; i<length; i++){
  			colorArray.push(this.nextArray(3,256));
  		}
  		return colorArray;
  	},
    nextGrid: function(dimX, dimY, func, ...funcArgs){
      // let next01 = this[func].bind(ranObj, a, b)
      func =  func.bind(ranObj, ...funcArgs)
      let out = Array(dimX)
      for(let i=0; i<dimX; i++){
        out[i] = Array(dimY).fill().map(func)
      }
      return out
    },
    nextChoice: function(choiceArray){
      return choiceArray[this.nextInt(choiceArray.length-1)]
    },
  }

	if(ranObj.initSeed<0){
		ranObj.initSeed += 2147483646;
	} else if(ranObj.initSeed<1){
		ranObj.initSeed *= 2147483647;
		ranObj.initSeed = Math.round(ranObj.initSeed);
	} else {
		ranObj.initSeed = ranObj.initSeed % 2147483647;
	}

	ranObj.reset();

  return ranObj;
}

gat_old.frame = {};

gat_old.engines = {};

gat_old.engines.canvas = {
  help: "the usual html5 canvas",
  setup: function(){
    let style = document.createElement("style");
    style.appendChild(document.createTextNode("canvas{ width:100%;height:100%;}"));
    document.head.appendChild(style);
  },
  save: function(settings, fileName){
    let canvas = document.getElementById("canvas");
    let image = new Image();
    image.src = canvas.toDataURL();

    gat.tools.downloadImageSrcAsPng(image,fileName);
  },
  drawInFrame: function(drawFunc, divID, size, seed){
    let canvas = document.createElement('canvas');
    canvas.width = size[0];
    canvas.height = size[1];
    canvas.id = "canvas";
    let ctx = canvas.getContext("2d");
    drawFunc(ctx,seed);
    let frame = document.getElementById(divID);
    let oldCanvas = document.getElementById("canvas");
    if(oldCanvas!=null){
      frame.removeChild(oldCanvas)
    }
    frame.appendChild(canvas);
  }
};

gat_old.engines.canvasPNG = {
  help: "the usual html5 canvas as a png",
  setup: function(){
    let style = document.createElement("style");
    style.appendChild(document.createTextNode("img{ width:100%;height:100%;}"));
    document.head.appendChild(style);
  },
  save: function(settings, fileName){
    let image = document.getElementById("pic");
    gat.tools.downloadImageSrcAsPng(image,fileName);
  },
  drawInFrame: function(drawFunc, divID, size, seed){
    let canvas = document.createElement('canvas');
    canvas.width = size[0];
    canvas.height = size[1];
    let ctx = canvas.getContext("2d");
    drawFunc(ctx,seed);

    let image = document.getElementById("pic");
    if(image==null){
      image = new Image();
    }
    image.id = "pic";
    image.src = canvas.toDataURL();

    let frame = document.getElementById(divID);
    frame.appendChild(image);
  }
};

gat_old.engines.svg = {
  help: "ctx is the normal canvas ctx, but this will transform it to a svg, this will need the canvas2svg.js",
  setup: function(){
    let style = document.createElement("style");
    style.appendChild(document.createTextNode("svg{ width:100%;height:100%;}"));
    document.head.appendChild(style);
  },
  save: function(settings, fileName){
    let frame = document.getElementById(settings.divID);
    gat.tools.download(frame.innerHTML, fileName+".svg","application/octet-stream");
  },
  drawInFrame: function(drawFunc, divID, size, seed){
    let ctx = new C2S(size[0],size[1]);
    drawFunc(ctx,seed);
    // console.log("asd1")
    let mySerializedSVG = ctx.getSerializedSvg();
    // console.log("asd2")
    let frame = document.getElementById(divID);
    // console.log("asd3")
    frame.innerHTML = mySerializedSVG;
  }
};

gat_old.tools = {
  download: function(content, filename){
      let a = document.createElement('a');
      let blob = new Blob([content], {'type':'application/octet-stream'});
      a.href = window.URL.createObjectURL(blob);
      a.download = filename;
      a.click();
  },
  downloadImageSrcAsPng: function(image, fileName){
    let image_data = atob(image.src.split(',')[1]);
    let arraybuffer = new ArrayBuffer(image_data.length);
    let view = new Uint8Array(arraybuffer);
    for (let i=0; i<image_data.length; i++) {
        view[i] = image_data.charCodeAt(i) & 0xff;
    }
    gat.tools.download(arraybuffer,fileName+".png");
  },
  hashCode: function(s){
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
  },
  createCenterFrame: function(settings){
    function recenterFrame(){
      let frame = document.getElementById(settings.divID);
      middlePos = getMiddlePosition();
      frame.style.position="absolute";
      frame.style.top=middlePos.offsetY.toString()+"px";
      frame.style.left=middlePos.offsetX.toString()+"px";
      frame.style.width=middlePos.width.toString()+"px";
      frame.style.height=middlePos.height.toString()+"px";
    }

    function getMiddlePosition(){

      let widthMult = settings.size[1]/settings.size[0];
      let alpha = settings.alpha
      let middlePos = {};
      if (window.innerWidth * widthMult <= window.innerHeight) {
          // stößt links und rechts an
          middlePos.width = alpha * window.innerWidth;
          middlePos.height = middlePos.width * widthMult;
      } else {
          // stößt unten und oben an
          middlePos.height = alpha * window.innerHeight;
          middlePos.width = middlePos.height / widthMult;
      }
      middlePos.offsetX = (window.innerWidth - middlePos.width) / 2;
      middlePos.offsetY = (window.innerHeight - middlePos.height) / 2;
      return middlePos;
    }

    let body = document.getElementsByTagName("body")[0];
    let frame = document.createElement("div");
    frame.id=settings.divID;
    if(settings.backgroundColor == undefined){
       settings.backgroundColor = "rgb(230,230,230)";
    }
    frame.style.background = settings.backgroundColor;

    if (settings.alpha == undefined){
      settings.alpha = 0.9
    }

    body.appendChild(frame);

    let middlePos
    recenterFrame();


    return middlePos
  },

  getCenteredDiv: function(size, borderAlpha){
    function resize(){
      let div = centeredDiv.div;
      let middlePos = centeredDiv.getMiddlePosition();
      div.style.position="absolute";
      div.style.top=middlePos.offsetY.toString()+"px";
      div.style.left=middlePos.offsetX.toString()+"px";
      div.style.width=middlePos.width.toString()+"px";
      div.style.height=middlePos.height.toString()+"px";
    }

    if (size==undefined) {size = [100,100]}
    if (borderAlpha==undefined) {borderAlpha = 1}
    let div = document.createElement("div");

    let centeredDiv = {
      div: div,
      size: size,
      borderAlpha: borderAlpha,
      getMiddlePosition: function(){

        let widthMult = this.size[1]/this.size[0];
        let alpha = this.borderAlpha
        let middlePos = {};
        if (window.innerWidth * widthMult <= window.innerHeight) {
            // stößt links und rechts an
            middlePos.width = alpha * window.innerWidth;
            middlePos.height = middlePos.width * widthMult;
        } else {
            // stößt unten und oben an
            middlePos.height = alpha * window.innerHeight;
            middlePos.width = middlePos.height / widthMult;
        }
        middlePos.offsetX = (window.innerWidth - middlePos.width) / 2;
        middlePos.offsetY = (window.innerHeight - middlePos.height) / 2;
        return middlePos;
      }
    }

    resize()
    document.body.appendChild(centeredDiv.div);
    window.addEventListener("resize", resize);
    return centeredDiv
  },
}

gat_old.ranVariable = {
  discreteDistribution: function(seed, valueProbabilityArray){
    let sum = 0;
    for(let i=0; i<valueProbabilityArray.length; i++){
      sum += valueProbabilityArray[i][1];
      valueProbabilityArray[i][1] = sum;
    }
    let scaledSeed = seed * sum;
    for(let i=0; i<valueProbabilityArray.length; i++){
      if(scaledSeed<=valueProbabilityArray[i][1]){
        return valueProbabilityArray[i][0]
      }
    }
  },

  linearDistribution: function(seed, valueProbabilityArray){
    let sum = 0;
    for(let i=0; i<valueProbabilityArray.length; i++){
      sum += valueProbabilityArray[i][1];
      valueProbabilityArray[i][1] = sum;
    }
    let scaledSeed = seed * sum;
    for(let i=0; i<valueProbabilityArray.length; i++){
      if(scaledSeed<=valueProbabilityArray[i][1]){
        if(i==0){
          return valueProbabilityArray[i][0]
        }
        let probLength = valueProbabilityArray[i][1] - valueProbabilityArray[i-1][1];
        let relScaledSeed = scaledSeed - valueProbabilityArray[i-1][1];
        let probPercent = relScaledSeed/probLength;

        let relValueDiff = valueProbabilityArray[i][0] - valueProbabilityArray[i-1][0];

        return valueProbabilityArray[i-1][0] + probPercent*relValueDiff;
      }
    }

  }
}


let gat = {}

gat.Randomizer = function(initSeed){
  if (initSeed == undefined) initSeed = Date.now()
  initSeed = Math.abs(initSeed)
  initSeed = initSeed % 2147483646
  if(initSeed<1){
    initSeed = Math.round(initSeed*2147483646)
  }
  initSeed = (initSeed * 9973 + 192887) % 2147483647;

  return {
    _seed: initSeed,
    next: function(min, max){
      this._seed = this._seed * 16807 % 2147483647;
      if(min == undefined) min = 0
      if(max == undefined) max = min + 1
  		return min + (max-min)*(this._seed / 2147483647);
    },
    nextInt: function(min, max){
      this._seed = this._seed * 16807 % 2147483647;
      if(min == undefined) min = 0
      if(max == undefined) max = 2147483647
      return min + this._seed%(max-min)
    },
    nextBool: function(){
      this._seed = this._seed * 16807 % 2147483647;
      return this._seed<1073741823
    },
    nextChoice: function(choiceArray){
      return choiceArray[this.nextInt(0,choiceArray.length)]
    },
  }
}

gat.getCenteredCanvasObj = function(size, borderAlpha){
  function resize(){
    let middlePos = centeredCanvas.getMiddlePosition();
    let style = centeredCanvas.canvas.style
    style.position = "absolute";
    style.top = middlePos.offsetY.toString()+"px";
    style.left = middlePos.offsetX.toString()+"px";
    style.width = middlePos.width.toString()+"px";
    style.height = middlePos.height.toString()+"px";
  }

  if (borderAlpha==undefined) {borderAlpha = 1}

  let centeredCanvas = {
    canvas: document.createElement('canvas'),
    _size: size,
    borderAlpha: borderAlpha,
    getMiddlePosition: function(){

      let widthMult = this.size[1]/this.size[0];
      let alpha = this.borderAlpha
      let middlePos = {};
      if (window.innerWidth * widthMult <= window.innerHeight) {
          // stößt links und rechts an
          middlePos.width = alpha * window.innerWidth;
          middlePos.height = middlePos.width * widthMult;
      } else {
          // stößt unten und oben an
          middlePos.height = alpha * window.innerHeight;
          middlePos.width = middlePos.height / widthMult;
      }
      middlePos.offsetX = (window.innerWidth - middlePos.width) / 2;
      middlePos.offsetY = (window.innerHeight - middlePos.height) / 2;
      return middlePos;
    },
    get size(){
        return this._size
    },
    set size(sizeArg){
      if (sizeArg[0]==this._size[0] && sizeArg[1]==this._size[1]){
        return
      }
      this._size = sizeArg
      this.canvas.width = sizeArg[0];
      this.canvas.height = sizeArg[1];
      resize()
    },
  }

  centeredCanvas.canvas.width = centeredCanvas.size[0];
  centeredCanvas.canvas.height = centeredCanvas.size[1];

  resize()
  document.body.appendChild(centeredCanvas.canvas);
  window.addEventListener("resize", resize);
  return centeredCanvas
}

gat.getFullscreenCanvas = function(){
  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  let canvas = document.createElement('canvas');
  canvas.style = "position:fixed;width:100%;height:100%;left:0;top:0;"
  resize()

  window.addEventListener("resize", resize);

  document.body.appendChild(canvas);
  return canvas
}

gat.addSaveAsSvgKey = function(saveKey, drawFunc, canvas){
  window.addEventListener("keydown", function(key){
    if (document.activeElement.tagName == "TEXTAREA") return
    if(key.key == saveKey){
      let ctxSVG = new C2S(canvas.width, canvas.height);
      drawFunc(ctxSVG)
      let filename = document.title + ".svg"
      gat.download(ctxSVG.getSerializedSvg(), filename)
    }
  });
}

gat.main_seededImage_saveSvg = function(canvas, drawFunc){
  function prevSeed(){
    if(currentSeedIndex>0){
      currentSeedIndex--;
    }
  }

  function nextSeed(){
    currentSeedIndex++;
    if(seedList[currentSeedIndex]==undefined){
      seedList[currentSeedIndex] = seedRan.nextInt(16777216);
    }
  }

  function drawCurrentSeed(){
    drawFunc(canvas.getContext("2d"), seedList[currentSeedIndex])
  }

  function checkKeyDown(key){
    if (document.activeElement.tagName == "TEXTAREA") return
    if(key.key == "ArrowRight"){
      nextSeed();
      drawCurrentSeed();
    } else if(key.key == "ArrowLeft"){
      prevSeed();
      drawCurrentSeed();
    } else if(key.key == "s"){
      let ctxSVG = new C2S(canvas.width, canvas.height);
      let seed = seedList[currentSeedIndex]
      drawFunc(ctxSVG, seed)
      let filename = document.title + "_" + seed.toString(16) + ".svg"
      gat.download(ctxSVG.getSerializedSvg(), filename)
    }
  }

  function addEventListener(){
    if(gat.checkMobile()){
      window.addEventListener("click", function(){
        nextSeed();
        drawCurrentSeed();
      });
    } else {
      window.addEventListener("keydown", checkKeyDown);
    }
  }


  let seedRan =  gat.Randomizer()
  let seedList = [seedRan.nextInt(16777216)]
  let currentSeedIndex = 0
  addEventListener()
  drawCurrentSeed()
}

gat.checkMobile = function(){
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

gat.download = function(content, filename){
    let a = document.createElement('a');
    let blob = new Blob([content], {'type':'application/octet-stream'});
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}
