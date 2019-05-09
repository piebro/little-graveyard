"use strict"

function main(){
  gat.mainLoop({
    drawFunc:draw,
    engine:gat.engines.svg,
    size:[1170,810],
    name:"syncbrush",
  });

}

function draw(ctx,seed){
  let ran = gat.Randomizer(seed);
  let w = 1170;
  let h = 810;

  let drawFunc;
  if(ran.nextBool()){
    drawFunc = multiBezier;
  } else {
    drawFunc = multiLine;
  }

  let stepsCount = ran.nextInt(6,20);
  let stepRange = ran.nextInt(15,90);

  let lines;
  let getdxdyFunc;
  if(ran.nextBool()){
    let alpha = 0.3 + ran.next01()*0.62;
    let lineCount = ran.nextInt(10,25);

    let wDiff = w*alpha/2;
    let hDiff = h*alpha/2;
    let frame = [wDiff,hDiff,w-wDiff,h-hDiff];
    lines = ranPoints(ran, frame, lineCount);

    if(ran.nextBool()){
      getdxdyFunc = getdxdy1;
    } else {
      getdxdyFunc = getdxdy2;
    }

  } else {
    let gridCount;
    if(ran.next01()<0.75){
      gridCount = 1;
    } else {
      gridCount = 2;
    }
    let gridLength = 50;

    let mid = [w/2,h/2];
    lines = getGridPoints(mid, gridCount, gridLength);

    stepRange *= 2;
    getdxdyFunc = getdxdy1;
  }




  let maxmin = getSteps(ran, lines, stepsCount, stepRange, getdxdyFunc);

  let tx = -(maxmin[0][0]+maxmin[1][0])/2
  let ty = -(maxmin[0][1]+maxmin[1][1])/2

  ctx.translate(tx,ty);

  for(let i=0; i<lines.length; i++){
    ctx.moveTo(...lines[i][0]);
    drawFunc(ctx,lines[i]);
  }

  ctx.lineJoin="round";
  ctx.lineCap="round";
  ctx.lineWidth=5;
  ctx.stroke()
}



function ranPoints(ran,frame, lineCount){
  let lines = [];
  for(let i=0; i<lineCount; i++){
    lines.push([[
      ran.nextInt(frame[0],frame[2]),
      ran.nextInt(frame[1],frame[3])
    ]])
  }
  return lines;
}

function getGridPoints(mid,gridCount,gridLength){
  let lines = [];
  for(let i=-gridCount; i<=gridCount; i++){
    for(let j=-gridCount; j<=gridCount; j++){
      lines.push([[
        mid[0]+i*gridLength,
        mid[1]+j*gridLength
      ]])
    }
  }
  return lines;
}

function getdxdy1(ran,stepRange){
  let dx = ran.nextInt(-stepRange,stepRange);
  let dy = ran.nextInt(-stepRange,stepRange);
  return [dx,dy];
}

function getdxdy2(ran,stepRange){
  let dx = stepRange*0.5;
  if(ran.nextBool()){
    dx *= -1;
  }
  let dy = stepRange*0.5;
  if(ran.nextBool()){
    dy *= -1;
  }
  return [dx,dy];
}

function getSteps(ran, lines, stepsCount, stepRange, getdxdyFunc){
  let max = [0,0];
  let min = [0,0];
  let sum = [0,0];

  for(let j=1; j<stepsCount; j++){

    let dxdy = getdxdyFunc(ran,stepRange);

    for(let i=0; i<lines.length; i++){
      let nx = lines[i][j-1][0] + dxdy[0];
      let ny = lines[i][j-1][1] + dxdy[1];
      lines[i][j] = [nx,ny]
    }
    sum[0] += dxdy[0];
    sum[1] += dxdy[1];
    if(sum[0]>max[0]) max[0]=sum[0];
    if(sum[0]<min[0]) min[0]=sum[0];
    if(sum[1]>max[1]) max[1]=sum[1];
    if(sum[1]<min[1]) min[1]=sum[1];
  }
  return [max,min]
}

function multiBezier(ctx,pList){
  ctx.bezierCurveTo(...pList[1],...pList[2],...pList[3])
  for(let i=5; i<pList.length; i+=2){
    let np = [-pList[i-3][0]+2*pList[i-2][0], -pList[i-3][1]+2*pList[i-2][1]];
    ctx.bezierCurveTo(...np,...pList[i-1],...pList[i])
  }
}

function multiLine(ctx,pList){
  for(let j=1; j<pList.length; j++){
    ctx.lineTo(...pList[j])
  }
}
