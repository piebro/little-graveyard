"use strict"

function main(){
  
  gat.mainLoop({
    drawFunc:draw,
    engine:gat.engines.svg,
    size:[1170,810],
    name:"bezierbrush",
  });

}

function draw(ctx,seed){
  let values = {
    ran: gat.Randomizer(seed),

    lineCount: 10,
    lineLength: 6,
    oneStrokeCount: 1,

    lineFunc: bezier,
  }

  if(values.ran.next01()<0.7){
    values.pointsOnLineFunc = ranPointsOnLine;
  } else {
    values.pointsOnLineFunc= ranPointsOnLine;
  }

  let ranAlpha = values.ran.next01();
  if(ranAlpha<0.5){
    values.alpha = 0.1;
  } else if (ranAlpha<0.6){
    values.alpha = 0.3;
  } else {
    values.alpha = 0.5;
  }

  let w = 1170;
  let h = 810;

  let wDiff = w*values.alpha/2;
  let hDiff = h*values.alpha/2;
  let frame = [wDiff,hDiff,w-wDiff,h-hDiff];

  for(let i=0; i<values.oneStrokeCount; i++){
    oneStroke(values, ctx, frame);
  }

  ctx.lineJoin="round";
  ctx.lineCap="round";
  ctx.lineWidth=5;
  ctx.stroke()
}

function oneStroke(values, ctx, frame){
  let ranPointsOnLineList = [];
  for(let i=0; i<values.lineLength; i++){
    let line = values.pointsOnLineFunc(values.ran, frame);

    ranPointsOnLineList[i] = pointsOnLine(...line, values.lineCount)
  }
  let lines = []
  for(let i=0; i<values.lineCount; i++){
    lines[i] = [];
    for(let j=0; j<values.lineLength; j++){
      lines[i].push(ranPointsOnLineList[j][i]);
    }
  }
  values.lineFunc(ctx,lines);
}

function ranPointsOnLineHorizontalVertical(ran,frame){
  let a = ran.nextInt(frame[0],frame[2]);
  let b = ran.nextInt(frame[1],frame[3]);
  let c = ran.nextInt(frame[0],frame[2]);
  if(ran.nextBool()){
    return [a,b,c,b]
  } else {
    return [a,b,a,c]
  }
}

function ranPointsOnLine(ran,frame){
  let x0 = ran.nextInt(frame[0],frame[2]);
  let y0 = ran.nextInt(frame[1],frame[3]);
  let x1 = ran.nextInt(frame[0],frame[2]);
  let y1 = ran.nextInt(frame[1],frame[3]);
  return [x0,y0,x1,y1]
}

function bezier(ctx,lines){
  for(let i=0; i<lines.length; i++){
    ctx.moveTo(...lines[i][0])
    multiBezier(ctx,lines[i]);
  }
}

function multiBezier(ctx,pList){
  ctx.bezierCurveTo(...pList[1],...pList[2],...pList[3])
  for(let i=5; i<pList.length; i+=2){
    let np = [-pList[i-3][0]+2*pList[i-2][0], -pList[i-3][1]+2*pList[i-2][1]];
    ctx.bezierCurveTo(...np,...pList[i-1],...pList[i])
  }
}

function quadraticCurve(ctx,lines){
  for(let i=0; i<lines.length; i++){
    let pList = lines[i];
    ctx.moveTo(...pList[0])
    ctx.quadraticCurveTo(...pList[1],...pList[2])
  }
}

function lines(ctx,lines){
  for(let i=0; i<lines.length; i++){
    let pList = lines[i];
    ctx.moveTo(...pList[0])
    for(let j=1; j<pList.length; j++){
      ctx.lineTo(...pList[j])
    }
  }
}

function pointsOnLine(x0,y0,x1,y1,n){
  let vx = (-x0+x1)/(n-1);
  let vy = (-y0+y1)/(n-1);
  let p = [];
  for(let i=0; i<n; i++){
    p.push([x0+i*vx,y0+i*vy])
  }
  return p;
}
