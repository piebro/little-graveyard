"use strict"

const size = [1000,1000]

function main(){
  let mainLoop = gat.mainLoop({
    drawFunc:draw,
    engine:gat.engines.svg,
    size:size,
    name:"playground",
  });
  mainLoop.start()
}

function draw(ctx,seed){
  let res = 50
  let count = 3
  let stepSize = 0.8

  let ran = new gat.Randomizer(seed)

  ctx.translate(500,500)

  let rad = ran.next01Array(res)

  for(let i=0; i<rad.length; i++){
    rad[i] = (rad[i%rad.length]*1 +
      rad[(i+rad.length-1)%rad.length]*1 +
      rad[(i+1)%rad.length]*1)/4
  }

  rad = manipRadius(rad, 2, -1)
  rad = manipRadius(rad, 50, 100)

  for(let i=0; i<count; i++){
    drawCircle(ctx, rad, 1+i*stepSize, 0)
  }

  ctx.lineJoin="round";
  ctx.lineCap="round";
  ctx.lineWidth=5;
  ctx.stroke()

}

function manipRadius(rad, mult, add){

  if (mult == undefined) return rad
  let newRad = []
  for(let i=0; i<rad.length; i++){
    newRad[i] = add + rad[i]*mult
  }
  return newRad
}

function drawCircle(ctx, rad, mult, add){
  rad = manipRadius(rad, mult, add)
  let res = rad.length
  let stepAngle = Math.PI*2/res
  ctx.moveTo(...getPos(rad[res-1],-stepAngle))
  for(let i=0; i<res; i++){
    ctx.lineTo(...getPos(rad[i],i*stepAngle))
  }
}

function getPos(radius,angle){
  return[Math.cos(angle)*radius, -Math.sin(angle)*radius]
}
