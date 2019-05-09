"use strict"

let size = [1170,810]

function main(){
  gat.mainLoop({
    drawFunc:draw,
    engine:gat.engines.svg,
    size:size,
    name:"bezierplaying",
  });


}

function draw(ctx,seed){
  let ran = new gat.Randomizer(seed);

  let w = size[0];
  let h = size[1];

  let dd = gat.ranVariable.discreteDistribution;
  // let spikeArgs = {
    // yMultiplier:1,
    // xMultiplier:1,
    // xc1BezierRange:[0,100],
    // yc1BezierRange:[100,100],
    // xc2BezierRange:[100,100],
    // yc2BezierRange:[100,100],
    // xSymmetry:true,
    // ySymmetry:true,
    // xRange:[0,0],
    // yRange:[0,0],
    //lengthX:undefined,
    // lengthYRange:[100,100],
  // }


  let spikeLineArgs = getRanSpikeLineArgs(ctx, w, h, ran);

  let mode = dd(ran.next01(),[
    ["singleLine",5],
    ["threeLine",5],
  ]);
  let spikeFunc = dd(ran.next01(),[
    [spikeLine,5],
    [doubleSpikeLine,5],
  ]);

  if(mode=="test"){
    spikeFunc(spikeLineArgs)
  }
  else if(mode=="singleLine"){
    spikeFunc(spikeLineArgs);
  }
  else if(mode=="threeLine"){
    spikeLineArgs.yLine-=100;
    spikeFunc(spikeLineArgs);
    spikeLineArgs.yLine+=100;
    spikeFunc(spikeLineArgs);
    spikeLineArgs.yLine+=100;
    spikeFunc(spikeLineArgs);
  }

  //console.log(spikeLineArgs)
  ctx.lineJoin="round";
  ctx.lineCap="round";
  ctx.lineWidth=5;
  ctx.stroke()
}

function getRanSpikeLineArgs(ctx, w, h, ran){
  let dd = gat.ranVariable.discreteDistribution;
  let ld = gat.ranVariable.linearDistribution;

  let spikeArgs = {
    ctx:ctx,
    ran:ran,
  }

  let spikeLineArgs = {
    ctx:ctx,
    xAlpha: 0.2,
    w:w,
    h:h,
    yLine:h/2,
  }

  spikeArgs.lengthYRange = dd(ran.next01(),[
    [[0,0],10],[[100,100],2]
  ]);

  spikeArgs.xRange = []
  spikeArgs.xRange[0] = ld(ran.next01(),[
    [0,10],[30,10],[200,4]
  ]);
  spikeArgs.xRange[1] = spikeArgs.xRange[0] + ld(ran.next01(),[
    [0,0],[0,10],[30,10],[200,4]
  ]);
  spikeArgs.xRange[1] = dd(ran.next01(),[
    [-spikeArgs.xRange[0],2],[spikeArgs.xRange[1],10]
  ]);

  spikeArgs.yRange = []
  spikeArgs.yRange[0] = ld(ran.next01(),[
    [0,10],[30,10],[200,4]
  ]);
  spikeArgs.yRange[1] = spikeArgs.yRange[0] + ld(ran.next01(),[
    [0,0],[0,10],[30,10],[200,4]
  ]);
  spikeArgs.yRange[1] = dd(ran.next01(),[
    [-spikeArgs.yRange[0],2],[spikeArgs.yRange[1],10]
  ]);

  function getControlPointRange(ran){
    let cpr = [];
    cpr[0] = ld(ran.next01(),[
      [0,0],[0,10],[100,3]
    ]);
    cpr[1] = cpr[0] + ld(ran.next01(),[
      [10,0],[100,10],[300,100],[400,20]
    ]);
    cpr = dd(ran.next01(),
      [[cpr,10],[[100,100],10]]
    );
    return cpr;
  }

  spikeArgs.xc1BezierRange = getControlPointRange(ran)
  spikeArgs.yc1BezierRange = getControlPointRange(ran)
  spikeArgs.xc2BezierRange = getControlPointRange(ran)
  spikeArgs.yc2BezierRange = getControlPointRange(ran)

  spikeArgs.xSymmetry = dd(ran.next01(),[
    [true,5],
    [false,2],
  ]);

  spikeArgs.ySymmetry = dd(ran.next01(),[
    [true,5],
    [false,2],
  ]);

  spikeArgs.yMultiplier = dd(ran.next01(),
    [[0.5,1],[1,10],[5,2]]
  );
  spikeArgs.yMultiplier *= dd(ran.next01(),
    [[1,5],[-1,5]]
  );
  spikeArgs.xMultiplier = dd(ran.next01(),
    [[0.5,1],[1,10],[2,2]]
  );
  spikeArgs.xMultiplier *= dd(ran.next01(),
    [[1,5],[-1,5]]
  );


  // Spike Line Args:

  spikeLineArgs.spikeCount = Math.round(ld(ran.next01(),[
    [1,0],[6,10],[15,1]
  ]));
  spikeLineArgs.underScore = Math.round(ld(ran.next01(),[
    [0,0],[0,10],[30,10],[200,4]
  ]));
  spikeLineArgs.frontEndUnderscore = dd(ran.next01(),
    [[true,5],[false,5]]
  );
  spikeLineArgs.drawUnderLine = dd(ran.next01(),
    [[true,5],[false,5]]
  );

  spikeLineArgs.spikeArgs = spikeArgs;
  return spikeLineArgs;
}

