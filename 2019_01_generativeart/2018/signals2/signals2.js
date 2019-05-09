"use strict"

function main(){
  gat.mainLoop({
    drawFunc:draw,
    engine:gat.engines.svg,
    size:[1170,810],
    name:"signals2",
  });


}

function draw(ctx,seed){
  let ran = gat.Randomizer(seed);

  let alphaX = gat.ranVariable.discreteDistribution(ran.next01(),
    [[0,2],[0.1,5]]
  );
  let alphaY = gat.ranVariable.discreteDistribution(ran.next01(),
    [[-0.2,0.8],[0.2,3],[0.5,5]]
  );
  let signalCount = gat.ranVariable.discreteDistribution(ran.next01(),
    [[1,0.7],[2,2],[3,6],[4,4],[5,2]]
  );
  let phaseMultiplier = gat.ranVariable.discreteDistribution(ran.next01(),
    [[0,4],[0.03,1],[0.1,1],[0.25,1],[0.5,1]]
  );
  let signaleVariance = gat.ranVariable.linearDistribution(ran.next01(),
    [[2,0],[8,1],[12,2]]
  )
  // TODO: die folgenden müssten dikret sein oder?
  let oneFunc = gat.ranVariable.linearDistribution(ran.next01(),
    [[true,5],[false,5]]
  )

  let globalAmpMult = gat.ranVariable.linearDistribution(ran.next01(),
    [[0.5,1],[1,5],[1.3,1]]
  )
  let globalFreqMult = gat.ranVariable.linearDistribution(ran.next01(),
    [[0.5,1],[1,5],[2,1]]
  )



  if(phaseMultiplier == 0 && alphaY==0.5){
    alphaY = 0.2;
  }

  if(alphaY==0.5){
    globalAmpMult*=1.5;
    if(signalCount>(1/phaseMultiplier)){
      signalCount = 1/phaseMultiplier;
    }
  } else {
    signalCount *= 3;
  }

  if(alphaY<0){
    alphaX = 0
  }


  let w = 1170;
  let h = 810;
  let frame = [0+alphaX*w,0+alphaY*h,w-alphaX*w,h-alphaY*h];

  let signalYStart = frame[1];
  let signalYDist = (-frame[1]+frame[3])/signalCount;

  phaseMultiplier *= Math.PI*2;


  let pointCount = 500;

  let ranAmpArray = next01Array.bind(null,ran,signaleVariance,10,50);
  let ranFreqArray = next01Array.bind(null,ran,signaleVariance,0.1,10);
  let ranPhaseArray = next01Array.bind(null,ran,signaleVariance,0,Math.PI*2);

  let ampArray = ranAmpArray();
  let freqArray = ranFreqArray();
  let phaseArray = ranPhaseArray();

  let funcArray = [];

  for(let i=0; i<signalCount; i++){
    let newAmpArray = [];
    let newFreqArray = [];
    let newPhaseArray = [];

    if(oneFunc){
      for(let j=0; j<signaleVariance; j++){
        newAmpArray.push(ampArray[j]+i*0);
        newFreqArray.push(freqArray[j]+i*0);
        newPhaseArray.push(phaseArray[j]+i*phaseMultiplier);
      }
    } else {
      newAmpArray = ranAmpArray();
      newFreqArray = ranFreqArray();
      newPhaseArray = ranPhaseArray();
    }


    funcArray.push(
      ranSignalFunc(ran, newAmpArray, newFreqArray, newPhaseArray)
    );
  }

  let yOffsetArray = [];
  for(let i=0; i<signalCount; i++){
    yOffsetArray.push(signalYStart + i*signalYDist + signalYDist/2);
  }

  drawFunctions(ctx, frame, pointCount, yOffsetArray, funcArray, globalAmpMult, globalFreqMult);

  ctx.lineJoin="round";
  ctx.lineCap="round";
  ctx.lineWidth=5;
  ctx.stroke()
}

function next01Array(ran, length, min, max){
  let a = [];
  let d = max-min;
  for(let i=0; i<length; i++){
    a.push(min + ran.next01() * d);
  }
  return a;
}

function drawFunctions(ctx, frame, pointCount, yOffsetArray, funcArray, globalAmpMult, globalFreqMult){
  let length = -frame[0]+frame[2];
  for(let i=0; i<yOffsetArray.length; i++){
    let yOffset = yOffsetArray[i];
    let f = funcArray[i];
    ctx.moveTo(frame[0],globalAmpMult*f(0)+yOffset);
    for(let pc=1; pc<=pointCount; pc++){
      let t = pc/pointCount;
      ctx.lineTo(
        frame[0]+length*t,
        globalAmpMult*
        f(globalFreqMult*t*2*Math.PI)+yOffset
      );
    }
    ctx.stroke();
  }

}


function ranSignalFunc(ran, ampArray, freqArray, phaseArray){
  let f = function(x){
    let sum = 0;
    for(let i=0; i<ampArray.length; i++){
      sum += ampArray[i] * Math.cos(freqArray[i]*x+phaseArray[i]);
    }
    return sum;
  }
  return f;
}
