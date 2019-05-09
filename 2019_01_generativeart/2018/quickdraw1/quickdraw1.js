"use strict"

const size = [1000,1000]
const qdt = getQuickdrawTools(quickdraw_data5)

function main(){
  gat.mainLoop({
    drawFunc:draw,
    engine:gat.engines.svg,
    size:size,
    name:"quickdraw1",
  });
}

function draw(ctx,seed){
  let border = 100
  let ran = new gat.Randomizer(seed)

  let dd = gat.ranVariable.discreteDistribution;
  let ld = gat.ranVariable.linearDistribution;

  let gridSize = dd(ran.next01(),[
    [[11,11],4],
    [[11,3],4],
    [[7,7],15],
    [[7,3],5],
    [[5,5],13],
    [[3,3],2],
  ]);

  let drawingMode = dd(ran.next01(),[
    ["same",15],
    ["two",5],
    ["sameMost",2],
    ["sameSome",0.5]
  ]);

  let scaleMode = dd(ran.next01(),[
    ["none",4],
    ["same",4],
    ["ran",4],
    ["big",1]
  ]);

  let translateMode = dd(ran.next01(),[
    ["none",4],
    ["ran",3],
    ["big",2]
  ]);

  let rotateMode = dd(ran.next01(),[
    ["none",4],
    ["same",4],
    ["ran",4],
  ]);

  if (scaleMode == "big" || translateMode == "big"){
    border = border * 2
  }

  let getDrawingFunc = get_getDrawingFunc(ran, drawingMode)

  let getScaleFunc = get_getScaleFunc(ran, scaleMode)

  let getTranlateFunc = get_getTranlateFunc(ran, translateMode)

  let getRotateFunc = get_getRotateFunc(ran, rotateMode)


  grid(ctx, gridSize,[border,border,size[0]-border,size[1]-border], getDrawingFunc, getScaleFunc, getTranlateFunc, getRotateFunc)


  ctx.lineJoin="round";
  ctx.lineCap="round";
  ctx.lineWidth=5;
  ctx.stroke()

}

function get_getDrawingFunc(ran, drawingMode){
  if (drawingMode == "same"){
    let categorie = qdt.getCategorie(ran)
    let id = qdt.getId(ran, categorie)
    return function(){
      return qdt.getDrawing(categorie,id)
    }
  } else if (drawingMode == "two") {
    let categorie = qdt.getCategorie(ran)
    let id = qdt.getId(ran, categorie)

    let categorie2 = qdt.getCategorie(ran)
    let id2 = qdt.getId(ran, categorie)
    return function(){
      if (ran.nextBool()){
        return qdt.getDrawing(categorie,id)
      } else {
        return qdt.getDrawing(categorie2,id2)
      }
    }
  } else if (drawingMode == "sameMost"){
    let categorie = qdt.getCategorie(ran)
    let id = qdt.getId(ran, categorie)
    return function(){
      if (ran.next01()<0.7){
        return qdt.getDrawing(categorie,id)
      } else {
        return []
      }
    }
  } else if (drawingMode == "sameSome"){
    let categorie = qdt.getCategorie(ran)
    let id = qdt.getId(ran, categorie)
    return function(){
      if (ran.next01()<0.2){
        return qdt.getDrawing(categorie,id)
      } else {
        return []
      }
    }
  }
}

function get_getScaleFunc(ran, scaleMode){
  if (scaleMode=="none"){
    return function(){
      return [1,1]
    }
  } else if (scaleMode=="same"){
    let scale = ran.next01(0.5,1)
    return function(){
      return [scale,scale]
    }
  } else if (scaleMode=="ran"){
    return function(){
      let scale = ran.next01(0.5,1)
      return [scale,scale]
    }
  } else if (scaleMode=="big"){
    return function(){
      let scale = ran.next01(2,2)
      return [scale,scale]
    }
  }

}

function get_getTranlateFunc(ran, translateMode){
  if (translateMode=="none"){
    return function(){
      return [0,0]
    }
  } else if (translateMode=="ran"){
    return function(){
      return [ran.next01(-0.3,0.3),ran.next01(-0.3,0.3)]
    }
  } else if (translateMode=="big"){
    return function(){
      return [ran.next01(-0.9,0.9),ran.next01(-0.9,0.9)]
    }
  }
}

function get_getRotateFunc(ran, rotateMode){
  if (rotateMode=="none"){
    return function(){
      return 0
    }
  } else if (rotateMode=="same"){
    let rotate = ran.next01(0,Math.PI*2)
    return function(){
      return rotate
    }
  } else if (rotateMode=="ran"){
    return function(){
      return ran.next01(0,Math.PI*2)
    }
  }
}

function grid(ctx, gridSize, bbox, getDrawingFunc, getScaleFunc, getTranlateFunc, getRotateFunc){
  let deltaX = (bbox[2]-bbox[0])/gridSize[0]
  let deltaY = (bbox[3]-bbox[1])/gridSize[1]

  for(let i=0; i<gridSize[0]; i++){
    for(let j=0; j<gridSize[1]; j++){
      let drawing = getDrawingFunc()
      let scale = getScaleFunc()
      let offset = getTranlateFunc()
      let rotate = getRotateFunc()

      let scaleTemp = [(1-scale[0])/2*deltaX, (1-scale[1])/2*deltaY]
      let offsetTemp = [offset[0]*deltaX,offset[1]*deltaY]

      let tempBbox = [
        offsetTemp[0] + bbox[0] + i*deltaX + scaleTemp[0],
        offsetTemp[1] + bbox[1] + j*deltaY + scaleTemp[1],
        offsetTemp[0] + bbox[0] + (i+1)*deltaX - scaleTemp[0],
        offsetTemp[1] + bbox[1] + (j+1)*deltaY - scaleTemp[1],
      ]
      gat.path.drawPathBbox(ctx, drawing, [0,0,1,1],tempBbox,rotate)

    }
  }



}


function getQuickdrawTools(quickdraw_data){
  let quickdrawTools = {
    quickdraw_data:quickdraw_data,
    allCategories: Object.keys(quickdraw_data),
    getCategorie: function(ran){
      return this.allCategories[ran.nextInt(this.allCategories.length-1)]
    },
    getId: function(ran, categorie){
      return ran.nextInt(this.quickdraw_data[categorie].length-1)
    },
    getDrawing: function(categorie, id){

      let drawing = this.quickdraw_data[categorie][id]
      let path = []
      for(let line in drawing){
        let newLine = []
        for(let i in drawing[line]){
          newLine.push(drawing[line][i]/256)
        }
        path.push(["ml",newLine])
      }
      return path
    },
  }
  return quickdrawTools
}