function doubleSpikeLine(spikeLineArgs){
  spikeLine(spikeLineArgs);
  spikeLineArgs.spikeArgs.yMultiplier*=-1;
  spikeLine(spikeLineArgs);
  spikeLineArgs.spikeArgs.yMultiplier*=-1;
}

function spikeLine(args){
  let spikeArgs = args.spikeArgs;
  let ctx = args.ctx;

  let yLine = args.yLine;
  let w = args.w;
  let h = args.h;
  let xStart = w*args.xAlpha/2;
  let xLength = w*(1-args.xAlpha)/args.spikeCount;


  if(args.drawUnderLine && args.frontEndUnderscore){
    ctx.moveTo(xStart,yLine)
    ctx.lineTo(xStart+args.underScore/2,yLine)
  }
  else{
    ctx.moveTo(xStart+args.underScore/2,yLine)
  }



  for(let i=0; i<args.spikeCount; i++){
    let nx = xStart+i*xLength+args.underScore/2

    spikeArgs.startPos = [nx,yLine];
    spikeArgs.lengthX = xLength-args.underScore;
    if(!args.drawUnderLine){
      ctx.moveTo(...spikeArgs.startPos);
    }

    spiky(spikeArgs);
  }

  if(args.drawUnderLine && args.frontEndUnderscore){
    ctx.lineTo(w-xStart,yLine)
  }
}

function spiky(args){
  let ctx = args.ctx;
  let ran = args.ran;
  let lx = args.lengthX;
  let ly = ran.nextInt(...args.lengthYRange) * args.yMultiplier;
  let sx = args.startPos[0];
  let sy = args.startPos[1];
  let mx = sx+lx/2;
  let my = sy+ly/2;

  let bx1 = args.xMultiplier * ran.nextInt(...args.xc1BezierRange);
  let by1 = args.yMultiplier * ran.nextInt(...args.yc1BezierRange);

  let bx2 = args.xMultiplier * ran.nextInt(...args.xc2BezierRange);
  let by2 = args.yMultiplier * ran.nextInt(...args.yc2BezierRange);

  if(args.xSymmetry){
    bx2 = -bx1;
  }
  if(args.ySymmetry){
    by2 = by1;
  }

  let x = mx + args.xMultiplier * ran.nextInt(...args.xRange);
  let y = my + args.yMultiplier * ran.nextInt(...args.yRange);



  let path = [
    ["m",[sx,sy]],
    ["l",[sx,sy+ly]],

    ["b",[sx,sy+ly+by1,x+bx1,y,x,y]],

    ["b",[x+bx2,y,sx+lx,sy+ly+by2,sx+lx,sy+ly]],
    ["l",[sx+lx,sy]],
  ]

  // gat.tools.interpretePath(ctx, path, [0,0], [1,1])
  gat.path.drawPathBbox(ctx, path, [0,0,1,1], [0,0,1,1])
}
