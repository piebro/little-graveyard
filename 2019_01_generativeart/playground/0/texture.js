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
  let ran = new gat.Randomizer(seed)

  let args = {
    gridCount: ran.nextInt(3,9),
  }
  args.tileSize = size[0]/args.gridCount

  args.circle = {
    size: ran.next01(0.7,0.95),
    count: ran.nextInt(2,8),
    offset: ran.next01(0.5,0.9),
  }
  args.circle.maxCount = args.circle.count+ran.nextInt(0,4)

  args.line = {
    numOfLinesPerSide: ran.nextInt(3,8),
    midOffsetMult: [ran.next01(-0.6,0.6),
    ran.next01(-0.6,0.6)],
  }


  if(ran.nextBool()){
    drawCircle(ctx, ran, args)
  } else{
    drawLine(ctx, ran, args)
  }

  ctx.lineJoin="round";
  ctx.lineCap="round";
  ctx.lineWidth=2;
  ctx.stroke()
}

function drawLine(ctx, ran, args){
  let horizontelLines = Array(args.gridCount * args.line.numOfLinesPerSide)
  let verticalLines = Array(args.gridCount * (args.line.numOfLinesPerSide-2))

  for(let y=0; y<args.gridCount; y++){
    for(let x=0; x<args.gridCount; x++){
      let mid = [
        args.tileSize/2+x*args.tileSize,
        args.tileSize/2+y*args.tileSize
      ]
      let a = args.tileSize/2
      let b = args.tileSize/(args.line.numOfLinesPerSide-1)
      let newMid = [mid[0]+args.line.midOffsetMult[0]*a, mid[1]+args.line.midOffsetMult[1]*a]

      let numOfLinesVertical = args.line.numOfLinesPerSide
      for(let i=0; i<numOfLinesVertical; i++){
        if (x==0){
          horizontelLines[y*numOfLinesVertical+i]=[[mid[0]-a, mid[1]-a+i*b]]
        }
        horizontelLines[y*numOfLinesVertical+i].push(newMid)
        horizontelLines[y*numOfLinesVertical+i].push([mid[0]+a, mid[1]-a+i*b])
      }

      let numOfLinesHorizontel = args.line.numOfLinesPerSide-2
      for(let i=0; i<numOfLinesHorizontel; i++){
        if (y==0){
          verticalLines[x*numOfLinesHorizontel+i] = [[mid[0]-a+(i+1)*b, mid[1]-a]]
        }
        verticalLines[x*numOfLinesHorizontel+i].push(newMid)
        verticalLines[x*numOfLinesHorizontel+i].push([mid[0]-a+(i+1)*b, mid[1]+a])
      }
    }
  }
  for(let i=0; i<horizontelLines.length; i++){
    let line = horizontelLines[i]
    ctx.moveTo(...line[0])
    for(let j=1; j<line.length; j++){
      ctx.lineTo(...line[j])
    }
  }
  for(let i=0; i<verticalLines.length; i++){
    let line = verticalLines[i]
    ctx.moveTo(...line[0])
    for(let j=1; j<line.length; j++){
      ctx.lineTo(...line[j])
    }
  }
}

function drawCircle(ctx, ran, args){
  for(let x=0; x<args.gridCount; x++){
    for(let y=0; y<args.gridCount; y++){
      let mid = [
        args.tileSize/2+x*args.tileSize,
        args.tileSize/2+y*args.tileSize
      ]
      let radius = args.circle.size*args.tileSize/2
      let radiusDelta = radius/args.circle.maxCount

      let offset = ran.nextChoice([[1,0],[0,-1],[-1,0],[0,1]])

      for(let i=0; i<args.circle.count; i++){
        let tempRadius = radius-i*radiusDelta
        let tempOffset = [i*radiusDelta*args.circle.offset*offset[0], i*radiusDelta*args.circle.offset*offset[1]]
        let tempMid = [mid[0]+tempOffset[0], mid[1]+tempOffset[1]]

        ctx.moveTo(tempMid[0]+tempRadius,tempMid[1])
        ctx.arc(tempMid[0],tempMid[1],tempRadius,0, 2*Math.PI)
      }
    }
  }

}
