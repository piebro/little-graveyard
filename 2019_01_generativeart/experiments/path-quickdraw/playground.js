"use strict"

const size = [1000,1000]
const qdt = getQuickdrawTools(quickdraw_data5)

function main(){
  gat.createCenterFrame({
    size: size,
    divID: "frame",
  });

  gat.mainLoop({
    drawFunc:draw,
    divID:"frame",
    engine:gat.engines.svg,
    size:size,
    name:"playground",
  });
}


function draw(ctx,seed){
  let ran = new gat.Randomizer(seed);
  let bboxBorder = 300;
  let fbBbox = [0+bboxBorder,0+bboxBorder,1000-bboxBorder,1000-bboxBorder]

  let type = "test"
  let fp = []
  if (type == "templet"){
    fp = getTemplet(ran)
  }
  else if (type == "row"){
    let n = 10
    let stepSize = [0.1,0.05]
    let scale = 0.6
    let pathIterator = qdt.getDrawingIterator(ran, ...qdt.getRandomCategorieId(ran))

    fp = getRow(pathIterator, n, stepSize, scale)
  } else if(type == "test"){
    let pathIterator = qdt.getDrawingIterator(ran, ...qdt.getRandomCategorieId(ran))

    let a = getRow(pathIterator, 3, [0.5,0.5], 0.3)

    pathIterator = getPathIterator("constant",{constant:a})

    let b = getRow(pathIterator, 3, [-0.5,0.5], 1)

    // fp = fp.concat(a)
    fp = fp.concat(b)
  }

  gat.path.drawPathBbox(ctx, fp, [0,0,1,1],fbBbox,0)
  ctx.lineJoin="round";
  ctx.lineCap="round";
  ctx.lineWidth=8;
  ctx.stroke()
}


function getRow(pathIterator, n, stepSize, scale){

  let bboxIterator = getBboxIterator("scaleTranslateIterator",{
    pathBbox: [0,0,1,1],
    translateIterator: getTranslateIterator("row",{n:n, stepSize:stepSize}),
    scaleIterator: getScaleIterator("constant", {constant:[scale,scale]})
  })
  let rotationIterator = getRotationIterator("constant",{constant:0})

  return getNPaths(n, pathIterator, [0,0,1,1], bboxIterator, rotationIterator)
}

function getTemplet(ran){
  let n = 1

  let categorieId = qdt.getRandomCategorieId(ran)
  let pathIterator = qdt.getDrawingIterator(ran, ...categorieId)
  let bboxIterator = getBboxIterator("constant",{constant:[0,0,1,1]})
  let rotationIterator = getRotationIterator("constant",{constant:0})

  return getNPaths(n, pathIterator, [0,0,1,1], bboxIterator, rotationIterator)
}


function getNPaths(n, pathIterator, pathBbox, bboxIterator, rotationIterator){
  let fp = []
  for(let i=0; i<n; i++){
    let path = pathIterator.next()
    let bbox = bboxIterator.next()
    let rotation = rotationIterator.next()
    fp = fp.concat(gat.path.getPathBbox(path, pathBbox, bbox, rotation))
  }
  return fp
}

function getPathIterator(type, s){
  if(type=="constant"){
    return {next:function(){return s.constant}}
  }
}

function getBboxIterator(type, s){
  /*
    "ran":{ran: ran, minX:[0.1,0.4], minY:[0.1,0.4], maxX:[0.6,0.9], maxY:[0.6,0.9]}
    "counter":{start:[0,0,1,1],stepSize:[0.1,0.1,0.1,0.1]}
    "constant":{constant:[0.1,0.1,0.9,0.9]}
    "scaleTranslate":{pathBbox:[0,0,1,1],translate:[0,0],scale:[1.5,1.5]}
    "scaleTranslateIterator":{
      pathBbox:[0,0,1,1],
      translateIterator:translateIterator("constant",{constant:[1,1]}),
      scaleIterator:getScaleIterator("constant",{constant:[1,1]})
    }
  */

  if(type == "ran"){
    return {
      next: function(){
        return [
          s.ran.next01(...s.minX),
          s.ran.next01(...s.minY),
          s.ran.next01(...s.maxX),
          s.ran.next01(...s.maxY),
        ]
      }
    }
  }
  else if(type == "counter"){
    return {
      counter: -1,
      next: function(){
        this.counter+=1
        return [
          s.start[0] + this.counter*s.stepSize[0],
          s.start[1] + this.counter*s.stepSize[1],
          s.start[2] + this.counter*s.stepSize[2],
          s.start[3] + this.counter*s.stepSize[3]
        ]
      }
    }
  }
  else if(type == "constant"){
    return {
      next: function(){return s.constant}
    }
  }
  else if(type == "scaleTranslate"){
    return {
      next: function(){
        return gat.path.traslateScaleToBbox(s.pathBbox, s.translate, s.scale)
      }
    }
  }
  else if(type == "scaleTranslateIterator"){
    return {
      next: function(){return gat.path.traslateScaleToBbox(
          s.pathBbox, s.translateIterator.next(), s.scaleIterator.next())
      }
    }
  }
}

function getRotationIterator(type, s){
  /*
  "ran":{ran:ran, range:[-Math.PI*2*0.5,Math.PI*2*0.5]}
  "counter":{start:0,stepSize:Math.PI*2*0.1}
  "constant":{constant:0}
  */
  if(type == "ran"){
    return {next: function(){return s.ran.next01(...s.range)}}
  }
  else if(type == "counter"){
    return {
      counter: -1,
      next: function(){
        this.counter+=1
        return s.start + this.counter*s.stepSize
      }
    }
  }
  else if(type == "constant"){
    return {next: function(){return s.constant}}
  }
}

