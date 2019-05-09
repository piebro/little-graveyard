"use strict"

function main(){
  gat.mainLoop({
    drawFunc:draw,
    engine:gat.engines.svg,
    size:[1170,810],
    name:"signals",
  });

}

function draw(ctx,seed){
  let ran = gat.Randomizer(seed);
  let w = 1170;
  let h = 810;

  let signalCount = ran.nextInt(1,4);
  let signaleVariance = ran.nextInt(4,10);

  let length = w;
  let pointCount = 200;
  let dt = length/pointCount;


  let scaleArray = [];
  let yOffsetArray = [];
  let funcArray = [];

  for(let i=0;i<signalCount; i++){
    funcArray.push(ranSignalFunc(ran,signaleVariance));
    scaleArray.push(ran.nextInt(2,4));
    yOffsetArray.push(h/2);
  }

  drawFunctions(ctx, length, pointCount, scaleArray, yOffsetArray, funcArray);

  ctx.lineJoin="round";
  ctx.lineCap="round";
  ctx.lineWidth=5;
  ctx.stroke()
}

function drawFunctions(ctx, length, pointCount, scaleArray, yOffsetArray, funcArray){
  for(let i=0; i<scaleArray.length; i++){
    let scale = scaleArray[i];
    let yOffset = yOffsetArray[i];
    let f = funcArray[i];
    ctx.moveTo(0,scale*f(0)+yOffset);
    for(let pc=1; pc<=pointCount; pc++){
      let t = pc/pointCount;
      ctx.lineTo(
        length*t,
        scale*f(t*2*Math.PI)+yOffset
      );
    }
    ctx.stroke();
  }

}


function ranSignalFunc(ran, depth){
  let amp = [];
  let freq = [];
  let phase = [];
  for(let i=0; i<depth; i++){
    amp.push(ran.next01()*ran.next01()*40);
    freq.push(ran.next01()*10);
    phase.push(ran.next01()*Math.PI*2);
  }
  let f = function(x){
    let sum = 0;
    for(let i=0; i<amp.length; i++){
      sum += amp[i] * Math.cos(freq[i]*x+phase[i]);
    }
    return sum;
  }
  return f;
}
