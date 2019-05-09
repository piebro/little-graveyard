"use strict"

function main(){

  gat.mainLoop({
    drawFunc:draw,
    engine:gat.engines.svg,
    size:[1170,810],
    name:"mandala",
  });
}

function draw(ctx,seed){
  let ran = new gat.Randomizer(seed);

  ctx.lineWidth = 6;
  ctx.lineCap = "round";
  let mid = [1170/2,810/2];

  ranMandala(ctx,mid,ran,9);
  ranMandala(ctx,mid,ran,9);
  ranMandala(ctx,mid,ran,9);
  ranMandala(ctx,mid,ran,9);

  ctx.lineJoin="round";
  ctx.lineCap="round";
  ctx.lineWidth=5;
  ctx.stroke()

}

function ranMandala(ctx,mid,ran,c){
  let r = randomRadius(ran.next01Array(4));
  let a = randomAngle(ran.next01Array(4));
  mandala(ctx,mid,r,a,c);
  ctx.stroke();
}

function mandala(ctx,mid,r,a,c){
  let start = pointsOnACircle(...mid,r[0],a[0]*Math.PI*2,c);
  let cp1 = pointsOnACircle(...mid,r[1],a[1]*Math.PI*2,c);
  let cp2 = pointsOnACircle(...mid,r[2],a[2]*Math.PI*2,c);
  let end = pointsOnACircle(...mid,r[3],a[3]*Math.PI*2,c);
  for(let i=0; i<start.length; i++){
    ctx.moveTo(...start[i]);
    ctx.bezierCurveTo(...cp1[i],...cp2[i],...end[i]);
  }
}

function randomRadius(seed01){
  return [seed01[0]*470, seed01[1]*470, seed01[2]*470, seed01[3]*470];
}

function randomAngle(seed01){
  return [seed01[0]*Math.PI*2, seed01[1]*Math.PI*2,
  seed01[2]*Math.PI*2, seed01[3]*Math.PI*2];
}

function pointsOnACircle(x,y,r,startAngle,pointsCount){
  let points=[];
  let changeAngle=Math.PI*2/pointsCount;
  let angle=startAngle;
  for(let i=0; i<pointsCount; i++){
    angle+=changeAngle;
    let px = Math.cos(angle)*r+x;
    let py = Math.sin(angle)*r+y;
    points.push([px,py]);
  }
  return points;
}