function getTranslateIterator(type, s){
  /*
  "ran":{ran:ran, rangeX:[-0.1,0.1],rangeY:[-0.1,0.1]}
  "counter":{start:[0,0],stepSize:[0.15,0.15]}
  "constant":{constant:[0,0]}
  "row":{n:n, stepSize:[0.3,0.3]}
  */
  if(type == "ran"){
    return {
      next: function(){
        return [s.ran.next01(...s.rangeX), s.ran.next01(...s.rangeY)]
      }
    }
  }
  else if(type == "counter"){

    return {
      counter: -1,
      next: function(){
        this.counter += 1
        return [s.start[0] + this.counter*s.stepSize[0], s.start[1] + this.counter*s.stepSize[1]]
      }
    }
  }
  else if(type == "constant"){
    return {
      next: function(){return s.constant}
    }
  }
  else if(type == "row"){
    let start = [-(s.n-1)*s.stepSize[0]/2,-(s.n-1)*s.stepSize[1]/2]
    return getTranslateIterator("counter", {start:start, stepSize:s.stepSize})
  }
}

function getScaleIterator(type, s){
  /*
  "ran":{ran:ran, rangeX:[0.65,1.25],rangeY:[0.65,1.25]}
  "ranPreserveRatio":{ran:ran, range:[0.75,1.25]}
  "constant":{constant:[0.2,0.2]}
  */
  if(type == "ran"){
    return{
      next: function(){return [s.ran.next01(...s.rangeX), s.ran.next01(...s.rangeY)]}
    }
  }
  else if (type == "ranPreserveRatio"){
    return{
      next: function(){
        let out = s.ran.next01(...s.range)
        return [out, out]
      }
    }
  }
  else if (type == "constant"){
    return {
      next: function(){
        return s.constant
      }
    }
  }
}






function row(ctx, n, bbox, pathIterator, translateIterator, scaleIterator, rotationIterator){

  let a = 10
  let d = [a,-a]
  let t = [d[0]*n/2,d[1]*n/2]
  let width = bbox[2] - bbox[0]
  let height = bbox[3] - bbox[1]
  for(let i=0; i<n; i++){
    let scale = scaleIterator.next()
    let newScale = [width*(1-scale[0])/2, height*(1-scale[1])/2]
    let translate = translateIterator.next()
    let newBbox = [
      bbox[0]-t[0]+i*d[0]+newScale[0]+translate[0],
      bbox[1]-t[1]+i*d[1]+newScale[1]+translate[1],
      bbox[2]-t[0]+i*d[0]-newScale[0]+translate[0],
      bbox[3]-t[1]+i*d[1]-newScale[1]+translate[1],
    ]
    gat.path.drawPathBbox(ctx, pathIterator.next(), newBbox, rotationIterator.next())
  }
}

function grid(ctx, dimension, bbox, pathIterator, translateIterator, scaleIterator, rotationIterator){
  let deltaWidth = (bbox[2]-bbox[0])/dimension[0]
  let deltaHeight = (bbox[3]-bbox[1])/dimension[1]

  for(let y=0; y<dimension[1]; y++){
    for(let x=0; x<dimension[0]; x++){
      let scale = scaleIterator.next()
      let translate = translateIterator.next()
      let newScale = [deltaWidth*(1-scale[0])/2, deltaHeight*(1-scale[1])/2]
      let newBbox = [
        bbox[0]+x*deltaWidth+newScale[0]+translate[0],
        bbox[1]+y*deltaHeight+newScale[1]+translate[1],
        bbox[0]+(x+1)*deltaWidth-newScale[0]+translate[0],
        bbox[1]+(y+1)*deltaHeight-newScale[1]+translate[1],
      ]
      gat.tools.drawPathBbox(ctx, pathIterator.next(), newBbox, rotationIterator.next())
    }
  }
}







function getQuickdrawTools(quickdraw_data){
  let quickdrawTools = {
    quickdraw_data:quickdraw_data,
    allCategories: Object.keys(quickdraw_data),
    getRandomCategorie: function(ran){
      return this.allCategories[ran.nextInt(this.allCategories.length-1)]
    },
    getRandomDrawingId: function(ran, categorie){
      return ran.nextInt(this.quickdraw_data[categorie].length-1)
    },
    getRandomCategorieId: function(ran){
      let categorie = this.getRandomCategorie(ran)
      let id = this.getRandomDrawingId(ran, categorie)
      return [categorie, id]
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
    getCategorieIterator: function(ran, type){

    },
    getDrawingIterator: function(ran, categorie, id){
      let qdt = this
      let iterator = {
        qdt:qdt,
        ran:ran,
        categorie:categorie,
        id:id,
        counter:0,
        next: function(){
          if (this.categorie == undefined){
            categorie = qdt.getRandomCategorie(this.ran)
          } else {
            if(typeof this.categorie == "string"){
              categorie = this.categorie
            } else {
              categorie = this.categorie[this.counter%this.categorie.length]
            }

          }
          if (this.id == undefined){
            id = qdt.getRandomDrawingId(this.ran, categorie)
          } else {
            if(typeof this.id == "number"){
              id = this.id
            } else {
              id = this.id[this.counter%this.id.length]
            }

          }
          this.counter += 1
          return qdt.getDrawing(categorie, id)
        }
      }
      return iterator
    },
  }
  return quickdrawTools
}
