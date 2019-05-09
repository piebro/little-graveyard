gat.tools.text = {
  writeInBox: function(ctx,text,box,lineSpacing){
    let textArray = text.split("\\n");

    let textLength = [];
    for(let i=0; i<textArray.length; i++){
      textLength[i] = this.getTextLength(textArray[i],1);
    }
    let maxLength = Math.max(...textLength)

    let width = -box[0]+box[2];
    let scaleWidth = width/maxLength;

    let height = -box[1]+box[3];
    let totalHeight = (textArray.length)*120;
    let scaleHeight = height/totalHeight;

    let scale = Math.min(scaleWidth,scaleHeight);

    for(let i=0; i<textArray.length; i++){
      let x = box[0] + (width-textLength[i]*scale)/2;
      let y = box[1] + (height-totalHeight*scale)/2 - 40*scale + (i+1)*120*scale;

      this.write(ctx,textArray[i],[x,y],scale);
    }

  },

  write: function(ctx,text,startPos,scale){
    let translate = startPos;
    ctx.moveTo(...startPos);
    for(let i=0; i<text.length; i++){
      let c = text.charAt(i);
      if(this.alphabet[c] == undefined) continue;
      let path = this.alphabet[c]();
      translate = this.interpretePath(ctx,path,translate,scale);
      translate[0] = translate[0]+10*scale;
      if(i!=text.length-1){
        ctx.lineTo(...translate)
      }

    }
    return translate;
  },

  getTextLength: function(text,scale){
    let ctx = {
      lineTo: function(){},
      bezierCurveTo: function(){},
      moveTo: function(){},
    }
    let translate = this.write(ctx,text,[0,0],scale);

    return translate[0]
  },

  interpretePath: function(ctx, path, translate, scale){
    let tx = translate[0];
    let ty = translate[1];
    let lastRelPos = [0,0];
    for(let i=0; i<path.length; i++){
      let c = path[i][0];
      let p = path[i][1];
      if(c == "l"){
        ctx.lineTo(scale*p[0]+tx,-scale*p[1]+ty);
        lastRelPos = p;
      }
      else if(c == "b"){
        ctx.bezierCurveTo(
          scale*p[0]+tx,-scale*p[1]+ty,
          scale*p[2]+tx,-scale*p[3]+ty,
          scale*p[4]+tx,-scale*p[5]+ty,
        )
        lastRelPos = [p[4],p[5]];
      }
      else if(c == "m"){
        ctx.moveTo(scale*p[0]+tx,-scale*p[1]+ty);
        lastRelPos = p;
      }
    }
    return [scale*lastRelPos[0]+tx,-scale*lastRelPos[1]+ty]
  },

  alphabet: {
    a: function(){
      let a = 12;
      let b = 12;
      let c = 12;
      return [
        ["l",[20,0]],
        ["b",[20+a,0,40,20-a,40,20]],
        ["b",[40,20+a,20+a,40,20,40]],
        ["b",[20-a,40,0,20+a,0,20]],
        ["b",[0,20-a,20-a,0,20,0]],
        ["b",[20+a,0,40,20-a,40,20]],
        ["l",[40,40]],
        ["b",[40,40-b,50-c,0,50,0]],
      ]
    },
    b: function(){
      let a = 12;
      let b = 12;
      let c = 12;
      return [
        ["b",[0+a,0,10,80-b,10,80]],
        ["l",[10,20]],
        ["b",[10,20-c,30-c,0,30,0]],
        ["b",[30+c,0,50,20-c,50,20]],
        ["b",[50,20+c,30+c,40,30,40]],
        ["b",[30-c,40,10,20+c,10,20]],
        ["b",[10,20-c,30-c,0,30,0]],
        ["l",[50,0]],
      ]
    },
    c: function(){
      let a = 12;
      let b = 12;
      return [
        ["b",[0+a,0,10,20-b,10,20]],
        ["b",[10,20+b,30-b,40,30,40]],
        ["l",[35,40]],
        ["l",[30,40]],
        ["b",[30-b,40,10,20+b,10,20]],
        ["b",[10,20-b,30-b,0,30,0]],
      ]
    },
    d: function(){
      let a = 12;
      let b = 12;
      let c = 42;
      let d = 42;
      let e = 14;
      return [
        ["b",[0+a,0,10,20-b,10,20]],
        ["b",[10,20+b,30-b,40,30,40]],
        ["b",[30+b,40,50,20+b,50,20]],
        ["b",[50,20-b,30+b,0,30,0]],
        ["b",[30-b,0,10,20-b,10,20]],
        ["b",[10,20+b,30-b,40,30,40]],
        ["b",[30+b,40,50,80-c,50,80]],
        ["b",[50,80-d,60-e,0,60,0]],
      ];
    },
    e: function(){
      let a = 12;
      let b = 6;
      let c = 6;
      let d = 6;
      let e = 35;
      let path = [
        ["b",[0+a,0,30,30-b,30,30]],
        ["b",[30,30+b,20+c,40,20,40]],
        ["b",[20-c,40,10,30+d,10,30]],
        ["b",[10,30-d,40-e,0,40,0]],
      ];
      return path;
    },
    f: function(){
      let a = 5;
      let b = 10;
      let c = 4;
      let d = 10;
      let e = 5;
      let f = 5;
      let g = 7;
      let h = 10;
      let path = [
        ["l",[10,0]],
        ["b",[10+a,0,30,55-b,30,55]],
        ["b",[30,55+b,25+c,75,25,75]],
        ["b",[25-c,75,15,55+d,15,55]],
        ["b",[15,55-d,20,-10+e,20,-10]],
        ["b",[20,-10-e,15+f,-20,15,-20]],
        ["b",[15-f,-20,10,-10-g,10,-10]],
        ["b",[10,-10+g,40-h,0,40,0]],
      ];
      return path;
    },
    g: function(){
      let a = 12;
      let b = 20;
      let c = 5;
      let d = 10;
      let e = 5;
      let f = 5;
      let path = [
        ["l",[30,0]],
        ["b",[30+a,0,50,20-a,50,20]],
        ["b",[50,20+a,30+a,40,30,40]],
        ["b",[30-a,40,10,20+a,10,20]],
        ["b",[10,20-a,30-a,0,30,0]],
        ["b",[30+a,0,50,20-a,50,20]],
        ["b",[50,20+a,30+b,-25,30,-25]],
        ["b",[30-b,-25,20-f,-10-c,20,-10]],
        ["b",[20+f,-10+c,60-d,0,60,0]],
      ];
      return path;
    },
    h: function(){
      let a = 12;
      let b = 20;
      let c = 12;
      let d = 8;
      let path = [
        ["b",[0+a,0,10,80-b,10,80]],
        ["l",[10,0]],
        ["l",[10,20]],
        ["b",[10,20+c,30-c,40,30,40]],
        ["b",[30+c,40,50,20+c,50,20]],
        ["b",[50,20-c,60-d,0,60,0]],
      ];
      return path;
    },
    i: function(){
      let a = 8;
      let b = 15;
      let c = 17;
      let d = 19;
      let path = [
        ["b",[0+a,0,10,40-b,10,40]],
        ["m",[10,60]],
        ["l",[10,65]],
        ["m",[10,40]],
        ["b",[10,40-c,25-d,0,25,0]],
      ];
      return path;
    },
    j: function(){
      let a = 8;
      let b = 15;
      let c = 5;
      let d = 5;
      let e = 5;
      let f = 15;
      let path = [
        ["b",[0+a,0,20,40-b,20,40]],
        ["m",[20,60]],
        ["l",[20,65]],
        ["m",[20,40]],
        ["l",[20,-10]],
        ["b",[20,-10-c,13+d,-20,13,-20]],
        ["b",[13-d,-20,8,-10-e,8,-10]],
        ["b",[8,-10+e,30-f,0,30,0]],
      ];
      return path;
    },
    k: function(){
      let a = 8;
      let b = 15;
      let c = 6;
      let path = [
        ["b",[0+a,0,10,80-b,10,80]],
        ["l",[10,0]],
        ["l",[10,30]],
        ["b",[10,30+c,20-c,40,20,40]],
        ["b",[20+c,40,30,30+c,30,30]],
        ["b",[30,30-c,20+c,20,20,20]],
        ["l",[15,20]],
        ["l",[20,20]],
        ["l",[30,0]],
        ["l",[35,0]],
      ];
      return path;
    },
    l: function(){
      let a = 10;
      let b = 20;
      let c = 6;
      let d = 5;
      let e = 2;
      let f = 5;
      let g = 33;
      let path = [
        ["b",[0+a,0,30,60-b,25,60]],
        ["b",[25-e,60+c,15+d,75,15,75]],
        ["b",[15-d,75,10,60+f,10,60]],
        ["b",[10,60-f,40-g,0,40,0]]
      ];
      return path;
    },
    m: function(){
      let a = 8;
      let b = 15;
      let c = 12;
      let d = 8;
      let e = 5;
      let path = [
        ["b",[0+a,0,10,40-b,10,40]],
        ["l",[10,0]],
        ["l",[10,20]],
        ["b",[10,20+c,30-c,40,30,40]],
        ["b",[30+c,40,50,20+c,50,20]],
        ["l",[50,0]],
        ["l",[50,20]],
        ["b",[50,20+c,70-c,40,70,40]],
        ["b",[70+c,40,90,20+c,90,20]],
        ["b",[90,20-d,100-e,0,100,0]],
      ];
      return path;
    },
    n: function(){
      let a = 8;
      let b = 15;
      let c = 12;
      let d = 8;
      let e = 5;
      let path = [
        ["b",[0+a,0,10,40-b,10,40]],
        ["l",[10,0]],
        ["l",[10,20]],
        ["b",[10,20+c,30-c,40,30,40]],
        ["b",[30+c,40,50,20+c,50,20]],
        ["b",[50,20-d,60-e,0,60,0]],
      ];
      return path;
    },
    o: function(){
      let a = 12;
      let path = [
        ["l",[25,0]],
        ["b",[25+a,0,45,20-a,45,20]],
        ["b",[45,20+a,25+a,40,25,40]],
        ["b",[25-a,40,5,20+a,5,20]],
        ["b",[5,20-a,25-a,0,25,0]],
        ["l",[50,0]],
      ];
      return path;
    },
    p: function(){
      let a = 8;
      let b = 15;
      let c = 12;
      let path = [
        ["b",[0+a,0,10,40-b,10,40]],
        ["l",[10,-30]],
        ["l",[10,20]],
        ["b",[10,20+c,30-c,40,30,40]],
        ["b",[30+c,40,50,20+c,50,20]],
        ["b",[50,20-c,30+c,0,30,0]],
        ["l",[10,0]],
        ["l",[55,0]],
      ];
      return path;
    },
    q: function(){
      let a = 12;
      let b = 15;
      let c = 8;
      let path = [
        ["l",[25,0]],
        ["b",[25+a,0,45,20-a,45,20]],
        ["b",[45,20+a,25+a,40,25,40]],
        ["b",[25-a,40,5,20+a,5,20]],
        ["b",[5,20-a,25-a,0,25,0]],
        ["b",[25+a,0,45,20-a,45,20]],
        ["l",[45,40]],
        ["l",[45,-30]],
        ["b",[45,-30+b,55-c,0,55,0]]
      ];
      return path;
    },
    r: function(){
      let a = 8;
      let b = 15;
      let c = 4;
      let d = 4;
      let e = 15;
      let f = 5;
      let path = [
        ["b",[0+a,0,10,40-b,10,40]],
        ["l",[10,30]],
        ["b",[10,30+c,20-d,40,20,40]],
        ["l",[27,40]],
        ["l",[20,40]],
        ["b",[20-d,40,10,30+c,10,30]],
        ["b",[10,30-e,15-f,0,15,0]],
        ["l",[35,0]]
      ];
      return path;
    },
    s: function(){
      let a = 8;
      let b = 5;
      let c = 8;
      let path = [
        ["l",[15,0]],
        ["b",[15+a,0,25,10-b,25,10]],
        ["b",[25,10+b,15+a,20,15,20]],
        ["b",[15-a,20,5,30-b,5,30]],
        ["b",[5,30+b,15-a,40,15,40]],
        ["l",[25,40]],
        ["l",[15,40]],
        ["b",[15-a,40,5,30+b,5,30]],
        ["b",[5,30-b,15-a,20,15,20]],
        ["b",[15+a,20,25,10+b,25,10]],
        ["b",[25,10-b,35-c,0,35,0]],
      ];
      return path;
    },
    t: function(){
      let a = 25;
      let b = 50;
      let c = 23;
      let d = 15;
      let e = 25;
      let path = [
        ["b",[0+a,0,25,75-b,25,75]],
        ["b",[25,75-c,10+d,50,10,50]],
        ["l",[40,50]],
        ["b",[40-d,50,25,35+d,25,35]],
        ["b",[25,35-d,50-e,0,50,0]],
      ];
      return path;
    },
    u: function(){
      let a = 10;
      let b = 30;
      let c = 23;
      let d = 9;
      let e = 15;
      let f = 10;
      let g = 30;
      let h = 10;
      let path = [
        ["b",[0+a,0,10,40-b,10,40]],
        ["b",[10,40-c,23-d,0,23,0]],
        ["b",[23+e,0,45,40-f,45,40]],
        ["b",[45,40-g,55-h,0,55,0]]
      ];
      return path;
    },
    v: function(){
      let a = 20;
      let b = 40;
      let c = 25;
      let path = [
        ["l",[25,0]],
        ["l",[5,40]],
        ["l",[25,0]],
        ["l",[45,40]],
        ["b",[45-a,40-b,50-c,0,50,0]],
      ];
      return path;
    },
    w: function(){
      let a = 20;
      let b = 40;
      let c = 25;
      let path = [
        ["l",[25,0]],
        ["l",[5,40]],
        ["l",[25,0]],
        ["l",[45,40]],
        ["l",[65,0]],
        ["l",[85,40]],
        ["b",[85-a,40-b,90-c,0,90,0]],
      ];
      return path;
    },
    x: function(){
      let a = 20;
      let path = [
        ["l",[5,0]],
        ["l",[45,40]],
        ["b",[45-a,40-a,5+a,40-a,5,40]],
        ["l",[45,0]],
        ["l",[50,0]],
      ];
      return path;
    },
    y: function(){
      let a = 17;
      let b = 35;
      let c = 15;
      let path = [
        ["l",[25,0]],
        ["l",[5,40]],
        ["l",[25,0]],
        ["l",[45,40]],
        ["l",[10,-30]],
        ["b",[10+a,-30+b,50-c,0,50,0]],
      ];
      return path;
    },
    z: function(){
      let a = 4;
      let b = 5;
      let c = 5;
      let path = [
        ["b",[0+a,0,40-b,40-c,40,40]],
        ["l",[5,40]],
        ["l",[40,40]],
        ["l",[5,0]],
        ["l",[45,0]],
      ];
      return path;
    },
    "0": function(){
      let a = 17;
      let b = 12;
      let path = [
        ["l",[25,0]],
        ["b",[25+a,0,45,40-b,45,40]],
        ["b",[45,40+b,25+a,80,25,80]],
        ["b",[25-a,80,5,40+b,5,40]],
        ["b",[5,40-b,25-a,0,25,0]],
        ["l",[50,0]],
      ];
      return path;
    },
    "1": function(){
      let a = 20;
      let b = 80;
      let path = [
        ["b",[5+a,0,25,80-b,25,80]],
        ["l",[5,60]],
        ["l",[25,80]],
        ["b",[25,80-b,45-a,0,45,0]],
      ];
      return path;
    },
    "2": function(){
      let a = 10;
      let b = 12;
      let c = 12;
      let d = 12;
      let e = 6;
      let f = 10;
      let g = 30;
      let path = [
        ["l",[10,0]],
        ["b",[10+a,0,50,60-b,50,60]],
        ["b",[50,60+b,30+c,80,30,80]],
        ["b",[30-c,80,10,60+d,10,60]],
        ["b",[10,60+d,30-c,80,30,80]],
        ["b",[30+c,80,50,60+b,50,60]],
        ["b",[50,60-b,10+a,0,10,0]],
        ["b",[10-a,0,0,15-e,0,15]],
        ["b",[0,15+e,15-f,30,15,30]],
        ["b",[15+f,30,60-g,0,60,0]]
      ];
      return path;
    },
    "3": function(){
      let a = 12;
      let path = [
        ["l",[10,0]],
        ["b",[10+a,0,30,20-a,30,20]],
        ["b",[30,20+a,10+a,40,10,40]],
        ["b",[10+a,40,30,60-a,30,60]],
        ["b",[30,60+a,10+a,80,10,80]],
        ["l",[0,80]],
        ["l",[10,80]],
        ["b",[10+a,80,30,60+a,30,60]],
        ["b",[30,60-a,10+a,40,10,40]],
        ["b",[10+a,40,30,20+a,30,20]],
        ["b",[30,20-a,10+a,0,10,0]],
        ["l",[40,0]],
      ];
      return path;
    },
    "4": function(){
      let a = 10;
      let b = 42;
      let c = 25;
      let d = 7;
      let e = 25;
      let f = 20;
      let g = 20;
      let path = [
        ["l",[20,0]],
        ["b",[20+a,0,30,70-b,30,70]],
        ["b",[30,70+c,5-d,40,5,40]],
        ["l",[50,40]],
        ["b",[50-e,40,30,20+f,30,20]],
        ["b",[30,20-f,50-g,0,50,0]]
      ];
      return path;
    },
    "5": function(){
      let a = 17;
      let b = 5;
      let path = [
        ["l",[10,0]],
        ["b",[10+a,0,40,20-a,40,20]],
        ["b",[40,20+a,10+a,40,10,40]],
        ["l",[10,70]],
        ["l",[40,70]],
        ["l",[10,70]],
        ["l",[10,40]],
        ["b",[10+a,40,40,20+a,40,20]],
        ["b",[40,20-a,50-b,0,50,0]],
      ];
      return path;
    },
    "6": function(){
      let a = 8;
      let b = 19;
      let c = 30;
      let d = 12;
      let path = [
        ["b",[0+a,0,10,20-b,10,20]],
        ["b",[10,20+b,40-c,70,40,70]],
        ["b",[40-c,70,10,20+b,10,20]],
        ["b",[10,20-d,30-d,0,30,0]],
        ["b",[30+d,0,50,20-d,50,20]],
        ["b",[50,20+d,30+d,40,30,40]],
        ["b",[30-d,40,10,20+d,10,20]],
        ["b",[10,20-d,30-d,0,30,0]],
        ["l",[50,0]],
      ];
      return path;
    },
    "7": function(){
      let a = 12;
      let b = 24;
      let c = 19;
      let d = 12;
      let e = 5;
      let f = 10;
      let g = 10;
      let path = [
        ["l",[10,0]],
        ["l",[40,70]],
        ["l",[10,70]],
        ["l",[40,70]],
        ["b",[40-a,70-b,10+c,40,10,40]],
        ["l",[40,40]],
        ["b",[40-d,40,19+e,20+f,19,20]],
        ["b",[19-e,20-f,30-g,0,30,0]],
        ["l",[50,0]],
      ];
      return path;
    },
    "8": function(){
      let a = 9;
      let b = 12;
      let path = [
        ["b",[0+a,0,10,20-b,10,20]],
        ["b",[10,20+b,30-b,40,30,40]],
        ["b",[30+b,40,50,60-b,50,60]],
        ["b",[50,60+b,30+b,80,30,80]],
        ["b",[30-b,80,10,60+b,10,60]],
        ["b",[10,60-b,30-b,40,30,40]],
        ["b",[30+b,40,50,20+b,50,20]],
        ["b",[50,20-b,30+b,0,30,0]],
        ["b",[30-b,0,10,20-b,10,20]],
        ["b",[10,20+b,30-b,40,30,40]],
        ["b",[30+b,40,50,20+b,50,20]],
        ["b",[50,20-b,60-a,0,60,0]],
      ];
      return path;
    },
    "9": function(){
      let a = 9;
      let b = 12;
      let c = 15;
      let path = [
        ["l",[35,0]],
        ["b",[35+a,0,50,60-b,50,60]],
        ["b",[50,60+b,30+b,80,30,80]],
        ["b",[30-b,80,10,60+b,10,60]],
        ["b",[10,60-b,30-b,40,30,40]],
        ["b",[30+b,40,50,60-b,50,60]],
        ["b",[50,60-b,55-c,0,55,0]],
        ["l",[60,0]],
      ];
      return path;
    },
    "_": function(){
      let path = [
        ["l",[50,0]]
      ];
      return path;
    },
    " ": function(){
      let path = [
        ["m",[50,0]]
      ];
      return path;
    },
  },
}
