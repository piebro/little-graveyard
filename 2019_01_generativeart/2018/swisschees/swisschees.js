"use strict"

function main(){
  gat.mainLoop({
    drawFunc:draw,
    engine:gat.engines.canvas,
    size:[1000,800],
    name:"swisschees",
  });
}

function draw(ctx,seed){
  let ran = gat.Randomizer(seed);

  let maxX = 10;
  let maxY = 5;
  let maxZ = 5;

  let mt = randomTensor(ran, maxX, maxY, maxZ);

  ctx.translate(200,500);

  basicStruct(ctx, mt, ran, basicDraw);
  // basicStruct(ctx, mt, ran, draw2);
}

function basicDraw(ctx,mt,c,x,y,z,xl,yl,zl,zx,zy,nx,ny){
  // front
  ctx.fillStyle = c[1];
  ctx.fillRect(nx,ny,xl,yl);
  ctx.strokeRect(nx,ny,xl,yl);

  // up
  ctx.fillStyle = c[0];
  ctx.beginPath();
  ctx.moveTo(nx,ny);
  ctx.lineTo(nx+zx,ny-zy);
  ctx.lineTo(nx+xl+zx,ny-zy);
  ctx.lineTo(nx+xl,ny);
  ctx.closePath()
  ctx.fill();
  ctx.stroke();

  // right
  ctx.fillStyle = c[2];
  ctx.beginPath();
  ctx.moveTo(nx+xl,ny);
  ctx.lineTo(nx+xl+zx,ny-zy);
  ctx.lineTo(nx+xl+zx,ny+yl-zy);
  ctx.lineTo(nx+xl,ny+yl);
  ctx.closePath()
  ctx.fill();
  ctx.stroke();
}

function basicStruct(ctx, mt, ran, drawFunc){
  let maxX = mt.length;
  let maxY = mt[0].length;
  let maxZ = mt[0][0].length;

  let xl = 50;
  let yl = 50;
  let zl = 50;
  let zx = zl * 0.5;
  let zy = zl * 0.5;

  for(let z=maxZ-1; z>=0; z--){
    let c = threeColorShading(ran,20);
    // let c = ["#FFFFFF","#FFFFFF","#FFFFFF"];
    for(let x = 0; x<maxX; x++){
      for(let y = 0; y<maxY; y++){
        if(!mt[x][y][z]) continue;
        let nx = x*xl+z*zx;
        let ny = -y*yl-z*zy;
        drawFunc(ctx,mt,c,x,y,z,xl,yl,zl,zx,zy,nx,ny);
      }
    }
  }
}

function randomTensor(ran, maxX, maxY, maxZ){
  let mt = [];
  for(let x=0; x<maxX; x++){
    let vy = [];
    for(let y=0; y<maxY; y++){
      let vz = [];
      for(let z=0; z<maxZ; z++){
        vz[z] = ran.nextBool();
      }
      vy[y] = vz;
    }
    mt[x] = vy;
  }
  return mt;
}

function threeColorShading(ran,shade){
  let c = [];
  let cr = ran.nextInt(50,200);
  let cg = ran.nextInt(50,200);
  let cb = ran.nextInt(50,200);
  c[0] = colorAsString([cr+shade,cg+shade,cb+shade]);
  c[1] = colorAsString([cr,cg,cb]);
  c[2] = colorAsString([cr-shade,cg-shade,cb-shade]);
  return c;
}

function colorAsString(c){
  return "#" + c[0].toString(16) + c[1].toString(16) + c[2].toString(16);
}
