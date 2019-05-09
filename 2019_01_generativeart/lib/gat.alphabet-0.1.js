gat.alphabet = {}

gat.alphabet.connected = {
  lineHeight:100,
  textlineToPath: function(text){
    let path = []
    let width = 0
    path = path.concat([["m",[0,50]]])
    for(let i=0; i<text.length; i++){
      let c = text[i];
      if(gat.alphabet.connected[c] == undefined) continue;
      let char_path = gat.alphabet.connected[c]()
      path = path.concat(gat.path.getPath(char_path,[width,50],[1,-1]))
      bbox = gat.path.getBboxOfPath(char_path)
      width += (bbox[2]-bbox[0])
    }
    return {
      path:path,
      width:width
    }
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
  ",": function(){
    let a = 10;
    let b = 30;
    let c = 23;
    let d = 9;
    let e = 15;
    let f = 10;
    let g = 30;
    let h = 10;
    let path = [
      ["m",[15,5]],
      ["l",[10,-11]]
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

  "A": function(){
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
  "a": function(){
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
  "B": function(){
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
  "b": function(){
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
  "C": function(){
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
  "c": function(){
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
  "D": function(){
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
  "d": function(){
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
  "E": function(){
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
  "e": function(){
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
  "F": function(){
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
  "f": function(){
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
  "G": function(){
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
  "g": function(){
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
  "H": function(){
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
  "h": function(){
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
  "I": function(){
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
  "i": function(){
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
  "J": function(){
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
  "j": function(){
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
  "K": function(){
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
  "k": function(){
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
  "L": function(){
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
  "l": function(){
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
  "M": function(){
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
  "m": function(){
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
  "N": function(){
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
  "n": function(){
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
  "O": function(){
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
  "o": function(){
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
  "P": function(){
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
  "p": function(){
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
  "Q": function(){
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
  "q": function(){
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
  "R": function(){
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
  "r": function(){
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
  "S": function(){
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
  "s": function(){
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
  "T": function(){
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
  "t": function(){
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
  "U": function(){
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
  "u": function(){
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
  "V": function(){
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
  "v": function(){
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
  "W": function(){
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
  "w": function(){
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
  "X": function(){
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
  "x": function(){
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
  "Y": function(){
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
  "y": function(){
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
  "Z": function(){
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
  "z": function(){
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

  "Ü": function(){
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
      ["m",[15,50]],
      ["l",[15,60]],
      ["m",[40,50]],
      ["l",[40,60]],
      ["m",[10,40]],
      ["b",[10,40-c,23-d,0,23,0]],
      ["b",[23+e,0,45,40-f,45,40]],
      ["b",[45,40-g,55-h,0,55,0]]
    ];
    return path;
  },
  "ü": function(){
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
      ["m",[15,50]],
      ["l",[15,60]],
      ["m",[40,50]],
      ["l",[40,60]],
      ["m",[10,40]],
      ["b",[10,40-c,23-d,0,23,0]],
      ["b",[23+e,0,45,40-f,45,40]],
      ["b",[45,40-g,55-h,0,55,0]]
    ];
    return path;
  },
}

gat.alphabet.monospace={
  lineHeight:500,
  textlineToPath: function(text){
    let path = []
    let width = 0
    for(let i=0; i<text.length; i++){
      let c = text[i];
      if(gat.alphabet.monospace[c] == undefined) continue;
      let char_path = gat.alphabet.monospace[c].path
      path = path.concat(gat.path.getPath(char_path,[width,-200]))
      bbox = gat.alphabet.monospace[c].bbox
      width += (bbox[2]-bbox[0])
    }
    return {
      path:path,
      width:width
    }
  },

  " ":{
    bbox:[0,0,300,400],
    path:[["m",[300,400]]]
  },
  "0":{
    bbox:[0,0,300,400],
    path:[["m",[0,200]],["b",[0.55,75.48,52.2,1.1,150,0]],["b",[236.09,1.1,300.14,75.48,300,200]],["b",[298.76,322.73,260.88,399.17,150,400]],["b",[43.25,397.8,-0.14,353.72,0,200]]]
  },
  "1":{
    bbox:[0,0,300,400],
    path:[["ml",[75,100,150,0,150,400,75,400,225,400]]]
  },
  "2":{
    bbox:[0,0,300,400],
    path:[["m",[0,100]],["b",[1.24,62.4,67.36,1.79,150,0]],["b",[248.48,3.17,299.45,70.66,300,100]],["b",[299.45,138.84,123.14,399.17,0,400]],["l",[300,400]]]
  },
  "3":{
    bbox:[0,0,300,400],
    path:[["m",[75,0]],["b",[224.38,0.41,299.45,36.23,300,100]],["b",[297.38,146.42,190.63,200.14,75,200]],["b",[188.57,199.45,298.76,254.55,300,300]],["b",[298.76,340.63,213.36,397.11,75,400]]]
  },
  "4":{
    bbox:[0,0,300,400],
    path:[["ml",[150,400,150,0,0,200,225,200]]]
  },
  "5":{
    bbox:[0,0,300,400],
    path:[["ml",[300,0,75,0,75,200]],["b",[230.58,201.52,298.76,250.41,300,300]],["b",[299.45,350.28,242.98,399.86,75,400]]]
  },
  "6":{
    bbox:[0,0,300,400],
    path:[["m",[225,0]],["b",[144.49,2.48,74.93,90.63,75,200]],["l",[75,300]],["b",[74.93,336.5,100.41,395.04,150,400]],["b",[182.37,400.55,225.07,348.21,225,300]],["b",[225.07,254.55,187.88,202.2,150,200]],["b",[113.5,202.2,75.62,249.04,75,300]]]
  },
  "7":{
    bbox:[0,0,300,400],
    path:[["ml",[75,0,300,0,75,400]],["m",[150,200]],["l",[225,200]]]
  },
  "8":{
    bbox:[0,0,300,400],
    path:[["m",[150,400]],["b",[189.94,399.17,223,358.54,225,300]],["b",[225.07,256.61,192.7,200.83,150,200]],["b",[102.48,199.45,73.55,155.37,75,100]],["b",[73.55,58.95,102.48,-0.28,150,0]],["b",[191.32,1.1,225.07,38.98,225,100]],["b",[225.07,149.17,196.14,199.45,150,200]],["b",[104.55,199.45,74.24,246.97,75,300]],["b",[72.87,350.96,102.48,399.86,150,400]]]
  },
  "9":{
    bbox:[0,0,300,400],
    path:[["m",[225,100]],["b",[222.31,45.18,183.06,0.41,150,0]],["b",[109.37,1.1,74.24,45.87,75,100]],["b",[74.93,169.15,96.28,198.76,150,200]],["b",[184.44,200.14,223,153.99,225,100]],["b",[225.07,308.95,192.7,396.42,150,400]],["b",[106.61,397.11,77,371.63,75,300]]]
  },

  "A":{
    bbox:[0,0,300,400],
    path:[["ml",[0,400,150,0,300,400,225,200,75,200]]]
  },
  "a":{
    bbox:[0,0,300,400],
    path:[["ml",[0,400,150,0,300,400,225,200,75,200]]]
  },
  "B":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0]],["b",[247.8,-0.96,298.07,46.56,300,100]],["b",[298.07,165.7,263.64,198.07,75,200]],["b",[246.42,202.2,298.76,233.2,300,300]],["b",[298.76,363.36,254.68,397.11,75,400]]]
  },
  "b":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0]],["b",[247.8,-0.96,298.07,46.56,300,100]],["b",[298.07,165.7,263.64,198.07,75,200]],["b",[246.42,202.2,298.76,233.2,300,300]],["b",[298.76,363.36,254.68,397.11,75,400]]]
  },
  "C":{
    bbox:[0,0,300,400],
    path:[["m",[300,0]],["b",[57.71,1.1,73.55,160.88,75,200]],["b",[72.87,333.75,96.28,397.8,300,400]]]
  },
  "c":{
    bbox:[0,0,300,400],
    path:[["m",[300,0]],["b",[57.71,1.1,73.55,160.88,75,200]],["b",[72.87,333.75,96.28,397.8,300,400]]]
  },
  "D":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0]],["b",[253.99,1.1,299.45,128.51,300,200]],["b",[300.14,262.81,267.77,399.17,75,400]]]
  },
  "d":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0]],["b",[253.99,1.1,299.45,128.51,300,200]],["b",[300.14,262.81,267.77,399.17,75,400]]]
  },
  "E":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0,300,0,75,0,75,200,300,200,75,200,75,400,300,400]]]
  },
  "e":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0,300,0,75,0,75,200,300,200,75,200,75,400,300,400]]]
  },
  "F":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0,300,0,75,0,75,200,225,200]]]
  },
  "f":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0,300,0,75,0,75,200,225,200]]]
  },
  "G":{
    bbox:[0,0,300,400],
    path:[["ml",[225,200,300,200,300,400]],["b",[165.15,398.48,74.24,353.03,75,200]],["b",[74.24,75.48,125.9,0.41,300,0]]]
  },
  "g":{
    bbox:[0,0,300,400],
    path:[["ml",[225,200,300,200,300,400]],["b",[165.15,398.48,74.24,353.03,75,200]],["b",[74.24,75.48,125.9,0.41,300,0]]]
  },
  "H":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0,75,200,300,200,300,0,300,400]]]
  },
  "h":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0,75,200,300,200,300,0,300,400]]]
  },
  "I":{
    bbox:[0,0,300,400],
    path:[["ml",[75,0,225,0,150,0,150,400,75,400,225,400]]]
  },
  "i":{
    bbox:[0,0,300,400],
    path:[["ml",[75,0,225,0,150,0,150,400,75,400,225,400]]]
  },
  "J":{
    bbox:[0,0,300,400],
    path:[["ml",[75,0,225,0,225,300]],["b",[224.38,364.05,203.03,398.48,150,400]],["b",[107.99,397.8,74.24,373,75,300]]]
  },
  "j":{
    bbox:[0,0,300,400],
    path:[["ml",[75,0,225,0,225,300]],["b",[224.38,364.05,203.03,398.48,150,400]],["b",[107.99,397.8,74.24,373,75,300]]]
  },
  "K":{
    bbox:[0,0,300,400],
    path:[["ml",[75,0,75,400,75,200,300,0,75,200,300,400]]]
  },
  "k":{
    bbox:[0,0,300,400],
    path:[["ml",[75,0,75,400,75,200,300,0,75,200,300,400]]]
  },
  "L":{
    bbox:[0,0,300,400],
    path:[["ml",[75,0,75,400,300,400]]]
  },
  "l":{
    bbox:[0,0,300,400],
    path:[["ml",[75,0,75,400,300,400]]]
  },
  "M":{
    bbox:[0,0,300,400],
    path:[["ml",[0,400,0,0,150,200,300,0,300,400]]]
  },
  "m":{
    bbox:[0,0,300,400],
    path:[["ml",[0,400,0,0,150,200,300,0,300,400]]]
  },
  "N":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0,300,400,300,0]]]
  },
  "n":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0,300,400,300,0]]]
  },
  "O":{
    bbox:[0,0,300,400],
    path:[["ml",[0,200]],["b",[-0.14,41.05,26.72,0.41,150,0]],["b",[239.53,1.1,298.76,61.71,300,200]],["b",[299.45,315.84,247.8,397.8,150,400]],["b",[88.02,399.17,0.55,317.91,0,200]]]
  },
  "o":{
    bbox:[0,0,300,400],
    path:[["ml",[0,200]],["b",[-0.14,41.05,26.72,0.41,150,0]],["b",[239.53,1.1,298.76,61.71,300,200]],["b",[299.45,315.84,247.8,397.8,150,400]],["b",[88.02,399.17,0.55,317.91,0,200]]]
  },
  "P":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0]],["b",[224.38,1.1,298.07,38.29,300,100]],["b",[299.45,177.41,239.53,200.83,75,200]]]
  },
  "p":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0]],["b",[224.38,1.1,298.07,38.29,300,100]],["b",[299.45,177.41,239.53,200.83,75,200]]]
  },
  "Q":{
    bbox:[0,0,300,400],
    path:[["m",[0,200]],["b",[-0.14,36.91,52.89,2.48,150,0]],["b",[234.02,2.48,298.76,85.12,300,200]],["b",[298.76,306.89,229.89,399.17,150,400]],["b",[70.11,397.8,0.55,304.82,0,200]],["ml",[225,300,300,400]]]
  },
  "q":{
    bbox:[0,0,300,400],
    path:[["m",[0,200]],["b",[-0.14,36.91,52.89,2.48,150,0]],["b",[234.02,2.48,298.76,85.12,300,200]],["b",[298.76,306.89,229.89,399.17,150,400]],["b",[70.11,397.8,0.55,304.82,0,200]],["ml",[225,300,300,400]]]
  },
  "R":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0]],["b",[230.58,1.79,298.76,58.95,300,100]],["b",[299.45,162.95,253.31,200.14,75,200]],["l",[300,400]]]
  },
  "r":{
    bbox:[0,0,300,400],
    path:[["ml",[75,400,75,0]],["b",[230.58,1.79,298.76,58.95,300,100]],["b",[299.45,162.95,253.31,200.14,75,200]],["l",[300,400]]]
  },
  "S":{
    bbox:[0,0,300,400],
    path:[["ml",[300,0,150,0]],["b",[61.16,0.41,-0.83,52.75,0,100]],["b",[-0.14,158.82,71.49,198.76,150,200]],["b",[232.64,201.52,298.76,238.71,300,300]],["b",[300.83,360.61,231.96,397.8,150,400]],["l",[0,400]]]
  },
  "s":{
    bbox:[0,0,300,400],
    path:[["ml",[300,0,150,0]],["b",[61.16,0.41,-0.83,52.75,0,100]],["b",[-0.14,158.82,71.49,198.76,150,200]],["b",[232.64,201.52,298.76,238.71,300,300]],["b",[300.83,360.61,231.96,397.8,150,400]],["l",[0,400]]]
  },
  "T":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,300,0,150,0,150,400]]]
  },
  "t":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,300,0,150,0,150,400]]]
  },
  "U":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,0,300]],["b",[0.55,359.92,25.34,399.17,150,400]],["b",[244.35,399.17,297.38,339.94,300,300]],["l",[300,0]]]
  },
  "u":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,0,300]],["b",[0.55,359.92,25.34,399.17,150,400]],["b",[244.35,399.17,297.38,339.94,300,300]],["l",[300,0]]]
  },
  "V":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,150,400,300,0]]]
  },
  "v":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,150,400,300,0]]]
  },
  "W":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,75,400,150,200,225,400,300,0]]]
  },
  "w":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,75,400,150,200,225,400,300,0]]]
  },
  "X":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,300,400,150,200,0,400,300,0]]]
  },
  "x":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,300,400,150,200,0,400,300,0]]]
  },
  "Y":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,150,200,300,0,150,200,150,400]]]
  },
  "y":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,150,200,300,0,150,200,150,400]]]
  },
  "Z":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,300,0,0,400,300,400]]]
  },
  "z":{
    bbox:[0,0,300,400],
    path:[["ml",[0,0,300,0,0,400,300,400]]]
  },

  "Ä":{
    bbox:[0,0,300,400],
    path:[["ml",[0,400,150,0,300,400,225,200,75,200]],["ml",[75,0,75,0]],["ml",[225,0,225,0]]]
  },
  "ä":{
    bbox:[0,0,300,400],
    path:[["ml",[0,400,150,0,300,400,225,200,75,200]],["ml",[75,0,75,0]],["ml",[225,0,225,0]]]
  },
}

gat.alphabet.hershey_astrology = {
  lineHeight:50,
  textlineToPath: function(text){
    let path = []
    let width = 0
    let hershey_charIndexMap = {
      " ":0,"!": 1,"\"":2,"#":3,"$":4,"%":5,"&":6,"'":7,"(":8,")":9, "*":10,
      "+":11, ",":12, "-":13, ".":14, "/":15, "0":16, "1":17, "2":18,
      "3":19, "4":20, "5":21, "6":22, "7":23, "8":24, "9":25, ":":26,
      ";":27, "<":28, "=":29, ">":30, "?":31, "@":32, "A":33, "B":34,
      "C":35, "D":36, "E":37, "F":38, "G":39, "H":40, "I":41, "J":42,
      "K":43, "L":44, "M":45, "N":46, "O":47, "P":48, "Q":49, "R":50,
      "S":51, "T":52, "U":53, "V":54, "W":55, "X":56, "Y":57, "Z":58,
      "[":59, "\\":60, "]":61, "^":62, "_":63, "`":64, "a":65, "b":66,
      "c":67, "d":68, "e":69, "f":70, "g":71, "h":72, "i":73, "j":74,
      "k":75, "l":76, "m":77, "n":78, "o":79, "p":80, "q":81, "r":82,
      "s":83, "t":84, "u":85, "v":86, "w":87, "x":88, "y":89, "z":90,
      "{":91, "|":92, "}":93, "~":94, "undefined":95
    }

    for(let i=0; i<text.length; i++){
      let c = text[i];
      let hersheyIndex = hershey_charIndexMap[c]
      if(hersheyIndex == undefined) {
        hersheyIndex = hershey_charIndexMap["undefined"]
      }
      let hersheyChar = this.alphabet[hersheyIndex]
      let width_char = (hersheyChar.charCodeAt(1)-82)-(hersheyChar.charCodeAt(0)-82)

      let penUp = true
      for(let i=3; i<hersheyChar.length; i+=2){
        if (hersheyChar[i-1] == " "){
          penUp = true
        } else {
          let xy = [
            width+width_char/2+(hersheyChar.charCodeAt(i-1)-82),
            0+(hersheyChar.charCodeAt(i)-82)
          ]
          if (penUp){
            path.push(["m",xy])
            penUp = false
          } else {
            path.push(["l",xy])
          }
        }
      }
      width += width_char
    }
    return {
      path:path,
      width: width
    }
  },
  alphabet:[
    "JZ","F^JHNJPLQOQRPUNWJY RJHMIOJQLRO RRRQUOWMXJY RZHWIUJSLRO RRRSUUWWXZY RZHVJTLSOSRTUVWZY RIP[P RIQ[Q","I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM","E`QFNGKIILHOHRIUKXNZQ[T[WZZX\\U]R]O\\LZIWGTFQF RROQPQQRRSRTQTPSORO RRPRQSQSPRP","J[PFNGOIQJ RPFOGOI RUFWGVITJ RUFVGVI RQJOKNLMNMQNSOTQUTUVTWSXQXNWLVKTJQJ RRUR[ RSUS[ RNXWX","I\\RFOGMILLLMMPORRSSSVRXPYMYLXIVGSFRF RRSR[ RSSS[ RNWWW","D`PFMGJIHLGOGSHVJYM[P\\T\\W[ZY\\V]S]O\\LZIWGTFPF RRFR\\ RGQ]Q","G`PMMNKPJSJTKWMYPZQZTYVWWTWSVPTNQMPM R]GWG[HUN R]G]M\\IVO R\\HVN","KYVBTDRGPKOPOTPYR]T`Vb RTDRHQKPPPTQYR\\T`","KYNBPDRGTKUPUTTYR]P`Nb RPDRHSKTPTTSYR\\P`","F\\IIJGLFOFQGRIRLQOPQNSKU ROFPGQIQMPPNS RVFT[ RWFS[ RKUYU","I\\MFMU RNFMQ RMQNOONQMTMWNXPXRWTUV RTMVNWPWRTXTZU[W[YY RKFNF","NVSWRXQWRVSWSYQ[","I\\RNOOMQLTLUMXOZR[S[VZXXYUYTXQVOSNRN RRHNJRFRN RSHWJSFSN RRSQTQURVSVTUTTSSRS RRTRUSUSTRT","NVRVQWRXSWRV","G^QHRFR[ RTHSFS[ RJHKFKMLPNRQSRS RMHLFLNMQ R[HZFZMYPWRTSSS RXHYFYNXQ RNWWW","H]TFQGOIMLLOKSKVLYMZO[Q[TZVXXUYRZNZKYHXGVFTF RQHOJNLMOLSLWMY RTYVWWUXRYNYJXH RTFRGPJOLNOMSMXNZO[ RQ[SZUWVUWRXNXIWGVF","H]TJO[Q[ RWFUJP[ RWFQ[ RWFTIQKOL RTJRKOL","H]OKOJPJPLNLNJOHPGSFVFYGZIZKYMWOMUKWI[ RXGYIYKXMVOSQ RVFWGXIXKWMUOMU RJYKXMXRYWYXX RMXRZWZ RMXR[U[WZXXXW","H]OKOJPJPLNLNJOHPGSFVFYGZIZKYMXNVOSP RXGYIYKXMWN RVFWGXIXKWMUOSP RQPSPVQWRXTXWWYUZR[O[LZKYJWJULULWKWKV RVRWTWWVY RSPUQVSVWUYTZR[","H]WJR[T[ RZFXJS[ RZFT[ RZFJUZU","H]QFLP RQF[F RQGYG RPHUHYG[F RLPMOPNSNVOWPXRXUWXUZQ[N[LZKYJWJULULWKWKV RVPWRWUVXTZ RSNUOVQVUUXSZQ[","H]YJYIXIXKZKZIYGWFTFQGOIMLLOKSKVLYMZO[R[UZWXXVXSWQVPTOQOOPNQMS RPINLMOLSLWMY RVXWVWSVQ RTFRGPJOLNOMSMXNZO[ RR[TZUYVVVRUPTO","H]NFLL R[FZIXLTQRTQWP[ RRSPWO[ RXLRRPUOWN[P[ RMIPFRFWI ROGRGWI RMIOHRHWIYIZH[F","H]SFPGOHNJNMOOQPTPWOYNZLZIYGWFSF RUFPG RPHOJONPO ROORP RSPWO RXNYLYIXG RYGUF RSFQHPJPNQP RTPVOWNXLXHWF RQPMQKSJUJXKZN[R[VZWYXWXTWRVQTP RRPMQ RNQLSKUKXLZ RKZP[VZ RVYWWWTVR RVQSP RQPOQMSLULXMZN[ RR[TZUYVWVSUQTP","H]XNWPVQTRQROQNPMNMKNIPGSFVFXGYHZKZNYRXUVXTZQ[N[LZKXKVMVMXLXLW ROPNNNKOI RXHYJYNXRWUUX RQRPQOOOKPHQGSF RVFWGXIXNWRVUUWSZQ[","G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[Y[YVX[","H[YGUGQHNJLMKPKSLVNYQ[U\\Y\\ RYGVHSJQMPPPSQVSYV[Y\\","F_OQMQKRJSIUIWJYKZM[O[QZRYSWSURSQROQ RSHPQ RZJRR R\\QST","H\\OKUY RUKOY RKOYU RYOKU","F^NVLUKUIVHXHYI[K\\L\\N[OYOXNVKRJOJMKJMHPGTGWHYJZMZOYRVVUXUYV[X\\Y\\[[\\Y\\X[VYUXUVV RJMKKMIPHTHWIYKZM","F^NMLNKNIMHKHJIHKGLGNHOJOKNMKQJTJVKYM[P\\T\\W[YYZVZTYQVMUKUJVHXGYG[H\\J\\K[MYNXNVM RJVKXMZP[T[WZYXZV","F_JMILIJJHLGNGPHQIRKSP RIJKHMHOIPJQLRPR[ R[M\\L\\J[HYGWGUHTISKRP R\\JZHXHVIUJTLSPS[","H\\RFKZ RQIW[ RRIX[ RRFY[ RMUVU RI[O[ RT[[[ RKZJ[ RKZM[ RWZU[ RWYV[ RXYZ[","G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZLYNXOUP RXHYJYLXN RUFWGXIXMWOUP RNPUPXQYRZTZWYYXZU[I[ RXRYTYWXY RUPWQXSXXWZU[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[","G\\XIYFYLXIVGTFQFNGLIKKJNJSKVLXNZQ[T[VZXXYV RMILKKNKSLVMX RQFOGMJLNLSMWOZQ[","G]LFL[ RMGMZ RNFN[ RIFSFVGXIYKZNZSYVXXVZS[I[ RWIXKYNYSXVWX RSFUGWJXNXSWWUZS[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[","G\\LFL[ RMGMZ RNFN[ RIFYFYL RNPTP RTLTT RI[Y[YU RJFLG RKFLH ROFNH RPFNG RTFYG RVFYH RWFYI RXFYL RTLSPTT RTNRPTR RTOPPTQ RLZJ[ RLYK[ RNYO[ RNZP[ RT[YZ RV[YY RW[YX RX[YU","G[LFL[ RMGMZ RNFN[ RIFYFYL RNPTP RTLTT RI[Q[ RJFLG RKFLH ROFNH RPFNG RTFYG RVFYH RWFYI RXFYL RTLSPTT RTNRPTR RTOPPTQ RLZJ[ RLYK[ RNYO[ RNZP[","G^XIYFYLXIVGTFQFNGLIKKJNJSKVLXNZQ[T[VZXZY[YS RMILKKNKSLVMX RQFOGMJLNLSMWOZQ[ RXTXY RWSWYVZ RTS\\S RUSWT RVSWU RZSYU R[SYT","F^KFK[ RLGLZ RMFM[ RWFW[ RXGXZ RYFY[ RHFPF RTF\\F RMPWP RH[P[ RT[\\[ RIFKG RJFKH RNFMH ROFMG RUFWG RVFWH RZFYH R[FYG RKZI[ RKYJ[ RMYN[ RMZO[ RWZU[ RWYV[ RYYZ[ RYZ[[","LXQFQ[ RRGRZ RSFS[ RNFVF RN[V[ ROFQG RPFQH RTFSH RUFSG RQZO[ RQYP[ RSYT[ RSZU[","JZSFSWRZQ[ RTGTWSZ RUFUWTZQ[O[MZLXLVMUNUOVOWNXMX RMVMWNWNVMV RPFXF RQFSG RRFSH RVFUH RWFUG","F\\KFK[ RLGLZ RMFM[ RXGMR RPPW[ RQPX[ RQNY[ RHFPF RUF[F RH[P[ RT[[[ RIFKG RJFKH RNFMH ROFMG RWFXG RZFXG RKZI[ RKYJ[ RMYN[ RMZO[ RWYU[ RWYZ[","I[NFN[ ROGOZ RPFP[ RKFSF RK[Z[ZU RLFNG RMFNH RQFPH RRFPG RNZL[ RNYM[ RPYQ[ RPZR[ RU[ZZ RW[ZY RX[ZX RY[ZU","E_JFJZ RJFQ[ RKFQX RLFRX RXFQ[ RXFX[ RYGYZ RZFZ[ RGFLF RXF]F RG[M[ RU[][ RHFJG R[FZH R\\FZG RJZH[ RJZL[ RXZV[ RXYW[ RZY[[ RZZ\\[","F^KFKZ RKFY[ RLFXX RMFYX RYGY[ RHFMF RVF\\F RH[N[ RIFKG RWFYG R[FYG RKZI[ RKZM[","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RMILKKNKSLVMX RWXXVYSYNXKWI RQFOGMJLNLSMWOZQ[ RS[UZWWXSXNWJUGSF","G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZMYOXPUQNQ RXHYJYMXO RUFWGXIXNWPUQ RI[Q[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RMILKKNKSLVMX RWXXVYSYNXKWI RQFOGMJLNLSMWOZQ[ RS[UZWWXSXNWJUGSF RNXOVQURUTVUXV^W`Y`Z^Z\\ RV\\W^X_Y_ RUXW]X^Y^Z]","G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZLYNXOUPNP RXHYJYLXN RUFWGXIXMWOUP RRPTQUSWYX[Z[[Y[W RWWXYYZZZ RTQURXXYYZY[X RI[Q[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[","H\\XIYFYLXIVGSFPFMGKIKLLNOPURWSXUXXWZ RLLMNOOUQWRXT RMGLILKMMONUPXRYTYWXYWZT[Q[NZLXKUK[LX","H\\JFJL RQFQ[ RRGRZ RSFS[ RZFZL RJFZF RN[V[ RKFJL RLFJI RMFJH ROFJG RUFZG RWFZH RXFZI RYFZL RQZO[ RQYP[ RSYT[ RSZU[","F^KFKULXNZQ[S[VZXXYUYG RLGLVMX RMFMVNYOZQ[ RHFPF RVF\\F RIFKG RJFKH RNFMH ROFMG RWFYG R[FYG","H\\KFR[ RLFRXR[ RMFSX RYGR[ RIFPF RUF[F RJFLH RNFMH ROFMG RWFYG RZFYG","F^JFN[ RKFNVN[ RLFOV RRFOVN[ RRFV[ RSFVVV[ RTFWV RZGWVV[ RGFOF RRFTF RWF]F RHFKG RIFKH RMFLH RNFLG RXFZG R\\FZG","H\\KFW[ RLFX[ RMFY[ RXGLZ RIFPF RUF[F RI[O[ RT[[[ RJFMH RNFMH ROFMG RVFXG RZFXG RLZJ[ RLZN[ RWZU[ RWYV[ RWYZ[","G]JFQQQ[ RKFRQRZ RLFSQS[ RYGSQ RHFOF RVF\\F RN[V[ RIFKG RNFLG RWFYG R[FYG RQZO[ RQYP[ RSYT[ RSZU[","H\\YFKFKL RWFK[ RXFL[ RYFM[ RK[Y[YU RLFKL RMFKI RNFKH RPFKG RT[YZ RV[YY RW[YX RX[YU","F^IGJKKMMOPPTPWOYMZK[G RIGJJKLMNPOTOWNYLZJ[G RPONPMQLSLVMXOZQ[S[UZWXXVXSWQVPTO RPPNQMSMVNY RVYWVWSVQTP","KYKFY^","F^MJMV RNKNU RVKVU RWJWV RIGKIMJPKTKWJYI[G RIYKWMVPUTUWVYW[Y","F^[ILIJJILINJPLQNQPPQNQLPJ[J RIMJOKPMQ RQMPKOJMI RIXXXZW[U[SZQXPVPTQSSSUTWIW R[TZRYQWP RSTTVUWWX","F]OUMTLTJUIWIXJZL[M[OZPXPWOUJPINIKJILHOGSGWHYJZLZOYRVUUWUYV[X[YZZX RMSKPJNJKKILH RSGVHXJYLYOXRVU","G_HKKHMKMV RJILLLV RMKPHRKRU ROIQLQU RRKUHWKW[ RTIVLV[ RWKZH[J\\M\\P[SZUXWUYP[ RYIZJ[M[PZSYUWWTYP[","G]WMUTUXVZW[Y[[Y\\W RXMVTVZ RWMYMWTVX RUTUQTNRMPMMNKQJTJVKYLZN[P[RZSYTWUT RNNLQKTKWLY RPMNOMQLTLWMZN[","I\\PFNMMSMWNYOZQ[S[VZXWYTYRXOWNUMSMQNPOOQNT RQFOMNQNWOZ RVYWWXTXQWO RMFRFPMNT RS[UYVWWTWQVNUM RNFQG ROFPH","I[WQWPVPVRXRXPWNUMRMONMQLTLVMYNZP[R[UZWW ROONQMTMWNY RRMPOOQNTNWOZP[","G]YFVQUUUXVZW[Y[[Y\\W RZFWQVUVZ RVF[FWTVX RUTUQTNRMPMMNKQJTJVKYLZN[P[RZSYTWUT RMOLQKTKWLY RPMNOMQLTLWMZN[ RWFZG RXFYH","I[MVQUTTWRXPWNUMRMONMQLTLVMYNZP[R[UZWX ROONQMTMWNY RRMPOOQNTNWOZP[","JZZHZGYGYI[I[GZFXFVGTISKRNQRO[N^M`Kb RTJSMRRP[O^ RXFVHUJTMSRQZP]O_MaKbIbHaH_J_JaIaI` RNMYM","H]XMT[S^QaOb RYMU[S_ RXMZMV[T_RaObLbJaI`I^K^K`J`J_ RVTVQUNSMQMNNLQKTKVLYMZO[Q[SZTYUWVT RNOMQLTLWMY RQMOONQMTMWNZO[","G]OFI[K[ RPFJ[ RLFQFK[ RMTOPQNSMUMWNXPXSVX RWNWRVVVZ RWPUUUXVZW[Y[[Y\\W RMFPG RNFOH","KXSFSHUHUFSF RTFTH RSGUG RLQMOOMQMRNSPSSQX RRNRRQVQZ RRPPUPXQZR[T[VYWW","KXUFUHWHWFUF RVFVH RUGWG RMQNOPMRMSNTPTSRZQ]P_NaLbJbIaI_K_KaJaJ` RSNSSQZP]O_ RSPRTP[O^N`Lb","G]OFI[K[ RPFJ[ RLFQFK[ RYOYNXNXPZPZNYMWMUNQROS RMSOSQTRUTYUZWZ RQUSYTZ ROSPTRZS[U[WZYW RMFPG RNFOH","LXTFQQPUPXQZR[T[VYWW RUFRQQUQZ RQFVFRTQX RRFUG RSFTH","@cAQBODMFMGNHPHSF[ RGNGSE[ RGPFTD[F[ RHSJPLNNMPMRNSPSSQ[ RRNRSP[ RRPQTO[Q[ RSSUPWNYM[M]N^P^S\\X R]N]R\\V\\Z R]P[U[X\\Z][_[aYbW","F^GQHOJMLMMNNPNSL[ RMNMSK[ RMPLTJ[L[ RNSPPRNTMVMXNYPYSWX RXNXRWVWZ RXPVUVXWZX[Z[\\Y]W","H\\QMNNLQKTKVLYMZP[S[VZXWYTYRXOWNTMQM RNOMQLTLWMY RVYWWXTXQWO RQMOONQMTMWNZP[ RS[UYVWWTWQVNTM","G]HQIOKMMMNNOPOSNWKb RNNNSMWJb RNPMTIb ROTPQQORNTMVMXNYOZRZTYWWZT[R[PZOWOT RXOYQYTXWWY RVMWNXQXTWWVYT[ RFbNb RJaGb RJ`Hb RK`Lb RJaMb","G\\WMQb RXMRb RWMYMSb RUTUQTNRMPMMNKQJTJVKYLZN[P[RZSYTWUT RMOLQKTKWLY RPMNOMQLTLWMZN[ RNbVb RRaOb RR`Pb RS`Tb RRaUb","I[JQKOMMOMPNQPQTO[ RPNPTN[ RPPOTM[O[ RYOYNXNXPZPZNYMWMUNSPQT","J[XPXOWOWQYQYOXNUMRMONNONQOSQTTUVVWX RONNQ RORQSTTVU RWVVZ RNOOQQRTSVTWVWXVZS[P[MZLYLWNWNYMYMX","KYTFQQPUPXQZR[T[VYWW RUFRQQUQZ RTFVFRTQX RNMXM","F^GQHOJMLMMNNPNSLX RMNMRLVLZ RMPKUKXLZN[P[RZTXVU RXMVUVXWZX[Z[\\Y]W RYMWUWZ RXMZMXTWX","H\\IQJOLMNMONPPPSNX RONORNVNZ ROPMUMXNZP[R[TZVXXUYQYMXMXNYP","CaDQEOGMIMJNKPKSIX RJNJRIVIZ RJPHUHXIZK[M[OZQXRU RTMRURXSZU[W[YZ[X]U^Q^M]M]N^P RUMSUSZ RTMVMTTSX","G]JQLNNMPMRNSPSR RPMQNQRPVOXMZK[I[HZHXJXJZIZIY RRORRQVQY RZOZNYNYP[P[NZMXMVNTPSRRVRZS[ RPVPXQZS[U[WZYW","G]HQIOKMMMNNOPOSMX RNNNRMVMZ RNPLULXMZO[Q[SZUXWT RYMU[T^RaPb RZMV[T_ RYM[MW[U_SaPbMbKaJ`J^L^L`K`K_","H\\YMXOVQNWLYK[ RXOOOMPLR RVORNONNO RVORMOMMOLR RLYUYWXXV RNYRZUZVY RNYR[U[WYXV","F_GLJIMLMX RIJLMLX RMLPISLSX ROJRMRX RSLVIYLYW[Y RUJXMXXZZ]W","G]ZIJY RZIWJQJ RXKUKQJ RZIYLYR RXKXNYR RQRJR RPSMSJR RQRQY RPSPVQY","F^HOJKOU RJMOWRPWPZO[M[KZIXHWHUITKTMUPVRWUWXUZ RWHVIUKUMWQXTXWWYUZ","F^IOLLPN RKMOORLUN RQMTOWLYN RVMXO[L RIULRPT RKSOURRUT RQSTUWRYT RVSXU[R","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O"]
}

gat.alphabet.hershey_cursive = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MWRFRT RRYQZR[SZRY","JZNFNM RVFVM","H]SBLb RYBRb RLOZO RKUYU","H\\PBP_ RTBT_ RYIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_\\O\\N[MZMYNXPVUTXRZP[L[JZIYHWHUISJRQNRMSKSIRGPFNGMIMKNNPQUXWZY[[[\\Z\\Y","PTRMRQ","KYVBTDRGPKOPOTPYR]T`Vb","KYNBPDRGTKUPUTTYR]P`Nb","JZRLRX RMOWU RWOMU","E_RIR[ RIR[R","NVSWRXQWRVSWSYQ[","E_IR[R","NVRVQWRXSWRV","G][BIb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF","H\\NJPISFS[","H\\LKLJMHNGPFTFVGWHXJXLWNUQK[Y[","H\\MFXFRNUNWOXPYSYUXXVZS[P[MZLYKW","H\\UFKTZT RUFU[","H\\WFMFLOMNPMSMVNXPYSYUXXVZS[P[MZLYKW","H\\XIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQLT","H\\YFO[ RKFYF","H\\PFMGLILKMMONSOVPXRYTYWXYWZT[P[MZLYKWKTLRNPQOUNWMXKXIWGTFPF","H\\XMWPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLX","NVROQPRQSPRO RRVQWRXSWRV","NVROQPRQSPRO RSWRXQWRVSWSYQ[","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","I[LKLJMHNGPFTFVGWHXJXLWNVORQRT RRYQZR[SZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","G[G[IZLWOSSLVFV[UXSUQSNQLQKRKTLVNXQZT[Y[","F]SHTITLSPRSQUOXMZK[J[IZIWJRKOLMNJPHRGUFXFZG[I[KZMYNWOTP RSPTPWQXRYTYWXYWZU[R[PZOX","H\\TLTMUNWNYMZKZIYGWFTFQGOIMLLNKRKVLYMZO[Q[TZVXWV","G^TFRGQIPMOSNVMXKZI[G[FZFXGWIWKXMZP[S[VZXXZT[O[KZHYGWFTFRHRJSMUPWRZT\\U","H\\VJVKWLYLZKZIYGVFRFOGNINLONPOSPPPMQLRKTKWLYMZP[S[VZXXYV","H\\RLPLNKMINGQFTFXG[G]F RXGVNTTRXPZN[L[JZIXIVJULUNV RQPZP","G^G[IZMVPQQNRJRGQFPFOGNINLONQOUOXNYMZKZQYVXXVZS[O[LZJXIVIT","F^MMKLJJJIKGMFNFPGQIQKPONULYJ[H[GZGX RMRVOXN[L]J^H^G]F\\FZHXLVRUWUZV[W[YZZY\\V","IZWVUTSQROQLQIRGSFUFVGWIWLVQTVSXQZO[M[KZJXJVKUMUOV","JYT^R[PVOPOJPGRFTFUGVJVMURR[PaOdNfLgKfKdLaN^P\\SZWX","F^MMKLJJJIKGMFNFPGQIQKPONULYJ[H[GZGX R^I^G]F\\FZGXIVLTNROPO RROSQSXTZU[V[XZYY[V","I\\MRORSQVOXMYKYHXFVFUGTISNRSQVPXNZL[J[IZIXJWLWNXQZT[V[YZ[X","@aEMCLBJBICGEFFFHGIIIKHPGTE[ RGTJLLHMGOFPFRGSISKRPQTO[ RQTTLVHWGYFZF\\G]I]K\\PZWZZ[[\\[^Z_YaV","E]JMHLGJGIHGJFKFMGNINKMPLTJ[ RLTOLQHRGTFVFXGYIYKXPVWVZW[X[ZZ[Y]V","H]TFQGOIMLLNKRKVLYMZO[Q[TZVXXUYSZOZKYHXGVFTFRHRKSNUQWSZU\\V","F_SHTITLSPRSQUOXMZK[J[IZIWJRKOLMNJPHRGUFZF\\G]H^J^M]O\\PZQWQUPTO","H^ULTNSOQPOPNNNLOIQGTFWFYGZIZMYPWSSWPYNZK[I[HZHXIWKWMXPZS[V[YZ[X","F_SHTITLSPRSQUOXMZK[J[IZIWJRKOLMNJPHRGUFYF[G\\H]J]M\\O[PYQVQSPTQUSUXVZX[ZZ[Y]V","H\\H[JZLXOTQQSMTJTGSFRFQGPIPKQMSOVQXSYUYWXYWZT[P[MZKXJVJT","H[RLPLNKMINGQFTFXG[G]F RXGVNTTRXPZN[L[JZIXIVJULUNV","E]JMHLGJGIHGJFKFMGNINKMOLRKVKXLZN[P[RZSYUUXMZF RXMWQVWVZW[X[ZZ[Y]V","F]KMILHJHIIGKFLFNGOIOKNOMRLVLYM[O[QZTWVTXPYMZIZGYFXFWGVIVKWNYP[Q","C_HMFLEJEIFGHFIFKGLILLK[ RUFK[ RUFS[ RaF_G\\JYNVTS[","F^NLLLKKKILGNFPFRGSISLQUQXRZT[V[XZYXYVXUVU R]I]G\\FZFXGVITLPUNXLZJ[H[GZGX","F]KMILHJHIIGKFLFNGOIOKNOMRLVLXMZN[P[RZTXVUWSYM R[FYMVWT]RbPfNgMfMdNaP^S[VY[V","H]ULTNSOQPOPNNNLOIQGTFWFYGZIZMYPWTTWPZN[K[JZJXKWNWPXQYR[R^QaPcNfLgKfKdLaN^Q[TYZV","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZRDJR RRDZR","G[Gb[b","NVSKQMQORPSORNQO","L\\UUTSRRPRNSMTLVLXMZO[Q[SZTXVRUWUZV[W[YZZY\\V","M[MVOSRNSLTITGSFQGPIOMNTNZO[P[RZTXUUURVVWWYW[V","MXTTTSSRQROSNTMVMXNZP[S[VYXV","L\\UUTSRRPRNSMTLVLXMZO[Q[SZTXZF RVRUWUZV[W[YZZY\\V","NXOYQXRWSUSSRRQROSNUNXOZQ[S[UZVYXV","OWOVSQUNVLWIWGVFTGSIQQNZKaJdJfKgMfNcOZP[R[TZUYWV","L[UUTSRRPRNSMTLVLXMZO[Q[SZTY RVRTYPdOfMgLfLdMaP^S\\U[XY[V","M\\MVOSRNSLTITGSFQGPIOMNSM[ RM[NXOVQSSRURVSVUUXUZV[W[YZZY\\V","PWSMSNTNTMSM RPVRRPXPZQ[R[TZUYWV","PWSMSNTNTMSM RPVRRLdKfIgHfHdIaL^O\\Q[TYWV","M[MVOSRNSLTITGSFQGPIOMNSM[ RM[NXOVQSSRURVSVUTVQV RQVSWTZU[V[XZYY[V","OWOVQSTNULVIVGUFSGRIQMPTPZQ[R[TZUYWV","E^EVGSIRJSJTIXH[ RIXJVLSNRPRQSQTPXO[ RPXQVSSURWRXSXUWXWZX[Y[[Z\\Y^V","J\\JVLSNROSOTNXM[ RNXOVQSSRURVSVUUXUZV[W[YZZY\\V","LZRRPRNSMTLVLXMZO[Q[SZTYUWUUTSRRQSQURWTXWXYWZV","KZKVMSNQMUGg RMUNSPRRRTSUUUWTYSZQ[ RMZO[R[UZWYZV","L[UUTSRRPRNSMTLVLXMZO[Q[SZ RVRUUSZPaOdOfPgRfScS\\U[XY[V","MZMVOSPQPSSSTTTVSYSZT[U[WZXYZV","NYNVPSQQQSSVTXTZR[ RNZP[T[VZWYYV","OXOVQSSO RVFPXPZQ[S[UZVYXV RPNWN","L[LVNRLXLZM[O[QZSXUU RVRTXTZU[V[XZYY[V","L[LVNRMWMZN[O[RZTXUUUR RURVVWWYW[V","I^LRJTIWIYJ[L[NZPX RRRPXPZQ[S[UZWXXUXR RXRYVZW\\W^V","JZJVLSNRPRQSQZR[U[XYZV RWSVRTRSSOZN[L[KZ","L[LVNRLXLZM[O[QZSXUU RVRPdOfMgLfLdMaP^S\\U[XY[V","LZLVNSPRRRTTTVSXQZN[P\\Q^QaPdOfMgLfLdMaP^S\\WYZV","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","JZJFJ[K[KFLFL[M[MFNFN[O[OFPFP[Q[QFRFR[S[SFTFT[U[UFVFV[W[WFXFX[Y[YFZFZ["]
}

gat.alphabet.hershey_cyrilic_1 = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MWRFQHRTSHRF RRHRN RRYQZR[SZRY","MWRMQNROSNRM RR[QZRYSZS\\R^Q_","H]SFLb RYFRb RLQZQ RKWYW","H\\PBP_ RTBT_ RXIWJXKYJYIWGTFPFMGKIKKLMMNOOUQWRYT RKKMMONUPWQXRYTYXWZT[P[MZKXKWLVMWLX","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","F_[NZO[P\\O\\N[MZMYNXPVUTXRZP[M[JZIXIUJSPORMSKSIRGPFNGMIMKNNPQUXWZZ[[[\\Z\\Y RM[KZJXJUKSMQ RMKNMVXXZZ[","MWRHQGRFSGSIRKQL","KYVBTDRGPKOPOTPYR]T`Vb RTDRHQKPPPTQYR\\T`","KYNBPDRGTKUPUTTYR]P`Nb RPDRHSKTPTTSYR\\P`","JZRFRR RMIWO RWIMO","E_RIR[ RIR[R","MWR[QZRYSZS\\R^Q_","E_IR[R","MWRYQZR[SZRY","G][BIb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF RQFOGNHMJLOLRMWNYOZQ[ RS[UZVYWWXRXOWJVHUGSF","H\\NJPISFS[ RRGR[ RN[W[","H\\LJMKLLKKKJLHMGPFTFWGXHYJYLXNUPPRNSLUKXK[ RTFVGWHXJXLWNTPPR RKYLXNXSZVZXYYX RNXS[W[XZYXYV","H\\LJMKLLKKKJLHMGPFTFWGXIXLWNTOQO RTFVGWIWLVNTO RTOVPXRYTYWXYWZT[P[MZLYKWKVLUMVLW RWQXTXWWYVZT[","H\\THT[ RUFU[ RUFJUZU RQ[X[","H\\MFKP RKPMNPMSMVNXPYSYUXXVZS[P[MZLYKWKVLUMVLW RSMUNWPXSXUWXUZS[ RMFWF RMGRGWF","H\\WIVJWKXJXIWGUFRFOGMILKKOKULXNZQ[S[VZXXYUYTXQVOSNRNOOMQLT RRFPGNIMKLOLUMXOZQ[ RS[UZWXXUXTWQUOSN","H\\KFKL RKJLHNFPFUIWIXHYF RLHNGPGUI RYFYIXLTQSSRVR[ RXLSQRSQVQ[","H\\PFMGLILLMNPOTOWNXLXIWGTFPF RPFNGMIMLNNPO RTOVNWLWIVGTF RPOMPLQKSKWLYMZP[T[WZXYYWYSXQWPTO RPONPMQLSLWMYNZP[ RT[VZWYXWXSWQVPTO","H\\XMWPURRSQSNRLPKMKLLINGQFSFVGXIYLYRXVWXUZR[O[MZLXLWMVNWMX RQSORMPLMLLMIOGQF RSFUGWIXLXRWVVXTZR[","MWRMQNROSNRM RRYQZR[SZRY","MWRMQNROSNRM RR[QZRYSZS\\R^Q_","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","I[MJNKMLLKLJMHNGPFSFVGWHXJXLWNVORQRT RSFUGVHWJWLVNTP RRYQZR[SZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","H\\RFK[ RRFY[ RRIX[ RMUVU RI[O[ RU[[[","G]LFL[ RMFM[ RIFYFYLXF RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[","G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUP RUFWGXHYJYLXNWOUP RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[","I[NFN[ ROFO[ RKFZFZLYF RK[R[","F^NFNLMTLXKZJ[ RXFX[ RYFY[ RKF\\F RG[\\[ RG[Gb RH[Gb R[[\\b R\\[\\b","G\\LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[Y[YUX[","CbRFR[ RSFS[ ROFVF RGGHHGIFHFGGFHFIGJIKMLONPWPYOZM[I\\G]F^F_G_H^I]H^G RNPLQKSJXIZH[ RNPMQLSKXJZI[G[FZEX RWPYQZS[X\\Z][ RWPXQYSZX[Z\\[^[_Z`X RO[V[","H\\LIKFKLLINGPFTFWGXIXLWNTOQO RTFVGWIWLVNTO RTOVPXRYTYWXYWZT[O[MZLYKWKVLUMVLW RWQXTXWWYVZT[","F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RXHLY RH[O[ RU[\\[","F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RXHLY RH[O[ RU[\\[ RN@N?M?M@NBPCTCVBW@","F^KFK[ RLFL[ RHFOF RLPSPUOVMWIXGYFZF[G[HZIYHZG RSPUQVSWXXZY[ RSPTQUSVXWZX[Z[[Z\\X RH[O[","E^MFMLLTKXJZI[H[GZGYHXIYHZ RXFX[ RYFY[ RJF\\F RU[\\[","F_KFK[ RLFRX RKFR[ RYFR[ RYFY[ RZFZ[ RHFLF RYF]F RH[N[ RV[][","F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RLPXP RH[O[ RU[\\[","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF","F^KFK[ RLFL[ RXFX[ RYFY[ RHF\\F RH[O[ RU[\\[","G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[P[","G\\XIYLYFXIVGSFQFNGLIKKJNJSKVLXNZQ[S[VZXXYV RQFOGMILKKNKSLVMXOZQ[","I\\RFR[ RSFS[ RLFKLKFZFZLYF RO[V[","H]KFRV RLFSV RZFSVQYPZN[M[LZLYMXNYMZ RIFOF RVF\\F","F_RFR[ RSFS[ ROFVF RPILJJLIOIRJULWPXUXYW[U\\R\\O[LYJUIPI RPIMJKLJOJRKUMWPX RUXXWZU[R[OZLXJUI RO[V[","H\\KFX[ RLFY[ RYFK[ RIFOF RUF[F RI[O[ RU[[[","F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RH[\\[ R[[\\b R\\[\\b","F]KFKQLSOTRTUSWQ RLFLQMSOT RWFW[ RXFX[ RHFOF RTF[F RT[[[","BcGFG[ RHFH[ RRFR[ RSFS[ R]F][ R^F^[ RDFKF ROFVF RZFaF RD[a[","BcGFG[ RHFH[ RRFR[ RSFS[ R]F][ R^F^[ RDFKF ROFVF RZFaF RD[a[ R`[ab Ra[ab","KYOBOb RPBPb ROBVB RObVb"," KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZPLRITL RMORJWO RRJR["," JZJ]Z]","MWSFRGQIQKRLSKRJ","I]NONPMPMONNPMTMVNWOXQXXYZZ[ RWOWXXZZ[[[ RWQVRPSMTLVLXMZP[S[UZWX RPSNTMVMXNZP[","H\\XFWGQINKLNKQKULXNZQ[S[VZXXYUYSXPVNSMQMNNLPKS RXFWHUIQJNLLN RQMONMPLSLUMXOZQ[ RS[UZWXXUXSWPUNSM","H\\MMM[ RNMN[ RJMUMXNYPYQXSUT RUMWNXPXQWSUT RNTUTXUYWYXXZU[J[ RUTWUXWXXWZU[","HZMMM[ RNMN[ RJMXMXRWM RJ[Q[","F]NMNQMWLZK[ RWMW[ RXMX[ RKM[M RI[H`H[[[[`Z[","H[LSXSXQWOVNTMQMNNLPKSKULXNZQ[S[VZXX RWSWPVN RQMONMPLSLUMXOZQ[","E`RMR[ RSMS[ ROMVM RJNIOHNIMJMKNMRNSPTUTWSXRZN[M\\M]N\\O[N RPTNUMVKZJ[ RPTNVLZK[I[HZGX RUTWUXVZZ[[ RUTWVYZZ[\\[]Z^X RO[V[","I[MOLMLQMONNPMTMWNXPXQWSTT RTMVNWPWQVSTT RQTTTWUXWXXWZT[P[MZLXLWMVNWMX RTTVUWWWXVZT[","G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RI[P[ RT[[[ RWNMZ","G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RI[P[ RT[[[ RWNMZ ROGOFNFNGOIQJSJUIVG","H\\MMM[ RNMN[ RJMQM RNTPTSSTRVNWMXMYNXOWN RPTSUTVVZW[ RPTRUSVUZV[X[YZZX RJ[Q[","G]NMNQMWLZK[J[IZJYKZ RWMW[ RXMX[ RKM[M RT[[[","G^LML[ RLMR[ RMMRY RXMR[ RXMX[ RYMY[ RIMMM RXM\\M RI[O[ RU[\\[","G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RMTWT RI[P[ RT[[[","H\\QMNNLPKSKULXNZQ[S[VZXXYUYSXPVNSMQM RQMONMPLSLUMXOZQ[ RS[UZWXXUXSWPUNSM","G]LML[ RMMM[ RWMW[ RXMX[ RIM[M RI[P[ RT[[[","G\\LMLb RMMMb RMPONQMSMVNXPYSYUXXVZS[Q[OZMX RSMUNWPXSXUWXUZS[ RIMMM RIbPb","H[WPVQWRXQXPVNTMQMNNLPKSKULXNZQ[S[VZXX RQMONMPLSLUMXOZQ[","I\\RMR[ RSMS[ RMMLRLMYMYRXM RO[V[","I[LMR[ RMMRY RXMR[P_NaLbKbJaK`La RJMPM RTMZM","H]RFRb RSFSb ROFSF RRPQNPMNMLNKQKWLZN[P[QZRX RNMMNLQLWMZN[ RWMXNYQYWXZW[ RSPTNUMWMYNZQZWYZW[U[TZSX RObVb","H\\LMW[ RMMX[ RXML[ RJMPM RTMZM RJ[P[ RT[Z[","G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RI[[[[`Z[","G]LMLTMVPWRWUVWT RMMMTNVPW RWMW[ RXMX[ RIMPM RTM[M RT[[[","CbHMH[ RIMI[ RRMR[ RSMS[ R\\M\\[ R]M][ REMLM ROMVM RYM`M RE[`[","CbHMH[ RIMI[ RRMR[ RSMS[ R\\M\\[ R]M][ REMLM ROMVM RYM`M RE[`[``_[","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","KYQFOGNINKOMQNSNUMVKVIUGSFQF"]
}

gat.alphabet.hershey_cyrilic = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MWRFQHRTSHRF RRHRN RRYQZR[SZRY","JZNFMM ROFMM RVFUM RWFUM","H]SBLb RYBRb RLOZO RKUYU","CaHFH[ RIFI[ REFLF RIPPPSQTRUTUWTYSZP[E[ RPPRQSRTTTWSYRZP[ R[F[[ R\\F\\[ RXF_F RX[_[","G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RI[[[[`Z[","E_JMJ[ RKMK[ RGMNM RKTOTRUSWSXRZO[G[ ROTQURWRXQZO[ RYMY[ RZMZ[ RVM]M RV[][","NVRFQM RSFQM","KYUBSDQGOKNPNTOYQ]S`UbVb RUBVBTDRGPKOPOTPYR]T`Vb","KYNBPDRGTKUPUTTYR]P`NbOb RNBOBQDSGUKVPVTUYS]Q`Ob","JZRLRX RMOWU RWOMU","E_RIR[ RIR[R","NVSWRXQWRVSWSYQ[","E_IR[R","NVRVQWRXSWRV","G][BIb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF RQFOGNHMJLOLRMWNYOZQ[ RS[UZVYWWXRXOWJVHUGSF","H\\NJPISFS[ RRGR[ RN[W[","H\\LJMKLLKKKJLHMGPFTFWGXHYJYLXNUPPRNSLUKXK[ RTFVGWHXJXLWNTPPR RKYLXNXSZVZXYYX RNXS[W[XZYXYV","H\\LJMKLLKKKJLHMGPFTFWGXIXLWNTOQO RTFVGWIWLVNTO RTOVPXRYTYWXYWZT[P[MZLYKWKVLUMVLW RWQXTXWWYVZT[","H\\THT[ RUFU[ RUFJUZU RQ[X[","H\\MFKP RKPMNPMSMVNXPYSYUXXVZS[P[MZLYKWKVLUMVLW RSMUNWPXSXUWXUZS[ RMFWF RMGRGWF","H\\WIVJWKXJXIWGUFRFOGMILKKOKULXNZQ[S[VZXXYUYTXQVOSNRNOOMQLT RRFPGNIMKLOLUMXOZQ[ RS[UZWXXUXTWQUOSN","H\\KFKL RKJLHNFPFUIWIXHYF RLHNGPGUI RYFYIXLTQSSRVR[ RXLSQRSQVQ[","H\\PFMGLILLMNPOTOWNXLXIWGTFPF RPFNGMIMLNNPO RTOVNWLWIVGTF RPOMPLQKSKWLYMZP[T[WZXYYWYSXQWPTO RPONPMQLSLWMYNZP[ RT[VZWYXWXSWQVPTO","H\\XMWPURRSQSNRLPKMKLLINGQFSFVGXIYLYRXVWXUZR[O[MZLXLWMVNWMX RQSORMPLMLLMIOGQF RSFUGWIXLXRWVVXTZR[","NVROQPRQSPRO RRVQWRXSWRV","NVROQPRQSPRO RSWRXQWRVSWSYQ[","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","I[MJNKMLLKLJMHNGPFSFVGWHXJXLWNVORQRT RSFUGVHWJWLVNTP RRYQZR[SZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","H\\RFK[ RRFY[ RRIX[ RMUVU RI[O[ RU[[[","G]LFL[ RMFM[ RIFYFYLXF RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[","H]LIKFKLLINGQFSFVGXIYKZNZSYVXXVZS[P[MZLYKWKVLUMVLW RSFUGWIXKYNYSXVWXUZS[ RPPYP","F^NFNLMTLXKZJ[ RXFX[ RYFY[ RKF\\F RG[\\[ RG[Gb RH[Gb R[[\\b R\\[\\b","F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RXHLY RH[O[ RU[\\[","F_RFR[ RSFS[ ROFVF RPILJJLIOIRJULWPXUXYW[U\\R\\O[LYJUIPI RPIMJKLJOJRKUMWPX RUXXWZU[R[OZLXJUI RO[V[","I[NFN[ ROFO[ RKFZFZLYF RK[R[","CbRFR[ RSFS[ ROFVF RGGHHGIFHFGGFHFIGJIKMLONPWPYOZM[I\\G]F^F_G_H^I]H^G RNPLQKSJXIZH[ RNPMQLSKXJZI[G[FZEX RWPYQZS[X\\Z][ RWPXQYSZX[Z\\[^[_Z`X RO[V[","F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RXHLY RH[O[ RU[\\[","F]KFKQLSOTRTUSWQ RLFLQMSOT RWFW[ RXFX[ RHFOF RTF[F RT[[[","F^KFK[ RLFL[ RHFOF RLPSPUOVMWIXGYFZF[G[HZIYHZG RSPUQVSWXXZY[ RSPTQUSVXWZX[Z[[Z\\X RH[O[","E^MFMLLTKXJZI[H[GZGYHXIYHZ RXFX[ RYFY[ RJF\\F RU[\\[","F_KFK[ RLFRX RKFR[ RYFR[ RYFY[ RZFZ[ RHFLF RYF]F RH[N[ RV[][","F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RLPXP RH[O[ RU[\\[","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF","F^KFK[ RLFL[ RXFX[ RYFY[ RHF\\F RH[O[ RU[\\[","BcGFG[ RHFH[ RRFR[ RSFS[ R]F][ R^F^[ RDFKF ROFVF RZFaF RD[a[","G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[P[","G\\XIYLYFXIVGSFQFNGLIKKJNJSKVLXNZQ[S[VZXXYV RQFOGMILKKNKSLVMXOZQ[","I\\RFR[ RSFS[ RLFKLKFZFZLYF RO[V[","CbHFH[ RIFI[ REFLF RE[L[ RVFSGQIPKOOORPVQXSZV[X[[Z]X^V_R_O^K]I[GXFVF RVFTGRIQKPOPRQVRXTZV[ RX[ZZ\\X]V^R^O]K\\IZGXF RIPOP","G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUP RUFWGXHYJYLXNWOUP RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[","BcGFG[ RHFH[ RRFR[ RSFS[ R]F][ R^F^[ RDFKF ROFVF RZFaF RD[a[ R`[ab Ra[ab","H\\KFX[ RLFY[ RYFK[ RIFOF RUF[F RI[O[ RU[[[","H]KFRV RLFSV RZFSVQYPZN[M[LZLYMXNYMZ RIFOF RVF\\F","H\\LIKFKLLINGPFTFWGXIXLWNTOQO RTFVGWIWLVNTO RTOVPXRYTYWXYWZT[O[MZLYKWKVLUMVLW RWQXTXWWYVZT[","G\\LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[Y[YUX[","KYKFY^","F`PFP[ RQFQ[ RIFHLHFTF RQPXP[Q\\R]T]W\\Y[ZX[M[ RXPZQ[R\\T\\W[YZZX[","G]WFW[ RXFX[ R[FOFLGKHJJJLKNLOOPWP ROFMGLHKJKLLNMOOP RRPPQORLYKZJZIY RPQOSMZL[J[IYIX RT[[[","H]MFM[ RNFN[ RJFQF RNPUPXQYRZTZWYYXZU[J[ RUPWQXRYTYWXYWZU[","F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RH[\\[ R[[\\b R\\[\\b","I]NONPMPMONNPMTMVNWOXQXXYZZ[ RWOWXXZZ[[[ RWQVRPSMTLVLXMZP[S[UZWX RPSNTMVMXNZP[","H\\XFWGQINKLNKQKULXNZQ[S[VZXXYUYSXPVNSMQMNNLPKS RXFWHUIQJNLLN RQMONMPLSLUMXOZQ[ RS[UZWXXUXSWPUNSM","H]LIKFKLLINGQFSFVGXIYKZNZSYVXXVZS[P[MZLYKWKVLUMVLW RSFUGWIXKYNYSXVWXUZS[ RPPYP","F]NMNQMWLZK[ RWMW[ RXMX[ RKM[M RI[H`H[[[[`Z[","G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RI[P[ RT[[[ RWNMZ ROGOFNFNGOIQJSJUIVG","H]RFRb RSFSb ROFSF RRPQNPMNMLNKQKWLZN[P[QZRX RNMMNLQLWMZN[ RWMXNYQYWXZW[ RSPTNUMWMYNZQZWYZW[U[TZSX RObVb","HZMMM[ RNMN[ RJMXMXRWM RJ[Q[","E`RMR[ RSMS[ ROMVM RJNIOHNIMJMKNMRNSPTUTWSXRZN[M\\M]N\\O[N RPTNUMVKZJ[ RPTNVLZK[I[HZGX RUTWUXVZZ[[ RUTWVYZZ[\\[]Z^X RO[V[","G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RI[P[ RT[[[ RWNMZ","G]LMLTMVPWRWUVWT RMMMTNVPW RWMW[ RXMX[ RIMPM RTM[M RT[[[","H\\MMM[ RNMN[ RJMQM RNTPTSSTRVNWMXMYNXOWN RPTSUTVVZW[ RPTRUSVUZV[X[YZZX RJ[Q[","G]NMNQMWLZK[J[IZJYKZ RWMW[ RXMX[ RKM[M RT[[[","G^LML[ RLMR[ RMMRY RXMR[ RXMX[ RYMY[ RIMMM RXM\\M RI[O[ RU[\\[","G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RMTWT RI[P[ RT[[[","H\\QMNNLPKSKULXNZQ[S[VZXXYUYSXPVNSMQM RQMONMPLSLUMXOZQ[ RS[UZWXXUXSWPUNSM","G]LML[ RMMM[ RWMW[ RXMX[ RIM[M RI[P[ RT[[[","CbHMH[ RIMI[ RRMR[ RSMS[ R\\M\\[ R]M][ REMLM ROMVM RYM`M RE[`[","G\\LMLb RMMMb RMPONQMSMVNXPYSYUXXVZS[Q[OZMX RSMUNWPXSXUWXUZS[ RIMMM RIbPb","H[WPVQWRXQXPVNTMQMNNLPKSKULXNZQ[S[VZXX RQMONMPLSLUMXOZQ[","I\\RMR[ RSMS[ RMMLRLMYMYRXM RO[V[","DaIMI[ RJMJ[ RFMMM RF[M[ RVMSNQPPSPUQXSZV[X[[Z]X^U^S]P[NXMVM RVMTNRPQSQURXTZV[ RX[ZZ\\X]U]S\\PZNXM RJTPT","H\\MMM[ RNMN[ RJMUMXNYPYQXSUT RUMWNXPXQWSUT RNTUTXUYWYXXZU[J[ RUTWUXWXXWZU[","CbHMH[ RIMI[ RRMR[ RSMS[ R\\M\\[ R]M][ REMLM ROMVM RYM`M RE[`[``_[","H\\LMW[ RMMX[ RXML[ RJMPM RTMZM RJ[P[ RT[Z[","I[LMR[ RMMRY RXMR[P_NaLbKbJaK`La RJMPM RTMZM","I[MOLMLQMONNPMTMWNXPXQWSTT RTMVNWPWQVSTT RQTTTWUXWXXWZT[P[MZLXLWMVNWMX RTTVUWWWXVZT[","H[LSXSXQWOVNTMQMNNLPKSKULXNZQ[S[VZXX RWSWPVN RQMONMPLSLUMXOZQ[","H]QMQ[ RRMR[ RLMKRKMUM RRTVTYUZWZXYZV[N[ RVTXUYWYXXZV[","G\\VMV[ RWMW[ RZMOMLNKPKQLSOTVT ROMMNLPLQMSOT RTTQUPVNZM[ RTTRUQVOZN[L[KZJX RS[Z[","J[OMO[ RPMP[ RLMSM RPTTTWUXWXXWZT[L[ RTTVUWWWXVZT[","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O"]
}

gat.alphabet.hershey_futural = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MWRFRT RRYQZR[SZRY","JZNFNM RVFVM","H]SBLb RYBRb RLOZO RKUYU","H\\PBP_ RTBT_ RYIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_\\O\\N[MZMYNXPVUTXRZP[L[JZIYHWHUISJRQNRMSKSIRGPFNGMIMKNNPQUXWZY[[[\\Z\\Y","MWRHQGRFSGSIRKQL","KYVBTDRGPKOPOTPYR]T`Vb","KYNBPDRGTKUPUTTYR]P`Nb","JZRLRX RMOWU RWOMU","E_RIR[ RIR[R","NVSWRXQWRVSWSYQ[","E_IR[R","NVRVQWRXSWRV","G][BIb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF","H\\NJPISFS[","H\\LKLJMHNGPFTFVGWHXJXLWNUQK[Y[","H\\MFXFRNUNWOXPYSYUXXVZS[P[MZLYKW","H\\UFKTZT RUFU[","H\\WFMFLOMNPMSMVNXPYSYUXXVZS[P[MZLYKW","H\\XIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQLT","H\\YFO[ RKFYF","H\\PFMGLILKMMONSOVPXRYTYWXYWZT[P[MZLYKWKTLRNPQOUNWMXKXIWGTFPF","H\\XMWPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLX","NVROQPRQSPRO RRVQWRXSWRV","NVROQPRQSPRO RSWRXQWRVSWSYQ[","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","I[LKLJMHNGPFTFVGWHXJXLWNVORQRT RRYQZR[SZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","I[RFJ[ RRFZ[ RMTWT","G\\KFK[ RKFTFWGXHYJYLXNWOTP RKPTPWQXRYTYWXYWZT[K[","H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZV","G\\KFK[ RKFRFUGWIXKYNYSXVWXUZR[K[","H[LFL[ RLFYF RLPTP RL[Y[","HZLFL[ RLFYF RLPTP","H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZVZS RUSZS","G]KFK[ RYFY[ RKPYP","NVRFR[","JZVFVVUYTZR[P[NZMYLVLT","G\\KFK[ RYFKT RPOY[","HYLFL[ RL[X[","F^JFJ[ RJFR[ RZFR[ RZFZ[","G]KFK[ RKFY[ RYFY[","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF","G\\KFK[ RKFTFWGXHYJYMXOWPTQKQ","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RSWY]","G\\KFK[ RKFTFWGXHYJYLXNWOTPKP RRPY[","H\\YIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX","JZRFR[ RKFYF","G]KFKULXNZQ[S[VZXXYUYF","I[JFR[ RZFR[","F^HFM[ RRFM[ RRFW[ R\\FW[","H\\KFY[ RYFK[","I[JFRPR[ RZFRP","H\\YFK[ RKFYF RK[Y[","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZRDJR RRDZR","I[Ib[b","NVSKQMQORPSORNQO","I\\XMX[ RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","H[LFL[ RLPNNPMSMUNWPXSXUWXUZS[P[NZLX","I[XPVNTMQMONMPLSLUMXOZQ[T[VZXX","I\\XFX[ RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","I[LSXSXQWOVNTMQMONMPLSLUMXOZQ[T[VZXX","MYWFUFSGRJR[ ROMVM","I\\XMX]W`VaTbQbOa RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","I\\MFM[ RMQPNRMUMWNXQX[","NVQFRGSFREQF RRMR[","MWRFSGTFSERF RSMS^RaPbNb","IZMFM[ RWMMW RQSX[","NVRFR[","CaGMG[ RGQJNLMOMQNRQR[ RRQUNWMZM\\N]Q][","I\\MMM[ RMQPNRMUMWNXQX[","I\\QMONMPLSLUMXOZQ[T[VZXXYUYSXPVNTMQM","H[LMLb RLPNNPMSMUNWPXSXUWXUZS[P[NZLX","I\\XMXb RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","KXOMO[ ROSPPRNTMWM","J[XPWNTMQMNNMPNRPSUTWUXWXXWZT[Q[NZMX","MYRFRWSZU[W[ ROMVM","I\\MMMWNZP[S[UZXW RXMX[","JZLMR[ RXMR[","G]JMN[ RRMN[ RRMV[ RZMV[","J[MMX[ RXMM[","JZLMR[ RXMR[P_NaLbKb","J[XMM[ RMMXM RM[X[","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","JZJFJ[K[KFLFL[M[MFNFN[O[OFPFP[Q[QFRFR[S[SFTFT[U[UFVFV[W[WFXFX[Y[YFZFZ["]
}

gat.alphabet.hershey_futuram = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MXRFRTST RRFSFST RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM","H]SBLb RYBRb RLOZO RKUYU","I\\RBR_S_ RRBSBS_ RWIYIWGTFQFNGLILKMMNNVRWSXUXWWYTZQZOYNX RWIVHTGQGNHMIMKNMVQXSYUYWXYWZT[Q[NZLXNX RXXUZ","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","F_[NZO[P\\O\\N[MZMYNXPVUTXRZP[M[JZIXIUJSPORMSKSIRGPFNGMIMKNNPQUXWZZ[[[\\Z\\Y RM[KZJXJUKSMQ RMKNMVXXZZ[","NWSFRGRM RSGRM RSFTGRM","KYVBTDRGPKOPOTPYR]T`Vb RTDRHQKPPPTQYR\\T`","KYNBPDRGTKUPUTTYR]P`Nb RPDRHSKTPTTSYR\\P`","JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO","F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R","MXTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^","E_IR[R","MXRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","G^[BIbJb R[B\\BJb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF ROGMJLOLRMWOZ RNYQZSZVY RUZWWXRXOWJUG RVHSGQGNH","H\\NJPISFS[ RNJNKPJRHR[S[","H\\LKLJMHNGPFTFVGWHXJXLWNUQL[ RLKMKMJNHPGTGVHWJWLVNTQK[ RLZYZY[ RK[Y[","H\\MFXFQO RMFMGWG RWFPO RQNSNVOXQYTYUXXVZS[P[MZLYKWLW RPOSOVPXS RTOWQXTXUWXTZ RXVVYSZPZMYLW ROZLX","H\\UIU[V[ RVFV[ RVFKVZV RUILV RLUZUZV","H\\MFLO RNGMN RMFWFWG RNGWG RMNPMSMVNXPYSYUXXVZS[P[MZLYKWLW RLOMOONSNVOXR RTNWPXSXUWXTZ RXVVYSZPZMYLW ROZLX","H\\VGWIXIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQ RWHTGRGOH RPGNJMOMTNXQZ RMVOYRZSZVYXV RTZWXXUXTWQTO RXSVPSOROOPMS RQONQMT","H\\KFYFO[ RKFKGXG RXFN[O[","H\\PFMGLILKMMNNPOTPVQWRXTXWWYTZPZMYLWLTMRNQPPTOVNWMXKXIWGTFPF RNGMIMKNMPNTOVPXRYTYWXYWZT[P[MZLYKWKTLRNPPOTNVMWKWIVG RWHTGPGMH RLXOZ RUZXX","H\\WPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLXMXNZ RWMVPSR RWNUQRRQRNQLN RPRMPLMLLMIPG RLKNHQGRGUHWK RSGVIWMWRVWTZ RUYRZPZMY","MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^","F^ZIJRZ[","F_JM[M[N RJMJN[N RJU[U[V RJUJV[V","F^JIZRJ[","I\\LKLJMHNGQFTFWGXHYJYLXNWOUPRQ RLKMKMJNHQGTGWHXJXLWNUORP RMIPG RUGXI RXMTP RRPRTSTSP RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","H\\RFJ[ RRIK[J[ RRIY[Z[ RRFZ[ RMUWU RLVXV","H\\LFL[ RMGMZ RLFTFWGXHYJYMXOWPTQ RMGTGWHXJXMWOTP RMPTPWQXRYTYWXYWZT[L[ RMQTQWRXTXWWYTZMZ","H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZV RZKYKXIWHUGQGOHMKLNLSMVOYQZUZWYXXYVZV","H]LFL[ RMGMZ RLFSFVGXIYKZNZSYVXXVZS[L[ RMGSGVHWIXKYNYSXVWXVYSZMZ","I\\MFM[ RNGNZ RMFYF RNGYGYF RNPTPTQ RNQTQ RNZYZY[ RM[Y[","I[MFM[ RNGN[M[ RMFYF RNGYGYF RNPTPTQ RNQTQ","H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZVZRUR RZKYKXIWHUGQGOHNIMKLNLSMVNXOYQZUZWYXXYVYSUSUR","G]KFK[ RKFLFL[K[ RYFXFX[Y[ RYFY[ RLPXP RLQXQ","NWRFR[S[ RRFSFS[","J[VFVVUYSZQZOYNVMV RVFWFWVVYUZS[Q[OZNYMV","H]LFL[M[ RLFMFM[ RZFYFMR RZFMS RPOY[Z[ RQOZ[","IZMFM[ RMFNFNZ RNZYZY[ RM[Y[","F^JFJ[ RKKK[J[ RKKR[ RJFRX RZFRX RYKR[ RYKY[Z[ RZFZ[","G]KFK[ RLIL[K[ RLIY[ RKFXX RXFXX RXFYFY[","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RQGNHLKKNKSLVNYQZSZVYXVYSYNXKVHSGQG","H\\LFL[ RMGM[L[ RLFUFWGXHYJYMXOWPUQMQ RMGUGWHXJXMWOUPMP","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RQGNHLKKNKSLVNYQZSZVYXVYSYNXKVHSGQG RSXX]Y] RSXTXY]","H\\LFL[ RMGM[L[ RLFTFWGXHYJYMXOWPTQMQ RMGTGWHXJXMWOTPMP RRQX[Y[ RSQY[","H\\YIWGTFPFMGKIKKLMMNOOTQVRWSXUXXWYTZPZNYMXKX RYIWIVHTGPGMHLILKMMONTPVQXSYUYXWZT[P[MZKX","J[RGR[ RSGS[R[ RLFYFYG RLFLGYG","G]KFKULXNZQ[S[VZXXYUYF RKFLFLUMXNYQZSZVYWXXUXFYF","H\\JFR[ RJFKFRX RZFYFRX RZFR[","E_GFM[ RGFHFMX RRFMX RRIM[ RRIW[ RRFWX R]F\\FWX R]FW[","H\\KFX[Y[ RKFLFY[ RYFXFK[ RYFL[K[","I\\KFRPR[S[ RKFLFSP RZFYFRP RZFSPS[","H\\XFK[ RYFL[ RKFYF RKFKGXG RLZYZY[ RK[Y[","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","G]JTROZT RJTRPZT","H\\Hb\\b","LXPFUL RPFOGUL","H\\WMW[X[ RWMXMX[ RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX","H\\LFL[M[ RLFMFM[ RMPONQMTMVNXPYSYUXXVZT[Q[OZMX RMPQNTNVOWPXSXUWXVYTZQZMX","I[XPVNTMQMONMPLSLUMXOZQ[T[VZXX RXPWQVOTNQNOONPMSMUNXOYQZTZVYWWXX","H\\WFW[X[ RWFXFX[ RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX","I[MTXTXQWOVNTMQMONMPLSLUMXOZQ[T[VZXX RMSWSWQVOTNQNOONPMSMUNXOYQZTZVYWWXX","LZWFUFSGRJR[S[ RWFWGUGSH RTGSJS[ ROMVMVN ROMONVN","H\\XMWMW\\V_U`SaQaO`N_L_ RXMX\\W_UaSbPbNaL_ RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX","H\\LFL[M[ RLFMFM[ RMQPNRMUMWNXQX[ RMQPORNTNVOWQW[X[","NWRFQGQHRISITHTGSFRF RRGRHSHSGRG RRMR[S[ RRMSMS[","NWRFQGQHRISITHTGSFRF RRGRHSHSGRG RRMRbSb RRMSMSb","H[LFL[M[ RLFMFM[ RXMWMMW RXMMX RPTV[X[ RQSX[","NWRFR[S[ RRFSFS[","CbGMG[H[ RGMHMH[ RHQKNMMPMRNSQS[ RHQKOMNONQORQR[S[ RSQVNXM[M]N^Q^[ RSQVOXNZN\\O]Q][^[","H\\LML[M[ RLMMMM[ RMQPNRMUMWNXQX[ RMQPORNTNVOWQW[X[","I\\QMONMPLSLUMXOZQ[T[VZXXYUYSXPVNTMQM RQNOONPMSMUNXOYQZTZVYWXXUXSWPVOTNQN","H\\LMLbMb RLMMMMb RMPONQMTMVNXPYSYUXXVZT[Q[OZMX RMPQNTNVOWPXSXUWXVYTZQZMX","H\\WMWbXb RWMXMXb RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX","KYOMO[P[ ROMPMP[ RPSQPSNUMXM RPSQQSOUNXNXM","J[XPWNTMQMNNMPNRPSUUWV RVUWWWXVZ RWYTZQZNY ROZNXMX RXPWPVN RWOTNQNNO RONNPOR RNQPRUTWUXWXXWZT[Q[NZMX","MXRFR[S[ RRFSFS[ ROMVMVN ROMONVN","H\\LMLWMZO[R[TZWW RLMMMMWNYPZRZTYWW RWMW[X[ RWMXMX[","JZLMR[ RLMMMRY RXMWMRY RXMR[","F^IMN[ RIMJMNX RRMNX RRPN[ RRPV[ RRMVX R[MZMVX R[MV[","I[LMW[X[ RLMMMX[ RXMWML[ RXMM[L[","JZLMR[ RLMMMRY RXMWMRYNb RXMR[ObNb","I[VNL[ RXMNZ RLMXM RLMLNVN RNZXZX[ RL[X[","KYUBNRUb","NVRBRb","KYOBVROb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","JZJFJ[K[KFLFL[M[MFNFN[O[OFPFP[Q[QFRFR[S[SFTFT[U[UFVFV[W[WFXFX[Y[YFZFZ["]
}

gat.alphabet.hershey_gothgbt = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","LXRFQGOHQIRT RRISHRGQHRIRT RRFSGUHSIRT RRXPZR[TZRX RRYQZSZRY","I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM","H]SFLb RYFRb RLQZQ RKWYW","H\\PBP_ RTBT_ RTFVGWIWKYJXHWGTFPFMGKIKLLNOPURWSXUXXWZ RXJWH RLLMNOOUQWRXT RMYLW RMGLILKMMONUPXRYTYWXYWZT[P[MZLYKWMVMXNZP[","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_YNZO[O\\N RXOYP[P RXPYQZQ[P\\N RYNST RRUL[HVNP ROOSKOFJLPRTXVZX[Z[[Z\\X RLZIV RRKOG RKLPQTWVYXZ[Z RMZIU RRLNG RKKQQUWVXXY[Y\\X","LXRLRJPHRFSHSJRLPM RRGQHRIRG","KYUBSDQGOKNPNTOYQ]S`Ub RQHPKOOOUPYQ\\ RSDRFQIPOPUQ[R^S`","KYOBQDSGUKVPVTUYS]Q`Ob RSHTKUOUUTYS\\ RQDRFSITOTUS[R^Q`","JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO","F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R","LXR^R\\PZRXSZS\\R^P_ RRYQZR[RY","F_JQ[Q[R RJQJR[R","LXRXPZR[TZRX RRYQZSZRY","G^[BIbJb R[B\\BJb","H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJYLYNZO[QZVYXY","H\\OHPIQKQXOY RQIPHQGRIRYTZ ROHRFSHSXUYVY ROYPYRZS[TZVY","H\\LHNHPGQFSGVHXH RPHRG RLHNIPIRHSG RVHVP RWIWO RXHXPQPNQLSKVK[ RK[OYSXVXZY RNZQYVYYZ RK[PZUZX[ZY","H\\LHMHOGPFRGVHXH ROHQG RLHNIPIRG RVHVO RWIWN RXHXOVOSPQQ RQPSQVRXRXY RWSWX RVRVY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","H\\UFKPKUTU RVUZU[V[TZU RLPLT RMNMU RTGTXRY RUJVHUGUYWZ RUFWHVJVXXYYY RRYSYUZV[WZYY","H\\LFLO RLFXF RMGVG RLHUHWGXF RVLUMSNOOLO RSNTNVOVY RUMWNWX RVLWMYNZNXOXY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHRGTFUGWHXH RSGUH RRGTIVIXH RNPOPSOUNVM RSOTOVPVY RUNWPWX RVMWNYOZOXPXY RJYLYNZO[QZVYXY","H\\KHMFPGUGZF RLGOHTHWG RKHOIRIVHZF RZFYHWKSOQRPUPXQ[ RRQQTQWRZ RUMSPRSRVSYQ[","H\\LILO RMJMN RNINO RLINISHUGVF RSHTHVIVO RUGWHWN RVFWGYHZHXIXO RLONOVRXR RXOVONRLR RLRLXJY RMSMXPZ RNRNXPYQZ RVRVY RWSWX RXRXY RJYLYNZO[QZVYXY","H\\LHLQJR RMIMROS RNHNQPRQR RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJRKRMSNTOSQRUQVQ RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","LXRMPORPTORM RRNQOSORN RRXPZR[TZRX RRYQZSZRY","LXRMPORPTORM RRNQOSORN RR^R\\PZRXSZS\\R^P_ RRYQZR[RY","F^ZIJRZ[","F_JM[M[N RJMJN[N RJU[U[V RJUJV[V","F^JIZRJ[","I[LJMHNGQFSFVGWHXJXLWNUPSQ RMJNH RVHWIWMVN RLJNKNIOGQF RSFUGVIVMUOSQ RRQRTSQQQRT RRXPZR[TZRX RRYQZSZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","G]LINGPFRFSGZW[X]X RQGRHYXZZ[YYX RNGPGQHXXYZZ[[[]X RLMMLOKPKQL RPLPM RMLOLPN RG[IYKXNXPY RJYNYOZ RG[JZMZN[PY RRJLX RNSVS","F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RRIQJPLPU RQKQS RRIRRQTPU RRIXFZG[I[KYMUO RXGZIZK RVGXHYIYLWN RWNZP[R[X RYPZRZW RWNXOYQYX RJ[MYPXTXWY RLZOYTYVZ RJ[NZSZU[WYYX[X RUOUX RURYR RUUYU","E]NGLHJJILHOHSIVJXMZP[S[VZXYZW[U RJKINISKWNYQZTZWY RNGLIKKJNJRKUNXQYTYWXYW[U RPJPV RQJQT RRIRSQUPV RPJRIUFWGYGZF RTGVHXH RSHUIWIYHZF RWIWX","G^IFWFYGZIZX RKGWGYIYW RIFJGLHWHXIXX ROKNLMNMOKOJPJRKQMQMV RNMNT RKPNP ROKOSNUMV RI[LYOXSXVY RKZNYSYUZ RI[MZRZT[VYXXZX RRHRX RRMTNVNXM RRSTRVRXS","G]IHKFMFOGQF RLGNG RIHKGMHOHQF RNKMLLNLOJOIPIRJQLQLW RMMMU RJPMP RNKNTMVLW RQMRJSHTGVFXF[G RTHVGXGZH RRJSIUHWHYI[G RQURRSPTOVOXP RTPVPWQ RRRSQUQVRXP RK[NYRXWX[Y RMZPYWYZZ RK[OZVZY[[Y RQMQX","F]JHLFOFQGSF RMGPG RJHLGNHQHSF RPKOLNNNOLOKPKRLQNQNV ROMOT RLPOP RPKPSOUNV RSJSYRZQZMXKXIYG[ RTJTX RTPXP RPZOZMYJY RUIUOXO RXQUQUWTYP[N[LZJZG[ RSJUIXFZG\\G]F RWGYH[H RVHXIZI\\H]F RXIXW","E^NGLHJJILHOHRIUJWLYNZQ[U[XZZX[V[SZQYPWOUO RJKINISJV RNGLIKKJNJSKVLXNZ RYXZWZSYQ RU[WZXYYWYSXQWPUO RPJPW RQJQU RRIRTQVPW RPJRIUFWGYGZF RTGVHXH RSHUIWIYHZF RYHUOU[ RUSYS RUVYV","F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RJ[MYPXSXUY RLZOYRYTZ RJ[NZQZS[UY RRIQJPLPU RQKQS RRIRRQTPU RRITGVFXFZG RWGXGYH RTGVGXIZG RUOWNYLZM[P[TZXX[ RXMYNZPZUYX RWNXNYPYUX[ RUOUY RURYR RUUYU","I\\LHNFQFTGVF ROGSG RLHNGQHTHVF RSKRLQNQOOONPNROQQQQV RRMRT ROPRP RSKSSRUQV RYHWJVMVXUZSZOXMXKYI[ RWKWW RRZQZOYLY RYHXJXVWXUZS[P[NZKZI[","H\\LHNFQFTGVF ROGSG RLHNGQHTHVF RSKRLQNQOOONPNROQQQQV RRMRT ROPRP RSKSSRUQV RYHWJVMVXUZ RWKWW RYHXJXVWXUZR[O[LZJXJVKULUMVLWKW RJVMV","F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RJ[MYPXSXUY RLZNYRYTZ RJ[NZQZS[UY RRIQJPLPU RQKQS RRIRRQTPU RRITGVFXFZG RWGXGYH RTGVGXIZG RUOXLYM[N RWMYN[N R[NYQWSUU RWSYTZX[Z\\Z RYVZZ RWSXTYZZ[[[\\Z RUOUY","G]IHKFNFPGRF RLGOG RIHKGMHPHRF RNKMLLNLOJOIPIRJQLQLW RMMMU RJPMP RNKNTMVLW RK[NYRXWX[Y RMZPYWYZZ RK[OZVZY[[Y RSIRJQLQU RRKRS RSISRRTQU RSIUGWFYF[G RXGYGZH RUGWGYI[G RWGWX","D`LJKKJMJOHOGPGRHQJQJU RKLKS RHPKP RLJLRKTJU RE[GYIXKXMYNYOX RHYKYMZ RE[GZJZL[M[NZOX RLJPFTJTWUYVY RPGSJSXRYSZTYSX RPPSP RNHOHRKROOO ROQRQRXQYS[VYWX RTJXF\\J\\W]Y^Y RXG[J[X]Z RXP[P RVHWHZKZOWO RWQZQZY\\[^Y ROHOX RWHWX","E^GIIGKFMFOGQJVUXXYY RMGOIPKVWYZ RIGKGMHOKTVVYWZY[ RVHXIZI\\H]F RWGYH[H RVHXFZG\\G]F RKOIOHPHRIQKQ RIPKP RG[IYKXNXPY RJYMYOZ RG[JZMZN[PY RKGKX RYIY[ RRLSMUNWNYM RKTMSQSST","E_NFLGJIIKHNHRIUJWLYNZQ[S[VZXYZW[U\\R\\N[KZIXGVFUGRIOJ RJJIMISJV RNFLHKJJMJSKVLXNZ RZV[S[MYIXH RVZXXYVZSZMYKWHUG ROJOW RPJPU RQJQTPVOW RUGUZ RUMWNXNZM RUSWRXRZS","H^KFLGMIMOKOJPJRKQMQMYJ[MZMbO` RMHNJN` RKPNP RKFMGNHOJO` ROKRIVFZJZX RVGYJYX RTHUHXKXY RRXUXXY RSYUYWZ RRZTZV[XYZX RRIR_ RRMTNVNXM RRSTRVRXS","E_NFLGJIIKHNHRIUJWLYNZP[T[VZXYZW[U\\R\\N[KZIXGVFUGRIOJ RJJIMISJV RNFLHKJJMJSKVLXNZ RZV[S[MYIXH RVZXXYVZSZMYKWHUG ROJOW RPJPU RQJQTPVOW RUGUZ RUMWNXNZM RUSWRXRZS RP[QZRZT[X`Za[a RT\\V_XaYa RRZS[VaXbZb[a","F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RJ[MYPXRXUY RLZNYRYTZ RJ[NZQZS[UY RRIQJPLPU RQKQS RRIRRQTPU RRIUGWFYGZIZLYNXOTQRR RWGXGYIYMXN RUGWHXJXMWOTQ RTQVRWSZX[Y\\Y RWTYX[Z RTQVSXYZ[\\Y","G^UITHRGOF RVHTG RWGSFOFLGKHJJKLLMONWNYOZPZRYU RKKLLOMXMZN[O[QZS RKHKJLKOLYL[M\\O\\QYUU[ RIOJPLQUQVRVSUU RJQLRTRUS RIOIPJRLSSSUTUU RI[LYPXSXVY RKZNYRYUZ RI[MZRZU[ RWGUISL RRNPQ ROSMUKVJVJUKV","E]JJILHOHSIVKYMZP[S[VZXYZW[U RISJVLXNYQZTZWY RJJIMIQJTLWNXQYTYWXYW[U RHIIGKFOFUGYG[F RPGTHXH RHIIHKGNGTIWIYH[F RSIRJPKPV RQKQT RRJRSQUPV RWIWX","F^HHJFLFOGQF RKGNG RHHJGMHOHQF RKJJLIOISJVKXMZP[S[VZXYZ[\\Y RJSKVNYQZTZ RKJJNJQKTLVNXQYUYXX RUIQJPLPV RQKQT RRJRSQUPV RUIWHYFZG\\HZIZW[Y\\Y RYIZHYGXHYIYX[Z RWHXIXX RUIUY RUNXN RURXR","G^JFKGLILOJOIPIRJQLQLXJY RLHMJMX RJPMP RNYQYSZ RJFLGMHNJNXRXUY RJYMYPZR[UYXXZX RRJUIWHYFZG\\HZIZX RYIZHYGXHYIYW RWHXIXX RRJRX RRMTNVNXM RRSTRVRXS","E`HFIGJIJOHOGPGRHQJQJXHY RJHKJKX RHPKP RLYNYPZ RHFJGKHLJLXOXQY RHYKYNZO[QYTXVYW[YY\\X ROHRFTHTXWXYY RRGSHSX ROHQHRIRXQY RWYXZ RWHZF\\H\\X RZG[H[X RWHYHZIZXYY ROHOX RWHWX RONRN RORRR RWNZN RWRZR","G]HIJGLFNFOGWYXZZZ RMGNHVYWZ RJGLGMHUZV[X[ZZ\\X RWFYG[G\\F RWGXHZH RVHWIYI[H\\F RH[IYKXMXNY RJYLYMZ RH[IZKZM[ RWFSO RQRM[ RLPPP RSPXP","G^JFKGLILOJOIPIRJQLQLXJY RLHMJMX RJPMP RNYQYSZ RJFLGMHNJNXRXUY RJYMYPZR[UYXX RRJUIWHYFZG\\HZIZ^Y`WbUaQ`L` RYIZHYGXHYIYY RWHXIXXZ[ RXaV`S` RY`V_P_L` RRJRX RRMTNVNXM RRSTRVRXS","H\\XGWIROOSMWJ[ RVKNV RZFWJUNRRMXLZ RJHLFOGUGZF RKGOHSHWG RJHNIRIVHXG RLZNYRXVXZY RMZQYUYYZ RJ[OZUZX[ZY RMPQP RTPXP","KYOBOb RPBPb ROBVB RObVb"," KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZPLRITL RMORJWO RRJR["," JZJ]Z]","LXTFRGQIQKRMTKRIRG RRJRLSKRJ","J[PRNTMVMXNZP[RYUX RMVNXOYQZ RNTNVOXQYRY RNPPPSOUNVMXOWPWXXYYY RONNOQO RTOWOVNVYWZ RMOOMPNROUPUYW[YY RMORT","I[LHMJMXKY RNJMHNGNXQZ RLHOFOXQYRZ RKYMYOZP[RZUYWY ROPROTNUMVNXOYOWPWY RTNVOVX RROSOUPUY","JXNONXLYMYOZP[ ROOOYQZ RPOPXRYSYQZP[ RNORNTMUNWOXO RSNTOVO RPORNTPVPXO","IZRMPNMOMXKY RNONXQZ RRMOOOXQYRZ RKYMYOZP[RZUYWY RMHPFQIWOWY RPINHOGPIVOVX RMHUPUY","JXNONXLYMYOZP[ ROOOYQZ RPOPXRYSYQZP[ RNORNTMWQURPU RSNVQ RPORNUR","JWNHNXLYMYOZP[ ROHOYQZ RPHPXRYSYQZP[ RNHQGSFTGVHWH RRGSHUH RPHQGSIUIWH RKMNM RPMTM","I[MOMXKYLYNZO[PZRYUX RNPNYPZ ROOOXQYRY RMOOORNTMUNWOYOWPW\\V_TaRbQaO`M` RSNVPV\\ RSaQ`P` RRNSOUPUZV]V_ RTaS`Q_O_M`","I[LHMJMXKYLYNZO[ RNJMHNGNYPZ RLHOFOXQYO[ ROPROTNUMVNXOYOWPWYU[T] RTNVOVYU[ RROSOUPUYT]T`UbVbT`","MWRFPHRITHRF RRGQHSHRG RRMQNOOQPQYS[UY RRPSORNQORPRYSZ RRMSNUOSPSXTYUY","MWRFPHRITHRF RRGQHSHRG RRMQNOOQPQYS[T] RRPSORNQORPRYS[ RRMSNUOSPSYT]T`RbPbPaRb","IZLHMJMXKYLYNZO[ RNJMHNGNYPZ RLHOFOXQYO[ ROPRNTMVPSROU RSNUP RRNTQ RSRTSVXWYXY RSSTTUYVZ RRSSTTYV[XY","MWPHQJQXOYPYRZS[ RRJQHRGRYTZ RPHSFSXUYVYTZS[","E_GOHOIPIXGYHYJZK[ RINJOJYLZ RGOIMKOKXMYK[ RKPNOPNQMSOSXUYS[ RPNRORYTZ RNOOOQPQXPYRZS[ RSPVOXNYMZN\\O]O[P[X\\Y]Y RXNZOZY[Z RVOWOYPYY[[]Y","I[KOLOMPMXKYLYNZO[ RMNNONYPZ RKOMMOOOXQYO[ ROPROTNUMVNXOYOWPWXXYYY RTNVOVYWZ RROSOUPUYW[YY","I[MOMXKY RNPNXQZ ROOOXQYRZ RKYMYOZP[RZUYWY RMOOORNTMUNWOYOWPWY RSNVPVX RRNSOUPUY","I[LMMOMXKYMYMb RMNNONaO`N^ RNYOYQZ RLMNNOOOXQYRZ ROZP[RZUYWY ROZO^P`Mb ROPROTNUMVNXOYOWPWY RTNVOVX RROSOUPUY","I[MOMXKY RNPNYPZ ROOOXQYRY RKYLYNZO[PZRYUX RMOOORNTMUNWOYOWPWb RSNVPVaU`V^ RRNSOUPU^T`Wb","JXLOMONPNXLYMYOZP[ RMNOOOYQZ RLONMPOPXRYSYQZP[ RPOTMUNWOXO RSNTOVO RRNTPVPXO","JZMOMSOTUTWUWY RNONS RVUVY RPNOOOSQT RSTUUUYTZ RMOPNRMTNVNWM RQNSN RPNROTOVN RWYTZR[PZNZL[ RSZQZ RTZRYOYL[ RWMVOTROWL[","MWPHQJQXOYPYRZS[ RRJQHRGRYTZ RPHSFSXUYVYTZS[ RNMQM RSMVM","I[KOLOMPMXKY RLNNONYPZ RKOMMOOOXQYRY RKYLYNZO[PZRYUX RUMVNXOYOWPWXXYYY RTNVOVYWZ RUMSOUPUYW[YY","I[LMMOMXP[RYUXWX RMNNONXQZ RLMNNOOOWPXRY RUMVNXOYOWPWX RTNVOVW RUMSOUPUX","E_HMIOIXL[NYQX RINJOJXMZ RHMJNKOKWLXNY RQMOOQPQXT[VYYX[X RPNRORXUZ RQMRNTOSPSWTXVY RYMZN\\O]O[P[X RXNZOZW RYMWOYPYX","H[KOLONPOQSYTZV[XY RMNOOTYVZ RKOMMONPOTWUXWYXY RRSUMVNXNYM RUNVOWO RTOVPXOYM RQUN[MZKZJ[ RNZMYLY ROYMXKYJ[ RMTPT RSTVT","I[KOLOMPMXKY RLNNONYPZ RKOMMOOOXQYRY RKYLYNZO[PZRYUX RUMVNXOYOWPW\\V_TaRbQaO`M` RTNVOV\\ RSaQ`P` RUMSOUPUZV]V_ RTaS`Q_O_M`","I[XML[ RLONPQPTOXM RMNOOSO RLONMPNTNXM RL[PYSXVXXY RQYUYWZ RL[PZTZV[XY RNTVT","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","KYQFOGNINKOMQNSNUMVKVIUGSFQF RQFNIOMSNVKUGQF RSFOGNKQNUMVISF"]
}

gat.alphabet.hershey_gothgrt = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","LXRFQGOHQIRT RRISHRGQHRIRT RRFSGUHSIRT RRXPZR[TZRX RRYQZSZRY","I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM","H]SFLb RYFRb RLQZQ RKWYW","H\\PBP_ RTBT_ RTFVGWIWKYJXHWGTFPFMGKIKLLNOPURWSXUXXWZ RXJWH RLLMNOOUQWRXT RMYLW RMGLILKMMONUPXRYTYWXYWZT[P[MZLYKWMVMXNZP[","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_YNZO[O\\N RXOYP[P RXPYQZQ[P\\N RYNST RRUL[HVNP ROOSKOFJLPRTXVZX[Z[[Z\\X RLZIV RRKOG RKLPQTWVYXZ[Z RMZIU RRLNG RKKQQUWVXXY[Y\\X","LXRLRJPHRFSHSJRLPM RRGQHRIRG","KYUBSDQGOKNPNTOYQ]S`Ub RQHPKOOOUPYQ\\ RSDRFQIPOPUQ[R^S`","KYOBQDSGUKVPVTUYS]Q`Ob RSHTKUOUUTYS\\ RQDRFSITOTUS[R^Q`","JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO","F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R","LXR^R\\PZRXSZS\\R^P_ RRYQZR[RY","F_JQ[Q[R RJQJR[R","LXRXPZR[TZRX RRYQZSZRY","G^[BIbJb R[B\\BJb","H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJYLYNZO[QZVYXY","H\\OHPIQKQXOY RQIPHQGRIRYTZ ROHRFSHSXUYVY ROYPYRZS[TZVY","H\\LHNHPGQFSGVHXH RPHRG RLHNIPIRHSG RVHVP RWIWO RXHXPQPNQLSKVK[ RK[OYSXVXZY RNZQYVYYZ RK[PZUZX[ZY","H\\LHMHOGPFRGVHXH ROHQG RLHNIPIRG RVHVO RWIWN RXHXOVOSPQQ RQPSQVRXRXY RWSWX RVRVY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","H\\UFKPKUTU RVUZU[V[TZU RLPLT RMNMU RTGTXRY RUJVHUGUYWZ RUFWHVJVXXYYY RRYSYUZV[WZYY","H\\LFLO RLFXF RMGVG RLHUHWGXF RVLUMSNOOLO RSNTNVOVY RUMWNWX RVLWMYNZNXOXY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHRGTFUGWHXH RSGUH RRGTIVIXH RNPOPSOUNVM RSOTOVPVY RUNWPWX RVMWNYOZOXPXY RJYLYNZO[QZVYXY","H\\KHMFPGUGZF RLGOHTHWG RKHOIRIVHZF RZFYHWKSOQRPUPXQ[ RRQQTQWRZ RUMSPRSRVSYQ[","H\\LILO RMJMN RNINO RLINISHUGVF RSHTHVIVO RUGWHWN RVFWGYHZHXIXO RLONOVRXR RXOVONRLR RLRLXJY RMSMXPZ RNRNXPYQZ RVRVY RWSWX RXRXY RJYLYNZO[QZVYXY","H\\LHLQJR RMIMROS RNHNQPRQR RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJRKRMSNTOSQRUQVQ RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","LXRMPORPTORM RRNQOSORN RRXPZR[TZRX RRYQZSZRY","LXRMPORPTORM RRNQOSORN RR^R\\PZRXSZS\\R^P_ RRYQZR[RY","F^ZIJRZ[","F_JM[M[N RJMJN[N RJU[U[V RJUJV[V","F^JIZRJ[","I[LJMHNGQFSFVGWHXJXLWNUPSQ RMJNH RVHWIWMVN RLJNKNIOGQF RSFUGVIVMUOSQ RRQRTSQQQRT RRXPZR[TZRX RRYQZSZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","F^IHJIIJHIIGKFMFOGPHQKQOPRNTLUIV ROHPKPPOR RMFNGOJOPNSLU RLVOY RKVOZ RIVN[UV R\\G[H\\H\\G[FYFWGVHUJUYW[[W RWHVJVXXZ RYFXGWJWWYY","E_GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGQHRJRRQUOW RPHQJQT RNFOGPJPUOW RRISGUFWFYGZH[J\\K RYHZJ RWFXGYJZK\\K R\\KRP RYM[O\\R\\U[XYZV[S[PZJWIWHX RXNYN[P RVNYO[Q\\S RTZRZLWKW RZYXZUZRYNWKVIVHXHZI[JZIY","F^RHPFNFLGJJINIRJVLYNZQ[T[WZYY[W RLHKJJMJRKVMYPZ RNFMGLIKMKQLUMWOYRZUZXY[W RUFRHQIPKPLQNTPURUT RQKQLUPUQ RQIQJRLUNVPVRUTSURUPTOR RUFVGXHZH RUGVHWH RTGVIXIZH[G","E_HLHKIIKGNFRFUGWHYJ[M\\Q\\U[XYZV[S[PZJWIWHX RKHMGRGUHWIYK[N RTZRZLWKW RHKJIMHRHUIWJYL[O\\R RZYXZUZRYNWKVIVHXHZI[JZIY RPHMKLMLONSNU RMNMONQNR RMKMMOQOSNUMVKVJUJT","F^RHPFNFLGJJINIRJVLYNZQ[T[WZYY[W RLHKJJMJRKVMYPZ RNFMGLIKMKQLUMWOYRZUZXY[W RUFRHQIPKPLQNTPURUT RQKQLUPUQ RQIQJRLUNVPVRUTSURUPTOR RUFVGXHZH RUGVHWH RTGVIXIZH[G RUNYK RYKZL\\L RXLYMZM RWMXNZN\\L","F^MNKMJKJIKGNFQFTGXI RKHMGRGUH RJKKIMHRHXIZI[H[GZFYF RSHRIQKQMROVSWVWYV\\U]S^ RTPWSXVXYW[ RQMSOVQXSYVYYX[V]S^O^L]K\\JZJWLTLRKQ RL\\K[KWLU RO^M]L[LWMTMRLQJQIRIS RUPYL RYLZM\\M RXMYNZN RWNXOZO\\M","E_UJTHSGQFNFKGIJHNHRIUJWLYNZQ[T[WZYY[W\\T\\Q[NYL RKHJJIMIRJUKW RZW[U[QZNYM RNFLGKIJMJRKVLXNZ RWZYXZUZQYOWM RUFRHPJOLOMPOSQTSTU RPLPMTQTR RPJPKQMTOUQUSTURVQVOUNS RTOYLZJ R\\FZJ RYG]I R\\F[GYGZHZJ[I]I\\H\\F","F_RFPGNIMKMMNOPQQSQU RNLNMQQQR RNINKOMQORQRSQUPVNWLWJVIUHSHQIPJQIR RRFTHVHXG RQGSH RPGQHSIUIXG RRPYK RYK[N\\Q\\T[WYYVZR[ RXLZN[Q[UZW RVMWMYOZRZVYXXYVZ RVZTZRYPYNZM\\N^P_R_T^ RSZQZ RR[PZNZ","F_PPNPLOKNJLJJKHLGOFQFTGWJYK RLHNGRGTHUI RJJKIMHQHTIVJYK[K\\J\\H[GYG RJXKYJZIYIWJVLVNWPYR\\T^ RNXOYQ\\R] RLVMWNYP\\Q]S^V^X]Y\\ZZZWYUWRVPVO RYXYWVRVQ RX]Y[YYXWVTURUPWNYNZOZP","F_PPNPLOKNJLJJKHLGOFQFTGWJYK RLHNGRGTHUI RJJKIMHQHTIVJYK[K\\J\\H[GYG RJXKYJZIYIWJVLVNWPYR\\T^ RNXOYQ\\R] RLVMWNYP\\Q]S^V^X]Y\\ZZZWYUWRVPVO RYXYWVRVQ RX]Y[YYXWVTURUPWNYNZOZP","E_[KZIXGUFRFOGMILKLNMQPWPYN[ RMNMOPUPV RNHMJMMNOPSQVQXPZN[L[JZ RHVJZ RGYKW RHVHXGYIYJZJXKWIWHV RNONMOKQJTJVKXMYM RUKWM RRJTKULVN RYMPQ RUOYXZY[Y RTPXXZZ RSPWYY[\\X","G^ZSYTVTUSUQVOXLYJYH RVQVPYLYK RWTVSVRWPYNZLZJYHXGUFPFMGLHKJKLLNNQOSOTNV RLKLLOQOR RLHLJMLOOPQPSOUMWJY RMWOWRYUZXZZY RNXOXSZTZ RJYLXMXQZT[V[YZZY[W","BbEQERFSHSJRJOIMGJGHIF RIOGK RHSIRIPGMFKFIGGIFKFMGOIPLPROUNWLYI[HZGZ RNIOLORNUMW RJZIYHY RKFMHNKNRMVLXKYJXIXF[ RNGPFRFTGVIWLWRVUUWSYQ[PZOZ RUIVLVRUV RRZQYPY RRFTHUKUSTWSYRXQXN[ RUHVGXFZF\\G]H^J_K R\\H]J RZF[G\\J]K_K R_K\\M[NZQZT[X][`X R\\N[P[T\\W^Z R_K]M\\O\\S]W_Y","D`GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGRISLSRRUQWOYL[KZIZG[ RQIRKRRQUPWOX RMZKYIY RNFPHQKQRPVNYLXJXG[ RRHSGUFWFYGZH[J\\K RYHZJ RWFXGYJZK\\K R\\KYMXNWQWTXXZ[]X RYNXPXTYW[Z R\\KZMYOYSZW\\Y","D`PFNGLIKKKMMQMS RLLLMMOMP RLILKNONQMSLTJTISIR RPFQGWIZK[M\\P\\S[VZXXZU[R[OZIWHWGX RPGQHWJYKZL RPFPHQIWKYL[N\\P RSZQZKWJW RYYWZTZQYMWJVHVGXGZH[IZHY","E`HQHRISKSMRMOLMJJJHLF RLOJK RKSLRLPJMIKIIJGLFOFQGRHSJSU RSWS\\R^P_M_L^L\\M[N\\M] RQHRJR\\Q^ ROFPGQJQU RQWQ\\P^O_ RSJXF RXFZI[K\\O\\R[UYXV[ RWGZK[N[O RVHXJZM[P[SZVYX RWYUVSU RQUOVMX RWZUWSVPV RV[TXSW RQWOWMX","D`PFNGLIKKKMMQMS RLLLMMOMP RLILKNONQMSLTJTISIR RPFQGWIZK[M\\P\\S[VZX RXZU[R[OZIWHWGX RPGQHWJYKZL RPFPHQIWKYL[N\\P RSZQZKWJW RXZTZQYMWJVHVGXGZH[IZHY RTXVVXV\\Z]Z RWWXW[Z RUWVWZ[\\[^Y","D`GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGQHRJRVQXOZM[K[IZ RPHQJQVPX RNFOGPJPVOYM[ RGVIZ RFYJW RGVGXFYHYIZIXJWHWGV RRISGUFWFYGZH[J\\K RYHZJ RWFXGYJZK\\K R\\KRP RTOXYZ[]X RUOYX[Z RVNZX[Y\\Y","E`\\H[G\\F]G]I\\KZKVISHOHKIIK RYJVHSGOGLH R]I\\JZJVGSFOFLGJIIKHNHRIUJWLYNZQ[U[XZZY\\W]T]Q\\OZNWNUOSRQSOS RLXNYQZUZYY RIUKWMXPYUYYX[W\\V]T RXOWOSSRS R]Q[OYOWPUSSTQTOSNQNOOMQL","F_LNJMIKIIJGMFRFUGYJ[J\\I RJHLGRGUHXJ RIKJILHRHUIYK[K\\I\\G[FZG[H RUIRLQNQPSTSV RRORPSRSS RRLRNTRTTSVRWPWOVOT RJYKZJ[IZIXJVLVOWSYVZYZ[Y RLWMWSZUZ RIXJWKWMXQZT[W[ZZ\\X","G]JHKHLILWJX RKGMHMXPZ RIILFNHNWPYRY RJXKXMYO[RYVV RTHUHVIVYX[[X RUGWHWYYZ RSIVFYHXIXXYYZY","D`GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGQHRJRRQUOW RPHQJQT RNFOGPJPUOW RRISGUFWFYG[J\\K RYHZJ RWFXGYJZK\\K RZKXKWLWNXP[R\\T RXO[Q RWMXN[P\\R\\V[XYZW[S[PZJWIWHX RTZRZLWKW RZYXZUZRYNWKVIVHXHZI[JZIY","BcEQERFSHSJRJOIMGJGHIF RIOGK RHSIRIPGMFKFIGGIFLFNGOHPJPNOQMTKV RNHOJOONR RLFMGNJNOMSKV RNGPFSFUG RWFTGSISMTPVSWUWWVY RTMTNWSWT RWFUGTITLUNWQXTXVWXUZS[O[MZKXIWGWFX RNZKWJW RQ[OZLWJVGVFXFZG[HZGY RWFZF\\G^J_K R\\H]J RZF[G\\J]K_K R]K[KZLZN[P^R_T R[O^Q RZM[N^P_R_W^Y]Z[[X[UZ RYZXZVY R^Y\\ZZZXYWX","F^KHMHOIPJQMQO RQQQUPXM[KZI[ RNZLYKY ROYNYLXI[ RMGPHQIRLRUSWUYWZ RIINFPGRISLSO RSQSTTWUXWYYY RQURXTZV[[X RSLTIWFYG[F RVGXHYH RUHVHXI[F RKSMOQO RSOWOYM RMPWP RKSMQQQ RSQWQYM","E_HQHRISKSMRMOLMJJJHLF RLOJK RKSLRLPJMIKIIJGLFOFQGRHSJSORRQTQUSWTW RQHRJRPQSPUSX ROFPGQJQPPTOVRYUV RSJ[F RYGYZX] RZGZXY[ R[F[VZZY\\W^T_P_M^K\\JZKYLZK[","F^NIOGQFTFVGWHXJXMWOVPTQ RQQOPNN RVHWIWNVO RTFUGVIVNUPTQ RMUNSORQQTQWRYTZVZZY\\W^T_P_N^KZJY RXTYVYZX\\ RTQWSXUX[W]V^T_ RO^N]LZKY RR_P^O]MZLYIYHZH\\I]J]","KYOBOb RPBPb ROBVB RObVb"," KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZPLRITL RMORJWO RRJR["," JZJ]Z]","LXTFRGQIQKRMTKRIRG RRJRLSKRJ","J[TMQNOONPMSMVNYO[UX RNVOYPZ RQNOPNSNUOXQZ RRNSOUPUYW[ZX RSNVPVXXZ RTMUNWOXO RWPXO RWPWXXYYY","J[LHMINK RTFQGOINKNXMY RPIOKOXRZ RTFRGQHPKPXRYSZ RMYNYPZQ[TZ RPPVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ","KXRNTPVOTMRNOPNRNWOYQ[UY RSNUO RPPOROWPYQZ RQOPQPVQXSZ","J[QFNINKOLSNVPWRWUVXTZ ROJOKSMVOWP ROHOIPJUMWOXRXUWXTZQ[ RRNNPNXMY ROPOXRZ RPOPXRYSZ RMYNYPZQ[","KXPUVQSMOPNRNWOYQ[UY RUQRN RPPOROWPYQZ RTRROQOPQPVQXSZ","LYXFWGUGSFQFPHPMOONP RVHTHRGQG RXFWHVITIRHQHPI RPKQMRNTOVOVP RNPPP RRPVP RPPPTQ` RSOPOQNQ[ RRPRTQ`","J[TMQNOONPMSMVNYO[UX RNWOYPZ RQNOPNSNUOXQZ RRNSOUPUXV[V]U_ RSNVPVZ RTMUNWOXO RWPXO RWPW\\V^U_S`P`N_M^M]N]N^","J[LHMINK RTFQGOINKNXMY RPIOKOYPZ RTFRGQHPKPXQYRY RMYOZP[SX RPPVMWOXSXWWZV\\T^Q` RUNVOWR RTNVQWTWWV[T^","MWRFQGQHRISHSGRF RQGSH RQHSG ROOPOQPQYS[VX RPNRORXTZ RNPQMRNTO RSPTO RSPSXTYUY","MWRFQGQHRISHSGRF RQGSH RQHSG ROOPOQPQ[P^O_M` RPNROR[Q] RNPQMRNTO RSPTO RSPS[R]P_M` RS[T]U^","KYNHOIPK RUFSGQIPKPMOONP RPPPXOY RRIQKQM RQOPOQMQXSZ RUFSHRKRO RRPRXSYTY ROYQZR[UX RRLVIWJWLUNSO RUJVKVLUN RROWOWP RNPPP RRPWP","MWOHPIQK RWFTGRIQKQXPY RSIRKRYTZ RWFUGTHSKSXTYUY RPYRZS[VX","E_GOHOIPIXHYJ[ RHNJPJXIYJZKYJX RFPIMKOKXLYJ[ RNNPOQQQXPYR[ RPNQORQRXQYRZSYRX RKPNNPMRNSPSXTYR[ RVNWOYPYY[[^X RWNZPZX\\Z RSPVNXMYN[O\\O R[P\\O R[P[X\\Y]Y","I[KOLOMPMXLYN[ RLNNPNXMYNZOYNX RJPMMOOOXPYN[ RRNSOUPUYW[ZX RSNVPVXXZ ROPRNTMUNWOXO RWPXO RWPWXXYYY","J[NPNXMY ROPOXRZ RQOPPPXRYSZ RMYNYPZQ[TZ RNPQOVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ","J[OJMLMNNQNXLZ RNYO` RNMNNOQO[ RNKNLONPQPXQXSYTZ RPYO` RSZQY RTZR[PY RNYLZ RPPVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ","J[TMQNOONPMSMVNYO[UX RNWOYPZ RQNOPNSNUOXQZ RRNSOUPUXV` RSNVPV[ RTMUNWOXO RWPXO RWPWXV`","KYNOOOPPPXOY RONQPQYSZ RMPPMRORXSYTY ROYQZR[UX RTNUPWOVMRO RUNVO","LWXFWGUGSFQFPHPMOONP RVHTHRGQG RXFWHVITIRHQHPI RPKRP RPPPTQ` RQOPOQNQ[ RRPRTQ` RNPPP","LXSIRLQNPONP RSISOVOVP RNPQP RSPVP RQPQXPY RROQORMRXTZ RSPSXTYUY RPYRZS[VX","I[KOLOMPMXLY RLNNPNXPZ RJPMMOOOXQYRZ RLYMYOZP[RZUX RVMTOUPUYW[ZX RVPWOVNUOVPVXXZ RVMXOWPWXXYYY","J[OKMMMONRNXMY RNNNOOROXRZ RNLNMOOPRPXRYSZ RMYNYPZQ[TZ RPPVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ","F_KKIMIOJRJXIYK[ RJNJOKRKXJYKZLYKX RJLJMKOLRLXMYK[ RONQORQRXQY RQNROSQSXVZ RLPONQMSNTPTXVYWZ RQYRYTZU[XZ RTPZM[O\\R\\T[XZYXZ RYNZO[Q RXNZP[S[UZXXZ","KZOOPOQPQXPXNYM[M]N_P`S`V_V^U^U_ RPNRPRXUZ RNPQMSOSXUYVZ RXYT[SZQYOYM[ RUNVPXOWMSO RVNWO","J[OKMMMONRNXMY RNNNOOROYQZ RNLNMOOPRPXQYRY RMYOZP[SX RPPVMWOXSXWWZV\\T^Q` RUNVOWR RTNVQWTWWV[T^","KYNPSMUNVPVRUTQV RSNUO RRNTOUQURTTSU RSUUWVYV]U_S`Q`O_N]N[OYQXWV RRVTWUY RQVTXUZU]T_S`","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","KYQFOGNINKOMQNSNUMVKVIUGSFQF RQFNIOMSNVKUGQF RSFOGNKQNUMVISF"]
}

gat.alphabet.hershey_gothiceng = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","LXRFQGOHQIRT RRISHRGQHRIRT RRFSGUHSIRT RRXPZR[TZRX RRYQZSZRY","I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM","H]SBLb RYBRb RLOZO RKUYU","H\\PBP_ RTBT_ RTFVGWIWKYJXHWGTFPFMGKIKLLNOPURWSXUXXWZ RXJWH RLLMNOOUQWRXT RMYLW RMGLILKMMONUPXRYTYWXYWZT[P[MZLYKWMVMXNZP[","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_YNZO[O\\N RXOYP[P RXPYQZQ[P\\N RYNST RRUL[HVNP ROOSKOFJLPRTXVZX[Z[[Z\\X RLZIV RRKOG RKLPQTWVYXZ[Z RMZIU RRLNG RKKQQUWVXXY[Y\\X","NWSFRGRM RSGRM RSFTGRM","KYUBSDQGOKNPNTOYQ]S`Ub RQHPKOOOUPYQ\\ RSDRFQIPOPUQ[R^S`","KYOBQDSGUKVPVTUYS]Q`Ob RSHTKUOUUTYS\\ RQDRFSITOTUS[R^Q`","JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO","F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R","LXR^R\\PZRXSZS\\R^P_ RRYQZR[RY","E_IR[R","LXRXPZR[TZRX RRYQZSZRY","G^[BIbJb R[B\\BJb","H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJYLYNZO[QZVYXY","H\\OHPIQKQXOY RQIPHQGRIRYTZ ROHRFSHSXUYVY ROYPYRZS[TZVY","H\\LHNHPGQFSGVHXH RPHRG RLHNIPIRHSG RVHVP RWIWO RXHXPQPNQLSKVK[ RK[OYSXVXZY RNZQYVYYZ RK[PZUZX[ZY","H\\LHMHOGPFRGVHXH ROHQG RLHNIPIRG RVHVO RWIWN RXHXOVOSPQQ RQPSQVRXRXY RWSWX RVRVY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","H\\UFKPKUTU RVUZU[V[TZU RLPLT RMNMU RTGTXRY RUJVHUGUYWZ RUFWHVJVXXYYY RRYSYUZV[WZYY","H\\LFLO RLFXF RMGVG RLHUHWGXF RVLUMSNOOLO RSNTNVOVY RUMWNWX RVLWMYNZNXOXY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHRGTFUGWHXH RSGUH RRGTIVIXH RNPOPSOUNVM RSOTOVPVY RUNWPWX RVMWNYOZOXPXY RJYLYNZO[QZVYXY","H\\KHMFPGUGZF RLGOHTHWG RKHOIRIVHZF RZFYHWKSOQRPUPXQ[ RRQQTQWRZ RUMSPRSRVSYQ[","H\\LILO RMJMN RNINO RLINISHUGVF RSHTHVIVO RUGWHWN RVFWGYHZHXIXO RLONOVRXR RXOVONRLR RLRLXJY RMSMXPZ RNRNXPYQZ RVRVY RWSWX RXRXY RJYLYNZO[QZVYXY","H\\LHLQJR RMIMROS RNHNQPRQR RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJRKRMSNTOSQRUQVQ RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","LXRMPORPTORM RRNQOSORN RRXPZR[TZRX RRYQZSZRY","LXRMPORPTORM RRNQOSORN RR^R\\PZRXSZS\\R^P_ RRYQZR[RY","F^ZIJRZ[","F_JM[M[N RJMJN[N RJU[U[V RJUJV[V","F^JIZRJ[","I[LJMHNGQFSFVGWHXJXLWNUPSQ RMJNH RVHWIWMVN RLJNKNIOGQF RSFUGVIVMUOSQ RRQRTSQQQRT RRXPZR[TZRX RRYQZSZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","G]LINGPFRFSGZW[X]X RQGRHYXZZ[YYX RNGPGQHXXYZZ[[[]X RLMMLOKPKQL RPLPM RMLOLPN RG[IYKXNXPY RJYNYOZ RG[JZMZN[PY RRJLX RNSVS","F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RRIQJPLPU RQKQS RRIRRQTPU RRIXFZG[I[KYMUO RXGZIZK RVGXHYIYLWN RWNZP[R[X RYPZRZW RWNXOYQYX RJ[MYPXTXWY RLZOYTYVZ RJ[NZSZU[WYYX[X RUOUX RURYR RUUYU","E]NGLHJJILHOHSIVJXMZP[S[VZXYZW[U RJKINISKWNYQZTZWY RNGLIKKJNJRKUNXQYTYWXYW[U RPJPV RQJQT RRIRSQUPV RPJRIUFWGYGZF RTGVHXH RSHUIWIYHZF RWIWX","G^IFWFYGZIZX RKGWGYIYW RIFJGLHWHXIXX ROKNLMNMOKOJPJRKQMQMV RNMNT RKPNP ROKOSNUMV RI[LYOXSXVY RKZNYSYUZ RI[MZRZT[VYXXZX RRHRX RRMTNVNXM RRSTRVRXS","G]IHKFMFOGQF RLGNG RIHKGMHOHQF RNKMLLNLOJOIPIRJQLQLW RMMMU RJPMP RNKNTMVLW RQMRJSHTGVFXF[G RTHVGXGZH RRJSIUHWHYI[G RQURRSPTOVOXP RTPVPWQ RRRSQUQVRXP RK[NYRXWX[Y RMZPYWYZZ RK[OZVZY[[Y RQMQX","F]JHLFOFQGSF RMGPG RJHLGNHQHSF RPKOLNNNOLOKPKRLQNQNV ROMOT RLPOP RPKPSOUNV RSJSYRZQZMXKXIYG[ RTJTX RTPXP RPZOZMYJY RUIUOXO RXQUQUWTYP[N[LZJZG[ RSJUIXFZG\\G]F RWGYH[H RVHXIZI\\H]F RXIXW","E^NGLHJJILHOHRIUJWLYNZQ[U[XZZX[V[SZQYPWOUO RJKINISJV RNGLIKKJNJSKVLXNZ RYXZWZSYQ RU[WZXYYWYSXQWPUO RPJPW RQJQU RRIRTQVPW RPJRIUFWGYGZF RTGVHXH RSHUIWIYHZF RYHUOU[ RUSYS RUVYV","F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RJ[MYPXSXUY RLZOYRYTZ RJ[NZQZS[UY RRIQJPLPU RQKQS RRIRRQTPU RRITGVFXFZG RWGXGYH RTGVGXIZG RUOWNYLZM[P[TZXX[ RXMYNZPZUYX RWNXNYPYUX[ RUOUY RURYR RUUYU","I\\LHNFQFTGVF ROGSG RLHNGQHTHVF RSKRLQNQOOONPNROQQQQV RRMRT ROPRP RSKSSRUQV RYHWJVMVXUZSZOXMXKYI[ RWKWW RRZQZOYLY RYHXJXVWXUZS[P[NZKZI[","H\\LHNFQFTGVF ROGSG RLHNGQHTHVF RSKRLQNQOOONPNROQQQQV RRMRT ROPRP RSKSSRUQV RYHWJVMVXUZ RWKWW RYHXJXVWXUZR[O[LZJXJVKULUMVLWKW RJVMV","F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RJ[MYPXSXUY RLZNYRYTZ RJ[NZQZS[UY RRIQJPLPU RQKQS RRIRRQTPU RRITGVFXFZG RWGXGYH RTGVGXIZG RUOXLYM[N RWMYN[N R[NYQWSUU RWSYTZX[Z\\Z RYVZZ RWSXTYZZ[[[\\Z RUOUY","G]IHKFNFPGRF RLGOG RIHKGMHPHRF RNKMLLNLOJOIPIRJQLQLW RMMMU RJPMP RNKNTMVLW RK[NYRXWX[Y RMZPYWYZZ RK[OZVZY[[Y RSIRJQLQU RRKRS RSISRRTQU RSIUGWFYF[G RXGYGZH RUGWGYI[G RWGWX","D`LJKKJMJOHOGPGRHQJQJU RKLKS RHPKP RLJLRKTJU RE[GYIXKXMYNYOX RHYKYMZ RE[GZJZL[M[NZOX RLJPFTJTWUYVY RPGSJSXRYSZTYSX RPPSP RNHOHRKROOO ROQRQRXQYS[VYWX RTJXF\\J\\W]Y^Y RXG[J[X]Z RXP[P RVHWHZKZOWO RWQZQZY\\[^Y ROHOX RWHWX","E^GIIGKFMFOGQJVUXXYY RMGOIPKVWYZ RIGKGMHOKTVVYWZY[ RVHXIZI\\H]F RWGYH[H RVHXFZG\\G]F RKOIOHPHRIQKQ RIPKP RG[IYKXNXPY RJYMYOZ RG[JZMZN[PY RKGKX RYIY[ RRLSMUNWNYM RKTMSQSST","E_NFLGJIIKHNHRIUJWLYNZQ[S[VZXYZW[U\\R\\N[KZIXGVFUGRIOJ RJJIMISJV RNFLHKJJMJSKVLXNZ RZV[S[MYIXH RVZXXYVZSZMYKWHUG ROJOW RPJPU RQJQTPVOW RUGUZ RUMWNXNZM RUSWRXRZS","H^KFLGMIMOKOJPJRKQMQMYJ[MZMbO` RMHNJN` RKPNP RKFMGNHOJO` ROKRIVFZJZX RVGYJYX RTHUHXKXY RRXUXXY RSYUYWZ RRZTZV[XYZX RRIR_ RRMTNVNXM RRSTRVRXS","E_NFLGJIIKHNHRIUJWLYNZP[T[VZXYZW[U\\R\\N[KZIXGVFUGRIOJ RJJIMISJV RNFLHKJJMJSKVLXNZ RZV[S[MYIXH RVZXXYVZSZMYKWHUG ROJOW RPJPU RQJQTPVOW RUGUZ RUMWNXNZM RUSWRXRZS RP[QZRZT[X`Za[a RT\\V_XaYa RRZS[VaXbZb[a","F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RJ[MYPXRXUY RLZNYRYTZ RJ[NZQZS[UY RRIQJPLPU RQKQS RRIRRQTPU RRIUGWFYGZIZLYNXOTQRR RWGXGYIYMXN RUGWHXJXMWOTQ RTQVRWSZX[Y\\Y RWTYX[Z RTQVSXYZ[\\Y","G^UITHRGOF RVHTG RWGSFOFLGKHJJKLLMONWNYOZPZRYU RKKLLOMXMZN[O[QZS RKHKJLKOLYL[M\\O\\QYUU[ RIOJPLQUQVRVSUU RJQLRTRUS RIOIPJRLSSSUTUU RI[LYPXSXVY RKZNYRYUZ RI[MZRZU[ RWGUISL RRNPQ ROSMUKVJVJUKV","E]JJILHOHSIVKYMZP[S[VZXYZW[U RISJVLXNYQZTZWY RJJIMIQJTLWNXQYTYWXYW[U RHIIGKFOFUGYG[F RPGTHXH RHIIHKGNGTIWIYH[F RSIRJPKPV RQKQT RRJRSQUPV RWIWX","F^HHJFLFOGQF RKGNG RHHJGMHOHQF RKJJLIOISJVKXMZP[S[VZXYZ[\\Y RJSKVNYQZTZ RKJJNJQKTLVNXQYUYXX RUIQJPLPV RQKQT RRJRSQUPV RUIWHYFZG\\HZIZW[Y\\Y RYIZHYGXHYIYX[Z RWHXIXX RUIUY RUNXN RURXR","G^JFKGLILOJOIPIRJQLQLXJY RLHMJMX RJPMP RNYQYSZ RJFLGMHNJNXRXUY RJYMYPZR[UYXXZX RRJUIWHYFZG\\HZIZX RYIZHYGXHYIYW RWHXIXX RRJRX RRMTNVNXM RRSTRVRXS","E`HFIGJIJOHOGPGRHQJQJXHY RJHKJKX RHPKP RLYNYPZ RHFJGKHLJLXOXQY RHYKYNZO[QYTXVYW[YY\\X ROHRFTHTXWXYY RRGSHSX ROHQHRIRXQY RWYXZ RWHZF\\H\\X RZG[H[X RWHYHZIZXYY ROHOX RWHWX RONRN RORRR RWNZN RWRZR","G]HIJGLFNFOGWYXZZZ RMGNHVYWZ RJGLGMHUZV[X[ZZ\\X RWFYG[G\\F RWGXHZH RVHWIYI[H\\F RH[IYKXMXNY RJYLYMZ RH[IZKZM[ RWFSO RQRM[ RLPPP RSPXP","G^JFKGLILOJOIPIRJQLQLXJY RLHMJMX RJPMP RNYQYSZ RJFLGMHNJNXRXUY RJYMYPZR[UYXX RRJUIWHYFZG\\HZIZ^Y`WbUaQ`L` RYIZHYGXHYIYY RWHXIXXZ[ RXaV`S` RY`V_P_L` RRJRX RRMTNVNXM RRSTRVRXS","H\\XGWIROOSMWJ[ RVKNV RZFWJUNRRMXLZ RJHLFOGUGZF RKGOHSHWG RJHNIRIVHXG RLZNYRXVXZY RMZQYUYYZ RJ[OZUZX[ZY RMPQP RTPXP","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","G]JTROZT RJTRPZT","G]Gb]b","LXPFUL RPFOGUL","J[PRNTMVMXNZP[RYUX RMVNXOYQZ RNTNVOXQYRY RNPPPSOUNVMXOWPWXXYYY RONNOQO RTOWOVNVYWZ RMOOMPNROUPUYW[YY RMORT","I[LHMJMXKY RNJMHNGNXQZ RLHOFOXQYRZ RKYMYOZP[RZUYWY ROPROTNUMVNXOYOWPWY RTNVOVX RROSOUPUY","JXNONXLYMYOZP[ ROOOYQZ RPOPXRYSYQZP[ RNORNTMUNWOXO RSNTOVO RPORNTPVPXO","IZRMPNMOMXKY RNONXQZ RRMOOOXQYRZ RKYMYOZP[RZUYWY RMHPFQIWOWY RPINHOGPIVOVX RMHUPUY","JXNONXLYMYOZP[ ROOOYQZ RPOPXRYSYQZP[ RNORNTMWQURPU RSNVQ RPORNUR","JWNHNXLYMYOZP[ ROHOYQZ RPHPXRYSYQZP[ RNHQGSFTGVHWH RRGSHUH RPHQGSIUIWH RKMNM RPMTM","I[MOMXKYLYNZO[PZRYUX RNPNYPZ ROOOXQYRY RMOOORNTMUNWOYOWPW\\V_TaRbQaO`M` RSNVPV\\ RSaQ`P` RRNSOUPUZV]V_ RTaS`Q_O_M`","I[LHMJMXKYLYNZO[ RNJMHNGNYPZ RLHOFOXQYO[ ROPROTNUMVNXOYOWPWYU[T] RTNVOVYU[ RROSOUPUYT]T`UbVbT`","MWRFPHRITHRF RRGQHSHRG RRMQNOOQPQYS[UY RRPSORNQORPRYSZ RRMSNUOSPSXTYUY","MWRFPHRITHRF RRGQHSHRG RRMQNOOQPQYS[T] RRPSORNQORPRYS[ RRMSNUOSPSYT]T`RbPbPaRb","IZLHMJMXKYLYNZO[ RNJMHNGNYPZ RLHOFOXQYO[ ROPRNTMVPSROU RSNUP RRNTQ RSRTSVXWYXY RSSTTUYVZ RRSSTTYV[XY","MWPHQJQXOYPYRZS[ RRJQHRGRYTZ RPHSFSXUYVYTZS[","E_GOHOIPIXGYHYJZK[ RINJOJYLZ RGOIMKOKXMYK[ RKPNOPNQMSOSXUYS[ RPNRORYTZ RNOOOQPQXPYRZS[ RSPVOXNYMZN\\O]O[P[X\\Y]Y RXNZOZY[Z RVOWOYPYY[[]Y","I[KOLOMPMXKYLYNZO[ RMNNONYPZ RKOMMOOOXQYO[ ROPROTNUMVNXOYOWPWXXYYY RTNVOVYWZ RROSOUPUYW[YY","I[MOMXKY RNPNXQZ ROOOXQYRZ RKYMYOZP[RZUYWY RMOOORNTMUNWOYOWPWY RSNVPVX RRNSOUPUY","I[LMMOMXKYMYMb RMNNONaO`N^ RNYOYQZ RLMNNOOOXQYRZ ROZP[RZUYWY ROZO^P`Mb ROPROTNUMVNXOYOWPWY RTNVOVX RROSOUPUY","I[MOMXKY RNPNYPZ ROOOXQYRY RKYLYNZO[PZRYUX RMOOORNTMUNWOYOWPWb RSNVPVaU`V^ RRNSOUPU^T`Wb","JXLOMONPNXLYMYOZP[ RMNOOOYQZ RLONMPOPXRYSYQZP[ RPOTMUNWOXO RSNTOVO RRNTPVPXO","JZMOMSOTUTWUWY RNONS RVUVY RPNOOOSQT RSTUUUYTZ RMOPNRMTNVNWM RQNSN RPNROTOVN RWYTZR[PZNZL[ RSZQZ RTZRYOYL[ RWMVOTROWL[","MWPHQJQXOYPYRZS[ RRJQHRGRYTZ RPHSFSXUYVYTZS[ RNMQM RSMVM","I[KOLOMPMXKY RLNNONYPZ RKOMMOOOXQYRY RKYLYNZO[PZRYUX RUMVNXOYOWPWXXYYY RTNVOVYWZ RUMSOUPUYW[YY","I[LMMOMXP[RYUXWX RMNNONXQZ RLMNNOOOWPXRY RUMVNXOYOWPWX RTNVOVW RUMSOUPUX","E_HMIOIXL[NYQX RINJOJXMZ RHMJNKOKWLXNY RQMOOQPQXT[VYYX[X RPNRORXUZ RQMRNTOSPSWTXVY RYMZN\\O]O[P[X RXNZOZW RYMWOYPYX","H[KOLONPOQSYTZV[XY RMNOOTYVZ RKOMMONPOTWUXWYXY RRSUMVNXNYM RUNVOWO RTOVPXOYM RQUN[MZKZJ[ RNZMYLY ROYMXKYJ[ RMTPT RSTVT","I[KOLOMPMXKY RLNNONYPZ RKOMMOOOXQYRY RKYLYNZO[PZRYUX RUMVNXOYOWPW\\V_TaRbQaO`M` RTNVOV\\ RSaQ`P` RUMSOUPUZV]V_ RTaS`Q_O_M`","I[XML[ RLONPQPTOXM RMNOOSO RLONMPNTNXM RL[PYSXVXXY RQYUYWZ RL[PZTZV[XY RNTVT","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","JZJFJ[K[KFLFL[M[MFNFN[O[OFPFP[Q[QFRFR[S[SFTFT[U[UFVFV[W[WFXFX[Y[YFZFZ["]
}

gat.alphabet.hershey_gothicger = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","LXRFQGOHQIRT RRISHRGQHRIRT RRFSGUHSIRT RRXPZR[TZRX RRYQZSZRY","I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM","H]SBLb RYBRb RLOZO RKUYU","H\\PBP_ RTBT_ RTFVGWIWKYJXHWGTFPFMGKIKLLNOPURWSXUXXWZ RXJWH RLLMNOOUQWRXT RMYLW RMGLILKMMONUPXRYTYWXYWZT[P[MZLYKWMVMXNZP[","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_YNZO[O\\N RXOYP[P RXPYQZQ[P\\N RYNST RRUL[HVNP ROOSKOFJLPRTXVZX[Z[[Z\\X RLZIV RRKOG RKLPQTWVYXZ[Z RMZIU RRLNG RKKQQUWVXXY[Y\\X","NWSFRGRM RSGRM RSFTGRM","KYUBSDQGOKNPNTOYQ]S`Ub RQHPKOOOUPYQ\\ RSDRFQIPOPUQ[R^S`","KYOBQDSGUKVPVTUYS]Q`Ob RSHTKUOUUTYS\\ RQDRFSITOTUS[R^Q`","JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO","F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R","LXR^R\\PZRXSZS\\R^P_ RRYQZR[RY","E_IR[R","LXRXPZR[TZRX RRYQZSZRY","G^[BIbJb R[B\\BJb","H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJYLYNZO[QZVYXY","H\\OHPIQKQXOY RQIPHQGRIRYTZ ROHRFSHSXUYVY ROYPYRZS[TZVY","H\\LHNHPGQFSGVHXH RPHRG RLHNIPIRHSG RVHVP RWIWO RXHXPQPNQLSKVK[ RK[OYSXVXZY RNZQYVYYZ RK[PZUZX[ZY","H\\LHMHOGPFRGVHXH ROHQG RLHNIPIRG RVHVO RWIWN RXHXOVOSPQQ RQPSQVRXRXY RWSWX RVRVY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","H\\UFKPKUTU RVUZU[V[TZU RLPLT RMNMU RTGTXRY RUJVHUGUYWZ RUFWHVJVXXYYY RRYSYUZV[WZYY","H\\LFLO RLFXF RMGVG RLHUHWGXF RVLUMSNOOLO RSNTNVOVY RUMWNWX RVLWMYNZNXOXY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHRGTFUGWHXH RSGUH RRGTIVIXH RNPOPSOUNVM RSOTOVPVY RUNWPWX RVMWNYOZOXPXY RJYLYNZO[QZVYXY","H\\KHMFPGUGZF RLGOHTHWG RKHOIRIVHZF RZFYHWKSOQRPUPXQ[ RRQQTQWRZ RUMSPRSRVSYQ[","H\\LILO RMJMN RNINO RLINISHUGVF RSHTHVIVO RUGWHWN RVFWGYHZHXIXO RLONOVRXR RXOVONRLR RLRLXJY RMSMXPZ RNRNXPYQZ RVRVY RWSWX RXRXY RJYLYNZO[QZVYXY","H\\LHLQJR RMIMROS RNHNQPRQR RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJRKRMSNTOSQRUQVQ RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","LXRMPORPTORM RRNQOSORN RRXPZR[TZRX RRYQZSZRY","LXRMPORPTORM RRNQOSORN RR^R\\PZRXSZS\\R^P_ RRYQZR[RY","F^ZIJRZ[","F_JM[M[N RJMJN[N RJU[U[V RJUJV[V","F^JIZRJ[","I[LJMHNGQFSFVGWHXJXLWNUPSQ RMJNH RVHWIWMVN RLJNKNIOGQF RSFUGVIVMUOSQ RRQRTSQQQRT RRXPZR[TZRX RRYQZSZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","F^IHJIIJHIIGKFMFOGPHQKQOPRNTLUIV ROHPKPPOR RMFNGOJOPNSLU RLVOY RKVOZ RIVN[UV R\\G[H\\H\\G[FYFWGVHUJUYW[[W RWHVJVXXZ RYFXGWJWWYY","E_GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGQHRJRRQUOW RPHQJQT RNFOGPJPUOW RRISGUFWFYGZH[J\\K RYHZJ RWFXGYJZK\\K R\\KRP RYM[O\\R\\U[XYZV[S[PZJWIWHX RXNYN[P RVNYO[Q\\S RTZRZLWKW RZYXZUZRYNWKVIVHXHZI[JZIY","F^RHPFNFLGJJINIRJVLYNZQ[T[WZYY[W RLHKJJMJRKVMYPZ RNFMGLIKMKQLUMWOYRZUZXY[W RUFRHQIPKPLQNTPURUT RQKQLUPUQ RQIQJRLUNVPVRUTSURUPTOR RUFVGXHZH RUGVHWH RTGVIXIZH[G","E_HLHKIIKGNFRFUGWHYJ[M\\Q\\U[XYZV[S[PZJWIWHX RKHMGRGUHWIYK[N RTZRZLWKW RHKJIMHRHUIWJYL[O\\R RZYXZUZRYNWKVIVHXHZI[JZIY RPHMKLMLONSNU RMNMONQNR RMKMMOQOSNUMVKVJUJT","F^RHPFNFLGJJINIRJVLYNZQ[T[WZYY[W RLHKJJMJRKVMYPZ RNFMGLIKMKQLUMWOYRZUZXY[W RUFRHQIPKPLQNTPURUT RQKQLUPUQ RQIQJRLUNVPVRUTSURUPTOR RUFVGXHZH RUGVHWH RTGVIXIZH[G RUNYK RYKZL\\L RXLYMZM RWMXNZN\\L","F^MNKMJKJIKGNFQFTGXI RKHMGRGUH RJKKIMHRHXIZI[H[GZFYF RSHRIQKQMROVSWVWYV\\U]S^ RTPWSXVXYW[ RQMSOVQXSYVYYX[V]S^O^L]K\\JZJWLTLRKQ RL\\K[KWLU RO^M]L[LWMTMRLQJQIRIS RUPYL RYLZM\\M RXMYNZN RWNXOZO\\M","E_UJTHSGQFNFKGIJHNHRIUJWLYNZQ[T[WZYY[W\\T\\Q[NYL RKHJJIMIRJUKW RZW[U[QZNYM RNFLGKIJMJRKVLXNZ RWZYXZUZQYOWM RUFRHPJOLOMPOSQTSTU RPLPMTQTR RPJPKQMTOUQUSTURVQVOUNS RTOYLZJ R\\FZJ RYG]I R\\F[GYGZHZJ[I]I\\H\\F","F_RFPGNIMKMMNOPQQSQU RNLNMQQQR RNINKOMQORQRSQUPVNWLWJVIUHSHQIPJQIR RRFTHVHXG RQGSH RPGQHSIUIXG RRPYK RYK[N\\Q\\T[WYYVZR[ RXLZN[Q[UZW RVMWMYOZRZVYXXYVZ RVZTZRYPYNZM\\N^P_R_T^ RSZQZ RR[PZNZ","F_PPNPLOKNJLJJKHLGOFQFTGWJYK RLHNGRGTHUI RJJKIMHQHTIVJYK[K\\J\\H[GYG RJXKYJZIYIWJVLVNWPYR\\T^ RNXOYQ\\R] RLVMWNYP\\Q]S^V^X]Y\\ZZZWYUWRVPVO RYXYWVRVQ RX]Y[YYXWVTURUPWNYNZOZP","F_PPNPLOKNJLJJKHLGOFQFTGWJYK RLHNGRGTHUI RJJKIMHQHTIVJYK[K\\J\\H[GYG RJXKYJZIYIWJVLVNWPYR\\T^ RNXOYQ\\R] RLVMWNYP\\Q]S^V^X]Y\\ZZZWYUWRVPVO RYXYWVRVQ RX]Y[YYXWVTURUPWNYNZOZP","E_[KZIXGUFRFOGMILKLNMQPWPYN[ RMNMOPUPV RNHMJMMNOPSQVQXPZN[L[JZ RHVJZ RGYKW RHVHXGYIYJZJXKWIWHV RNONMOKQJTJVKXMYM RUKWM RRJTKULVN RYMPQ RUOYXZY[Y RTPXXZZ RSPWYY[\\X","G^ZSYTVTUSUQVOXLYJYH RVQVPYLYK RWTVSVRWPYNZLZJYHXGUFPFMGLHKJKLLNNQOSOTNV RLKLLOQOR RLHLJMLOOPQPSOUMWJY RMWOWRYUZXZZY RNXOXSZTZ RJYLXMXQZT[V[YZZY[W","BbEQERFSHSJRJOIMGJGHIF RIOGK RHSIRIPGMFKFIGGIFKFMGOIPLPROUNWLYI[HZGZ RNIOLORNUMW RJZIYHY RKFMHNKNRMVLXKYJXIXF[ RNGPFRFTGVIWLWRVUUWSYQ[PZOZ RUIVLVRUV RRZQYPY RRFTHUKUSTWSYRXQXN[ RUHVGXFZF\\G]H^J_K R\\H]J RZF[G\\J]K_K R_K\\M[NZQZT[X][`X R\\N[P[T\\W^Z R_K]M\\O\\S]W_Y","D`GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGRISLSRRUQWOYL[KZIZG[ RQIRKRRQUPWOX RMZKYIY RNFPHQKQRPVNYLXJXG[ RRHSGUFWFYGZH[J\\K RYHZJ RWFXGYJZK\\K R\\KYMXNWQWTXXZ[]X RYNXPXTYW[Z R\\KZMYOYSZW\\Y","D`PFNGLIKKKMMQMS RLLLMMOMP RLILKNONQMSLTJTISIR RPFQGWIZK[M\\P\\S[VZXXZU[R[OZIWHWGX RPGQHWJYKZL RPFPHQIWKYL[N\\P RSZQZKWJW RYYWZTZQYMWJVHVGXGZH[IZHY","E`HQHRISKSMRMOLMJJJHLF RLOJK RKSLRLPJMIKIIJGLFOFQGRHSJSU RSWS\\R^P_M_L^L\\M[N\\M] RQHRJR\\Q^ ROFPGQJQU RQWQ\\P^O_ RSJXF RXFZI[K\\O\\R[UYXV[ RWGZK[N[O RVHXJZM[P[SZVYX RWYUVSU RQUOVMX RWZUWSVPV RV[TXSW RQWOWMX","D`PFNGLIKKKMMQMS RLLLMMOMP RLILKNONQMSLTJTISIR RPFQGWIZK[M\\P\\S[VZX RXZU[R[OZIWHWGX RPGQHWJYKZL RPFPHQIWKYL[N\\P RSZQZKWJW RXZTZQYMWJVHVGXGZH[IZHY RTXVVXV\\Z]Z RWWXW[Z RUWVWZ[\\[^Y","D`GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGQHRJRVQXOZM[K[IZ RPHQJQVPX RNFOGPJPVOYM[ RGVIZ RFYJW RGVGXFYHYIZIXJWHWGV RRISGUFWFYGZH[J\\K RYHZJ RWFXGYJZK\\K R\\KRP RTOXYZ[]X RUOYX[Z RVNZX[Y\\Y","E`\\H[G\\F]G]I\\KZKVISHOHKIIK RYJVHSGOGLH R]I\\JZJVGSFOFLGJIIKHNHRIUJWLYNZQ[U[XZZY\\W]T]Q\\OZNWNUOSRQSOS RLXNYQZUZYY RIUKWMXPYUYYX[W\\V]T RXOWOSSRS R]Q[OYOWPUSSTQTOSNQNOOMQL","F_LNJMIKIIJGMFRFUGYJ[J\\I RJHLGRGUHXJ RIKJILHRHUIYK[K\\I\\G[FZG[H RUIRLQNQPSTSV RRORPSRSS RRLRNTRTTSVRWPWOVOT RJYKZJ[IZIXJVLVOWSYVZYZ[Y RLWMWSZUZ RIXJWKWMXQZT[W[ZZ\\X","G]JHKHLILWJX RKGMHMXPZ RIILFNHNWPYRY RJXKXMYO[RYVV RTHUHVIVYX[[X RUGWHWYYZ RSIVFYHXIXXYYZY","D`GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGQHRJRRQUOW RPHQJQT RNFOGPJPUOW RRISGUFWFYG[J\\K RYHZJ RWFXGYJZK\\K RZKXKWLWNXP[R\\T RXO[Q RWMXN[P\\R\\V[XYZW[S[PZJWIWHX RTZRZLWKW RZYXZUZRYNWKVIVHXHZI[JZIY","BcEQERFSHSJRJOIMGJGHIF RIOGK RHSIRIPGMFKFIGGIFLFNGOHPJPNOQMTKV RNHOJOONR RLFMGNJNOMSKV RNGPFSFUG RWFTGSISMTPVSWUWWVY RTMTNWSWT RWFUGTITLUNWQXTXVWXUZS[O[MZKXIWGWFX RNZKWJW RQ[OZLWJVGVFXFZG[HZGY RWFZF\\G^J_K R\\H]J RZF[G\\J]K_K R]K[KZLZN[P^R_T R[O^Q RZM[N^P_R_W^Y]Z[[X[UZ RYZXZVY R^Y\\ZZZXYWX","F^KHMHOIPJQMQO RQQQUPXM[KZI[ RNZLYKY ROYNYLXI[ RMGPHQIRLRUSWUYWZ RIINFPGRISLSO RSQSTTWUXWYYY RQURXTZV[[X RSLTIWFYG[F RVGXHYH RUHVHXI[F RKSMOQO RSOWOYM RMPWP RKSMQQQ RSQWQYM","E_HQHRISKSMRMOLMJJJHLF RLOJK RKSLRLPJMIKIIJGLFOFQGRHSJSORRQTQUSWTW RQHRJRPQSPUSX ROFPGQJQPPTOVRYUV RSJ[F RYGYZX] RZGZXY[ R[F[VZZY\\W^T_P_M^K\\JZKYLZK[","F^NIOGQFTFVGWHXJXMWOVPTQ RQQOPNN RVHWIWNVO RTFUGVIVNUPTQ RMUNSORQQTQWRYTZVZZY\\W^T_P_N^KZJY RXTYVYZX\\ RTQWSXUX[W]V^T_ RO^N]LZKY RR_P^O]MZLYIYHZH\\I]J]","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","G]JTROZT RJTRPZT","F^Fb^b","LXPFUL RPFOGUL","J[TMQNOONPMSMVNYO[UX RNVOYPZ RQNOPNSNUOXQZ RRNSOUPUYW[ZX RSNVPVXXZ RTMUNWOXO RWPXO RWPWXXYYY","J[LHMINK RTFQGOINKNXMY RPIOKOXRZ RTFRGQHPKPXRYSZ RMYNYPZQ[TZ RPPVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ","KXRNTPVOTMRNOPNRNWOYQ[UY RSNUO RPPOROWPYQZ RQOPQPVQXSZ","J[QFNINKOLSNVPWRWUVXTZ ROJOKSMVOWP ROHOIPJUMWOXRXUWXTZQ[ RRNNPNXMY ROPOXRZ RPOPXRYSZ RMYNYPZQ[","KXPUVQSMOPNRNWOYQ[UY RUQRN RPPOROWPYQZ RTRROQOPQPVQXSZ","LYXFWGUGSFQFPHPMOONP RVHTHRGQG RXFWHVITIRHQHPI RPKQMRNTOVOVP RNPPP RRPVP RPPPTQ` RSOPOQNQ[ RRPRTQ`","J[TMQNOONPMSMVNYO[UX RNWOYPZ RQNOPNSNUOXQZ RRNSOUPUXV[V]U_ RSNVPVZ RTMUNWOXO RWPXO RWPW\\V^U_S`P`N_M^M]N]N^","J[LHMINK RTFQGOINKNXMY RPIOKOYPZ RTFRGQHPKPXQYRY RMYOZP[SX RPPVMWOXSXWWZV\\T^Q` RUNVOWR RTNVQWTWWV[T^","MWRFQGQHRISHSGRF RQGSH RQHSG ROOPOQPQYS[VX RPNRORXTZ RNPQMRNTO RSPTO RSPSXTYUY","MWRFQGQHRISHSGRF RQGSH RQHSG ROOPOQPQ[P^O_M` RPNROR[Q] RNPQMRNTO RSPTO RSPS[R]P_M` RS[T]U^","KYNHOIPK RUFSGQIPKPMOONP RPPPXOY RRIQKQM RQOPOQMQXSZ RUFSHRKRO RRPRXSYTY ROYQZR[UX RRLVIWJWLUNSO RUJVKVLUN RROWOWP RNPPP RRPWP","MWOHPIQK RWFTGRIQKQXPY RSIRKRYTZ RWFUGTHSKSXTYUY RPYRZS[VX","E_GOHOIPIXHYJ[ RHNJPJXIYJZKYJX RFPIMKOKXLYJ[ RNNPOQQQXPYR[ RPNQORQRXQYRZSYRX RKPNNPMRNSPSXTYR[ RVNWOYPYY[[^X RWNZPZX\\Z RSPVNXMYN[O\\O R[P\\O R[P[X\\Y]Y","I[KOLOMPMXLYN[ RLNNPNXMYNZOYNX RJPMMOOOXPYN[ RRNSOUPUYW[ZX RSNVPVXXZ ROPRNTMUNWOXO RWPXO RWPWXXYYY","J[NPNXMY ROPOXRZ RQOPPPXRYSZ RMYNYPZQ[TZ RNPQOVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ","J[OJMLMNNQNXLZ RNYO` RNMNNOQO[ RNKNLONPQPXQXSYTZ RPYO` RSZQY RTZR[PY RNYLZ RPPVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ","J[TMQNOONPMSMVNYO[UX RNWOYPZ RQNOPNSNUOXQZ RRNSOUPUXV` RSNVPV[ RTMUNWOXO RWPXO RWPWXV`","KYNOOOPPPXOY RONQPQYSZ RMPPMRORXSYTY ROYQZR[UX RTNUPWOVMRO RUNVO","LWXFWGUGSFQFPHPMOONP RVHTHRGQG RXFWHVITIRHQHPI RPKRP RPPPTQ` RQOPOQNQ[ RRPRTQ` RNPPP","LXSIRLQNPONP RSISOVOVP RNPQP RSPVP RQPQXPY RROQORMRXTZ RSPSXTYUY RPYRZS[VX","I[KOLOMPMXLY RLNNPNXPZ RJPMMOOOXQYRZ RLYMYOZP[RZUX RVMTOUPUYW[ZX RVPWOVNUOVPVXXZ RVMXOWPWXXYYY","J[OKMMMONRNXMY RNNNOOROXRZ RNLNMOOPRPXRYSZ RMYNYPZQ[TZ RPPVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ","F_KKIMIOJRJXIYK[ RJNJOKRKXJYKZLYKX RJLJMKOLRLXMYK[ RONQORQRXQY RQNROSQSXVZ RLPONQMSNTPTXVYWZ RQYRYTZU[XZ RTPZM[O\\R\\T[XZYXZ RYNZO[Q RXNZP[S[UZXXZ","KZOOPOQPQXPXNYM[M]N_P`S`V_V^U^U_ RPNRPRXUZ RNPQMSOSXUYVZ RXYT[SZQYOYM[ RUNVPXOWMSO RVNWO","J[OKMMMONRNXMY RNNNOOROYQZ RNLNMOOPRPXQYRY RMYOZP[SX RPPVMWOXSXWWZV\\T^Q` RUNVOWR RTNVQWTWWV[T^","KYNPSMUNVPVRUTQV RSNUO RRNTOUQURTTSU RSUUWVYV]U_S`Q`O_N]N[OYQXWV RRVTWUY RQVTXUZU]T_S`","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","JZJFJ[K[KFLFL[M[MFNFN[O[OFPFP[Q[QFRFR[S[SFTFT[U[UFVFV[W[WFXFX[Y[YFZFZ["]
}

gat.alphabet.hershey_gothicita = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
      "JZ","LXRFQGOHQIRT RRISHRGQHRIRT RRFSGUHSIRT RRXPZR[TZRX RRYQZSZRY","I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM","H]SBLb RYBRb RLOZO RKUYU","H\\PBP_ RTBT_ RTFVGWIWKYJXHWGTFPFMGKIKLLNOPURWSXUXXWZ RXJWH RLLMNOOUQWRXT RMYLW RMGLILKMMONUPXRYTYWXYWZT[P[MZLYKWMVMXNZP[","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_YNZO[O\\N RXOYP[P RXPYQZQ[P\\N RYNST RRUL[HVNP ROOSKOFJLPRTXVZX[Z[[Z\\X RLZIV RRKOG RKLPQTWVYXZ[Z RMZIU RRLNG RKKQQUWVXXY[Y\\X","NWSFRGRM RSGRM RSFTGRM","KYUBSDQGOKNPNTOYQ]S`Ub RQHPKOOOUPYQ\\ RSDRFQIPOPUQ[R^S`","KYOBQDSGUKVPVTUYS]Q`Ob RSHTKUOUUTYS\\ RQDRFSITOTUS[R^Q`","JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO","F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R","LXR^R\\PZRXSZS\\R^P_ RRYQZR[RY","E_IR[R","LXRXPZR[TZRX RRYQZSZRY","G^[BIbJb R[B\\BJb","H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJYLYNZO[QZVYXY","H\\OHPIQKQXOY RQIPHQGRIRYTZ ROHRFSHSXUYVY ROYPYRZS[TZVY","H\\LHNHPGQFSGVHXH RPHRG RLHNIPIRHSG RVHVP RWIWO RXHXPQPNQLSKVK[ RK[OYSXVXZY RNZQYVYYZ RK[PZUZX[ZY","H\\LHMHOGPFRGVHXH ROHQG RLHNIPIRG RVHVO RWIWN RXHXOVOSPQQ RQPSQVRXRXY RWSWX RVRVY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","H\\UFKPKUTU RVUZU[V[TZU RLPLT RMNMU RTGTXRY RUJVHUGUYWZ RUFWHVJVXXYYY RRYSYUZV[WZYY","H\\LFLO RLFXF RMGVG RLHUHWGXF RVLUMSNOOLO RSNTNVOVY RUMWNWX RVLWMYNZNXOXY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHRGTFUGWHXH RSGUH RRGTIVIXH RNPOPSOUNVM RSOTOVPVY RUNWPWX RVMWNYOZOXPXY RJYLYNZO[QZVYXY","H\\KHMFPGUGZF RLGOHTHWG RKHOIRIVHZF RZFYHWKSOQRPUPXQ[ RRQQTQWRZ RUMSPRSRVSYQ[","H\\LILO RMJMN RNINO RLINISHUGVF RSHTHVIVO RUGWHWN RVFWGYHZHXIXO RLONOVRXR RXOVONRLR RLRLXJY RMSMXPZ RNRNXPYQZ RVRVY RWSWX RXRXY RJYLYNZO[QZVYXY","H\\LHLQJR RMIMROS RNHNQPRQR RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJRKRMSNTOSQRUQVQ RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","LXRMPORPTORM RRNQOSORN RRXPZR[TZRX RRYQZSZRY","LXRMPORPTORM RRNQOSORN RR^R\\PZRXSZS\\R^P_ RRYQZR[RY","F^ZIJRZ[","F_JM[M[N RJMJN[N RJU[U[V RJUJV[V","F^JIZRJ[","I[LJMHNGQFSFVGWHXJXLWNUPSQ RMJNH RVHWIWMVN RLJNKNIOGQF RSFUGVIVMUOSQ RRQRTSQQQRT RRXPZR[TZRX RRYQZSZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","E_NHLIJKIMHPHSIUKV RJLIOISJU RNHLJKLJOJRKVKXJZH[ RVHXHXYVY RYHYY RZGZZ RHFKGQHVHZG\\F RJPXP RH[KZQYVYZZ\\[","E_LGLZ RMGMZ RPFNGNZP[ RHJJHLGPFUFXGZIZKYM RXHYIYKXM RUFWGXIXKWL RQUOTNRNPONPMSLVLYM[O\\Q\\T[WYYWZT[P[LZJYHW RZO[Q[UZW RVLYNZQZUYXWZ","E_\\F[HZJXHVGSFQFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[Y\\[ R[HZMZT[Y RZKYJ RZNYKXIVG RJKINISJV RNGLIKKJNJSKVLXNZ RYWZV RVZXXYVZS","E_KGKZ RLGLZ RNFMGMZN[ RHKIIKGNFSFVGXHZJ[L\\O\\R[UZWXYVZS[N[KZIXHV RZK[N[SZV RVGXIYKZNZSYVXXVZ","E_\\F[HZJXHVGSFQFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[Y\\[ R[HZMZT[Y RZKYJ RZMXIVG RJKINISJV RNGLIKKJNJSKVLXNZ RYWZV RVZXXYVZS RJPKONOUQXQZP RPPRQURWRYQ RMORRUSWSYRZP RZMYLXLWMXNYM","E_JHJZ RMGKHKY ROFMGLILYNY RHJJHLGOFSFVGXHYI\\F R\\F[HZLZO[S\\U RZIYK RVGXIYLZO RLPMOOOTPWPYO RQPTQVQXP RNOTRVRXQYOYLXKWKVLWMXL RH[JZNYSYYZ\\[","E_\\F[HZJXHVGSFQFNGLHJJILHOHRIUJWLYNZQ[T[VZXYYXZV[Y\\[ R[HZMZT[Y RZKYJ RZNYKXIVG RJKINISJV RNGLIKKJNJSKVLXNZ RXXYVYR RVZWYXVXQ RKSLRMSLTKTJS RJPKNMMOMRNUPWQ RKOMNONROTP RJPLOOOUQYQZP","E_JGJZH[ RKHKZ RNHLHLZ RHFJGNHSHYG\\F RLPMNOLRKVKYL[N\\Q\\T[UYV RZN[P[SZU RVKXLYMZOZSYVYXZZ\\[ RH[LZPZU[","E_QIQY RRJRX RSISY RHFLHPITIXH\\F RH[KZOYUYYZ\\[","E_TIVIVXUZS[ RWIWXVY RXHXY RHFLHPITIXH\\F RIOHQHUIXKZN[S[VZXYZW\\T RIUJXKY RHSJUKXLZN[","E_JGJZH[ RKHKZ RNHLHLZ RHFJGNHSHYG\\F RLPMNOLRKUKXLYMYOXPSRQSPTPUQVRUQT RWLXMXOWP RUKWMWOVPSR RSRVRYSZUZWYX RWSYUYW RSRVSXUYXZZ[[\\[ RH[LZPZU[","E_JGJZ RKHKY RNHLHLYNY R\\KZNYPXSXUYW[X RZOYRYUZW R\\K[MZQZT[X\\[ RHFJGNHSHYG\\F RH[JZNYSYYZ\\[","E_QIQY RRJRX RSISY RNYLWJVIUHRHMIJKHMGPFTFWGYH[J\\M\\R[UZVXWVY RJUIRIMJJ RLWKUJRJLKIMG RZJ[M[RZU RWGYIZLZRYUXW RHFLHPITIXH\\F RH[KZOYUYYZ\\[","E_JHJZH[ RLHKIKZ ROFMGLILZ RHJJHLGOFSFVGXHZJ[L\\O\\S[UYV RZK[N[RZU RVGXIYKZNZRYVYXZZ[[\\[ RH[LZPZU[","E_QFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[U\\R\\O[LZJXHVGSFQF RJKINISJV RNGLIKKJNJSKVLXNZ RZV[S[NZK RVZXXYVZSZNYKXIVG","E_JIJZ RMHKJKY RQFOGMILKLYNY RHKJINGQFTFWGYH[J\\M\\O[RYTVURUOTMRLO RZJ[L[PZR RWGYIZLZPYSVU RH[JZNYSYYZ\\[","E_QFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[U\\R\\O[LZJXHVGSFQF RJKINISJV RNGLIKKJNJSKVLXNZ RZV[S[NZK RVZXXYVZSZNYKXIVG RJSKUNVTW[W\\X\\Z[[[Z\\Y RPWRW RKUNWQXSXTW","E_JIJZH[ RKIKZ RLHLZ RHKJILHNGQFUFYG[I\\K\\N[PZQ RYHZI[K[NZP RUFWGYIZKZOYQ RXRUSRSPRPPROUOXPZR\\U\\W[XZX RXQYR[V[WZT RTOVPXRYTZX[Z\\[ RH[LZPZU[","E_TFZG\\F[H[JYHWGTFPFMGJJIMIOJRLTOURUTTUSVQVP R[GZH[J RJPKRLSOTRTTS RKIJKJNKPMRPSRSTRVPWOXO RLQMQNPPNRMUMWNYPZRZUYXWZ RPMRLULXMZO[R[UZW RIWJYIZ RNPNOOMPLRKUKXL[O\\R\\T[WYYWZT[P[MZKYIWIYH[JZP[","E_QHMHKIJJILHOHSIVJXKYMZP[S[VZXYZW[U\\R\\N[KYIWH RUHTITKULVKUJ RISJVLXNYQZTZWY RJJINIQJTLWNXQYTYWXYW[T\\R RHFKI RKHLG RIGJGKFMGQHWHZG\\F","E_LHJJILHOHRIUJWLYNZQ[U[XZZY RKJJLIOISJV RKILJLKKMJPJSKVLXNZ RVHXHXXWZU[ RYHYXXY RZGZY\\[ RHFKGQHVHZG\\F","E_HFR[ RIGJHQWRY RJGKHRWSX R\\FR[ RWNUS RYLUQTTTV RHFJGOHUHZG\\F","E_LHJJILHOHRIUJWLYNZQ[S[VZXYZW[U\\R\\O[LZJXH RJLIOIRJUKW RJJKKKLJOJRKVLXNZ RYWZU[R[OZL RVZXXYVZRZOYLYKZJ RQIQ[ RRJRZ RSIS[ RHFLHPITIXH\\F","E_HFXYYZ RIGKHZZ RLH\\[ R\\FSP RQRJZ RPSMULW RQRMTLUKWKY RHFLHPITIXH\\F RH[JZNYSYYZ\\[","E_XHXZ RYHYY RZGZY RKHIJHMHPISKUMVPWSWVVXU RLUOVUV RHPIRKTNUTUVV RHFLHPITIXH\\F RHWJYLZP[T[XZ\\X","E_HFIGKHNHSFVFYGZIZKYM RXGYIYKXM RVFWGXIXL RXNTOROPNPLRKTKXL RTKVLWMVNTO RYM[O\\R\\T[WYYWZT[P[MZKYIWHTHRIOJNLMNMPNPPOQNPOO RXMZO[Q[UZW RXNYOZQZUYXWZ","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","G]JTROZT RJTRPZT","E_Eb_b","LXPFUL RPFOGUL","J[PQMTMXP[TY RNTNXPZ ROROWRZ RRSMNNMONNO RONSNUMWOWXXY RUNVOVXUYVZWYVX RSNUPUXTYV[XY","IZNHLFMJMXP[UYWX RNHNXPZ RNHPFOJOWRZ ROOTMWPWX RTNVPVX RRNUQUY","KWNPNYP[RY ROPOYPZ RPOPXQYRY RNPTMVOTPRN RSNUO","JZRMMPMXP[RZUYWY RNPNXPZ ROOOWRZ RPIPFQIWPWY RPIVPVX RPIMIPJUPUY","KXNPNYP[RY ROPOYPZ RPOPXQYRY RNPTMWQPU RSNVQ RRNUR","KWOIOXNYP[ RPIPXOYPZQYPX RQHQXRYP[ ROIUFWHUISG RTGVH RLMOM RQMUM","J[MPMXP[UY RNPNXPZ ROOOWRZ RMPOOTMWPW]V_U`SaQaO`MaObQa RTNVPV]U_ RPaNa RRNUQU^T`Sa","I[NHLFMJMXLYN[ RNHNXMYNZOYNX RNHPFOJOXPYN[ ROORNTMWPWYT]T`UbVbT` RTNVPVYU[ RRNUQUZT]","MWRFPHRJTHRF RRGQHRISHRG RRMPOQPQXPYR[ RRPSORNQORPRXQYRZSYRX RRMTOSPSXTYR[","MWRFPHRJTHRF RRGQHRISHRG RRMPOQPQYT] RRPSORNQORPRYS[ RRMTOSPSZT]T`RbPaPbRb","IZNHLFMJMXLYN[ RNHNXMYNZOYNX RNHPFOJOXPYN[ ROPRNTMVPSROU RSNUP RRNTQ RRSSTTYV[XY RSSTUUYVZ RSRTSVXWYXY","MWRHPFQJQXPYR[ RRHRXQYRZSYRX RRHTFSJSXTYR[","E_GOHOIPIXHYJ[ RINJOJXIYJZKYJX RGOIMKOKXLYJ[ RKONNPMSOSXTYR[ RPNRORXQYRZSYRX RNNQPQXPYR[ RSOVNXM[O[X\\YZ[ RXNZOZXYYZZ[YZX RVNYPYXXYZ[","I[KOLOMPMXLYN[ RMNNONXMYNZOYNX RKOMMOOOXPYN[ ROORNTMWOWXXYV[ RTNVOVXUYVZWYVX RRNUPUXTYV[","JZMPMXP[UYWX RNPNXPZ ROOOWRZ RMPOOTMWPWX RTNVPVX RRNUQUY","IZLMMOMXKYMYM_LbN` RNON` RLMNNOOOXQYRZ RNYOYQZ ROZP[UYWX ROZO_PbN` ROORNTMWPWX RTNVPVX RRNUQUY","J[MPMXP[UY RNPNXPZ ROOOWRZ RMPOOTMWPW_XbV` RTNVPV` RRNUQU_TbV`","KXMONOOPOXNYP[ RONPOPXOYPZQYPX RMOOMQOQXRYP[ RQOUMWOUPSN RTNVO","JZMPMSOUURWTWX RNPNSOT ROOOSPT RUSVTVX RTSUTUY RMPSMVNTOQN RRNUN RWXQ[MYOXSZ ROYQZ","MWRHPFQJQXPYR[ RRHRXQYRZSYRX RRHTFSJSXTYR[ RNMQM RSMVM","I[KOLOMPMYP[UY RMNNONYPZ RKOMMOOOXRZ RVMXOWPWXXYYY RVPWOVNUOVPVYWZ RVMTOUPUYW[YY","I[LMMOMXQ[SYWW RMNNONXQZ RLMNNOOOWRYSY RVMXOWPWW RVPWOVNUOVPVW RVMTOUPUX","E_HMIOIXM[OYQX RINJOJXMZ RHMJNKOKWNYOY RRMPOQPQXU[WY[W RRPSORNQORPRXUZ RRMTOSPSWVYWY RZM\\O[P[W RZP[OZNYOZPZW RZMXOYPYX","I[LONPUZV[XY RMNOOUYWZ RLONMONVXXY RXMVMVOXOXMVOSS RQUNYL[N[NYLYL[ RNTQT RSTVT","I[KOLOMPMYP[UY RMNNONYPZ RKOMMOOOXRZ RVMXOWPW]V_U`SaQaO`MaObQa RVPWOVNUOVPV^U_ RPaNa RVMTOUPU^T`Sa","L[RNOPOORNTMWOWSRU RTNVOVS RRNUPUSTT RRUWWW]V_U`SaQaO`MaObQa RVWV^U_ RPaNa RTVUWU^T`Sa","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","JZJFJ[K[KFLFL[M[MFNFN[O[OFPFP[Q[QFRFR[S[SFTFT[U[UFVFV[W[WFXFX[Y[YFZFZ["]
}

gat.alphabet.hershey_gothitt = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
      "JZ","LXRFQGOHQIRT RRISHRGQHRIRT RRFSGUHSIRT RRXPZR[TZRX RRYQZSZRY","I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM","H]SFLb RYFRb RLQZQ RKWYW","H\\PBP_ RTBT_ RTFVGWIWKYJXHWGTFPFMGKIKLLNOPURWSXUXXWZ RXJWH RLLMNOOUQWRXT RMYLW RMGLILKMMONUPXRYTYWXYWZT[P[MZLYKWMVMXNZP[","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_YNZO[O\\N RXOYP[P RXPYQZQ[P\\N RYNST RRUL[HVNP ROOSKOFJLPRTXVZX[Z[[Z\\X RLZIV RRKOG RKLPQTWVYXZ[Z RMZIU RRLNG RKKQQUWVXXY[Y\\X","LXRLRJPHRFSHSJRLPM RRGQHRIRG","KYUBSDQGOKNPNTOYQ]S`Ub RQHPKOOOUPYQ\\ RSDRFQIPOPUQ[R^S`","KYOBQDSGUKVPVTUYS]Q`Ob RSHTKUOUUTYS\\ RQDRFSITOTUS[R^Q`","JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO","F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R","LXR^R\\PZRXSZS\\R^P_ RRYQZR[RY","F_JQ[Q[R RJQJR[R","LXRXPZR[TZRX RRYQZSZRY","G^[BIbJb R[B\\BJb","H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJYLYNZO[QZVYXY","H\\OHPIQKQXOY RQIPHQGRIRYTZ ROHRFSHSXUYVY ROYPYRZS[TZVY","H\\LHNHPGQFSGVHXH RPHRG RLHNIPIRHSG RVHVP RWIWO RXHXPQPNQLSKVK[ RK[OYSXVXZY RNZQYVYYZ RK[PZUZX[ZY","H\\LHMHOGPFRGVHXH ROHQG RLHNIPIRG RVHVO RWIWN RXHXOVOSPQQ RQPSQVRXRXY RWSWX RVRVY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","H\\UFKPKUTU RVUZU[V[TZU RLPLT RMNMU RTGTXRY RUJVHUGUYWZ RUFWHVJVXXYYY RRYSYUZV[WZYY","H\\LFLO RLFXF RMGVG RLHUHWGXF RVLUMSNOOLO RSNTNVOVY RUMWNWX RVLWMYNZNXOXY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHRGTFUGWHXH RSGUH RRGTIVIXH RNPOPSOUNVM RSOTOVPVY RUNWPWX RVMWNYOZOXPXY RJYLYNZO[QZVYXY","H\\KHMFPGUGZF RLGOHTHWG RKHOIRIVHZF RZFYHWKSOQRPUPXQ[ RRQQTQWRZ RUMSPRSRVSYQ[","H\\LILO RMJMN RNINO RLINISHUGVF RSHTHVIVO RUGWHWN RVFWGYHZHXIXO RLONOVRXR RXOVONRLR RLRLXJY RMSMXPZ RNRNXPYQZ RVRVY RWSWX RXRXY RJYLYNZO[QZVYXY","H\\LHLQJR RMIMROS RNHNQPRQR RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJRKRMSNTOSQRUQVQ RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY","LXRMPORPTORM RRNQOSORN RRXPZR[TZRX RRYQZSZRY","LXRMPORPTORM RRNQOSORN RR^R\\PZRXSZS\\R^P_ RRYQZR[RY","F^ZIJRZ[","F_JM[M[N RJMJN[N RJU[U[V RJUJV[V","F^JIZRJ[","I[LJMHNGQFSFVGWHXJXLWNUPSQ RMJNH RVHWIWMVN RLJNKNIOGQF RSFUGVIVMUOSQ RRQRTSQQQRT RRXPZR[TZRX RRYQZSZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","E_NHLIJKIMHPHSIUKV RJLIOISJU RNHLJKLJOJRKVKXJZH[ RVHXHXYVY RYHYY RZGZZ RHFKGQHVHZG\\F RJPXP RH[KZQYVYZZ\\[","E_LGLZ RMGMZ RPFNGNZP[ RHJJHLGPFUFXGZIZKYM RXHYIYKXM RUFWGXIXKWL RQUOTNRNPONPMSLVLYM[O\\Q\\T[WYYWZT[P[LZJYHW RZO[Q[UZW RVLYNZQZUYXWZ","E_\\F[HZJXHVGSFQFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[Y\\[ R[HZMZT[Y RZKYJ RZNYKXIVG RJKINISJV RNGLIKKJNJSKVLXNZ RYWZV RVZXXYVZS","E_KGKZ RLGLZ RNFMGMZN[ RHKIIKGNFSFVGXHZJ[L\\O\\R[UZWXYVZS[N[KZIXHV RZK[N[SZV RVGXIYKZNZSYVXXVZ","E_\\F[HZJXHVGSFQFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[Y\\[ R[HZMZT[Y RZKYJ RZMXIVG RJKINISJV RNGLIKKJNJSKVLXNZ RYWZV RVZXXYVZS RJPKONOUQXQZP RPPRQURWRYQ RMORRUSWSYRZP RZMYLXLWMXNYM","E_JHJZ RMGKHKY ROFMGLILYNY RHJJHLGOFSFVGXHYI\\F R\\F[HZLZO[S\\U RZIYK RVGXIYLZO RLPMOOOTPWPYO RQPTQVQXP RNOTRVRXQYOYLXKWKVLWMXL RH[JZNYSYYZ\\[","E_\\F[HZJXHVGSFQFNGLHJJILHOHRIUJWLYNZQ[T[VZXYYXZV[Y\\[ R[HZMZT[Y RZKYJ RZNYKXIVG RJKINISJV RNGLIKKJNJSKVLXNZ RXXYVYR RVZWYXVXQ RKSLRMSLTKTJS RJPKNMMOMRNUPWQ RKOMNONROTP RJPLOOOUQYQZP","E_JGJZH[ RKHKZ RNHLHLZ RHFJGNHSHYG\\F RLPMNOLRKVKYL[N\\Q\\T[UYV RZN[P[SZU RVKXLYMZOZSYVYXZZ\\[ RH[LZPZU[","E_QIQY RRJRX RSISY RHFLHPITIXH\\F RH[KZOYUYYZ\\[","E_TIVIVXUZS[ RWIWXVY RXHXY RHFLHPITIXH\\F RIOHQHUIXKZN[S[VZXYZW\\T RIUJXKY RHSJUKXLZN[","E_JGJZH[ RKHKZ RNHLHLZ RHFJGNHSHYG\\F RLPMNOLRKUKXLYMYOXPSRQSPTPUQVRUQT RWLXMXOWP RUKWMWOVPSR RSRVRYSZUZWYX RWSYUYW RSRVSXUYXZZ[[\\[ RH[LZPZU[","E_JGJZ RKHKY RNHLHLYNY R\\KZNYPXSXUYW[X RZOYRYUZW R\\K[MZQZT[X\\[ RHFJGNHSHYG\\F RH[JZNYSYYZ\\[","E_QIQY RRJRX RSISY RNYLWJVIUHRHMIJKHMGPFTFWGYH[J\\M\\R[UZVXWVY RJUIRIMJJ RLWKUJRJLKIMG RZJ[M[RZU RWGYIZLZRYUXW RHFLHPITIXH\\F RH[KZOYUYYZ\\[","E_JHJZH[ RLHKIKZ ROFMGLILZ RHJJHLGOFSFVGXHZJ[L\\O\\S[UYV RZK[N[RZU RVGXIYKZNZRYVYXZZ[[\\[ RH[LZPZU[","E_QFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[U\\R\\O[LZJXHVGSFQF RJKINISJV RNGLIKKJNJSKVLXNZ RZV[S[NZK RVZXXYVZSZNYKXIVG","E_JIJZ RMHKJKY RQFOGMILKLYNY RHKJINGQFTFWGYH[J\\M\\O[RYTVURUOTMRLO RZJ[L[PZR RWGYIZLZPYSVU RH[JZNYSYYZ\\[","E_QFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[U\\R\\O[LZJXHVGSFQF RJKINISJV RNGLIKKJNJSKVLXNZ RZV[S[NZK RVZXXYVZSZNYKXIVG RJSKUNVTW[W\\X\\Z[[[Z\\Y RPWRW RKUNWQXSXTW","E_JIJZH[ RKIKZ RLHLZ RHKJILHNGQFUFYG[I\\K\\N[PZQ RYHZI[K[NZP RUFWGYIZKZOYQ RXRUSRSPRPPROUOXPZR\\U\\W[XZX RXQYR[V[WZT RTOVPXRYTZX[Z\\[ RH[LZPZU[","E_TFZG\\F[H[JYHWGTFPFMGJJIMIOJRLTOURUTTUSVQVP R[GZH[J RJPKRLSOTRTTS RKIJKJNKPMRPSRSTRVPWOXO RLQMQNPPNRMUMWNYPZRZUYXWZ RPMRLULXMZO[R[UZW RIWJYIZ RNPNOOMPLRKUKXL[O\\R\\T[WYYWZT[P[MZKYIWIYH[JZP[","E_QHMHKIJJILHOHSIVJXKYMZP[S[VZXYZW[U\\R\\N[KYIWH RUHTITKULVKUJ RISJVLXNYQZTZWY RJJINIQJTLWNXQYTYWXYW[T\\R RHFKI RKHLG RIGJGKFMGQHWHZG\\F","E_LHJJILHOHRIUJWLYNZQ[U[XZZY RKJJLIOISJV RKILJLKKMJPJSKVLXNZ RVHXHXXWZU[ RYHYXXY RZGZY\\[ RHFKGQHVHZG\\F","E_HFR[ RIGJHQWRY RJGKHRWSX R\\FR[ RWNUS RYLUQTTTV RHFJGOHUHZG\\F","E_LHJJILHOHRIUJWLYNZQ[S[VZXYZW[U\\R\\O[LZJXH RJLIOIRJUKW RJJKKKLJOJRKVLXNZ RYWZU[R[OZL RVZXXYVZRZOYLYKZJ RQIQ[ RRJRZ RSIS[ RHFLHPITIXH\\F","E_HFXYYZ RIGKHZZ RLH\\[ R\\FSP RQRJZ RPSMULW RQRMTLUKWKY RHFLHPITIXH\\F RH[JZNYSYYZ\\[","E_XHXZ RYHYY RZGZY RKHIJHMHPISKUMVPWSWVVXU RLUOVUV RHPIRKTNUTUVV RHFLHPITIXH\\F RHWJYLZP[T[XZ\\X","E_HFIGKHNHSFVFYGZIZKYM RXGYIYKXM RVFWGXIXL RXNTOROPNPLRKTKXL RTKVLWMVNTO RYM[O\\R\\T[WYYWZT[P[MZKYIWHTHRIOJNLMNMPNPPOQNPOO RXMZO[Q[UZW RXNYOZQZUYXWZ","KYOBOb RPBPb ROBVB RObVb"," KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZPLRITL RMORJWO RRJR["," JZJ]Z]","LXTFRGQIQKRMTKRIRG RRJRLSKRJ","J[PQMTMXP[TY RNTNXPZ ROROWRZ RRSMNNMONNO RONSNUMWOWXXY RUNVOVXUYVZWYVX RSNUPUXTYV[XY","IZNHLFMJMXP[UYWX RNHNXPZ RNHPFOJOWRZ ROOTMWPWX RTNVPVX RRNUQUY","KWNPNYP[RY ROPOYPZ RPOPXQYRY RNPTMVOTPRN RSNUO","JZRMMPMXP[RZUYWY RNPNXPZ ROOOWRZ RPIPFQIWPWY RPIVPVX RPIMIPJUPUY","KXNPNYP[RY ROPOYPZ RPOPXQYRY RNPTMWQPU RSNVQ RRNUR","KWOIOXNYP[ RPIPXOYPZQYPX RQHQXRYP[ ROIUFWHUISG RTGVH RLMOM RQMUM","J[MPMXP[UY RNPNXPZ ROOOWRZ RMPOOTMWPW]V_U`SaQaO`MaObQa RTNVPV]U_ RPaNa RRNUQU^T`Sa","I[NHLFMJMXLYN[ RNHNXMYNZOYNX RNHPFOJOXPYN[ ROORNTMWPWYT]T`UbVbT` RTNVPVYU[ RRNUQUZT]","MWRFPHRJTHRF RRGQHRISHRG RRMPOQPQXPYR[ RRPSORNQORPRXQYRZSYRX RRMTOSPSXTYR[","MWRFPHRJTHRF RRGQHRISHRG RRMPOQPQYT] RRPSORNQORPRYS[ RRMTOSPSZT]T`RbPaPbRb","IZNHLFMJMXLYN[ RNHNXMYNZOYNX RNHPFOJOXPYN[ ROPRNTMVPSROU RSNUP RRNTQ RRSSTTYV[XY RSSTUUYVZ RSRTSVXWYXY","MWRHPFQJQXPYR[ RRHRXQYRZSYRX RRHTFSJSXTYR[","E_GOHOIPIXHYJ[ RINJOJXIYJZKYJX RGOIMKOKXLYJ[ RKONNPMSOSXTYR[ RPNRORXQYRZSYRX RNNQPQXPYR[ RSOVNXM[O[X\\YZ[ RXNZOZXYYZZ[YZX RVNYPYXXYZ[","I[KOLOMPMXLYN[ RMNNONXMYNZOYNX RKOMMOOOXPYN[ ROORNTMWOWXXYV[ RTNVOVXUYVZWYVX RRNUPUXTYV[","JZMPMXP[UYWX RNPNXPZ ROOOWRZ RMPOOTMWPWX RTNVPVX RRNUQUY","IZLMMOMXKYMYM_LbN` RNON` RLMNNOOOXQYRZ RNYOYQZ ROZP[UYWX ROZO_PbN` ROORNTMWPWX RTNVPVX RRNUQUY","J[MPMXP[UY RNPNXPZ ROOOWRZ RMPOOTMWPW_XbV` RTNVPV` RRNUQU_TbV`","KXMONOOPOXNYP[ RONPOPXOYPZQYPX RMOOMQOQXRYP[ RQOUMWOUPSN RTNVO","JZMPMSOUURWTWX RNPNSOT ROOOSPT RUSVTVX RTSUTUY RMPSMVNTOQN RRNUN RWXQ[MYOXSZ ROYQZ","MWRHPFQJQXPYR[ RRHRXQYRZSYRX RRHTFSJSXTYR[ RNMQM RSMVM","I[KOLOMPMYP[UY RMNNONYPZ RKOMMOOOXRZ RVMXOWPWXXYYY RVPWOVNUOVPVYWZ RVMTOUPUYW[YY","I[LMMOMXQ[SYWW RMNNONXQZ RLMNNOOOWRYSY RVMXOWPWW RVPWOVNUOVPVW RVMTOUPUX","E_HMIOIXM[OYQX RINJOJXMZ RHMJNKOKWNYOY RRMPOQPQXU[WY[W RRPSORNQORPRXUZ RRMTOSPSWVYWY RZM\\O[P[W RZP[OZNYOZPZW RZMXOYPYX","I[LONPUZV[XY RMNOOUYWZ RLONMONVXXY RXMVMVOXOXMVOSS RQUNYL[N[NYLYL[ RNTQT RSTVT","I[KOLOMPMYP[UY RMNNONYPZ RKOMMOOOXRZ RVMXOWPW]V_U`SaQaO`MaObQa RVPWOVNUOVPV^U_ RPaNa RVMTOUPU^T`Sa","L[RNOPOORNTMWOWSRU RTNVOVS RRNUPUSTT RRUWWW]V_U`SaQaO`MaObQa RVWV^U_ RPaNa RTVUWU^T`Sa","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","KYQFOGNINKOMQNSNUMVKVIUGSFQF RQFNIOMSNVKUGQF RSFOGNKQNUMVISF"]
}

gat.alphabet.hershey_greek = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MWRFRT RRYQZR[SZRY","JZNFNM RVFVM","H]SBLb RYBRb RLOZO RKUYU","H\\PBP_ RTBT_ RYIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_\\O\\N[MZMYNXPVUTXRZP[L[JZIYHWHUISJRQNRMSKSIRGPFNGMIMKNNPQUXWZY[[[\\Z\\Y","MWRHQGRFSGSIRKQL","KYVBTDRGPKOPOTPYR]T`Vb","KYNBPDRGTKUPUTTYR]P`Nb","JZRLRX RMOWU RWOMU","E_RIR[ RIR[R","NVSWRXQWRVSWSYQ[","E_IR[R","NVRVQWRXSWRV","G][BIb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF","H\\NJPISFS[","H\\LKLJMHNGPFTFVGWHXJXLWNUQK[Y[","H\\MFXFRNUNWOXPYSYUXXVZS[P[MZLYKW","H\\UFKTZT RUFU[","H\\WFMFLOMNPMSMVNXPYSYUXXVZS[P[MZLYKW","H\\XIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQLT","H\\YFO[ RKFYF","H\\PFMGLILKMMONSOVPXRYTYWXYWZT[P[MZLYKWKTLRNPQOUNWMXKXIWGTFPF","H\\XMWPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLX","NVROQPRQSPRO RRVQWRXSWRV","NVROQPRQSPRO RSWRXQWRVSWSYQ[","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","I[LKLJMHNGPFTFVGWHXJXLWNVORQRT RRYQZR[SZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","I[RFJ[ RRFZ[ RMTWT","G\\KFK[ RKFTFWGXHYJYLXNWOTP RKPTPWQXRYTYWXYWZT[K[","H\\KFY[ RK[YF","I[RFJ[ RRFZ[ RJ[Z[","H[LFL[ RLFYF RLPTP RL[Y[","H\\RFR[ RPKMLLMKOKRLTMUPVTVWUXTYRYOXMWLTKPK","HYLFL[ RLFXF","G]KFK[ RYFY[ RKPYP","NVRFR[","PURQRRSRSQRQ","G\\KFK[ RYFKT RPOY[","I[RFJ[ RRFZ[","F^JFJ[ RJFR[ RZFR[ RZFZ[","G]KFK[ RKFY[ RYFY[","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF","G]KFK[ RYFY[ RKFYF","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF ROPUP","G\\KFK[ RKFTFWGXHYJYMXOWPTQKQ","I[KFRPK[ RKFYF RK[Y[","JZRFR[ RKFYF","I[KKKILGMFOFPGQIRMR[ RYKYIXGWFUFTGSIRM","KYQFOGNINKOMQNSNUMVKVIUGSFQF","H\\K[O[LTKPKLLINGQFSFVGXIYLYPXTU[Y[","I[KFYF ROPUP RK[Y[","G]RFR[ RILJLKMLQMSNTQUSUVTWSXQYMZL[L","H\\YFK[ RKFYF RK[Y[","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZRDJR RRDZR","I[Ib[b","NVSKQMQORPSORNQO","H]QMONMPLRKUKXLZN[P[RZUWWTYPZM RQMSMTNUPWXXZY[Z[","I\\UFSGQIOMNPMTLZKb RUFWFYHYKXMWNUORO RROTPVRWTWWVYUZS[Q[OZNYMV","I[KMMMOOU`WbYb RZMYOWRM]K`Jb","I[TMQMONMPLSLVMYNZP[R[TZVXWUWRVOTMRKQIQGRFTFVGXI","JZWOVNTMQMONOPPRSS RSSOTMVMXNZP[S[UZWX","G]ONMOKQJTJWKYLZN[Q[TZWXYUZRZOXMVMTORSPXMb","I\\JPLNNMOMQNROSRSVR[ RZMYPXRR[P_Ob","H\\IQJOLMNMONOPNTL[ RNTPPRNTMVMXOXRWWTb","LWRMPTOXOZP[R[TYUW","G]KKYY RYKKY","I[OMK[ RYNXMWMUNQROSNS RNSPTQUSZT[U[VZ","JZKFMFOGPHX[ RRML[","H]OMIb RNQMVMYO[Q[SZUXWT RYMWTVXVZW[Y[[Y\\W","I[LMOMNSMXL[ RYMXPWRUURXOZL[","J[RMPNNPMSMVNYOZQ[S[UZWXXUXRWOVNTMRM","G]PML[ RUMVSWXX[ RIPKNNM[M","G\\HQIOKMMMNNNPMUMXNZO[Q[SZUWVUWRXMXJWGUFSFRHRJSMUPWRZT","I[MSMVNYOZQ[S[UZWXXUXRWOVNTMRMPNNPMSIb","I][MQMONMPLSLVMYNZP[R[TZVXWUWRVOUNSM","H\\SMP[ RJPLNOMZM","H\\IQJOLMNMONOPMVMYO[Q[TZVXXTYPYM","E_RIQJRKSJRI RIR[R RRYQZR[SZRY","F]NMLNJQITIWJZK[M[OZQW RRSQWRZS[U[WZYWZTZQYNXM","JZTFRGQHQIRJUKXK RUKRLPMOOOQQSTTVT RTTPUNVMXMZO\\S^T_TaRbPb","F]VFNb RGQHOJMLMMNMPLULXMZO[Q[TZVXXUZP[M","JYTFRGQHQIRJUKXK RXKTMQONRMUMWNYP[S]T_TaSbQbP`","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","JZJFJ[K[KFLFL[M[MFNFN[O[OFPFP[Q[QFRFR[S[SFTFT[U[UFVFV[W[WFXFX[Y[YFZFZ["]
}

gat.alphabet.hershey_greekc = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MWRFQHRTSHRF RRHRN RRYQZR[SZRY","MWRMQNROSNRM RR[QZRYSZS\\R^Q_","H]SFLb RYFRb RLQZQ RKWYW","H\\PBP_ RTBT_ RXIWJXKYJYIWGTFPFMGKIKKLMMNOOUQWRYT RKKMMONUPWQXRYTYXWZT[P[MZKXKWLVMWLX","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","F_[NZO[P\\O\\N[MZMYNXPVUTXRZP[M[JZIXIUJSPORMSKSIRGPFNGMIMKNNPQUXWZZ[[[\\Z\\Y RM[KZJXJUKSMQ RMKNMVXXZZ[","MWRHQGRFSGSIRKQL","KYVBTDRGPKOPOTPYR]T`Vb RTDRHQKPPPTQYR\\T`","KYNBPDRGTKUPUTTYR]P`Nb RPDRHSKTPTTSYR\\P`","JZRFRR RMIWO RWIMO","E_RIR[ RIR[R","MWR[QZRYSZS\\R^Q_","E_IR[R","MWRYQZR[SZRY","G][BIb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF RQFOGNHMJLOLRMWNYOZQ[ RS[UZVYWWXRXOWJVHUGSF","H\\NJPISFS[ RRGR[ RN[W[","H\\LJMKLLKKKJLHMGPFTFWGXHYJYLXNUPPRNSLUKXK[ RTFVGWHXJXLWNTPPR RKYLXNXSZVZXYYX RNXS[W[XZYXYV","H\\LJMKLLKKKJLHMGPFTFWGXIXLWNTOQO RTFVGWIWLVNTO RTOVPXRYTYWXYWZT[P[MZLYKWKVLUMVLW RWQXTXWWYVZT[","H\\THT[ RUFU[ RUFJUZU RQ[X[","H\\MFKP RKPMNPMSMVNXPYSYUXXVZS[P[MZLYKWKVLUMVLW RSMUNWPXSXUWXUZS[ RMFWF RMGRGWF","H\\WIVJWKXJXIWGUFRFOGMILKKOKULXNZQ[S[VZXXYUYTXQVOSNRNOOMQLT RRFPGNIMKLOLUMXOZQ[ RS[UZWXXUXTWQUOSN","H\\KFKL RKJLHNFPFUIWIXHYF RLHNGPGUI RYFYIXLTQSSRVR[ RXLSQRSQVQ[","H\\PFMGLILLMNPOTOWNXLXIWGTFPF RPFNGMIMLNNPO RTOVNWLWIVGTF RPOMPLQKSKWLYMZP[T[WZXYYWYSXQWPTO RPONPMQLSLWMYNZP[ RT[VZWYXWXSWQVPTO","H\\XMWPURRSQSNRLPKMKLLINGQFSFVGXIYLYRXVWXUZR[O[MZLXLWMVNWMX RQSORMPLMLLMIOGQF RSFUGWIXLXRWVVXTZR[","MWRMQNROSNRM RRYQZR[SZRY","MWRMQNROSNRM RR[QZRYSZS\\R^Q_","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","I[MJNKMLLKLJMHNGPFSFVGWHXJXLWNVORQRT RSFUGVHWJWLVNTP RRYQZR[SZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","H\\RFK[ RRFY[ RRIX[ RMUVU RI[O[ RU[[[","G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUP RUFWGXHYJYLXNWOUP RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[","I[NFN[ ROFO[ RKFZFZLYF RK[R[","H\\RFJ[ RRFZ[ RRIY[ RKZYZ RJ[Z[","G\\LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[Y[YUX[","H\\XFK[ RYFL[ RLFKLKFYF RK[Y[YUX[","F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RLPXP RH[O[ RU[\\[","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF ROMOT RUMUT ROPUP ROQUQ","MXRFR[ RSFS[ ROFVF RO[V[","F\\KFK[ RLFL[ RYFLS RQOY[ RPOX[ RHFOF RUF[F RH[O[ RU[[[","H\\RFK[ RRFY[ RRIX[ RI[O[ RU[[[","F_KFK[ RLFRX RKFR[ RYFR[ RYFY[ RZFZ[ RHFLF RYF]F RH[N[ RV[][","G^LFL[ RMFYY RMHY[ RYFY[ RIFMF RVF\\F RI[O[","G]KEJJ RZEYJ RONNS RVNUS RKWJ\\ RZWY\\ RKGYG RKHYH ROPUP ROQUQ RKYYY RKZYZ","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF","F^KFK[ RLFL[ RXFX[ RYFY[ RHF\\F RH[O[ RU[\\[","G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[P[","H]KFRPJ[ RJFQP RJFYFZLXF RKZXZ RJ[Y[ZUX[","I\\RFR[ RSFS[ RLFKLKFZFZLYF RO[V[","I\\KKKILGMFOFPGQIRMR[ RKIMGOGQI RZKZIYGXFVFUGTISMS[ RZIXGVGTI RO[V[","H]RFR[ RSFS[ RPKMLLMKOKRLTMUPVUVXUYTZRZOYMXLUKPK RPKNLMMLOLRMTNUPV RUVWUXTYRYOXMWLUK ROFVF RO[V[","H\\KFX[ RLFY[ RYFK[ RIFOF RUF[F RI[O[ RU[[[","G^RFR[ RSFS[ RIMJLLMMQNSOTQU RJLKMLQMSNTQUTUWTXSYQZM[L RTUVTWSXQYM[L\\M ROFVF RO[V[","G]JXK[O[MWKSJPJLKIMGPFTFWGYIZLZPYSWWU[Y[ZX RMWLTKPKLLINGPF RTFVGXIYLYPXTWW RKZNZ RVZYZ","JZ","JZ","KYOBOb RPBPb ROBVB RObVb"," KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZPLRITL RMORJWO RRJR["," JZJ]Z]","MWSFRGQIQKRLSKRJ","G^QMNNLPKRJUJXKZN[P[RZUWWTYPZM RQMONMPLRKUKXLZN[ RQMSMUNVPXXYZZ[ RSMTNUPWXXZZ[[[","G\\TFQGOIMMLPKTJZIb RTFRGPINMMPLTKZJb RTFVFXGYHYKXMWNTOPO RVFXHXKWMVNTO RPOTPVRWTWWVYUZR[P[NZMYLV RPOSPURVTVWUYTZR[","H\\IPKNMMOMQNROSRSVRZOb RJOLNPNRO RZMYPXRSYP^Nb RYMXPWRSY","I\\VNTMRMONMQLTLWMYNZP[R[UZWWXTXQWOSJRHRFSEUEWFYH RRMPNNQMTMXNZ RR[TZVWWTWPVNTKSISGTFVFYH","I[XPVNTMPMNNNPPRSS RPMONOPQRSS RSSNTLVLXMZP[S[UZWX RSSOTMVMXNZP[","I[TFRGQHQIRJUKZKZJWKSMPOMRLULWMYP[S]T_TaSbQbPa RULQONRMUMWNYP[","G]HQIOKMNMONOPNTL[ RMMNNNPMTK[ RNTPPRNTMVMXNYOYRXWUb RVMXOXRWWTb","F]GQHOJMMMNNNPMUMXNZO[ RLMMNMPLULXMZO[Q[SZUXWUXRYMYIXGVFTFRHRJSMUPWRZT RSZUWVUWRXMXIWGVF","LXRMPTOXOZP[S[UYVW RSMQTPXPZQ[","H\\NMJ[ ROMK[ RXMYNZNYMWMUNQROSMS ROSQTSZT[ ROSPTRZS[U[WZYW","H\\KFMFOGPHQJWXXZY[ RMFOHPJVXWZY[Z[ RRMJ[ RRMK[","F]MMGb RNMHb RMPLVLYN[P[RZTXVU RXMUXUZV[Y[[Y\\W RYMVXVZW[","H\\NML[ ROMNSMXL[ RYMXQVU RZMYPXRVUTWQYOZL[ RKMOM","IZTFRGQHQIRJUKXK RUKQLOMNONQPSSTVT RUKRLPMOOOQQSST RSTOUMVLXLZN\\S^T_TaRbPb RSTPUNVMXMZO\\S^","I[RMONMQLTLWMYNZP[R[UZWWXTXQWOVNTMRM RRMPNNQMTMXNZ RR[TZVWWTWPVN","G]PNL[ RPNM[ RVNV[ RVNW[ RIPKNNM[M RIPKONN[N","H[LVMYNZP[R[UZWWXTXQWOVNTMRMONMQLTHb RR[TZVWWTWPVN RRMPNNQMTIb","H][MQMNNLQKTKWLYMZO[Q[TZVWWTWQVOUNSM RQMONMQLTLXMZ RQ[SZUWVTVPUN RUN[N","H\\SNP[ RSNQ[ RJPLNOMZM RJPLOONZN","H\\IQJOLMOMPNPPNVNYP[ RNMONOPMVMYNZP[Q[TZVXXUYRYOXMWNXOYR RXUYO","G]ONMOKQJTJWKYLZN[Q[TZWXYUZRZOXMVMTORSPXMb RJWLYNZQZTYWWYU RZOXNVNTPRSPYNb","I[KMMMONPPU_VaWb RMMNNOPT_UaWbYb RZMYOWRM]K`Jb","F]UFOb RVFNb RGQHOJMMMNNNPMUMXOZRZTYWVYS RLMMNMPLULXMZO[R[TZVXXUYS[M","F]JQLOONNMLNJQITIWJZK[M[OZQWRT RIWJYKZMZOYQW RQTQWRZS[U[WZYWZTZQYNXMWNYOZQ RQWRYSZUZWYYW","JZ","JZ","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","KYQFOGNINKOMQNSNUMVKVIUGSFQF"]
}

gat.alphabet.hershey_greeks = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MWRFRT RRYQZR[SZRY","JZNFNM RVFVM","H]SBLb RYBRb RLOZO RKUYU","H\\PBP_ RTBT_ RYIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_\\O\\N[MZMYNXPVUTXRZP[L[JZIYHWHUISJRQNRMSKSIRGPFNGMIMKNNPQUXWZY[[[\\Z\\Y","MWRHQGRFSGSIRKQL","KYVBTDRGPKOPOTPYR]T`Vb","KYNBPDRGTKUPUTTYR]P`Nb","JZRFRR RMIWO RWIMO","E_RIR[ RIR[R","MWSZR[QZRYSZS\\R^Q_","E_IR[R","MWRYQZR[SZRY","G][BIb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF","H\\NJPISFS[","H\\LKLJMHNGPFTFVGWHXJXLWNUQK[Y[","H\\MFXFRNUNWOXPYSYUXXVZS[P[MZLYKW","H\\UFKTZT RUFU[","H\\WFMFLOMNPMSMVNXPYSYUXXVZS[P[MZLYKW","H\\XIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQLT","H\\YFO[ RKFYF","H\\PFMGLILKMMONSOVPXRYTYWXYWZT[P[MZLYKWKTLRNPQOUNWMXKXIWGTFPF","H\\XMWPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLX","MWRMQNROSNRM RRYQZR[SZRY","MWRMQNROSNRM RSZR[QZRYSZS\\R^Q_","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","I[LKLJMHNGPFTFVGWHXJXLWNVORQRT RRYQZR[SZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","I[RFJ[ RRFZ[ RMTWT","G\\KFK[ RKFTFWGXHYJYLXNWOTP RKPTPWQXRYTYWXYWZT[K[","HYLFL[ RLFXF","I[RFJ[ RRFZ[ RJ[Z[","H[LFL[ RLFYF RLPTP RL[Y[","H\\YFK[ RKFYF RK[Y[","G]KFK[ RYFY[ RKPYP","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF ROPUP","NVRFR[","G\\KFK[ RYFKT RPOY[","I[RFJ[ RRFZ[","F^JFJ[ RJFR[ RZFR[ RZFZ[","G]KFK[ RKFY[ RYFY[","I[KFYF ROPUP RK[Y[","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF","G]KFK[ RYFY[ RKFYF","G\\KFK[ RKFTFWGXHYJYMXOWPTQKQ","I[KFRPK[ RKFYF RK[Y[","JZRFR[ RKFYF","I[KKKILGMFOFPGQIRMR[ RYKYIXGWFUFTGSIRM","H\\RFR[ RPKMLLMKOKRLTMUPVTVWUXTYRYOXMWLTKPK","H\\KFY[ RK[YF","G]RFR[ RILJLKMLQMSNTQUSUVTWSXQYMZL[L","H\\K[O[LTKPKLLINGQFSFVGXIYLYPXTU[Y[","JZ","JZ","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZPLRITL RMORJWO RRJR[","JZJ]Z]","MWSFRGQIQKRLSKRJ","H]QMONMPLRKUKXLZN[P[RZUWWTYPZM RQMSMTNUPWXXZY[Z[","I\\UFSGQIOMNPMTLZKb RUFWFYHYKXMWNUORO RROTPVRWTWWVYUZS[Q[OZNYMV","I\\JPLNNMOMQNROSRSVR[ RZMYPXRR[P_Ob","I[TMQMONMPLSLVMYNZP[R[TZVXWUWRVOTMRKQIQGRFTFVGXI","JZWOVNTMQMONOPPRSS RSSOTMVMXNZP[S[UZWX","JYTFRGQHQIRJUKXK RXKTMQONRMUMWNYP[S]T_TaSbQbP`","H\\IQJOLMNMONOPNTL[ RNTPPRNTMVMXOXRWWTb","G\\HQIOKMMMNNNPMUMXNZO[Q[SZUWVUWRXMXJWGUFSFRHRJSMUPWRZT","LWRMPTOXOZP[R[TYUW","I[OMK[ RYNXMWMUNQROSNS RNSPTQUSZT[U[VZ","JZKFMFOGPHX[ RRML[","H]OMIb RNQMVMYO[Q[SZUXWT RYMWTVXVZW[Y[[Y\\W","I[LMOMNSMXL[ RYMXPWRUURXOZL[","JZTFRGQHQIRJUKXK RUKRLPMOOOQQSTTVT RTTPUNVMXMZO\\S^T_TaRbPb","J[RMPNNPMSMVNYOZQ[S[UZWXXUXRWOVNTMRM","G]PML[ RUMVSWXX[ RIPKNNM[M","I[MSMVNYOZQ[S[UZWXXUXRWOVNTMRMPNNPMSIb","I][MQMONMPLSLVMYNZP[R[TZVXWUWRVOUNSM","H\\SMP[ RJPLNOMZM","H\\IQJOLMNMONOPMVMYO[Q[TZVXXTYPYM","G]ONMOKQJTJWKYLZN[Q[TZWXYUZRZOXMVMTORSPXMb","I[KMMMOOU`WbYb RZMYOWRM]K`Jb","F]VFNb RGQHOJMLMMNMPLULXMZO[Q[TZVXXUZP[M","F]NMLNJQITIWJZK[M[OZQW RRSQWRZS[U[WZYWZTZQYNXM","JZ","JZ","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","KYQFOGNINKOMQNSNUMVKVIUGSFQF"]
}

gat.alphabet.hershey_japanese = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "D_HYGZH[IZHY","D_H[GZHYIZI\\H^G_","D_HOJQZP\\Q RIP\\Q","D_MHKGK\\ RLHL\\ RLZXZ RLHXH RWHXGZHYJ RXHX\\ RYHY\\ RLQXQ","D_KGIFI[ RJGJ[ RJGYG RXGYF[GZI RYGYWXYWZ RYXYYXZ RZGZYY[X[WZUY RQGQP RRGRP RJPYP","D_LFJKGQ RLFMGLIINGQ RLI\\IZGXI RXI[H RRIR\\ RSIS\\ RNOLNLU RMOMU RMO[OYMWO RWOZN RGU]U[SYU RYU\\T","D_QFQLPQNULXJZG\\ RRGRK RQFSGRNQROVLYI[G\\ RGM]M[KYM RYM\\L RSMTQUTVVXY[\\][ RYY[[ RSMTPVTXWZY][","D_JGHFH\\ RIGI\\ RIG[G RZG[F]G\\I R[G[\\ R\\G\\\\ RKKYKXJWK RQKQW RRKRW RLQXQWPVQ RKWYWXVWW RTSUUVUVTTS RI[[[","D_QFQLPQNULXJZG\\ RRGRK RQFSGRNQROVLYI[G\\ RSGSKTQUTVVXY[\\][ RYY[[ RSKTPVTXWZY][","D_RGSFQFQ\\ RRGR\\ RGH]H[GZH RLLJKJU RKLKU RKLXL RWLXKZLYN RXLXU RYLYU RKPXP RKTXT RQTNWKYG[ RQVNXLYG[ RRTUXXZ[[]Z RRTUWYY]Z","D_RHSGQFQ] RRGR] RJLHKHV RILIV RILZL RYLZK\\L[N RZLZV R[L[V RIUZU","D_RHSGQFQ\\ RRGR\\ RGL]L[JYL RYL\\K RPLMRJVGY RQMOQMTKVGY RSMTPURXV[Y]X RYV[X RSMTOWSZV]X RMWVWUVTW","D_RGRFSEQEQG RGG]G[EYG RYG\\F RLKJJJR RKKKR RKKXK RWKXJZKYM RXKXR RYKYR RKQXQ RQQQXPZO[ RQYQZP[ RRQRZQ\\P\\O[MZ RLTGY RLTMUGY RVTXVZY[Y[XZWVT","D_QFQ[ RQFRFR[ RJHJP RJHKHKP RKOXO RXHXP RXHYHYP RHSH\\ RHSISI\\ RI[Z[ RZSZ\\ RZS[S[\\","D_HFHW RHFIGIW RIGMG RMGMV RLGMFNGNV RINMN RIUMU RUGVFTFTN RUGUN RPJ[JYIXJ RNN]N[MZN RWNWZV[ RXNXZW\\V[TZ RNR]R[QZR RQTRUSWTWTVSUQT","D_RHSGQFQ[ RRGR[ RRP[PYNWP RWPZO RG[][[YY[ RY[\\Z","D_QGRFPFPM RQGQM RIIUITHSI RGM]M[LZM RXGUKRNNQIT RXGYHTMPPMRITGU ROQMPM\\ RNQN\\ RNQXQ RWQXPZQYS RXQX\\ RYQY\\ RNVXV RN[X[","D_RHSGQFQ\\ RRGR\\ RGO]O[MYO RYO\\N","D_GQ]QZOXQ RXQ[P","D_JJZJXHVJ RVJYI RGX]X[VYX RYX\\W","D_II[IYGWI RWIZH RKQYQWOUQ RUQXP RGZ]Z[XYZ RYZ\\Y","D_JIHHHZ RIIIZ RII[I RZI[H]I\\K R[I[Z R\\I\\Z ROIONNRMT RPIPNOQMTKV RSISSTTXTYSXR RTITRUSWSXRXP RIY[Y","D_IHZHXFVH RVHYG RQHNZ RRHOZ RIPVP RUPVOXPWR RVPUZ RWPWRVZ RGZ]Z[XYZ RYZ\\Y","D_RISHQGQM RRHRM RGM]M[KYM RYM\\L RMQLTJXH[ RNRMT RMQORMUJYH[ RTQVSYWZY[Z\\Y[WXTTQ RYV[Y","D_MINHLGLZM[Y[ZZYX RXZYZYY RMHMYNZWZYXZU RHQNPSO[MXLWN RWNYM","D_RLQOOTMWJZG\\ RRLSMRPPTNWLYI[G\\ RLGUG RRGSFUGSI RSGSLTQUTVVXY[\\][ RYY[[ RSLTPVTXWZY][","D_NIOHMGMRLVJYG\\ RNHNRMVKYG\\ RGNTM RSMTLVMUO RTMTZU[\\[]Z\\X R[Z\\Z\\Y RUMUYVZZZ\\X]U","D_HYGZH[IZHY","D_HYGZH[IZHY","D_HYGZH[IZHY","D_HYGZH[IZHY","D_HYGZH[IZHY","D_HYGZH[IZHY","D_OFQGQIPL RPGPRQV RKKMLRLUKXJ RUKVJXJ RSSTOUPSSPWNYLZJZIYIVJTLRNQQPVPYQ[S\\U\\W[YY[V\\T\\ RKZJYJVKTMRQP RVPXQZS[U[WZYX[V\\","D_HHJIJKIMHP RIIIKHPHSIVJWLXMXMVNSOQ RJWLWMV RWLYM[P\\S\\UZTWU R[P[SZT","D_NEOFQGUG ROFTFUGQI RKMKNLOMOPMRL RKNLNOMRLTLWMXOXRWUUXRZN\\ RTLVMWOWRVUUWSYP[","D_NEOFQGUG ROFTFUGQI RJMJNKOMORMULVM RJNMNRM RVMRPLVHZ RULRP RHZHYLVNURUSVTZU[\\[ RW[ZZ[Z\\[","D_MFOGOINM RNGN[ RNTOZN[MYKXHW RHMJNNNQMSL RNNPMQLSL RHXLUQRTQVQYRZTZVYXWYUYSXRV RHXHWLU RVQXRYTYVXXWY RWKYK[L\\MZMYN RYKZLZM","D_NFPGPIOLMQH[ ROGOIMOKTH[ RHMHNIOJOMMOLRLTMUOURTVRZQ[P[PZOYMX RHNJNMM RRLTNTRSVRXPZ RWMYN[P\\R\\T[SYT RZO[Q[S","D_NFQGRKSNURXVWW RPGRK RURWW RLKNLQLTK RIOJPMQRQWPZO RWPYNZO RWWUVRUNULVKWKYLZN[Q\\W\\ RN[V[W\\","D_TFVGVHNP RUGTINPNQSVUYV[ RNQVXWZV[","D_IGKHKJJMIQ RJHJKIQIUJYKZKXLTMQNOONQMZM\\L RIUJWKX RVMZL[K\\L RVFXGXUWXUZR\\ RWGXJ RXRWVUYR\\","D_MHOIRJTJWI ROITIVHWIQL RKSKULWNXRYYY RNXXXYY","D_JKKLNMRMVLXKYJ RVLXJYJ RPFQIRKUOWRXT RPFQFQHRK RUOXRYTYU RYUXTVSRRNRKSJUJWKYMZQ[U[ RJWKXMYQZVZU[","D_LFNGMSMXNZ RMGLSLWMYNZP[S[VZYX[V","D_RFTGTSSUQVOUNSNROPQOSPTRTVSZQ\\ RSGTL RTVSYQ\\ RHJJLMLVKZJ\\K RIKML RVK\\K","D_LJNKNVOXPYRZZZ RMKNN RUZXYYYZZ RUGWHWTVVUURS RVHWK RWQVTUU RHNJPLPPOUNYM[M\\N RIOPO RUN\\N","D_NGPIVG ROHQHVGWH RWHTKNOJQ RVGUISKNO RIPKROP RJQOPUOZN[O RUO[O RUOSPQRPTPVQXRYUZYZ RQXTYXYYZ","D_NFPGPINOMRKWI[ ROGOJNO RMRKVIYI[ RHMJNMNPMRLTK RRLSJTK RUNXN[OYOWP RXNYO RRVSXTYVZ[Z RSXUY\\Y[Z","D_MFOGOIMNLRLTMU RNGNK RMNMU RHJKKOKSJUI RSJTHUI RMUOSRQUPXPZQ[S[VZXWZS[O[ RXPYQZSZVYXWZ","D_HLJNOLSKWKZL[M\\O\\R[TZUXVUWPX RIMOL RWKYLZM[O[RZTXV","D_HIJKLKPJUIYH[H\\I RIJPJ RUI\\I RYIVJSLQOPRPUQXRYTZX[[[ RPUQWRXTYXZZZ[[","D_OFQGQQ RPGPMQQ RWNYPQQ RXOTPQQNRLSKUKWLYMZO[Z[ RLYNZYZZ[","D_MFOGOIMOLRJWH[ RNGNJMO RLRJVHYH[ RHMJNLNOMQLSK RQLRJSK RVJXJZK\\MZLXM RXJZL RVOVQWTXVXXWZU[R[PZOXPVRUUUWV[Z RVQWVWYU[ RYXZZ[Z","D_IGKHKJJMIQ RJHJKIQIUJYKZKXLTMQ RIUJWKX RSJVIYI[JYJWK RWIYJ RQSQURWUX\\X RQURVUWZW\\X","D_JILJLO RKJLOMRNTOVPW RNTPVPW RRGTHTJROOVMYKZIZHXHVISJQLOOMSLVLYM[O\\R\\U[XZYXZVZTYSXSWTVVUXUZV\\Y RSHSJRO RJZIXIUJRLO RVLXMZO[R[VZY RZV\\X\\Y","D_MFOGOIM[ RNGN[M[LXKWIV RHLINKNOLOM RIMLMNLMP ROMMPKSHWHVKSOOSLVKXKZL[N[UZXYYWZUZSYRXRWSVUUWUYVZW\\Z RXKYLZNZVYY RZW\\Y\\Z","D_QHRJRMQPPRNULWJWIVHTHQINKKNIQHTHWIYJ[L\\O\\R[UYWWXTYQY RNULVJVITIQJMKK RWIZL[O[RZUWX","D_IGKHKJJMIQ RJHJKIQIUJYKZKXLTMQ RIUJWKX RUGWHWWVYTZRZPYOWPURTTTVU[Y RVHWL RVU[X[Y RPMRNUNYM[L RYMZK[L","D_IGJHLIPI RJHOHPI RPIMKKMIPHSHVIXJYLZOZRYTWUUVQVMUIVI RHUIWJXLYOYRXTVUTVQ RVIXLYN[Q\\SZSYT RUIXL RYNZQZS","D_PFQISJ RQHSITITJ RTJQKOLNMNOOPQQSRTSUUUWTYRZPZMYKW RQQSSTUTWSYRZ RIYLVOTRS RVSYT[V\\XYX RIYIXLV RVSXTZV[X","D_HPJRMM RIQNLPLUQYT[U\\VZVXW RUQZV","D_IGKHKJJMIQ RJHJKIQIUJYKZKXLTMQ RIUJWKX RQGSHUHYG RUHWGXFYG RPOSPVPYO[N RYOZM[N RUHWIWWVYTZRZPYOWPURTTTVU[Y RVIWM RVU[X[Y","D_RFTGTXSZQ[O[MZLXMVOUQUTVWXZ[ RSGTK RWXZZZ[ RHIJKSKZJ RIJNK RSKWJYIZJ RMPOQSQWPYO RWPXNYO","D_JGKIMIPHSFTG RKHPH RTGPMMSKVJWIWHVHTIRKQPQTRWS\\U RSFPM RTR\\T\\U RVMXNXTWWUYSZP[ RWNWUVX","D_MFOGOINMMQLTKVJWIWHVHTIRJQKQLRLWMZO[U[XZYYXXWVVRVNWMYM[N\\P\\Q[QYR RNGNM RLWMYOZUZWYXX RYM[O[Q RHKKLNLQKSJ RQKRISJ","D_JILJLO RKJLOMRNTOVPW RNTPVPW RSGUHUJTMRRQTOWMYKZIZHYHWITJRLPONRMVMYN[P\\S\\V[XZYXZU[R[ RTHTJRR RJZIYIVJSLP RVMXNZP[S[VZXXZ","D_OFQGQIPM RPGPTQXRZT[X[ZZ[X[VZTXRUP RW[YZZXZUYS RLJMKPLSL RMKRKSL RSLPMNNLPKRLTNUSU","D_PFRGSHTJSKPJMJLKLMOTQ[ RRGSISK ROTRZQ[ RHNIPKPNNRLVKYK[L\\N\\P[RZSWTTTQS RIOKONN RYKZL[N[PZRYSWT","D_HHJIJKIMHP RIIIKHPHSIVJWLXMXMVNSOQ RJWLWMV RWLYM[P\\S\\UZTWU R[P[SZT","D_HJJKJMIP RIKITJWKXKVLSMQONRKUJXJZK[L\\N\\Q[SYUWVTVRUPSOPOMPIQGSFUFVHVSUWTYQ[ RITJVKV RZK[N[QZT RVSUVTXQ[","D_NEOFQGUG ROFTFUGQI RJMJNKOMORMULVM RJNMNRM RVMRPLVHZ RULRP RHZHYLVNURUSVTZU[\\[ RW[ZZ[Z\\[","D_PFSGSIRN RRGRXQZO[L[JZIYIWJVLUOURVVX[[ RRVWX[Z[[ RRNUNYM RUNWMXLYM","D_OFQFSGTHRHPI RQFRGRH RLLKNJRJTKUORQQTPWPYQZSZUYWWYUZQ[O[ RJRKTLT RWPXQYSYUXWVYTZQ[","D_LFNGNILM RMGMILMLPMSNTNROOQLSJUIWIXJYMYRXVVYS[O\\ RLPMRNR RVIWJXMXRWVUYS[","D_MGNIPIUG RNHPHUGVH RVHRKNPKU RUGRK RNPKSKU RKUMSPQSPVPXQYRZTZWYYXZV[S[QZPYPXQWSWUXWZ RVPXRYTYWXYV[","D_MFOGOIM[ RNGN[M[LXKWIV RHLINKNOLOM RIMLMOLMP ROMMPKSHWHVKSOOSLVKWKYLZNYXYZZ[ RWKXLYNXXXZY[Z[[Z\\X","D_MGNIPIUG RNHPHUGVH RVHRKNPKU RUGRK RNPKSKU RKUMSPQSPVPXQYRZTZWYYW[T\\R\\ RVPXRYTYWXZ","D_MFOGOIM[ RNGN[M[LXKWIV RHLINKNOLOM RIMLMOLMP ROMMPKSHWHVKSNPQNTMWMYNZO[Q[TZWXYVZS[ RWMYOZQZTYWVZ","D_MGNIPITG RNHPHTGUH RUHQNMVLXKYIYHWHUISKQNORNVNYO[Q\\S\\V[XYZW[T[RZQYQXRWTWVXXZ RTGQN RJYIWIUJR RZP[S[VZY","D_NEOFQGUG ROFTFUGQI RKMKNLOMOPMRL RKNLNOMRLTLWMXOXRWUUXRZN\\ RTLVMWOWRVUUWSYP[","D_LGMIOIQHTF RMHOHRGTFUG RUGQJMNJR RTFQJ RJRJPMNOMRLULWMXOXQWSUTPTOSOQPPRPSQSSRTNUKWHZH[I[KW RJYLXNXPZQZSXVWYW[X\\Y\\[[ZYZ RNXPYQYSX RYW[Y[Z","D_PFRGRHPLNOKRHU RQGQHPL RKRHTHU RMPOOQOSPTRTV RQORPSRSWTV RIJLKOKSJWI RSJVHWI R[O\\QTRQSOTNVNXOZQ[Y[ R[PTR RT[XZY[","D_QFSHPMLTH[ RRGPM RH[HYLTNRPQRQTRTWUYVZ RRQSRSWTYVZXZZY[W\\T","D_HYGZH[IZHY","D_HYGZH[IZHY","D_HYGZH[IZHY","D_HYGZH[IZHY","D_NFPGPIOLMQH[ ROGOIMOKTH[ RHMHNIOJOMMOLRLTMUOURTVRZQ[P[PZOYMX RHNJNMM RRLTNTRSVRXPZ RWMYN[P\\R\\T[SYT RZO[Q[S RWHYJ RYF[H","D_NFQGRKSNURXVWW RPGRK RURWW RLKNLQLTK RIOJPMQRQWPZO RWPYNZO RWWUVRUNULVKWKYLZN[Q\\W\\ RN[V[W\\ RWHYJ RYF[H","D_TFVGVHNP RUGTINPNQSVUYV[ RNQVXWZV[ RYH[J R[F]H","D_IGKHKJJMIQ RJHJKIQIUJYKZKXLTMQNOONQMZM\\L RIUJWKX RVMZL[K\\L RVFXGXUWXUZR\\ RWGXJ RXRWVUYR\\ R[G]I R]E_G","D_MHOIRJTJWI ROITIVHWIQL RKSKULWNXRYYY RNXXXYY RYG[I R[E]G","D_JKKLNMRMVLXKYJ RVLXJYJ RPFQIRKUOWRXT RPFQFQHRK RUOXRYTYU RYUXTVSRRNRKSJUJWKYMZQ[U[ RJWKXMYQZVZU[ RZG\\I R\\E^G","D_LFNGMSMXNZ RMGLSLWMYNZP[S[VZYX[V RSHUJ RUFWH","D_RFTGTSSUQVOUNSNROPQOSPTRTVSZQ\\ RSGTL RTVSYQ\\ RHJJLMLVKZJ\\K RIKML RVK\\K RXFZH R[E]G","D_LJNKNVOXPYRZZZ RMKNN RUZXYYYZZ RUGWHWTVVUURS RVHWK RWQVTUU RHNJPLPPOUNYM[M\\N RIOPO RUN\\N RZH\\J R\\F^H","D_NGPIVG ROHQHVGWH RWHTKNOJQ RVGUISKNO RIPKROP RJQOPUOZN[O RUO[O RUOSPQRPTPVQXRYUZYZ RQXTYXYYZ RZH\\J R\\F^H","D_NFPGPINOMRKWI[ ROGOJNO RMRKVIYI[ RHMJNMNPMRLTK RRLSJTK RUNXN[OYOWP RXNYO RRVSXTYVZ[Z RSXUY\\Y[Z RXHZJ RZF\\H","D_MFOGOIMNLRLTMU RNGNK RMNMU RHJKKOKSJUI RSJTHUI RMUOSRQUPXPZQ[S[VZXWZS[O[ RXPYQZSZVYXWZ RXIZK RZG\\I","D_HLJNOLSKWKZL[M\\O\\R[TZUXVUWPX RIMOL RWKYLZM[O[RZTXV RZH\\J R\\F^H","D_HIJKLKPJUIYH[H\\I RIJPJ RUI\\I RYIVJSLQOPRPUQXRYTZX[[[ RPUQWRXTYXZZZ[[ RZM\\O R\\K^M","D_OFQGQQ RPGPMQQ RWNYPQQ RXOTPQQNRLSKUKWLYMZO[Z[ RLYNZYZZ[ RXIZK RZG\\I","D_IGKHKJJMIQ RJHJKIQIUJYKZKXLTMQ RIUJWKX RUGWHWWVYTZRZPYOWPURTTTVU[Y RVHWL RVU[X[Y RPMRNUNYM[L RYMZK[L RZG\\I R\\E^G","D_IGJHLIPI RJHOHPI RPIMKKMIPHSHVIXJYLZOZRYTWUUVQVMUIVI RHUIWJXLYOYRXTVUTVQ RVIXLYN[Q\\SZSYT RUIXL RYNZQZS RYH[J R[F]H","D_PFQISJ RQHSITITJ RTJQKOLNMNOOPQQSRTSUUUWTYRZPZMYKW RQQSSTUTWSYRZ RIYLVOTRS RVSYT[V\\XYX RIYIXLV RVSXTZV[X RWIYK RYG[I","D_HPJRMM RIQNLPLUQYT[U\\VZVXW RUQZV RUJWL RWHYJ","D_IGKHKJJMIQ RJHJKIQIUJYKZKXLTMQ RIUJWKX RQGSHUHYG RUHWGXFYG RPOSPVPYO[N RYOZM[N RUHWIWWVYTZRZPYOWPURTTTVU[Y RVIWM RVU[X[Y R[I]K R]G_I","D_IGKHKJJMIQ RJHJKIQIUJYKZKXLTMQ RIUJWKX RUGWHWWVYTZRZPYOWPURTTTVU[Y RVHWL RVU[X[Y RPMRNUNYM[L RYMZK[L R[EZFZH[I]I^H^F]E[E","D_IGJHLIPI RJHOHPI RPIMKKMIPHSHVIXJYLZOZRYTWUUVQVMUIVI RHUIWJXLYOYRXTVUTVQ RVIXLYN[Q\\SZSYT RUIXL RYNZQZS RZFYGYIZJ\\J]I]G\\FZF","D_PFQISJ RQHSITITJ RTJQKOLNMNOOPQQSRTSUUUWTYRZPZMYKW RQQSSTUTWSYRZ RIYLVOTRS RVSYT[V\\XYX RIYIXLV RVSXTZV[X RXGWHWJXKZK[J[HZGXG","D_HPJRMM RIQNLPLUQYT[U\\VZVXW RUQZV RVHUIUKVLXLYKYIXHVH","D_IGKHKJJMIQ RJHJKIQIUJYKZKXLTMQ RIUJWKX RQGSHUHYG RUHWGXFYG RPOSPVPYO[N RYOZM[N RUHWIWWVYTZRZPYOWPURTTTVU[Y RVIWM RVU[X[Y R\\G[H[J\\K^K_J_H^G\\G","D_HGJIOHUGZF\\H RIHOH RUG[G R\\HZJVMTN R[GYJWLTN RRMTNTQSUQXN[ RRMSNSQRUPY","D_VFXHULRONRKT RWGVISMOQKT RSNUOU\\ RSNTOT[U\\","D_PFSGSIRK RPFRGRK RJIKKKPLQ RLKLQ RLKYK RJIKJOK RUKXJZL RZLWRUURXOZM[ RYKXNVRSVPYM[","D_QKSLSW RRLRW RJJLLXJZK RKKZK RHVJXZV\\W RIW\\W","D_RFUGUYT[SYPW RTGTXSY RHLJNOMULZK\\L RIMOM RUL\\L RSMPQLUHX RTMRPOSKVHX","D_QFSHRKPPNTLWI[ RRGQJOPMUI[ RILKNOMTLXKZM RJMOM RTLYL RZMYSXWWYU[TZRY RYLXSWWVYTZ","D_OFRGT[ RQGS\\T[ RJLLNPMTLXKZL RKMPM RTLZL RHRJTOSURZQ\\R RISOS RUR\\R","D_PFRHPLNOLQJS RQGPJNNLQ RQJSKXK RUKWJYL RYLVRSVPYM[K\\ RXKWNURRVOYK\\","D_NFPHNLLOJQHS ROGNJLNJQ RLOTNYM\\N RTN\\N RROTQRUPXNZL\\ RSPRSPWNZ","D_JJLLXJZL RKKYK RZLYOXV RYKXPXV RJVLXXVYW RKWYW","D_LINJNOMS RMJMS RTFWGWLVQUTTVRYP[ RVGVLUQTURY RHMJOONUMZL\\M RINON RUM\\M","D_MGOHPIPJOJNHMG RHNJOKPKQJQIOHN RIXKZOXSUWQ[L RJYOWST[L","D_JILKWIYK RKJXJ RYKWNTQQSOTJV RXJWLUOSQPSJV RUSXUZWZXYXXVUS","D_OGRHRJQS RQHQVRXTY[Y RVYZX[Y RHNJPOOUNZM\\O RIOOO RUN[N R\\OYQVT R[NVT","D_IIKJLKLLKLJJII RXHZJWPTTQWNYLZ RYIXLVPSTPWLZ","D_PFRHPLNOLQJS RQGPJNNLQ RQJSKXK RUKWJYL RYLVRSVPYM[K\\ RXKWNURRVOYK\\ RNPQQSRVTWUWVVVUTSR","D_LJOJTIXG ROJRITHWFXG RPJSKSQRUPXM[ RRKRQQUOY RHNJPOOUNZM\\N RIOOO RUN\\N","D_IIKJLKLLKLJJII ROHQIRJRKQKPIOH RXHZJWPTTQWNYLZ RYIXLVPSTPWLZ","D_LFNHWFXG RMGXG RHNJPOOUNZM\\N RIOOO RUN\\N RSOSQRUPXM[ RRORQQUOY","D_MFPGP\\ ROGO[P\\ RPOROUPVQVRURTPRO","D_QFTGTLSQRTQVOYM[ RSGSLRQQUOY RHNJPOOUNZM\\N RIOOO RUN\\N","D_LJNLWJXK RMKXK RHVJXZV\\W RIW\\W","D_JILKWIYK RKJXJ RYKWNTQQSOTJV RXJWLUOSQPSJV RMOPPTRWTYVYWXWVTTR","D_PFRGSHSIRIQGPF RJLLNVLXN RKMWM RXNTRQTOUJW RWMUPSRPTJW RRSSTS\\ RRSR[S\\ RXUZV[W[XZXYVXU","D_WHYJVPSTPWMYKZ RXIWLTQQUNXKZ","D_LLNNMQLSJUHV RMMLQJU RVLXNZQ\\U\\V[VZRXN","D_IGLHLJKS RKHKVLXNYYY RQYUXWXYY RKROQRPXN RRPVNXN","D_JGLIYI RKHOI RUIXHZJ RZJWPUSRVOXMY RYIXLVPSTPWMY","D_GQISPLQL[V RHRJQNN RUPZT\\U[V","D_PFSGSYR[QYOX RRGRXQY RHLJNOMULZK\\L RIMOM RUL\\L RLSJVIWHWHVJULS RXS[U\\V\\W[WZUXS","D_HLJNOMULZK\\M RIMOM RUL[L R\\MZOVRTS R[LYOWQTS RQRTTVVVWUWTUQR","D_PFSGUHVIVJUJSHPF RMMPNROSPSQRQPOMM RNVSXUYVZV[U[SYPWNV","D_RITKMW RSJMW RHWJYYV RIXYV RVSXUZX[X[WYUVS","D_WHYJVPSTPWMYKZ RXIWLUPRTOWKZ RONSPVRXTXUWUVSTQQO","D_LINKWIXJ RMJXJ RQKQVRXTY[Y RRKRMQS RVYZX[Y RHQJSORUQZP\\Q RIROR RUQ\\Q","D_OFRGT[ RQGS\\T[ RHLJNOMULZK\\M RIMOM RUL[L R\\MYPVRTS R[LZNWQTS","D_VFXHULRONRKT RWGVISMOQKT RSNUOU\\ RSNTOT[U\\","D_IJKLUJWL RJKVK RWLVOUV RVKUPUV RHVJXZV\\W RIW\\W","D_QKSLSW RRLRW RJJLLXJZK RKKZK RHVJXZV\\W RIW\\W","D_JJLLXJZL RKKYK RJPLRXP RKQXQ RJVLXXV RKWXW RZLYOYY RYKXPXY","D_LFNHWFXG RMGXG RJMLOWMYO RKNXN RYOWRTUQWOXLY RXNWPUSSUPWLY","D_LINJNOMS RMJMS RTFWGWQVUTXQ[ RVGVQUUTWQ[","D_LJNKNNMRKUHX RMKMNLRKTHX RQISJSMRS RRJRVSXUXWWYU\\Q RRVSWVWXV","D_HIKJKMJS RJJJVKXNXQWTUXR[O RJVKWNWQVUTXR","D_JJLLXJZL RKKYK RKKKZ RLLLXKZ RZLYOXV RYKXPXV RLXXVYW RLWYW","D_JGKIKNLO RLILO RLIYI RJGKHOI RUIXHZJ RZJWPUSRVOXMY RYIXLVPSTPWMY","D_QFTGT[ RSGS\\T[ RJJLLXJZK RKKZK RLLNMNR RMMMR RHQJSZQ\\R RIR\\R","D_PFSGSIRK RPFRGRK RJIKKKPLQ RLKLQ RLKYK RJIKJOK RUKXJZL RZLWRUURXOZM[ RYKXNVRSVPYM[","D_JJLLXJZL RKKYK RZLWNSQ RYKSQ RQPSQSW RRQRW RHVJXZV\\W RIW\\W","D_JGLIYI RKHOI RUIXHZJ RLNNPVO RMOVO RZJWPUSRVOXMY RYIXLVPSTPWMY","D_JHLIMJMKLKKIJH RIWKYOWSTWP[K RJXOVSS[K","D_HYGZH[IZHY","D_HYGZH[IZHY","D_HYGZH[IZHY","D_HYGZH[IZHY","D_QFSHRKPPNTLWI[ RRGQJOPMUI[ RILKNOMTLXKZM RJMOM RTLYL RZMYSXWWYU[TZRY RYLXSWWVYTZ RZH\\J R\\F^H","D_OFRGT[ RQGS\\T[ RJLLNPMTLXKZL RKMPM RTLZL RHRJTOSURZQ\\R RISOS RUR\\R RZH\\J R\\F^H","D_PFRHPLNOLQJS RQGPJNNLQ RQJSKXK RUKWJYL RYLVRSVPYM[K\\ RXKWNURRVOYK\\ RYH[J R[F]H","D_NFPHNLLOJQHS ROGNJLNJQ RLOTNYM\\N RTN\\N RROTQRUPXNZL\\ RSPRSPWNZ RYH[J R[F]H","D_JJLLXJZL RKKYK RZLYOXV RYKXPXV RJVLXXVYW RKWYW RZH\\J R\\F^H","D_LINJNOMS RMJMS RTFWGWLVQUTTVRYP[ RVGVLUQTURY RHMJOONUMZL\\M RINON RUM\\M RZH\\J R\\F^H","D_MGOHPIPJOJNHMG RHNJOKPKQJQIOHN RIXKZOXSUWQ[L RJYOWST[L RVHXJ RXFZH","D_JILKWIYK RKJXJ RYKWNTQQSOTJV RXJWLUOSQPSJV RUSXUZWZXYXXVUS RZH\\J R\\F^H","D_OGRHRJQS RQHQVRXTY[Y RVYZX[Y RHNJPOOUNZM\\O RIOOO RUN[N R\\OYQVT R[NVT RYH[J R[F]H","D_IIKJLKLLKLJJII RXHZJWPTTQWNYLZ RYIXLVPSTPWLZ R[G]I R]E_G","D_PFRHPLNOLQJS RQGPJNNLQ RQJSKXK RUKWJYL RYLVRSVPYM[K\\ RXKWNURRVOYK\\ RNPQQSRVTWUWVVVUTSR RYH[J R[F]H","D_LJOJTIXG ROJRITHWFXG RPJSKSQRUPXM[ RRKRQQUOY RHNJPOOUNZM\\N RIOOO RUN\\N RZH\\J R\\F^H","D_IIKJLKLLKLJJII ROHQIRJRKQKPIOH RXHZJWPTTQWNYLZ RYIXLVPSTPWLZ R[G]I R]E_G","D_LFNHWFXG RMGXG RHNJPOOUNZM\\N RIOOO RUN\\N RSOSQRUPXM[ RRORQQUOY RZH\\J R\\F^H","D_MFPGP\\ ROGO[P\\ RPOROUPVQVRURTPRO RTHVJ RVFXH","D_LLNNMQLSJUHV RMMLQJU RVLXNZQ\\U\\V[VZRXN RYI[K R[G]I","D_IGLHLJKS RKHKVLXNYYY RQYUXWXYY RKROQRPXN RRPVNXN RYI[K R[G]I","D_JGLIYI RKHOI RUIXHZJ RZJWPUSRVOXMY RYIXLVPSTPWMY R[G]I R]E_G","D_GQISPLQL[V RHRJQNN RUPZT\\U[V RVJXL RXHZJ","D_PFSGSYR[QYOX RRGRXQY RHLJNOMULZK\\L RIMOM RUL\\L RLSJVIWHWHVJULS RXS[U\\V\\W[WZUXS RZG\\I R\\E^G","D_LLNNMQLSJUHV RMMLQJU RVLXNZQ\\U\\V[VZRXN RZGYHYJZK\\K]J]H\\GZG","D_IGLHLJKS RKHKVLXNYYY RQYUXWXYY RKROQRPXN RRPVNXN RZGYHYJZK\\K]J]H\\GZG","D_JGLIYI RKHOI RUIXHZJ RZJWPUSRVOXMY RYIXLVPSTPWMY R\\E[F[H\\I^I_H_F^E\\E","D_GQISPLQL[V RHRJQNN RUPZT\\U[V RWHVIVKWLYLZKZIYHWH","D_PFSGSYR[QYOX RRGRXQY RHLJNOMULZK\\L RIMOM RUL\\L RLSJVIWHWHVJULS RXS[U\\V\\W[WZUXS R[EZFZH[I]I^H^F]E[E"]
}

gat.alphabet.hershey_markers = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","KYQKNLLNKQKSLVNXQYSYVXXVYSYQXNVLSKQK","LXLLLXXXXLLL","KYRJKVYVRJ","LXRHLRR\\XRRH","JZRIPOJOOSMYRUWYUSZOTORI","LXPLPPLPLTPTPXTXTTXTXPTPTLPL","KYRKRY RKRYR","MWMMWW RWMMW","MWRLRX RMOWU RWOMU","NVQNOONQNSOUQVSVUUVSVQUOSNQN ROQOS RPPPT RQOQU RRORU RSOSU RTPTT RUQUS","NVNNNVVVVNNN ROOOU RPOPU RQOQU RRORU RSOSU RTOTU RUOUU","MWRLMUWURL RROOT RROUT RRRQT RRRST","LULRUWUMLR RORTU RORTO RRRTS RRRTQ","MWRXWOMORX RRUUP RRUOP RRRSP RRRQP","OXXROMOWXR RURPO RURPU RRRPQ RRRPS","D`DR`R RDRRb R`RRb","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","KYQKNLLNKQKSLVNXQYSYVXXVYSYQXNVLSKQK","LXLLLXXXXLLL","KYRJKVYVRJ","LXRHLRR\\XRRH","JZRIPOJOOSMYRUWYUSZOTORI","LXPLPPLPLTPTPXTXTTXTXPTPTLPL","KYRKRY RKRYR","MWMMWW RWMMW","MWRLRX RMOWU RWOMU","NVQNOONQNSOUQVSVUUVSVQUOSNQN ROQOS RPPPT RQOQU RRORU RSOSU RTPTT RUQUS","NVNNNVVVVNNN ROOOU RPOPU RQOQU RRORU RSOSU RTOTU RUOUU","MWRLMUWURL RROOT RROUT RRRQT RRRST","LULRUWUMLR RORTU RORTO RRRTS RRRTQ","MWRXWOMORX RRUUP RRUOP RRRSP RRRQP","OXXROMOWXR RURPO RURPU RRRPQ RRRPS","D`DR`R RDRRb R`RRb","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ","JZ"]
}

gat.alphabet.hershey_mathlow = {
  lineHeight:70,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","F^RJR[ RJRZR RJ[Z[","F^RJR[ RJJZJ RJRZR","G]KKYY RYKKY","PURQRRSRSQRQ","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","F^ZFJMZT RJVZV RJ[Z[","F^JFZMJT RJVZV RJ[Z[","KYVBTDRGPKOPOTPYR]T`Vb RTDRHQKPPPTQYR\\T`","KYNBPDRGTKUPUTTYR]P`Nb RPDRHSKTPTTSYR\\P`","JZRLRX RMOWU RWOMU","E_RIR[ RIR[R","NVSWRXQWRVSWSYQ[","E_IR[R","NVRVQWRXSWRV","G][BIb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF","H\\NJPISFS[","H\\LKLJMHNGPFTFVGWHXJXLWNUQK[Y[","H\\MFXFRNUNWOXPYSYUXXVZS[P[MZLYKW","H\\UFKTZT RUFU[","H\\WFMFLOMNPMSMVNXPYSYUXXVZS[P[MZLYKW","H\\XIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQLT","H\\YFO[ RKFYF","H\\PFMGLILKMMONSOVPXRYTYWXYWZT[P[MZLYKWKTLRNPQOUNWMXKXIWGTFPF","H\\XMWPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLX","AcHBHb RIBIb R[B[b R\\B\\b RDB`B RDbMb RWb`b","BaGBQPFb RFBPP REBPQ REB\\B^I[B RGa\\a RFb\\b^[[b","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","E_YIK[ RIO[O RIU[U","E_IM[M RIR[R RIW[W","I\\XMX[ RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","H[LFL[ RLPNNPMSMUNWPXSXUWXUZS[P[NZLX","I[XPVNTMQMONMPLSLUMXOZQ[T[VZXX","I\\XFX[ RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","I[LSXSXQWOVNTMQMONMPLSLUMXOZQ[T[VZXX","MYWFUFSGRJR[ ROMVM","I\\XMX]W`VaTbQbOa RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","I\\MFM[ RMQPNRMUMWNXQX[","NVQFRGSFREQF RRMR[","MWRFSGTFSERF RSMS^RaPbNb","IZMFM[ RWMMW RQSX[","NVRFR[","CaGMG[ RGQJNLMOMQNRQR[ RRQUNWMZM\\N]Q][","I\\MMM[ RMQPNRMUMWNXQX[","I\\QMONMPLSLUMXOZQ[T[VZXXYUYSXPVNTMQM","H[LMLb RLPNNPMSMUNWPXSXUWXUZS[P[NZLX","I\\XMXb RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","KXOMO[ ROSPPRNTMWM","J[XPWNTMQMNNMPNRPSUTWUXWXXWZT[Q[NZMX","MYRFRWSZU[W[ ROMVM","I\\MMMWNZP[S[UZXW RXMX[","JZLMR[ RXMR[","G]JMN[ RRMN[ RRMV[ RZMV[","J[MMX[ RXMM[","JZLMR[ RXMR[P_NaLbKb","J[XMM[ RMMXM RM[X[","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","F_[WYWWVUTRPQOONMNKOJQJSKUMVOVQURTUPWNYM[M","F_\\S[UYVWVUUTTQPPONNLNJOIQISJULVNVPUQTTPUOWNYN[O\\Q\\S","KYQFOGNINKOMQNSNUMVKVIUGSFQF","H\\PBP_ RTBT_ RYIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX","E[HMLMRY RKMR[ R[BR[","AbDMIMRY RHNR[ Rb:R[","F^ZJSJOKMLKNJQJSKVMXOYSZZZ","F^JJJQKULWNYQZSZVYXWYUZQZJ","F^JJQJUKWLYNZQZSYVWXUYQZJZ","F^JZJSKOLMNKQJSJVKXMYOZSZZ","F^ZJSJOKMLKNJQJSKVMXOYSZZZ RJRVR","E_XP[RXT RUMZRUW RIRZR","JZPLRITL RMORJWO RRJR[","E_LPIRLT ROMJROW RJR[R","JZPXR[TX RMURZWU RRIRZ","I\\XRWOVNTMRMONMQLTLWMYNZP[R[UZWXXUYPYKXHWGUFRFPGOHOIPIPH RRMPNNQMTMXNZ RR[TZVXWUXPXKWHUF","H\\JFR[ RKFRY RZFR[ RJFZF RKGYG","AbDMIMRY RHNR[ Rb:R[","F^[CZD[E\\D\\C[BYBWCUETGSJRNPZO^N` RVDUFTJRVQZP]O_MaKbIbHaH`I_J`Ia","Ca].\\.[/[0\\1]1^0^.],[+Y+W,U.T0S3R:QJQjPsOv R\\/\\0]0]/\\/ RR:Rj RU.T1S:SZRjQqPtOvMxKyIyGxFvFtGsHsItIuHvGv RGtGuHuHtGt","I[X+U1R8P=OANFMNMVN^OcPgRlUsXy RU1S6Q<P@OFNNNVO^PdQhSnUs","I[L+O1R8T=UAVFWNWVV^UcTgRlOsLy RO1Q6S<T@UFVNVVU^TdShQnOs","I[M+MRMy RN+NRNy RM+X+ RMyXy","I[V+VRVy RW+WRWy RL+W+ RLyWy","I\\XFX[ RKFXF RPPXP RK[X[","H\\KILKXWYYY[ RLLXX RKIKKLMXYY[ RPPLTKVKXLZK[ RKVMZ RLTLVMXMZK[ RSSXN RVIVLWNYNYLWKVI RVIWLYN","E_RIQJRKSJRI RIR[R RRYQZR[SZRY","KYOBOb RUBUb","F^RBR[ RI[[[","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","F^[BI[[[","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","E_RIQJRKSJRI RIYHZI[JZIY R[YZZ[[\\Z[Y","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O"]
}

gat.alphabet.hershey_mathupp = {
  lineHeight:70,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","F^RJR[ RJRZR RJ[Z[","F^RJR[ RJJZJ RJRZR","G]KKYY RYKKY","PURQRRSRSQRQ","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","F^ZFJMZT RJVZV RJ[Z[","F^JFZMJT RJVZV RJ[Z[","KYVBTDRGPKOPOTPYR]T`Vb RTDRHQKPPPTQYR\\T`","KYNBPDRGTKUPUTTYR]P`Nb RPDRHSKTPTTSYR\\P`","JZRLRX RMOWU RWOMU","E_RIR[ RIR[R","MWSZR[QZRYSZS\\R^Q_","E_IR[R","MWRYQZR[SZRY","G][BIb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF","H\\NJPISFS[","H\\LKLJMHNGPFTFVGWHXJXLWNUQK[Y[","H\\MFXFRNUNWOXPYSYUXXVZS[P[MZLYKW","H\\UFKTZT RUFU[","H\\WFMFLOMNPMSMVNXPYSYUXXVZS[P[MZLYKW","H\\XIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQLT","H\\YFO[ RKFYF","H\\PFMGLILKMMONSOVPXRYTYWXYWZT[P[MZLYKWKTLRNPQOUNWMXKXIWGTFPF","H\\XMWPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLX","AcHBHb RIBIb R[B[b R\\B\\b RDB`B RDbMb RWb`b","BaGBQPFb RFBPP REBPQ REB\\B^I[B RGa\\a RFb\\b^[[b","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","E_YIK[ RIO[O RIU[U","E_IM[M RIR[R RIW[W","I[RFJ[ RRFZ[ RMTWT","G\\KFK[ RKFTFWGXHYJYLXNWOTP RKPTPWQXRYTYWXYWZT[K[","H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZV","G\\KFK[ RKFRFUGWIXKYNYSXVWXUZR[K[","H[LFL[ RLFYF RLPTP RL[Y[","HZLFL[ RLFYF RLPTP","H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZVZS RUSZS","G]KFK[ RYFY[ RKPYP","NVRFR[","JZVFVVUYTZR[P[NZMYLVLT","G\\KFK[ RYFKT RPOY[","HYLFL[ RL[X[","F^JFJ[ RJFR[ RZFR[ RZFZ[","G]KFK[ RKFY[ RYFY[","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF","G\\KFK[ RKFTFWGXHYJYMXOWPTQKQ","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RSWY]","G\\KFK[ RKFTFWGXHYJYLXNWOTPKP RRPY[","H\\YIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX","JZRFR[ RKFYF","G]KFKULXNZQ[S[VZXXYUYF","I[JFR[ RZFR[","F^HFM[ RRFM[ RRFW[ R\\FW[","H\\KFY[ RYFK[","I[JFRPR[ RZFRP","H\\YFK[ RKFYF RK[Y[","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","F_[WYWWVUTRPQOONMNKOJQJSKUMVOVQURTUPWNYM[M","F_\\S[UYVWVUUTTQPPONNLNJOIQISJULVNVPUQTTPUOWNYN[O\\Q\\S","KYQFOGNINKOMQNSNUMVKVIUGSFQF","JZRLRX RMOWU RWOMU","E[HMLMRY RKMR[ R[BR[","AbDMIMRY RHNR[ Rb:R[","F^ZJSJOKMLKNJQJSKVMXOYSZZZ","F^JJJQKULWNYQZSZVYXWYUZQZJ","F^JJQJUKWLYNZQZSYVWXUYQZJZ","F^JZJSKOLMNKQJSJVKXMYOZSZZ","F^ZJSJOKMLKNJQJSKVMXOYSZZZ RJRVR","E_XP[RXT RUMZRUW RIRZR","JZPLRITL RMORJWO RRJR[","E_LPIRLT ROMJROW RJR[R","JZPXR[TX RMURZWU RRIRZ","I\\XRWOVNTMRMONMQLTLWMYNZP[R[UZWXXUYPYKXHWGUFRFPGOHOIPIPH RRMPNNQMTMXNZ RR[TZVXWUXPXKWHUF","H\\JFR[ RKFRY RZFR[ RJFZF RKGYG","AbDMIMRY RHNR[ Rb:R[","F^[CZD[E\\D\\C[BYBWCUETGSJRNPZO^N` RVDUFTJRVQZP]O_MaKbIbHaH`I_J`Ia","Ca].\\.[/[0\\1]1^0^.],[+Y+W,U.T0S3R:QJQjPsOv R\\/\\0]0]/\\/ RR:Rj RU.T1S:SZRjQqPtOvMxKyIyGxFvFtGsHsItIuHvGv RGtGuHuHtGt","I[X+U1R8P=OANFMNMVN^OcPgRlUsXy RU1S6Q<P@OFNNNVO^PdQhSnUs","I[L+O1R8T=UAVFWNWVV^UcTgRlOsLy RO1Q6S<T@UFVNVVU^TdShQnOs","I[M+MRMy RN+NRNy RM+X+ RMyXy","I[V+VRVy RW+WRWy RL+W+ RLyWy","I\\XFX[ RKFXF RPPXP RK[X[","H\\KILKXWYYY[ RLLXX RKIKKLMXYY[ RPPLTKVKXLZK[ RKVMZ RLTLVMXMZK[ RSSXN RVIVLWNYNYLWKVI RVIWLYN","E_RIQJRKSJRI RIR[R RRYQZR[SZRY","KYOBOb RUBUb","F^RBR[ RI[[[","KYTBTb RUBUb RNBUB RNbUb","F^[BI[[[","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","E_RIQJRKSJRI RIYHZI[JZIY R[YZZ[[\\Z[Y","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O"]
}

gat.alphabet.hershey_meteorology = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","PSSRRSQSPRPQQPRPSQSSRUQV RQQQRRRRQQQ","PTQPPQPSQTSTTSTQSPQP RRQQRRSSRRQ","NVPOTU RTOPU RNRVR","MWRKQMOPMR RRKSMUPWR RRMOQ RRMUQ RROPQ RROTQ RQQSQ RMRWR","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","MWMRMQNOONQMSMUNVOWQWR RPNTN ROOUO RNPVP RNQVQ RMRWR","LRLFLRRRLF RLIPQ RLLOR RLOMQ","MWRKQMOPMR RRKSMUPWR","MWWRWQVOUNSMQMONNOMQMR","JZRLRX RMOWU RWOMU","G]]R]P\\MZJWHTGPGMHJJHMGPGR","NVSWRXQWRVSWSYQ[","E_IR[R","NVRVQWRXSWRV","G][BIb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF","H\\NJPISFS[","H\\LKLJMHNGPFTFVGWHXJXLWNUQK[Y[","H\\MFXFRNUNWOXPYSYUXXVZS[P[MZLYKW","H\\UFKTZT RUFU[","H\\WFMFLOMNPMSMVNXPYSYUXXVZS[P[MZLYKW","H\\XIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQLT","H\\YFO[ RKFYF","H\\PFMGLILKMMONSOVPXRYTYWXYWZT[P[MZLYKWKTLRNPQOUNWMXKXIWGTFPF","H\\XMWPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLX","MWMRMSNUOVQWSWUVVUWSWR","LXLPNRQSSSVRXP","RURUTTURTPRO","RVRRUPVNVLUKTK","NRRROPNNNLOKPK","I[MJNKMLLKLJMHNGPFSFVGWHXJXLWNVORQRT RSFUGVHWJWLVNTP RRYQZR[SZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","I[RFJ[ RRFZ[ RMTWT","G\\KFK[ RKFTFWGXHYJYLXNWOTP RKPTPWQXRYTYWXYWZT[K[","H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZV","G\\KFK[ RKFRFUGWIXKYNYSXVWXUZR[K[","H[LFL[ RLFYF RLPTP RL[Y[","HZLFL[ RLFYF RLPTP","H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZVZS RUSZS","G]KFK[ RYFY[ RKPYP","NVRFR[","JZVFVVUYTZR[P[NZMYLVLT","G\\KFK[ RYFKT RPOY[","HYLFL[ RL[X[","F^JFJ[ RJFR[ RZFR[ RZFZ[","G]KFK[ RKFY[ RYFY[","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF","G\\KFK[ RKFTFWGXHYJYMXOWPTQKQ","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RSWY]","G\\KFK[ RKFTFWGXHYJYLXNWOTPKP RRPY[","H\\YIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX","JZRFR[ RKFYF","G]KFKULXNZQ[S[VZXXYUYF","I[JFR[ RZFR[","F^HFM[ RRFM[ RRFW[ R\\FW[","H\\KFY[ RYFK[","I[JFRPR[ RZFRP","H\\YFK[ RKFYF RK[Y[","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","H\\YIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX","G]RRTUUVWWYW[V\\U]S]Q\\O[NYMWMUNTOPUOVMWKWIVHUGSGQHOINKMMMONPORR","G]IWHVGTGQHOINKMMMONPOTUUVWWYW[V\\U]S]P\\N[M","I\\XMX[ RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","H[LFL[ RLPNNPMSMUNWPXSXUWXUZS[P[NZLX","I[XPVNTMQMONMPLSLUMXOZQ[T[VZXX","I\\XFX[ RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","I[LSXSXQWOVNTMQMONMPLSLUMXOZQ[T[VZXX","MYWFUFSGRJR[ ROMVM","I\\XMX]W`VaTbQbOa RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","I\\MFM[ RMQPNRMUMWNXQX[","NVQFRGSFREQF RRMR[","MWRFSGTFSERF RSMS^RaPbNb","IZMFM[ RWMMW RQSX[","NVRFR[","CaGMG[ RGQJNLMOMQNRQR[ RRQUNWMZM\\N]Q][","I\\MMM[ RMQPNRMUMWNXQX[","I\\QMONMPLSLUMXOZQ[T[VZXXYUYSXPVNTMQM","H[LMLb RLPNNPMSMUNWPXSXUWXUZS[P[NZLX","I\\XMXb RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","KXOMO[ ROSPPRNTMWM","J[XPWNTMQMNNMPNRPSUTWUXWXXWZT[Q[NZMX","MYRFRWSZU[W[ ROMVM","I\\MMMWNZP[S[UZXW RXMX[","JZLMR[ RXMR[","G]JMN[ RRMN[ RRMV[ RZMV[","J[MMX[ RXMM[","JZLMR[ RXMR[P_NaLbKb","J[XMM[ RMMXM RM[X[","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","H\\KFK[ RHF[FQP[Z RZV[Y\\[ RZVZY RWYZY RWYZZ\\[","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","KYUARBPCNELHKLKRLUNWQXSXVWXUYR RKPLMNKQJSJVKXMYPYVXZV]T_R`Oa","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O"]
}

gat.alphabet.hershey_music = {
  lineHeight:50,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MWRFQHRTSHRF RRHRN RRYQZR[SZRY","JZMPQRTTVVWYW[V]U^ RMQST RMRPSTUVWWY","JZWKVMTOPQMR RSPMS RUFVGWIWKVNTPQRMT","H\\SMONLPKRKTLVNWQWUVXTYRYPXNVMSM RXNSM RVMQNLP RONKR RLVQW RNWSVXT RUVYR","H\\SMONLPKRKTLVNWQWUVXTYRYPXNVMSM RXNSM RVMQNLP RONKR RLVQW RNWSVXT RUVYR","J[SMPNNPMRMTNVPWRWUVWTXRXPWNUMSM ROPUM RNRVN RMTWO RNUXP ROVWR RPWVT","JZOGO^ RUFU] RMNWL RMOWM RMWWU RMXWV","JZNFNX RVLV^ RNNVL RNOVM RNWVU RNXVV","JZNBNW RNNQLTLVMWOWQVSSUQVNW RNNQMTMVN RUMVOVQUSSU","E_HIHL R\\I\\L RHI\\I RHJ\\J RHK\\K RHL\\L","JZMNMQ RWNWQ RMNWN RMOWO RMPWP RMQWQ","JZMLWX RMLONQOTOVNWMWKUKUMTO RONTO RQOWM RVKVN RULWL RWXUVSUPUNVMWMYOYOWPU RUVPU RSUMW RNVNY RMXOX","JZPOOMOKMKMMNNPOSOUNWL RNKNN RMLOL RMMSO RPOUN RWLWY","JZQCVMRTRU RULQS RTITKPRRUUY RW\\UYSXQXOYN[N]O_Ra RW\\UZSYOYO]P_Ra RSXPZN]","EfNSOUQVSVUUVSVQUOSNQNOONPMSMVNYP[S\\V\\Y[[Y\\W]T]P\\MZJXIUHRHOIMJKLIOHSHXI]KaMcPeTfYf]e`cba RKLJNIRIXJ\\L`NbQdUeYe]d_cba RPOTO ROPUP RNQVQ RNRVR RNSVS ROTUT RPUTU RaLaNcNcLaL RbLbN RaMcM RaVaXcXcVaV RbVbX RaWcW","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF RQFOGNHMJLOLRMWNYOZQ[ RS[UZVYWWXRXOWJVHUGSF","H\\NJPISFS[ RRGR[ RN[W[","H\\LJMKLLKKKJLHMGPFTFWGXHYJYLXNUPPRNSLUKXK[ RTFVGWHXJXLWNTPPR RKYLXNXSZVZXYYX RNXS[W[XZYXYV","H\\LJMKLLKKKJLHMGPFTFWGXIXLWNTOQO RTFVGWIWLVNTO RTOVPXRYTYWXYWZT[P[MZLYKWKVLUMVLW RWQXTXWWYVZT[","H\\THT[ RUFU[ RUFJUZU RQ[X[","H\\MFKP RKPMNPMSMVNXPYSYUXXVZS[P[MZLYKWKVLUMVLW RSMUNWPXSXUWXUZS[ RMFWF RMGRGWF","H\\WIVJWKXJXIWGUFRFOGMILKKOKULXNZQ[S[VZXXYUYTXQVOSNRNOOMQLT RRFPGNIMKLOLUMXOZQ[ RS[UZWXXUXTWQUOSN","H\\KFKL RKJLHNFPFUIWIXHYF RLHNGPGUI RYFYIXLTQSSRVR[ RXLSQRSQVQ[","H\\PFMGLILLMNPOTOWNXLXIWGTFPF RPFNGMIMLNNPO RTOVNWLWIVGTF RPOMPLQKSKWLYMZP[T[WZXYYWYSXQWPTO RPONPMQLSLWMYNZP[ RT[VZWYXWXSWQVPTO","H\\XMWPURRSQSNRLPKMKLLINGQFSFVGXIYLYRXVWXUZR[O[MZLXLWMVNWMX RQSORMPLMLLMIOGQF RSFUGWIXLXRWVVXTZR[","MWRMQNROSNRM RRYQZR[SZRY","A^GfHfIeIdHcGcFdFfGhIiKiNhPfQdR`RUQ;Q4R/S-U,V,X-Y/Y3X6W8U;P?JCHEFHEJDNDREVGYJ[N\\R\\V[XZZW[T[PZMYKWITHPHMIKKJNJRKUMW RGdGeHeHdGd RU;Q?LCIFGIFKENERFVGXJ[ RR\\U[WZYWZTZPYMXKVITH","EfNSOUQVSVUUVSVQUOSNQNOONPMSMVNYP[S\\V\\Y[[Y\\W]T]P\\MZJXIUHRHOIMJKLIOHSHXI]KaMcPeTfYf]e`cba RKLJNIRIXJ\\L`NbQdUeYe]d_cba RPOTO ROPUP RNQVQ RNRVR RNSVS ROTUT RPUTU RaLaNcNcLaL RbLbN RaMcM RaVaXcXcVaV RbVbX RaWcW","IjNQOOQNSNUOVQVSUUSVQVOUNTMQMNNKPISHWH[I^K`NaRaW`[_]]`ZcVfQiMk RWHZI]K_N`R`W_[^]\\`YcTgQi RPOTO ROPUP RNQVQ RNRVR RNSVS ROTUT RPUTU ReLeNgNgLeL RfLfN ReMgM ReVeXgXgVeV RfVfX ReWgW","D`H@Hd RM@Md RW@Wd R\\@\\d RMMWK RMNWL RMOWM RMWWU RMXWV RMYWW","D`H>Hf RI>If RM>Mf RQBSBSDQDQAR?T>W>Y?[A\\D\\I[LYNWOUOSNRLQNOQNROSQVRXSVUUWUYV[X\\[\\`[cYeWfTfReQcQ`S`SbQb RRBRD RQCSC RY?ZA[D[IZLYN RRLRNPQNRPSRVRX RYVZX[[[`ZcYe RR`Rb RQaSa","JZMNMQ RWNWQ RMNWN RMOWO RMPWP RMQWQ","H\\UFH[ RUFV[ RTHU[ RLUUU RF[L[ RR[X[","F^OFI[ RPFJ[ RLFWFZG[I[KZNYOVP RWFYGZIZKYNXOVP RMPVPXQYSYUXXVZR[F[ RVPWQXSXUWXUZR[","H]ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[S[UZWXXV RTFRGPINLMOLSLVMYNZP[","F]OFI[ RPFJ[ RLFUFXGYHZKZOYSWWUYSZO[F[ RUFWGXHYKYOXSVWTYRZO[","F]OFI[ RPFJ[ RTLRT RLF[FZLZF RMPSP RF[U[WVT[","F\\OFI[ RPFJ[ RTLRT RLF[FZLZF RMPSP RF[M[","H^ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[R[UZWXYT RTFRGPINLMOLSLVMYNZP[ RR[TZVXXT RUT\\T","E_NFH[ ROFI[ R[FU[ R\\FV[ RKFRF RXF_F RLPXP RE[L[ RR[Y[","LYUFO[ RVFP[ RRFYF RL[S[","I[XFSWRYQZO[M[KZJXJVKULVKW RWFRWQYO[ RTF[F","F]OFI[ RPFJ[ R]FLS RSOW[ RROV[ RLFSF RYF_F RF[M[ RS[Y[","H\\QFK[ RRFL[ RNFUF RH[W[YUV[","E`NFH[ RNFO[ ROFPY R\\FO[ R\\FV[ R]FW[ RKFOF R\\F`F RE[K[ RS[Z[","F_OFI[ ROFVX ROIV[ R\\FV[ RLFOF RYF_F RF[L[","G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF RSFQGOIMLLOKSKVLYN[ RQ[SZUXWUXRYNYKXHVF","F]OFI[ RPFJ[ RLFXF[G\\I\\K[NYPUQMQ RXFZG[I[KZNXPUQ RF[M[","G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF RSFQGOIMLLOKSKVLYN[ RQ[SZUXWUXRYNYKXHVF RLYLXMVOUPURVSXS_T`V`W^W] RSXT^U_V_W^","F^OFI[ RPFJ[ RLFWFZG[I[KZNYOVPMP RWFYGZIZKYNXOVP RRPTQURVZW[Y[ZYZX RURWYXZYZZY RF[M[","G^ZH[H\\F[L[JZHYGVFRFOGMIMKNMONVRXT RMKOMVQWRXTXWWYVZS[O[LZKYJWJUI[JYKY","H]UFO[ RVFP[ ROFLLNF]F\\L\\F RL[S[","F_NFKQJUJXKZN[R[UZWXXU\\F ROFLQKUKXLZN[ RKFRF RYF_F","H\\NFO[ ROFPY R\\FO[ RLFRF RXF^F","E_MFK[ RNFLY RUFK[ RUFS[ RVFTY R]FS[ RJFQF RZF`F","G]NFU[ ROFV[ R\\FH[ RLFRF RXF^F RF[L[ RR[X[","H]NFRPO[ ROFSPP[ R]FSP RLFRF RYF_F RL[S[","G][FH[ R\\FI[ ROFLLNF\\F RH[V[XUU[","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","LXTFOL RTFUGOL","E_IR[R","LXPFUL RPFOGUL","H]XMVTUXUZV[Y[[Y\\W RYMWTVXVZW[ RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ","H[PFLSLVMYNZ RQFMS RMSNPPNRMTMVNWOXQXTWWUZR[P[NZMWMS RVNWPWTVWTZR[ RMFQF","I[WPWQXQXPWNUMRMONMQLTLWMYNZP[R[UZWW RRMPNNQMTMXNZ","H]ZFVTUXUZV[Y[[Y\\W R[FWTVXVZW[ RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ RWF[F","I[MVQUTTWRXPWNUMRMONMQLTLWMYNZP[R[UZWX RRMPNNQMTMXNZ","KZZGYHZI[H[GZFXFVGUHTJSMP[O_Na RXFVHUJTNRWQ[P^O`NaLbJbIaI`J_K`Ja ROMYM","H\\YMU[T^RaObLbJaI`I_J^K_J` RXMT[S^QaOb RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ","H]PFJ[ RQFK[ RMTOPQNSMUMWNXOXQVWVZW[ RUMWOWQUWUZV[Y[[Y\\W RMFQF","LYUFTGUHVGUF RMQNOPMSMTNTQRWRZS[ RRMSNSQQWQZR[U[WYXW","LYVFUGVHWGVF RNQOOQMTMUNUQR[Q^P`OaMbKbJaJ`K_L`Ka RSMTNTQQ[P^O`Mb","H\\PFJ[ RQFK[ RXNWOXPYOYNXMWMUNQROSMS ROSQTSZT[ ROSPTRZS[U[WZYW RMFQF","MYUFQTPXPZQ[T[VYWW RVFRTQXQZR[ RRFVF","AbBQCOEMHMINIPHTF[ RGMHNHPGTE[ RHTJPLNNMPMRNSOSQP[ RPMRORQO[ RRTTPVNXMZM\\N]O]Q[W[Z\\[ RZM\\O\\QZWZZ[[^[`YaW","F]GQHOJMMMNNNPMTK[ RLMMNMPLTJ[ RMTOPQNSMUMWNXOXQVWVZW[ RUMWOWQUWUZV[Y[[Y\\W","I[RMONMQLTLWMYNZP[R[UZWWXTXQWOVNTMRM RRMPNNQMTMXNZ RR[TZVWWTWPVN","G\\HQIOKMNMONOPNTJb RMMNNNPMTIb RNTOQQNSMUMWNXOYQYTXWVZS[Q[OZNWNT RWNXPXTWWUZS[ RFbMb","H\\XMRb RYMSb RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ RObVb","IZJQKOMMPMQNQPPTN[ ROMPNPPOTM[ RPTRPTNVMXMYNYOXPWOXN","J[XOXPYPYOXNUMRMONNONQORVVWW RNPOQVUWVWYVZS[P[MZLYLXMXMY","KYTFPTOXOZP[S[UYVW RUFQTPXPZQ[ RNMWM","F]GQHOJMMMNNNQLWLYN[ RLMMNMQKWKYLZN[P[RZTXVT RXMVTUXUZV[Y[[Y\\W RYMWTVXVZW[","H\\IQJOLMOMPNPQNWNYP[ RNMONOQMWMYNZP[Q[TZVXXUYQYMXMYO","C`DQEOGMJMKNKQIWIYK[ RIMJNJQHWHYIZK[M[OZQXRV RTMRVRYSZU[W[YZ[X\\V]R]M\\M]O RUMSVSYU[","H\\KQMNOMRMSOSR RQMRORRQVPXNZL[K[JZJYKXLYKZ RQVQYR[U[WZYW RYNXOYPZOZNYMXMVNTPSRRVRYS[","G\\HQIOKMNMONOQMWMYO[ RMMNNNQLWLYMZO[Q[SZUXWT RZMV[U^SaPbMbKaJ`J_K^L_K` RYMU[T^RaPb","H\\YMXOVQNWLYK[ RLQMOOMRMVO RMOONRNVOXO RLYNYRZUZWY RNYR[U[WYXW","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","JZJFJ[K[KFLFL[M[MFNFN[O[OFPFP[Q[QFRFR[S[SFTFT[U[UFVFV[W[WFXFX[Y[YFZFZ["]
}

gat.alphabet.hershey_rowmand = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MXRFRTST RRFSFST RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM","H]SFLb RYFRb RLQZQ RKWYW","I\\RBR_S_ RRBSBS_ RWIYIWGTFQFNGLILKMMNNVRWSXUXWWYTZQZOYNX RWIVHTGQGNHMIMKNMVQXSYUYWXYWZT[Q[NZLXNX RXXUZ","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","F_\\MZMXNWPUVTXSYQZMZKYJWJUKSLRQOSMTKTISGQFPFNGMIMKNNPQUWXZZ[\\[ R\\M\\NZNXO RYNXPVVUXSZQ[M[KZJYIWIUJSLQQNRMSKSIRG RSHQGPGNH ROGNINKONQQVWXYZZ\\Z\\[","MXTHSIRIQHQGRFSFTGTJSLQM RRGRHSHSGRG RSITJ RTHSL","KYUBSDQGOKNPNTOYQ]S`UbVb RUBVBTDRGPKOPOTPYR]T`Vb","KYNBPDRGTKUPUTTYR]P`NbOb RNBOBQDSGUKVPVTUYS]Q`Ob","JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO","F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R","MXTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^","F_JQ[Q[R RJQJR[R","MXRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","G^[BIbJb R[B\\BJb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF ROGMJLOLRMWOZ RNYQZSZVY RUZWWXRXOWJUG RVHSGQGNH","H\\NJPISFS[ RNJNKPJRHR[S[","H\\LKLJMHNGPFTFVGWHXJXLWNUQL[ RLKMKMJNHPGTGVHWJWLVNTQK[ RLZYZY[ RK[Y[","H\\MFXFQO RMFMGWG RWFPO RQNSNVOXQYTYUXXVZS[P[MZLYKWLW RPOSOVPXS RTOWQXTXUWXTZ RXVVYSZPZMYLW ROZLX","H\\UIU[V[ RVFV[ RVFKVZV RUILV RLUZUZV","H\\MFLO RNGMN RMFWFWG RNGWG RMNPMSMVNXPYSYUXXVZS[P[MZLYKWLW RLOMOONSNVOXR RTNWPXSXUWXTZ RXVVYSZPZMYLW ROZLX","H\\VGWIXIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQ RWHTGRGOH RPGNJMOMTNXQZ RMVOYRZSZVYXV RTZWXXUXTWQTO RXSVPSOROOPMS RQONQMT","H\\KFYFO[ RKFKGXG RXFN[O[","H\\PFMGLILKMMNNPOTPVQWRXTXWWYTZPZMYLWLTMRNQPPTOVNWMXKXIWGTFPF RNGMIMKNMPNTOVPXRYTYWXYWZT[P[MZLYKWKTLRNPPOTNVMWKWIVG RWHTGPGMH RLXOZ RUZXX","H\\WPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLXMXNZ RWMVPSR RWNUQRRQRNQLN RPRMPLMLLMIPG RLKNHQGRGUHWK RSGVIWMWRVWTZ RUYRZPZMY","MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^","F^ZIJRZ[","F_JM[M[N RJMJN[N RJU[U[V RJUJV[V","F^JIZRJ[","I\\LKLJMHNGQFTFWGXHYJYLXNWOUPRQ RLKMKMJNHQGTGWHXJXLWNUORP RMIPG RUGXI RXMTP RRPRTSTSP RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","H\\RFJ[ RRIK[J[ RRIY[Z[ RRFZ[ RMUWU RLVXV","H\\LFL[ RMGMZ RLFTFWGXHYJYMXOWPTQ RMGTGWHXJXMWOTP RMPTPWQXRYTYWXYWZT[L[ RMQTQWRXTXWWYTZMZ","H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZV RZKYKXIWHUGQGOHMKLNLSMVOYQZUZWYXXYVZV","H]LFL[ RMGMZ RLFSFVGXIYKZNZSYVXXVZS[L[ RMGSGVHWIXKYNYSXVWXVYSZMZ","I\\MFM[ RNGNZ RMFYF RNGYGYF RNPTPTQ RNQTQ RNZYZY[ RM[Y[","I[MFM[ RNGN[M[ RMFYF RNGYGYF RNPTPTQ RNQTQ","H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZVZRUR RZKYKXIWHUGQGOHNIMKLNLSMVNXOYQZUZWYXXYVYSUSUR","G]KFK[ RKFLFL[K[ RYFXFX[Y[ RYFY[ RLPXP RLQXQ","NWRFR[S[ RRFSFS[","J[VFVVUYSZQZOYNVMV RVFWFWVVYUZS[Q[OZNYMV","H]LFL[M[ RLFMFM[ RZFYFMR RZFMS RPOY[Z[ RQOZ[","IZMFM[ RMFNFNZ RNZYZY[ RM[Y[","F^JFJ[ RKKK[J[ RKKR[ RJFRX RZFRX RYKR[ RYKY[Z[ RZFZ[","G]KFK[ RLIL[K[ RLIY[ RKFXX RXFXX RXFYFY[","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RQGNHLKKNKSLVNYQZSZVYXVYSYNXKVHSGQG","H\\LFL[ RMGM[L[ RLFUFWGXHYJYMXOWPUQMQ RMGUGWHXJXMWOUPMP","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RQGNHLKKNKSLVNYQZSZVYXVYSYNXKVHSGQG RSXX]Y] RSXTXY]","H\\LFL[ RMGM[L[ RLFTFWGXHYJYMXOWPTQMQ RMGTGWHXJXMWOTPMP RRQX[Y[ RSQY[","H\\YIWGTFPFMGKIKKLMMNOOTQVRWSXUXXWYTZPZNYMXKX RYIWIVHTGPGMHLILKMMONTPVQXSYUYXWZT[P[MZKX","J[RGR[ RSGS[R[ RLFYFYG RLFLGYG","G]KFKULXNZQ[S[VZXXYUYF RKFLFLUMXNYQZSZVYWXXUXFYF","H\\JFR[ RJFKFRX RZFYFRX RZFR[","E_GFM[ RGFHFMX RRFMX RRIM[ RRIW[ RRFWX R]F\\FWX R]FW[","H\\KFX[Y[ RKFLFY[ RYFXFK[ RYFL[K[","I\\KFRPR[S[ RKFLFSP RZFYFRP RZFSPS[","H\\XFK[ RYFL[ RKFYF RKFKGXG RLZYZY[ RK[Y[","KYOBOb RPBPb ROBVB RObVb"," KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZPLRITL RMORJWO RRJR["," JZJ]Z]","MXTFRGQIQLRMSMTLTKSJRJQK RRKRLSLSKRK RRGQK RQIRJ","H\\WMW[X[ RWMXMX[ RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX","H\\LFL[M[ RLFMFM[ RMPONQMTMVNXPYSYUXXVZT[Q[OZMX RMPQNTNVOWPXSXUWXVYTZQZMX","I[XPVNTMQMONMPLSLUMXOZQ[T[VZXX RXPWQVOTNQNOONPMSMUNXOYQZTZVYWWXX","H\\WFW[X[ RWFXFX[ RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX","I[MTXTXQWOVNTMQMONMPLSLUMXOZQ[T[VZXX RMSWSWQVOTNQNOONPMSMUNXOYQZTZVYWWXX","LZWFUFSGRJR[S[ RWFWGUGSH RTGSJS[ ROMVMVN ROMONVN","H\\XMWMW\\V_U`SaQaO`N_L_ RXMX\\W_UaSbPbNaL_ RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX","H\\LFL[M[ RLFMFM[ RMQPNRMUMWNXQX[ RMQPORNTNVOWQW[X[","NWRFQGQHRISITHTGSFRF RRGRHSHSGRG RRMR[S[ RRMSMS[","NWRFQGQHRISITHTGSFRF RRGRHSHSGRG RRMRbSb RRMSMSb","H[LFL[M[ RLFMFM[ RXMWMMW RXMMX RPTV[X[ RQSX[","NWRFR[S[ RRFSFS[","CbGMG[H[ RGMHMH[ RHQKNMMPMRNSQS[ RHQKOMNONQORQR[S[ RSQVNXM[M]N^Q^[ RSQVOXNZN\\O]Q][^[","H\\LML[M[ RLMMMM[ RMQPNRMUMWNXQX[ RMQPORNTNVOWQW[X[","I\\QMONMPLSLUMXOZQ[T[VZXXYUYSXPVNTMQM RQNOONPMSMUNXOYQZTZVYWXXUXSWPVOTNQN","H\\LMLbMb RLMMMMb RMPONQMTMVNXPYSYUXXVZT[Q[OZMX RMPQNTNVOWPXSXUWXVYTZQZMX","H\\WMWbXb RWMXMXb RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX","KYOMO[P[ ROMPMP[ RPSQPSNUMXM RPSQQSOUNXNXM","J[XPWNTMQMNNMPNRPSUUWV RVUWWWXVZ RWYTZQZNY ROZNXMX RXPWPVN RWOTNQNNO RONNPOR RNQPRUTWUXWXXWZT[Q[NZMX","MXRFR[S[ RRFSFS[ ROMVMVN ROMONVN","H\\LMLWMZO[R[TZWW RLMMMMWNYPZRZTYWW RWMW[X[ RWMXMX[","JZLMR[ RLMMMRY RXMWMRY RXMR[","F^IMN[ RIMJMNX RRMNX RRPN[ RRPV[ RRMVX R[MZMVX R[MV[","I[LMW[X[ RLMMMX[ RXMWML[ RXMM[L[","JZLMR[ RLMMMRY RXMWMRYNb RXMR[ObNb","I[VNL[ RXMNZ RLMXM RLMLNVN RNZXZX[ RL[X[","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","KYQFOGNINKOMQNSNUMVKVIUGSFQF RQFNIOMSNVKUGQF RSFOGNKQNUMVISF"]
}

gat.alphabet.hershey_rowmans = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MWRFRT RRYQZR[SZRY","JZNFNM RVFVM","H]SBLb RYBRb RLOZO RKUYU","H\\PBP_ RTBT_ RYIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_\\O\\N[MZMYNXPVUTXRZP[L[JZIYHWHUISJRQNRMSKSIRGPFNGMIMKNNPQUXWZY[[[\\Z\\Y","MWRHQGRFSGSIRKQL","KYVBTDRGPKOPOTPYR]T`Vb","KYNBPDRGTKUPUTTYR]P`Nb","JZRFRR RMIWO RWIMO","E_RIR[ RIR[R","MWSZR[QZRYSZS\\R^Q_","E_IR[R","MWRYQZR[SZRY","G][BIb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF","H\\NJPISFS[","H\\LKLJMHNGPFTFVGWHXJXLWNUQK[Y[","H\\MFXFRNUNWOXPYSYUXXVZS[P[MZLYKW","H\\UFKTZT RUFU[","H\\WFMFLOMNPMSMVNXPYSYUXXVZS[P[MZLYKW","H\\XIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQLT","H\\YFO[ RKFYF","H\\PFMGLILKMMONSOVPXRYTYWXYWZT[P[MZLYKWKTLRNPQOUNWMXKXIWGTFPF","H\\XMWPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLX","MWRMQNROSNRM RRYQZR[SZRY","MWRMQNROSNRM RSZR[QZRYSZS\\R^Q_","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","I[LKLJMHNGPFTFVGWHXJXLWNVORQRT RRYQZR[SZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","I[RFJ[ RRFZ[ RMTWT","G\\KFK[ RKFTFWGXHYJYLXNWOTP RKPTPWQXRYTYWXYWZT[K[","H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZV","G\\KFK[ RKFRFUGWIXKYNYSXVWXUZR[K[","H[LFL[ RLFYF RLPTP RL[Y[","HZLFL[ RLFYF RLPTP","H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZVZS RUSZS","G]KFK[ RYFY[ RKPYP","NVRFR[","JZVFVVUYTZR[P[NZMYLVLT","G\\KFK[ RYFKT RPOY[","HYLFL[ RL[X[","F^JFJ[ RJFR[ RZFR[ RZFZ[","G]KFK[ RKFY[ RYFY[","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF","G\\KFK[ RKFTFWGXHYJYMXOWPTQKQ","G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RSWY]","G\\KFK[ RKFTFWGXHYJYLXNWOTPKP RRPY[","H\\YIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX","JZRFR[ RKFYF","G]KFKULXNZQ[S[VZXXYUYF","I[JFR[ RZFR[","F^HFM[ RRFM[ RRFW[ R\\FW[","H\\KFY[ RYFK[","I[JFRPR[ RZFRP","H\\YFK[ RKFYF RK[Y[","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZPLRITL RMORJWO RRJR[","JZJ]Z]","MWSFRGQIQKRLSKRJ","I\\XMX[ RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","H[LFL[ RLPNNPMSMUNWPXSXUWXUZS[P[NZLX","I[XPVNTMQMONMPLSLUMXOZQ[T[VZXX","I\\XFX[ RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","I[LSXSXQWOVNTMQMONMPLSLUMXOZQ[T[VZXX","MYWFUFSGRJR[ ROMVM","I\\XMX]W`VaTbQbOa RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","I\\MFM[ RMQPNRMUMWNXQX[","NVQFRGSFREQF RRMR[","MWRFSGTFSERF RSMS^RaPbNb","IZMFM[ RWMMW RQSX[","NVRFR[","CaGMG[ RGQJNLMOMQNRQR[ RRQUNWMZM\\N]Q][","I\\MMM[ RMQPNRMUMWNXQX[","I\\QMONMPLSLUMXOZQ[T[VZXXYUYSXPVNTMQM","H[LMLb RLPNNPMSMUNWPXSXUWXUZS[P[NZLX","I\\XMXb RXPVNTMQMONMPLSLUMXOZQ[T[VZXX","KXOMO[ ROSPPRNTMWM","J[XPWNTMQMNNMPNRPSUTWUXWXXWZT[Q[NZMX","MYRFRWSZU[W[ ROMVM","I\\MMMWNZP[S[UZXW RXMX[","JZLMR[ RXMR[","G]JMN[ RRMN[ RRMV[ RZMV[","J[MMX[ RXMM[","JZLMR[ RXMR[P_NaLbKb","J[XMM[ RMMXM RM[X[","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","KYQFOGNINKOMQNSNUMVKVIUGSFQF"]
}

gat.alphabet.hershey_rowmant = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MXRFQGQIRQ RRFRTST RRFSFST RSFTGTISQ RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM","H]SFLb RYFRb RLQZQ RKWYW","H\\PBP_ RTBT_ RXKXJWJWLYLYJXHWGTFPFMGKIKLLNOPURWSXUXXWZ RLLMNOOUQWRXT RMGLILKMMONUPXRYTYWXYWZT[P[MZLYKWKUMUMWLWLV","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_[O[NZNZP\\P\\N[MZMYNXPVUTXRZP[L[JZIXIUJSPORMSKSIRGPFNGMIMLNOPRTWWZY[[[\\Y\\X RKZJXJUKSLR RRMSI RSKRG RNGMK RNNPQTVWYYZ RN[LZKXKULSPO RMINMQQUVXYZZ[Z\\Y","MXTHSIRIQHQGRFSFTGTJSLQM RRGRHSHSGRG RSITJ RTHSL","KYUBSDQGOKNPNTOYQ]S`Ub RQHPKOOOUPYQ\\ RSDRFQIPOPUQ[R^S`","KYOBQDSGUKVPVTUYS]Q`Ob RSHTKUOUUTYS\\ RQDRFSITOTUS[R^Q`","JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO","F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R","MXTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^","F_JQ[Q[R RJQJR[R","MXRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","G^[BIbJb R[B\\BJb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF RNHMJLNLSMWNY RVYWWXSXNWJVH RQFOGNIMNMSNXOZQ[ RS[UZVXWSWNVIUGSF","H\\QHQ[ RRHRZ RSFS[ RSFPINJ RM[W[ RQZO[ RQYP[ RSYT[ RSZU[","H\\LJLKMKMJLJ RLIMINJNKMLLLKKKJLHMGPFTFWGXHYJYLXNUPPRNSLUKXK[ RWHXJXLWN RTFVGWJWLVNTPPR RKYLXNXSYWYYX RNXSZWZXY RNXS[W[XZYXYV","H\\LJLKMKMJLJ RLIMINJNKMLLLKKKJLHMGPFTFWGXIXLWNTO RVGWIWLVN RSFUGVIVLUNSO RQOTOVPXRYTYWXYWZT[P[MZLYKWKVLUMUNVNWMXLX RWRXTXWWY RSOUPVQWTWWVZT[ RLVLWMWMVLV","H\\SIS[ RTHTZ RUFU[ RUFJUZU RP[X[ RSZQ[ RSYR[ RUYV[ RUZW[","H\\MFKPMNPMSMVNXPYSYUXXVZS[P[MZLYKWKVLUMUNVNWMXLX RWPXRXVWX RSMUNVOWRWVVYUZS[ RLVLWMWMVLV RMFWF RMGUG RMHQHUGWF","H\\VIVJWJWIVI RWHVHUIUJVKWKXJXIWGUFRFOGMILKKOKULXNZQ[S[VZXXYUYTXQVOSNQNOONPMR RNIMKLOLUMXNY RWXXVXSWQ RRFPGOHNJMNMUNXOZQ[ RS[UZVYWVWSVPUOSN","H\\KFKL RYFYIXLTQSSRWR[ RSRRTQWQ[ RXLSQQTPWP[R[ RKJLHNFPFUIWIXHYF RMHNGPGRH RKJLINHPHUI","H\\PFMGLILLMNPOTOWNXLXIWGTFPF RNGMIMLNN RVNWLWIVG RPFOGNINLONPO RTOUNVLVIUGTF RPOMPLQKSKWLYMZP[T[WZXYYWYSXQWPTO RMQLSLWMY RWYXWXSWQ RPONPMSMWNZP[ RT[VZWWWSVPTO","H\\MWMXNXNWMW RWOVQURSSQSNRLPKMKLLINGQFSFVGXIYLYRXVWXUZR[O[MZLXLWMVNVOWOXNYMY RMPLNLKMI RVHWIXLXRWVVX RQSORNQMNMKNHOGQF RSFUGVIWLWSVWUYTZR[","MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^","F^ZIJRZ[","F_JM[M[N RJMJN[N RJU[U[V RJUJV[V","F^JIZRJ[","I\\MKMJNJNLLLLJMHNGPFTFWGXHYJYLXNWOSQ RWHXIXMWN RTFVGWIWMVOUP RRQRTSTSQRQ RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","H\\RFKZ RQIW[ RRIX[ RRFY[ RMUVU RI[O[ RT[[[ RKZJ[ RKZM[ RWZU[ RWYV[ RXYZ[","G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZLYNXOUP RXHYJYLXN RUFWGXIXMWOUP RNPUPXQYRZTZWYYXZU[I[ RXRYTYWXY RUPWQXSXXWZU[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[","G\\XIYFYLXIVGTFQFNGLIKKJNJSKVLXNZQ[T[VZXXYV RMILKKNKSLVMX RQFOGMJLNLSMWOZQ[","G]LFL[ RMGMZ RNFN[ RIFSFVGXIYKZNZSYVXXVZS[I[ RWIXKYNYSXVWX RSFUGWJXNXSWWUZS[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[","G\\LFL[ RMGMZ RNFN[ RIFYFYL RNPTP RTLTT RI[Y[YU RJFLG RKFLH ROFNH RPFNG RTFYG RVFYH RWFYI RXFYL RTLSPTT RTNRPTR RTOPPTQ RLZJ[ RLYK[ RNYO[ RNZP[ RT[YZ RV[YY RW[YX RX[YU","G[LFL[ RMGMZ RNFN[ RIFYFYL RNPTP RTLTT RI[Q[ RJFLG RKFLH ROFNH RPFNG RTFYG RVFYH RWFYI RXFYL RTLSPTT RTNRPTR RTOPPTQ RLZJ[ RLYK[ RNYO[ RNZP[","G^XIYFYLXIVGTFQFNGLIKKJNJSKVLXNZQ[T[VZXZY[YS RMILKKNKSLVMX RQFOGMJLNLSMWOZQ[ RXTXY RWSWYVZ RTS\\S RUSWT RVSWU RZSYU R[SYT","F^KFK[ RLGLZ RMFM[ RWFW[ RXGXZ RYFY[ RHFPF RTF\\F RMPWP RH[P[ RT[\\[ RIFKG RJFKH RNFMH ROFMG RUFWG RVFWH RZFYH R[FYG RKZI[ RKYJ[ RMYN[ RMZO[ RWZU[ RWYV[ RYYZ[ RYZ[[","LXQFQ[ RRGRZ RSFS[ RNFVF RN[V[ ROFQG RPFQH RTFSH RUFSG RQZO[ RQYP[ RSYT[ RSZU[","JJSFSWRZQ[ RTGTWSZ RUFUWTZQ[O[MZLXLVMUNUOVOWNXMX RMVMWNWNVMV RPFXF RQFSG RRFSH RVFUH RWFUG","F\\KFK[ RLGLZ RMFM[ RXGMR RPPW[ RQPX[ RQNY[ RHFPF RUF[F RH[P[ RT[[[ RIFKG RJFKH RNFMH ROFMG RWFXG RZFXG RKZI[ RKYJ[ RMYN[ RMZO[ RWYU[ RWYZ[","I[NFN[ ROGOZ RPFP[ RKFSF RK[Z[ZU RLFNG RMFNH RQFPH RRFPG RNZL[ RNYM[ RPYQ[ RPZR[ RU[ZZ RW[ZY RX[ZX RY[ZU","E_JFJZ RJFQ[ RKFQX RLFRX RXFQ[ RXFX[ RYGYZ RZFZ[ RGFLF RXF]F RG[M[ RU[][ RHFJG R[FZH R\\FZG RJZH[ RJZL[ RXZV[ RXYW[ RZY[[ RZZ\\[","F^KFKZ RKFY[ RLFXX RMFYX RYGY[ RHFMF RVF\\F RH[N[ RIFKG RWFYG R[FYG RKZI[ RKZM[","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RMILKKNKSLVMX RWXXVYSYNXKWI RQFOGMJLNLSMWOZQ[ RS[UZWWXSXNWJUGSF","G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZMYOXPUQNQ RXHYJYMXO RUFWGXIXNWPUQ RI[Q[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RMILKKNKSLVMX RWXXVYSYNXKWI RQFOGMJLNLSMWOZQ[ RS[UZWWXSXNWJUGSF RNXOVQURUTVUXV^W`Y`Z^Z\\ RV\\W^X_Y_ RUXW]X^Y^Z]","G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZLYNXOUPNP RXHYJYLXN RUFWGXIXMWOUP RRPTQUSWYX[Z[[Y[W RWWXYYZZZ RTQURXXYYZY[X RI[Q[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[","H\\XIYFYLXIVGSFPFMGKIKLLNOPURWSXUXXWZ RLLMNOOUQWRXT RMGLILKMMONUPXRYTYWXYWZT[Q[NZLXKUK[LX","H\\JFJL RQFQ[ RRGRZ RSFS[ RZFZL RJFZF RN[V[ RKFJL RLFJI RMFJH ROFJG RUFZG RWFZH RXFZI RYFZL RQZO[ RQYP[ RSYT[ RSZU[","F^KFKULXNZQ[S[VZXXYUYG RLGLVMX RMFMVNYOZQ[ RHFPF RVF\\F RIFKG RJFKH RNFMH ROFMG RWFYG R[FYG","H\\KFR[ RLFRXR[ RMFSX RYGR[ RIFPF RUF[F RJFLH RNFMH ROFMG RWFYG RZFYG","F^JFN[ RKFNVN[ RLFOV RRFOVN[ RRFV[ RSFVVV[ RTFWV RZGWVV[ RGFOF RRFTF RWF]F RHFKG RIFKH RMFLH RNFLG RXFZG R\\FZG","H\\KFW[ RLFX[ RMFY[ RXGLZ RIFPF RUF[F RI[O[ RT[[[ RJFMH RNFMH ROFMG RVFXG RZFXG RLZJ[ RLZN[ RWZU[ RWYV[ RWYZ[","G]JFQQQ[ RKFRQRZ RLFSQS[ RYGSQ RHFOF RVF\\F RN[V[ RIFKG RNFLG RWFYG R[FYG RQZO[ RQYP[ RSYT[ RSZU[","H\\YFKFKL RWFK[ RXFL[ RYFM[ RK[Y[YU RLFKL RMFKI RNFKH RPFKG RT[YZ RV[YY RW[YX RX[YU","KYOBOb RPBPb ROBVB RObVb"," KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZPLRITL RMORJWO RRJR["," JZJ]Z]","MXTFRGQIQLRMSMTLTKSJRJQK RRKRLSLSKRK RRGQK RQIRJ","I]NPNOOOOQMQMONNPMTMVNWOXQXXYZZ[ RVOWQWXXZ RTMUNVPVXWZZ[[[ RVRUSPTMULWLXMZP[S[UZVX RNUMWMXNZ RUSQTOUNWNXOZP[","G\\LFL[MZOZ RMGMY RIFNFNZ RNPONQMSMVNXPYSYUXXVZS[Q[OZNX RWPXRXVWX RSMUNVOWRWVVYUZS[ RJFLG RKFLH","H[WQWPVPVRXRXPVNTMQMNNLPKSKULXNZQ[S[VZXX RMPLRLVMX RQMONNOMRMVNYOZQ[","H]VFV[[[ RWGWZ RSFXFX[ RVPUNSMQMNNLPKSKULXNZQ[S[UZVX RMPLRLVMX RQMONNOMRMVNYOZQ[ RTFVG RUFVH RXYY[ RXZZ[","H[MSXSXQWOVNSMQMNNLPKSKULXNZQ[S[VZXX RWRWQVO RMPLRLVMX RVSVPUNSM RQMONNOMRMVNYOZQ[","KYWHWGVGVIXIXGWFTFRGQHPKP[ RRHQKQZ RTFSGRIR[ RMMVM RM[U[ RPZN[ RPYO[ RRYS[ RRZT[","I\\XNYOZNYMXMVNUO RQMONNOMQMSNUOVQWSWUVVUWSWQVOUNSMQM ROONQNSOU RUUVSVQUO RQMPNOPOTPVQW RSWTVUTUPTNSM RNUMVLXLYM[N\\Q]U]X^Y_ RN[Q\\U\\X] RLYMZP[U[X\\Y^Y_XaUbObLaK_K^L\\O[ RObMaL_L^M\\O[","G^LFL[ RMGMZ RIFNFN[ RNQOOPNRMUMWNXOYRY[ RWOXRXZ RUMVNWQW[ RI[Q[ RT[\\[ RJFLG RKFLH RLZJ[ RLYK[ RNYO[ RNZP[ RWZU[ RWYV[ RYYZ[ RYZ[[","LXQFQHSHSFQF RRFRH RQGSG RQMQ[ RRNRZ RNMSMS[ RN[V[ ROMQN RPMQO RQZO[ RQYP[ RSYT[ RSZU[","KXRFRHTHTFRF RSFSH RRGTG RRMR^QaPb RSNS]R` ROMTMT]S`RaPbMbLaL_N_NaMaM` RPMRN RQMRO","G]LFL[ RMGMZ RIFNFN[ RWNNW RRSY[ RRTX[ RQTW[ RTM[M RI[Q[ RT[[[ RJFLG RKFLH RUMWN RZMWN RLZJ[ RLYK[ RNYO[ RNZP[ RWYU[ RVYZ[","LXQFQ[ RRGRZ RNFSFS[ RN[V[ ROFQG RPFQH RQZO[ RQYP[ RSYT[ RSZU[","AcFMF[ RGNGZ RCMHMH[ RHQIOJNLMOMQNROSRS[ RQORRRZ ROMPNQQQ[ RSQTOUNWMZM\\N]O^R^[ R\\O]R]Z RZM[N\\Q\\[ RC[K[ RN[V[ RY[a[ RDMFN REMFO RFZD[ RFYE[ RHYI[ RHZJ[ RQZO[ RQYP[ RSYT[ RSZU[ R\\ZZ[ R\\Y[[ R^Y_[ R^Z`[","G^LML[ RMNMZ RIMNMN[ RNQOOPNRMUMWNXOYRY[ RWOXRXZ RUMVNWQW[ RI[Q[ RT[\\[ RJMLN RKMLO RLZJ[ RLYK[ RNYO[ RNZP[ RWZU[ RWYV[ RYYZ[ RYZ[[","H\\QMNNLPKSKULXNZQ[S[VZXXYUYSXPVNSMQM RMPLRLVMX RWXXVXRWP RQMONNOMRMVNYOZQ[ RS[UZVYWVWRVOUNSM","G\\LMLb RMNMa RIMNMNb RNPONQMSMVNXPYSYUXXVZS[Q[OZNX RWPXRXVWX RSMUNVOWRWVVYUZS[ RIbQb RJMLN RKMLO RLaJb RL`Kb RN`Ob RNaPb","H\\VNVb RWOWa RUNWNXMXb RVPUNSMQMNNLPKSKULXNZQ[S[UZVX RMPLRLVMX RQMONNOMRMVNYOZQ[ RSb[b RVaTb RV`Ub RX`Yb RXaZb","IZNMN[ RONOZ RKMPMP[ RWOWNVNVPXPXNWMUMSNQPPS RK[S[ RLMNN RMMNO RNZL[ RNYM[ RPYQ[ RPZR[","J[WOXMXQWOVNTMPMNNMOMQNSPTUUWVXY RNNMQ RNRPSUTWU RXVWZ RMONQPRUSWTXVXYWZU[Q[OZNYMWM[NY","KZPHPVQYRZT[V[XZYX RQHQWRY RPHRFRWSZT[ RMMVM","G^LMLVMYNZP[S[UZVYWW RMNMWNY RIMNMNWOZP[ RWMW[\\[ RXNXZ RTMYMY[ RJMLN RKMLO RYYZ[ RYZ[[","I[LMR[ RMMRY RNMSY RXNSYR[ RJMQM RTMZM RKMNO RPMNN RVMXN RYMXN","F^JMN[ RKMNX RLMOX RRMOXN[ RRMV[ RSMVX RRMTMWX RZNWXV[ RGMOM RWM]M RHMKN RNMLN RXMZN R\\MZN","H\\LMV[ RMMW[ RNMX[ RWNMZ RJMQM RTMZM RJ[P[ RS[Z[ RKMMN RPMNN RUMWN RYMWN RMZK[ RMZO[ RVZT[ RWZY[","H[LMR[ RMMRY RNMSY RXNSYP_NaLbJbIaI_K_KaJaJ` RJMQM RTMZM RKMNO RPMNN RVMXN RYMXN","I[VML[ RWMM[ RXMN[ RXMLMLQ RL[X[XW RMMLQ RNMLP ROMLO RQMLN RS[XZ RU[XY RV[XX RW[XW","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","KYQFOGNINKOMQNSNUMVKVIUGSFQF RQFNIOMSNVKUGQF RSFOGNKQNUMVISF"]
}

gat.alphabet.hershey_scriptc = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MXUFTGRS RUGRS RUFVGRS RPYOZP[QZPY","I[PFNM RQFNM RYFWM RZFWM","H]SFLb RYFRb RLQZQ RKWYW","H]TBL_ RYBQ_ RZJYKZL[K[JZHYGVFRFOGMIMKNMONVRXT RMKOMVQWRXTXWWYVZS[O[LZKYJWJVKULVKW","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_\\N[O\\P]O]N\\M[MYNWPRXPZN[K[HZGXGVHTISKRPPROTMUKUITGRFPGOIOLPRQUSXUZW[Y[ZYZX RK[IZHXHVITJSPP ROLPQQTSWUYWZYZZY","MXUHTGUFVGVHUJSL","KZZBVESHQKOONTNXO]P`Qb RVESIQMPPOUOZP_Qb","JYSBTDUGVLVPUUSYQ\\N_Jb RSBTEUJUOTTSWQ[N_","J[TFTR ROIYO RYIOO","E_RIR[ RIR[R","MXP[OZPYQZQ[P]N_","E_IR[R","MXPYOZP[QZPY","G]_BEb","H]TFQGOIMLLOKSKVLYMZO[Q[TZVXXUYRZNZKYHXGVFTF RTFRGPINLMOLSLVMYO[ RQ[SZUXWUXRYNYKXHVF","H]TJO[ RVFP[ RVFSIPKNL RUIQKNL","H]OJPKOLNKNJOHPGSFVFYGZIZKYMWOTQPSMUKWI[ RVFXGYIYKXMVOPS RJYKXMXRZUZWYXW RMXR[U[WZXW","H]OJPKOLNKNJOHPGSFVFYGZIZKYMVOSP RVFXGYIYKXMVO RQPSPVQWRXTXWWYVZS[O[LZKYJWJVKULVKW RSPUQVRWTWWVYUZS[","H]XGR[ RYFS[ RYFJUZU","H]QFLP RQF[F RQGVG[F RLPMOPNSNVOWPXRXUWXUZR[O[LZKYJWJVKULVKW RSNUOVPWRWUVXTZR[","H]YIXJYKZJZIYGWFTFQGOIMLLOKSKWLYMZO[R[UZWXXVXSWQVPTOQOOPMRLT RTFRGPINLMOLSLXMZ RR[TZVXWVWRVP","H]NFLL R[FZIXLSRQUPWO[ RXLRRPUOWN[ RMIPFRFWI RNHPGRGWIYIZH[F","H]SFPGOHNJNMOOQPTPXOYNZLZIYGVFSF RSFQGPHOJOMPOQP RTPWOXNYLYIXGVF RQPMQKSJUJXKZN[R[VZWYXWXTWRVQTP RQPNQLSKUKXLZN[ RR[UZVYWWWSVQ","H]YMXOVQTRQROQNPMNMKNIPGSFVFXGYHZJZNYRXUVXTZQ[N[LZKXKWLVMWLX ROQNONKOIQGSF RXGYIYNXRWUUXSZQ[","MXSMRNSOTNSM RPYOZP[QZ","MXSMRNSOTNSM RP[OZPYQZQ[P]N_","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","H]OJPKOLNKNJOHPGSFWFZG[I[KZMYNSPQQQSRTTT RWFYGZIZKYMXNVO RPYOZP[QZPY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","E\\XFVHTKQPOSLWIZG[E[DZDXEWFXEY RXFWJUTT[ RXFU[ RT[TYSVRTPRNQLQKRKTLWOZR[V[XZ","F^UGTHSJQOOUNWLZJ[ RTHSKQSPVOXMZJ[H[GZGXHWIXHY ROLNNMOKOJNJLKJMHOGRFXFZG[I[KZMXNTORO RXFYGZIZKYMXN RTOWPXQYSYVXYWZU[S[RZRXSU RTOVPWQXSXVWYU[","H]KHJJJLKNNOQOUNWMYKZIZGYFWFTGQJOMMQLULXMZP[R[UZWXXVXTWRURSSRU RWFUGRJPMNQMUMXNZP[","F]UGTHSJQOOUNWLZJ[ RTHSKQSPVOXMZJ[H[GZGXHWJWLXNZP[S[UZWXYTZOZLYIWGUFPFMGKIJKJMKNMNNMOK","I\\WIVJVLWMYMZKZIYGWFTFRGQHPJPLQNSO RTFRHQJQMSO RSOQONPLRKTKWLYMZO[R[UZWXXVXTWRURSSRU RQOOPMRLTLXMZ","G\\WHVJTORUQWOZM[ RQLPNNOLOKMKKLINGQF[FXGWHVKTSSVRXPZM[K[IZHYHXIWJXIY RSFWGXG ROSPRRQVQXPZMXT","G]JIIKIMJOLPOPROTNWKXHXGWFVFTGRIQKPNPQQSSTUTWSYQZO RWFUGSIRKQNQRST RZOYSWWUYSZO[L[JZIXIWJVKWJX RYSWVUXRZO[","F^LLKKKILGOFRFOQMWLYKZI[G[FZFXGWHXGY RRFOONRLWKYI[ RJTKSMRVOXN[L]J^H^G]F\\FZGXJWLURTVTYV[W[YZ[X R\\FZHXLVRUVUYV[","IYWHUKSPQUPWNZL[ RYLWNTOQOONNLNJOHQGUFYFWHVJTPRVQXOZL[J[IZIXJWKXJY","IZYFWHUKSPPYN] RYMWOTPQPOONMNKOIQGUFYFWIVKSTQXPZN]M^K_J^J\\KZMXOWRVVU","F^LLKKKIMGPFRFOQMWLYKZI[G[FZFXGWHXGY RRFOONRLWKYI[ RZGWKUMSNPO R]G\\H]I^H^G]F\\FZGWLVMTNPO RPOSPTRUYV[ RPORPSRTYV[W[YZ[X","I[MILKLMMOOPRPUOWNZK[H[GZFYFWGVHTKPUOWMZK[ RVHTLRSQVPXNZK[I[HZHXIWKWMXPZR[U[WZYX","D`RFNOKUIXGZE[C[BZBXCWDXCY RRFPMOQNVNZP[ RRFQJPOOVOZP[ R[FWORXP[ R[FYMXQWVWZY[Z[\\Z^X R[FZJYOXVXZY[","G^RFQJOPMULWJZH[F[EZEXFWGXFY RRFRKSVT[ RRFSKTVT[ R`G_H`IaHaG`F^F\\GZJYLWQUWT[","H]SFQGOIMLLNKRKVLYMZO[Q[TZVXXUYSZOZKYHXGWGUHSJQNPSPV RQGOJMNLRLVMYO[","F]UGTHSJQOOUNWLZJ[ RTHSKQSPVOXMZJ[H[GZGXHWIXHY ROLNNMOKOJNJLKJMHOGRFVFYGZH[J[MZOYPVQTQRP RVFXGYHZJZMYOXPVQ","H]UJULTNSOQPOPNNNLOIQGTFWFYGZIZMYPWSSWPYNZK[I[HZHXIWKWMXPZS[V[XZZX RWFXGYIYMXPVSSVOYK[","F^UGTHSJQOOUNWLZJ[ RTHSKQSPVOXMZJ[H[GZGXHWIXHY ROLNNMOKOJNJLKJMHOGRFWFZG[I[KZMYNVORO RWFYGZIZKYMXNVO RROUPVRWYX[ RROTPURVYX[Y[[Z]X","H\\NIMKMMNOPPSPVOXN[K\\H\\G[FZFXGWHVJUMSTRWPZN[ RVJUNTUSXQZN[K[IZHXHWIVJWIX","I[YHXJVOTUSWQZO[ RSLRNPONOMMMKNIPGSF\\FZGYHXKVSUVTXRZO[M[KZJYJXKWLXKY RUFYGZG","G]HJJGLFMFOHOKNNKVKYL[ RMFNHNKKSJVJYL[N[PZSWUTVR RZFVRUVUYW[X[ZZ\\X R[FWRVVVYW[","G\\HJJGLFMFOHOKNOLVLYM[ RMFNHNKLRKVKYM[N[QZTWVTXPYMZIZGYFXFWGVIVLWNYP[Q]Q","F]ILHLGKGIHGJFNFMHLLKUJ[ RLLLUK[ RVFTHRLOUMYK[ RVFUHTLSUR[ RTLTUS[ R`F^G\\IZLWUUYS[","H\\PKOLMLLKLIMGOFQFSGTITLSPQUOXMZJ[H[GZGXHWIXHY RQFRGSISLRPPUNXLZJ[ R]G\\H]I^H^G]F[FYGWIULSPRURXSZT[U[WZYX","G]JJLGNFOFQGQIOOORPT ROFPGPINONRPTRTUSWQYNZL R\\FZLWTUX R]F[LYQWUUXSZP[L[JZIXIWJVKWJX","G\\ZHYJWOVRUTSWQYOZL[ RSLRNPONOMMMKNIPGSF]F[GZHYKXOVUTXQZL[H[GZGXHWJWLXOZQ[T[WZYX RVFZG[G","KYOBOb RPBPb ROBVB RObVb"," KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZPLRITL RMORJWO RRJR["," JZJ]Z]","MXVFTHSJSKTLUKTJ","K[UUTSRRPRNSMTLVLXMZO[Q[SZTX RPRNTMVMYO[ RVRTXTZV[XZYY[V RWRUXUZV[","LZLVNSPO RSFMXMZO[P[RZTXUUURVVWWXWZV RTFNXNZO[","LXTSSTTTTSSRQROSNTMVMXNZP[S[VYXV RQROTNVNYP[","K[UUTSRRPRNSMTLVLXMZO[Q[SZTX RPRNTMVMYO[ RZFTXTZV[XZYY[V R[FUXUZV[","LXOYQXRWSUSSRRQROSNTMVMXNZP[S[VYXV RQROTNVNYP[","OXRRUOWLXIXGWFUGTIKdKfLgNfOcPZQ[S[UZVYXV RTISNRRO[M`Kd","K[UUTSRRPRNSMTLVLXMZO[Q[SZTX RPRNTMVMYO[ RVRPd RWRT[R`PdOfMgLfLdMaO_R]V[YY[V","L[LVNSPO RSFL[ RTFM[ ROUQSSRTRVSVUUXUZV[ RTRUSUUTXTZV[XZYY[V","NVSLRMSNTMSL RQROXOZQ[SZTYVV RRRPXPZQ[","NVSLRMSNTMSL RQRKd RRRO[M`KdJfHgGfGdHaJ_M]Q[TYVV","LZLVNSPO RSFL[ RTFM[ RURUSVSURTRRTOU ROURVSZT[ ROUQVRZT[U[XYZV","NVNVPSRO RUFOXOZQ[SZTYVV RVFPXPZQ[","E^EVGSIRKSKUI[ RIRJSJUH[ RKUMSORPRRSRUP[ RPRQSQUO[ RRUTSVRWRYSYUXXXZY[ RWRXSXUWXWZY[[Z\\Y^V","I[IVKSMROSOUM[ RMRNSNUL[ ROUQSSRTRVSVUUXUZV[ RTRUSUUTXTZV[XZYY[V","KYRRPRNSMTLVLXMZO[Q[SZTYUWUUTSRRQSQURWTXVXXWYV RPRNTMVMYO[","L[LVNSPO RQLHg RRLIg ROUQSSRTRVSVUUXUZV[ RTRUSUUTXTZV[XZYY[V","K[UUTSRRPRNSMTLVLXMZO[Q[SZ RPRNTMVMYO[ RVRPdPfQgSfTcT[V[YY[V RWRT[R`Pd","LZLVNSPRRSRUP[ RPRQSQUO[ RRUTSVRWRVU RVRVUWWXWZV","NZNVPSQQQSTUUWUYTZR[ RQSSUTWTYR[ RNZP[U[XYZV","NVNVPSRO RUFOXOZQ[SZTYVV RVFPXPZQ[ RPNVN","K[NRLXLZN[O[QZSXUU RORMXMZN[ RVRTXTZV[XZYY[V RWRUXUZV[","KZNRMTLWLZN[O[RZTXUUUR RORNTMWMZN[ RURVVWWXWZV","H]LRJTIWIZK[L[NZPX RMRKTJWJZK[ RRRPXPZR[S[UZWXXUXR RSRQXQZR[ RXRYVZW[W]V","JZJVLSNRPRQSQUPXOZM[L[KZKYLYKZ RWSVTWTWSVRURSSRUQXQZR[U[XYZV RQSRU RSSQU RPXQZ RQXOZ","K[NRLXLZN[O[QZSXUU RORMXMZN[ RVRPd RWRT[R`PdOfMgLfLdMaO_R]V[YY[V","LYLVNSPRRRTSTVSXPZN[ RRRSSSVRXPZ RN[P\\Q^QaPdNfLgKfKdLaO^R\\VYYV RN[O\\P^PaOdNf","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","KZSFQGPIPKQMSNUNWMXKXIWGUFSF"]
}

gat.alphabet.hershey_scripts = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MXUFTGRS RUGRS RUFVGRS RPYOZP[QZPY","I[PFNM RQFNM RYFWM RZFWM","H]SBLb RYBRb RLOZO RKUYU","H]TBL_ RYBQ_ RZJYKZL[K[JZHYGVFRFOGMIMKNMONVRXT RMKOMVQWRXTXWWYVZS[O[LZKYJWJVKULVKW","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_\\N[O\\P]O]N\\M[MYNWPRXPZN[K[HZGXGVHTISKRPPROTMUKUITGRFPGOIOLPRQUSXUZW[Y[ZYZX RK[IZHXHVITJSPP ROLPQQTSWUYWZYZZY","MXUHTGUFVGVHUJSL","KZZBVESHQKOONTNXO]P`Qb RVESIQMPPOUOZP_Qb","JYSBTDUGVLVPUUSYQ\\N_Jb RSBTEUJUOTTSWQ[N_","J[TFTR ROIYO RYIOO","E_RIR[ RIR[R","MXP[OZPYQZQ[P]N_","E_IR[R","MWRYQZR[SZRY","G]_BEb","H]TFQGOIMLLOKSKVLYMZO[Q[TZVXXUYRZNZKYHXGVFTF RTFRGPINLMOLSLVMYO[ RQ[SZUXWUXRYNYKXHVF","H]TJO[ RVFP[ RVFSIPKNL RUIQKNL","H]OJPKOLNKNJOHPGSFVFYGZIZKYMWOTQPSMUKWI[ RVFXGYIYKXMVOPS RJYKXMXRZUZWYXW RMXR[U[WZXW","H]OJPKOLNKNJOHPGSFVFYGZIZKYMVOSP RVFXGYIYKXMVO RQPSPVQWRXTXWWYVZS[O[LZKYJWJVKULVKW RSPUQVRWTWWVYUZS[","H]XGR[ RYFS[ RYFJUZU","H]QFLP RQF[F RQGVG[F RLPMOPNSNVOWPXRXUWXUZR[O[LZKYJWJVKULVKW RSNUOVPWRWUVXTZR[","H]YIXJYKZJZIYGWFTFQGOIMLLOKSKWLYMZO[R[UZWXXVXSWQVPTOQOOPMRLT RTFRGPINLMOLSLXMZ RR[TZVXWVWRVP","H]NFLL R[FZIXLSRQUPWO[ RXLRRPUOWN[ RMIPFRFWI RNHPGRGWIYIZH[F","H]SFPGOHNJNMOOQPTPXOYNZLZIYGVFSF RSFQGPHOJOMPOQP RTPWOXNYLYIXGVF RQPMQKSJUJXKZN[R[VZWYXWXTWRVQTP RQPNQLSKUKXLZN[ RR[UZVYWWWSVQ","H]YMXOVQTRQROQNPMNMKNIPGSFVFXGYHZJZNYRXUVXTZQ[N[LZKXKWLVMWLX ROQNONKOIQGSF RXGYIYNXRWUUXSZQ[","MXSMRNSOTNSM RPYOZP[QZ","MXSMRNSOTNSM RP[OZPYQZQ[P]N_","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","H]OJPKOLNKNJOHPGSFWFZG[I[KZMYNSPQQQSRTTT RWFYGZIZKYMXNVO RPYOZP[QZPY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","G[G[IZLWOSSLVFV[UXSUQSNQLQKRKTLVNXQZT[Y[","F]SHTITLSPRSQUOXMZK[J[IZIWJRKOLMNJPHRGUFXFZG[I[KZMYNWOTP RSPTPWQXRYTYWXYWZU[R[PZOX","H\\TLTMUNWNYMZKZIYGWFTFQGOIMLLNKRKVLYMZO[Q[TZVXWV","G^TFRGQIPMOSNVMXKZI[G[FZFXGWIWKXMZP[S[VZXXZT[O[KZHYGWFTFRHRJSMUPWRZT\\U","H\\VJVKWLYLZKZIYGVFRFOGNINLONPOSPPPMQLRKTKWLYMZP[S[VZXXYV","H\\RLPLNKMINGQFTFXG[G]F RXGVNTTRXPZN[L[JZIXIVJULUNV RQPZP","G^G[IZMVPQQNRJRGQFPFOGNINLONQOUOXNYMZKZQYVXXVZS[O[LZJXIVIT","F^MMKLJJJIKGMFNFPGQIQKPONULYJ[H[GZGX RMRVOXN[L]J^H^G]F\\FZHXLVRUWUZV[W[YZZY\\V","IZWVUTSQROQLQIRGSFUFVGWIWLVQTVSXQZO[M[KZJXJVKUMUOV","JYT^R[PVOPOJPGRFTFUGVJVMURR[PaOdNfLgKfKdLaN^P\\SZWX","F^MMKLJJJIKGMFNFPGQIQKPONULYJ[H[GZGX R^I^G]F\\FZGXIVLTNROPO RROSQSXTZU[V[XZYY[V","I\\MRORSQVOXMYKYHXFVFUGTISNRSQVPXNZL[J[IZIXJWLWNXQZT[V[YZ[X","@aEMCLBJBICGEFFFHGIIIKHPGTE[ RGTJLLHMGOFPFRGSISKRPQTO[ RQTTLVHWGYFZF\\G]I]K\\PZWZZ[[\\[^Z_YaV","E]JMHLGJGIHGJFKFMGNINKMPLTJ[ RLTOLQHRGTFVFXGYIYKXPVWVZW[X[ZZ[Y]V","H]TFQGOIMLLNKRKVLYMZO[Q[TZVXXUYSZOZKYHXGVFTFRHRKSNUQWSZU\\V","F_SHTITLSPRSQUOXMZK[J[IZIWJRKOLMNJPHRGUFZF\\G]H^J^M]O\\PZQWQUPTO","H^ULTNSOQPOPNNNLOIQGTFWFYGZIZMYPWSSWPYNZK[I[HZHXIWKWMXPZS[V[YZ[X","F_SHTITLSPRSQUOXMZK[J[IZIWJRKOLMNJPHRGUFYF[G\\H]J]M\\O[PYQVQSPTQUSUXVZX[ZZ[Y]V","H\\H[JZLXOTQQSMTJTGSFRFQGPIPKQMSOVQXSYUYWXYWZT[P[MZKXJVJT","H[RLPLNKMINGQFTFXG[G]F RXGVNTTRXPZN[L[JZIXIVJULUNV","E]JMHLGJGIHGJFKFMGNINKMOLRKVKXLZN[P[RZSYUUXMZF RXMWQVWVZW[X[ZZ[Y]V","F]KMILHJHIIGKFLFNGOIOKNOMRLVLYM[O[QZTWVTXPYMZIZGYFXFWGVIVKWNYP[Q","C_HMFLEJEIFGHFIFKGLILLK[ RUFK[ RUFS[ RaF_G\\JYNVTS[","F^NLLLKKKILGNFPFRGSISLQUQXRZT[V[XZYXYVXUVU R]I]G\\FZFXGVITLPUNXLZJ[H[GZGX","F]KMILHJHIIGKFLFNGOIOKNOMRLVLXMZN[P[RZTXVUWSYM R[FYMVWT]RbPfNgMfMdNaP^S[VY[V","H]ULTNSOQPOPNNNLOIQGTFWFYGZIZMYPWTTWPZN[K[JZJXKWNWPXQYR[R^QaPcNfLgKfKdLaN^Q[TYZV","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","JZPLRITL RMORJWO RRJR[","JZJ]Z]","MXVFTHSJSKTLUKTJ","L\\UUTSRRPRNSMTLVLXMZO[Q[SZTXVRUWUZV[W[YZZY\\V","M[MVOSRNSLTITGSFQGPIOMNTNZO[P[RZTXUUURVVWWYW[V","MXTTTSSRQROSNTMVMXNZP[S[VYXV","L\\UUTSRRPRNSMTLVLXMZO[Q[SZTXZF RVRUWUZV[W[YZZY\\V","NXOYQXRWSUSSRRQROSNUNXOZQ[S[UZVYXV","OWOVSQUNVLWIWGVFTGSIQQNZKaJdJfKgMfNcOZP[R[TZUYWV","L[UUTSRRPRNSMTLVLXMZO[Q[SZTY RVRTYPdOfMgLfLdMaP^S\\U[XY[V","M\\MVOSRNSLTITGSFQGPIOMNSM[ RM[NXOVQSSRURVSVUUXUZV[W[YZZY\\V","PWSMSNTNTMSM RPVRRPXPZQ[R[TZUYWV","PWSMSNTNTMSM RPVRRLdKfIgHfHdIaL^O\\Q[TYWV","M[MVOSRNSLTITGSFQGPIOMNSM[ RM[NXOVQSSRURVSVUTVQV RQVSWTZU[V[XZYY[V","OWOVQSTNULVIVGUFSGRIQMPTPZQ[R[TZUYWV","E^EVGSIRJSJTIXH[ RIXJVLSNRPRQSQTPXO[ RPXQVSSURWRXSXUWXWZX[Y[[Z\\Y^V","J\\JVLSNROSOTNXM[ RNXOVQSSRURVSVUUXUZV[W[YZZY\\V","LZRRPRNSMTLVLXMZO[Q[SZTYUWUUTSRRQSQURWTXWXYWZV","KZKVMSNQMUGg RMUNSPRRRTSUUUWTYSZQ[ RMZO[R[UZWYZV","L[UUTSRRPRNSMTLVLXMZO[Q[SZ RVRUUSZPaOdOfPgRfScS\\U[XY[V","MZMVOSPQPSSSTTTVSYSZT[U[WZXYZV","NYNVPSQQQSSVTXTZR[ RNZP[T[VZWYYV","OXOVQSSO RVFPXPZQ[S[UZVYXV RPNWN","L[LVNRLXLZM[O[QZSXUU RVRTXTZU[V[XZYY[V","L[LVNRMWMZN[O[RZTXUUUR RURVVWWYW[V","I^LRJTIWIYJ[L[NZPX RRRPXPZQ[S[UZWXXUXR RXRYVZW\\W^V","JZJVLSNRPRQSQZR[U[XYZV RWSVRTRSSOZN[L[KZ","L[LVNRLXLZM[O[QZSXUU RVRPdOfMgLfLdMaP^S\\U[XY[V","LZLVNSPRRRTTTVSXQZN[P\\Q^QaPdOfMgLfLdMaP^S\\WYZV","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","KYQFOGNINKOMQNSNUMVKVIUGSFQF"]
}

gat.alphabet.hershey_symbolic = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","D`DR`R","D`D``D","RRR>Rf","D`DD``","D`DR`R","F^FY^K","KYK^YF","RRRDR`","KYKFY^","F^FK^Y","KYKRYR","MWMWWM","RRRKRY","MWMMWW","GRRGPGMHJJHMGPGR","GRGRGTHWJZM\\P]R]","R]R]T]W\\ZZ\\W]T]R","R]]R]P\\MZJWHTGRG","D`DOGQKSPTTTYS]Q`O","PUUDSGQKPPPTQYS]U`","OTODQGSKTPTTSYQ]O`","D`DUGSKQPPTPYQ]S`U","KYRJYNKVRZ","JZJRNKVYZR","KYKVKNYVYN","JZLXJPZTXL","JZJ]L]O\\Q[TXUVVSVOULTJSIQIPJOLNONSOVPXS[U\\X]Z]","I]]Z]X\\U[SXPVOSNONLOJPIQISJTLUOVSVVUXT[Q\\O]L]J","JZZGXGUHSIPLONNQNUOXPZQ[S[TZUXVUVQUNTLQIOHLGJG","G[GJGLHOIQLTNUQVUVXUZT[S[QZPXOUNQNNOLPISHUGXGZ","E[EPFRHTJUMVQVUUXSZP[NZLWLSMQNNPLSKVKYL\\M^","EYETHVKWPWSVVTXQYNYLXKVKSLPNNQMTMYN\\P_","OUQOOQOSQUSUUSUQSOQO RQPPQPSQTSTTSTQSPQP RRQQRRSSRRQ","RWRMSMUNVOWQWSVUUVSWRW","D`DRJR RORUR RZR`R","D`DUDO`O`U","JZRDJR RRDZR","D`DR`R RJYZY RP`T`","D`DR`R RDRRb R`RRb","KYQKNLLNKQKSLVNXQYSYVXXVYSYQXNVLSKQK","LXLLLXXXXLLL","KYRJKVYVRJ","LXRHLRR\\XRRH","JZRIPOJOOSMYRUWYUSZOTORI","KYRKRY RKRYR","MWMMWW RWMMW","MWRLRX RMOWU RWOMU","NVQNOONQNSOUQVSVUUVSVQUOSNQN ROQOS RPPPT RQOQU RRORU RSOSU RTPTT RUQUS","NVNNNVVVVNNN ROOOU RPOPU RQOQU RRORU RSOSU RTOTU RUOUU","MWRLMUWURL RROOT RROUT RRRQT RRRST","LULRUWUMLR RORTU RORTO RRRTS RRRTQ","MWRXWOMORX RRUUP RRUOP RRRSP RRRQP","OXXROMOWXR RURPO RURPU RRRPQ RRRPS","RYRKRY RRKYNRQ RSMVNSO","I[RGRV RMJWP RWJMP RIVL\\ R[VX\\ RIV[V RL\\X\\","MWRLRX ROOUO RMUOWQXSXUWWU","LXRLRX RLQMOWOXQ RPWTW","KYMNWX RWNMX ROLLOKQ RULXOYQ","I[NII[ RVI[[ RMM[[ RWMI[ RNIVI RMMWM","KYKFY^","G[MJSV RKPSL RG\\[\\[RG\\","LXPLPPLPLTPTPXTXTTXTXPTPTLPL","KYYPXNVLSKQKNLLNKQKSLVNXQYSYVXXVYT RYPWNUMSMQNPOOQOSPUQVSWUWWVYT","KYRJKVYVRJ RRZYNKNRZ","G]PIPGQFSFTGTI RGZHXJVKTLPLKMJOIUIWJXKXPYTZV\\X]Z RGZ]Z RQZP[Q\\S\\T[SZ","JZRMRS RRSQ\\ RRSS\\ RQ\\S\\ RRMQJPHNG RQJNG RRMSJTHVG RSJVG RRMNKLKJM RPLLLJM RRMVKXKZM RTLXLZM RRMPNOOOR RRMPOOR RRMTNUOUR RRMTOUR","JZRIRK RRNRP RRSRU RRYQ\\ RRYS\\ RQ\\S\\ RRGQIPJ RRGSITJ RPJRITJ RRKPNNOMN RRKTNVOWN RNOPORNTOVO RRPPSNTLTKRKSLT RRPTSVTXTYRYSXT RNTPTRSTTVT RRUPXOYMZLZKYJWJYLZ RRUTXUYWZXZYYZWZYXZ RMZOZRYUZWZ","JZRYQ\\ RRYS\\ RQ\\S\\ RRYUZXZZXZUYTWTYRZOYMWLUMVJUHSGQGOHNJOMMLKMJOKRMTKTJUJXLZOZRY","JZRYQ\\ RRYS\\ RQ\\S\\ RRYVXVVXUXRZQZLYIXHVHTGPGNHLHKIJLJQLRLUNVNXRY","I[IPKR RLKNP RRGRO RXKVP R[PYR","G]IIJKKOKUJYI[ R[IZKYOYUZY[[ RIIKJOKUKYJ[I RI[KZOYUYYZ[[","F^RRR[Q\\ RRVQ\\ RRIQHOHNINKONRR RRISHUHVIVKUNRR RRRNOLNJNIOIQJR RRRVOXNZN[O[QZR RRRNULVJVIUISJR RRRVUXVZV[U[SZR","JZUITJUKVJVIUGSFQFOGNINKOMQOVR ROMTPVRWTWVVXTZ RPNNPMRMTNVPXU[ RNVSYU[V]V_UaSbQbOaN_N^O]P^O_","JZRFQHRJSHRF RRFRb RRQQTRbSTRQ RLMNNPMNLLM RLMXM RTMVNXMVLTM","JZRFQHRJSHRF RRFRT RRPQRSVRXQVSRRP RRTRb RR^Q`RbS`R^ RLMNNPMNLLM RLMXM RTMVNXMVLTM RL[N\\P[NZL[ RL[X[ RT[V\\X[VZT[","E_RIQJRKSJRI RIYHZI[JZIY R[YZZ[[\\Z[Y","F^RHNLKPJSJUKWMXOXQWRU RRHVLYPZSZUYWWXUXSWRU RRUQYP\\ RRUSYT\\ RP\\T\\","F^RNQKPINHMHKIJKJOKRLTNWR\\ RRNSKTIVHWHYIZKZOYRXTVWR\\","F^RGPJLOIR RRGTJXO[R RIRLUPZR] R[RXUTZR]","F^RTTWVXXXZW[U[SZQXPVPSQ RSQUOVMVKUISHQHOINKNMOOQQ RQQNPLPJQISIUJWLXNXPWRT RRTQYP\\ RRTSYT\\ RP\\T\\","I[V+S-Q/P1O4O8P<TDUGUJTMRP RS-Q0P4P8Q;UCVGVJUMRPNRRTUWVZV]UaQiPlPpQtSw RRTTWUZU]T`PhOlOpPsQuSwVy","I[N+Q-S/T1U4U8T<PDOGOJPMRP RQ-S0T4T8S;OCNGNJOMRPVRRTOWNZN]OaSiTlTpStQw RRTPWOZO]P`ThUlUpTsSuQwNy","I[V.S1Q4O8N=NCOIPMSXT\\UbUgTlSoQs RS1Q5P8O=OBPHQLTWU[VaVgUlSpQsNv","I[N.Q1S4U8V=VCUITMQXP\\ObOgPlQoSs RQ1S5T8U=UBTHSLPWO[NaNgOlQpSsVv","Z:RARRo R@RQo R?RRr RZ\"VJRr","I[TMVNXPXOWNTMQMNNMOLQLSMUOWSZ RQMONNOMQMSNUSZT\\T^S_Q_","G]LMKNJPJRKUOYP[ RJRKTOXP[P]O`MbLbKaJ_J\\KXMTOQRNTMVMYNZPZTYXWZU[T[SZSXTWUXTY RVMXNYPYTXXWZ","E_YGXHYIZHYGWFTFQGOINKMNLRJ[I_Ha RTFRGPIOKNNLWK[J^I`HaFbDbCaC`D_E`Da R_G^H_I`H`G_F]F[GZHYJXMU[T_Sa R]F[HZJYNWWV[U^T`SaQbObNaN`O_P`Oa RIM^M","F^[GZH[I\\H[GXFUFRGPIOKNNMRK[J_Ia RUFSGQIPKONMWL[K^J`IaGbEbDaD`E_F`Ea RYMWTVXVZW[Z[\\Y]W RZMXTWXWZX[ RJMZM","F^YGXHYIZHZGXF R\\FUFRGPIOKNNMRK[J_Ia RUFSGQIPKONMWL[K^J`IaGbEbDaD`E_F`Ea R[FWTVXVZW[Z[\\Y]W R\\FXTWXWZX[ RJMYM","@cTGSHTIUHTGRFOFLGJIIKHNGRE[D_Ca ROFMGKIJKINGWF[E^D`CaAb?b>a>`?_@`?a R`G_H`IaH`G]FZFWGUITKSNRRP[O_Na RZFXGVIUKTNRWQ[P^O`NaLbJbIaI`J_K`Ja R^M\\T[X[Z\\[_[aYbW R_M]T\\X\\Z][ RDM_M","@cTGSHTIUHTGRFOFLGJIIKHNGRE[D_Ca ROFMGKIJKINGWF[E^D`CaAb?b>a>`?_@`?a R^G]H^I_H_G]F RaFZFWGUITKSNRRP[O_Na RZFXGVIUKTNRWQ[P^O`NaLbJbIaI`J_K`Ja R`F\\T[X[Z\\[_[aYbW RaF]T\\X\\Z][ RDM^M","LYMQNOPMSMTNTQRWRZS[ RRMSNSQQWQZR[U[WYXW","LXRLNWXPLPVWRL RRRRL RRRLP RRRNW RRRVW RRRXP","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O"]
}

gat.alphabet.hershey_timesg = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MWRFQHRTSHRF RRHRN RRYQZR[SZRY","JZNFMM ROFMM RVFUM RWFUM","H]SBLb RYBRb RLOZO RKUYU","H\\PBP_ RTBT_ RXIWJXKYJYIWGTFPFMGKIKKLMMNOOUQWRYT RKKMMONUPWQXRYTYXWZT[P[MZKXKWLVMWLX","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","F_[NZO[P\\O\\N[MZMYNXPVUTXRZP[M[JZIXIUJSPORMSKSIRGPFNGMIMKNNPQUXWZZ[[[\\Z\\Y RM[KZJXJUKSMQ RMKNMVXXZZ[","NVRFQM RSFQM","KYUBSDQGOKNPNTOYQ]S`UbVb RUBVBTDRGPKOPOTPYR]T`Vb","KYNBPDRGTKUPUTTYR]P`NbOb RNBOBQDSGUKVPVTUYS]Q`Ob","JZRLRX RMOWU RWOMU","E_RIR[ RIR[R","NVSWRXQWRVSWSYQ[","E_IR[R","NVRVQWRXSWRV","G][BIb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF RQFOGNHMJLOLRMWNYOZQ[ RS[UZVYWWXRXOWJVHUGSF","H\\NJPISFS[ RRGR[ RN[W[","H\\LJMKLLKKKJLHMGPFTFWGXHYJYLXNUPPRNSLUKXK[ RTFVGWHXJXLWNTPPR RKYLXNXSZVZXYYX RNXS[W[XZYXYV","H\\LJMKLLKKKJLHMGPFTFWGXIXLWNTOQO RTFVGWIWLVNTO RTOVPXRYTYWXYWZT[P[MZLYKWKVLUMVLW RWQXTXWWYVZT[","H\\THT[ RUFU[ RUFJUZU RQ[X[","H\\MFKP RKPMNPMSMVNXPYSYUXXVZS[P[MZLYKWKVLUMVLW RSMUNWPXSXUWXUZS[ RMFWF RMGRGWF","H\\WIVJWKXJXIWGUFRFOGMILKKOKULXNZQ[S[VZXXYUYTXQVOSNRNOOMQLT RRFPGNIMKLOLUMXOZQ[ RS[UZWXXUXTWQUOSN","H\\KFKL RKJLHNFPFUIWIXHYF RLHNGPGUI RYFYIXLTQSSRVR[ RXLSQRSQVQ[","H\\PFMGLILLMNPOTOWNXLXIWGTFPF RPFNGMIMLNNPO RTOVNWLWIVGTF RPOMPLQKSKWLYMZP[T[WZXYYWYSXQWPTO RPONPMQLSLWMYNZP[ RT[VZWYXWXSWQVPTO","H\\XMWPURRSQSNRLPKMKLLINGQFSFVGXIYLYRXVWXUZR[O[MZLXLWMVNWMX RQSORMPLMLLMIOGQF RSFUGWIXLXRWVVXTZR[","NVROQPRQSPRO RRVQWRXSWRV","NVROQPRQSPRO RSWRXQWRVSWSYQ[","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","I[MJNKMLLKLJMHNGPFSFVGWHXJXLWNVORQRT RSFUGVHWJWLVNTP RRYQZR[SZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","H\\RFK[ RRFY[ RRIX[ RMUVU RI[O[ RU[[[","G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUP RUFWGXHYJYLXNWOUP RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[","H\\KFX[ RLFY[ RYFK[ RIFOF RUF[F RI[O[ RU[[[","H\\RFJ[ RRFZ[ RRIY[ RKZYZ RJ[Z[","G\\LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[Y[YUX[","H]RFR[ RSFS[ RPKMLLMKOKRLTMUPVUVXUYTZRZOYMXLUKPK RPKNLMMLOLRMTNUPV RUVWUXTYRYOXMWLUK ROFVF RO[V[","I[NFN[ ROFO[ RKFZFZLYF RK[R[","F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RLPXP RH[O[ RU[\\[","MXRFR[ RSFS[ ROFVF RO[V[","PURQRRSRSQRQ","F\\KFK[ RLFL[ RYFLS RQOY[ RPOX[ RHFOF RUF[F RH[O[ RU[[[","H\\RFK[ RRFY[ RRIX[ RI[O[ RU[[[","F_KFK[ RLFRX RKFR[ RYFR[ RYFY[ RZFZ[ RHFLF RYF]F RH[N[ RV[][","G^LFL[ RMFYY RMHY[ RYFY[ RIFMF RVF\\F RI[O[","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF","F^KFK[ RLFL[ RXFX[ RYFY[ RHF\\F RH[O[ RU[\\[","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF ROMOT RUMUT ROPUP ROQUQ","G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[P[","H]KFRPJ[ RJFQP RJFYFZLXF RKZXZ RJ[Y[ZUX[","I\\RFR[ RSFS[ RLFKLKFZFZLYF RO[V[","I\\KKKILGMFOFPGQIRMR[ RKIMGOGQI RZKZIYGXFVFUGTISMS[ RZIXGVGTI RO[V[","KYQFOGNINKOMQNSNUMVKVIUGSFQF","G]JXK[O[MWKSJPJLKIMGPFTFWGYIZLZPYSWWU[Y[ZX RMWLTKPKLLINGPF RTFVGXIYLYPXTWW RKZNZ RVZYZ","G]KEJJ RZEYJ RONNS RVNUS RKWJ\\ RZWY\\ RKGYG RKHYH ROPUP ROQUQ RKYYY RKZYZ","G^RFR[ RSFS[ RIMJLLMMQNSOTQU RJLKMLQMSNTQUTUWTXSYQZM[L RTUVTWSXQYM[L\\M ROFVF RO[V[","H\\XFK[ RYFL[ RLFKLKFYF RK[Y[YUX[","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","G]JTROZT RJTRPZT","H\\Hb\\b","LXPFUL RPFOGUL","G^QMNNLPKRJUJXKZN[P[RZUWWTYPZM RQMONMPLRKUKXLZN[ RQMSMUNVPXXYZZ[ RSMTNUPWXXZZ[[[","G\\TFQGOIMMLPKTJZIb RTFRGPINMMPLTKZJb RTFVFXGYHYKXMWNTOPO RVFXHXKWMVNTO RPOTPVRWTWWVYUZR[P[NZMYLV RPOSPURVTVWUYTZR[","I[KMMMONPPU_VaWb RMMNNOPT_UaWbYb RZMYOWRM]K`Jb","I\\VNTMRMONMQLTLWMYNZP[R[UZWWXTXQWOSJRHRFSEUEWFYH RRMPNNQMTMXNZ RR[TZVWWTWPVNTKSISGTFVFYH","I[XPVNTMPMNNNPPRSS RPMONOPQRSS RSSNTLVLXMZP[S[UZWX RSSOTMVMXNZP[","G]ONMOKQJTJWKYLZN[Q[TZWXYUZRZOXMVMTORSPXMb RJWLYNZQZTYWWYU RZOXNVNTPRSPYNb","H\\IPKNMMOMQNROSRSVRZOb RJOLNPNRO RZMYPXRSYP^Nb RYMXPWRSY","G]HQIOKMNMONOPNTL[ RMMNNNPMTK[ RNTPPRNTMVMXNYOYRXWUb RVMXOXRWWTb","LXRMPTOXOZP[S[UYVW RSMQTPXPZQ[","G]KKYY RYKKY","H\\NMJ[ ROMK[ RXMYNZNYMWMUNQROSMS ROSQTSZT[ ROSPTRZS[U[WZYW","H\\KFMFOGPHQJWXXZY[ RMFOHPJVXWZY[Z[ RRMJ[ RRMK[","F]MMGb RNMHb RMPLVLYN[P[RZTXVU RXMUXUZV[Y[[Y\\W RYMVXVZW[","H\\NML[ ROMNSMXL[ RYMXQVU RZMYPXRVUTWQYOZL[ RKMOM","I[RMONMQLTLWMYNZP[R[UZWWXTXQWOVNTMRM RRMPNNQMTMXNZ RR[TZVWWTWPVN","G]PNL[ RPNM[ RVNV[ RVNW[ RIPKNNM[M RIPKONN[N","F]GQHOJMMMNNNPMUMXNZO[ RLMMNMPLULXMZO[Q[SZUXWUXRYMYIXGVFTFRHRJSMUPWRZT RSZUWVUWRXMXIWGVF","H[LVMYNZP[R[UZWWXTXQWOVNTMRMONMQLTHb RR[TZVWWTWPVN RRMPNNQMTIb","H][MQMNNLQKTKWLYMZO[Q[TZVWWTWQVOUNSM RQMONMQLTLXMZ RQ[SZUWVTVPUN RUN[N","H\\SNP[ RSNQ[ RJPLNOMZM RJPLOONZN","H\\IQJOLMOMPNPPNVNYP[ RNMONOPMVMYNZP[Q[TZVXXUYRYOXMWNXOYR RXUYO","E_RIQJRKSJRI RIR[R RRYQZR[SZRY","F]JQLOONNMLNJQITIWJZK[M[OZQWRT RIWJYKZMZOYQW RQTQWRZS[U[WZYWZTZQYNXMWNYOZQ RQWRYSZUZWYYW","IZTFRGQHQIRJUKXK RUKQLOMNONQPSSTVT RUKRLPMOOOQQSST RSTOUMVLXLZN\\S^T_TaRbPb RSTPUNVMXMZO\\S^","F]UFOb RVFNb RGQHOJMMMNNNPMUMXOZRZTYWVYS RLMMNMPLULXMZO[R[TZVXXUYS[M","I[TFRGQHQIRJUKZKZJWKSMPOMRLULWMYP[S]T_TaSbQbPa RULQONRMUMWNYP[","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","JZJFJ[K[KFLFL[M[MFNFN[O[OFPFP[Q[QFRFR[S[SFTFT[U[UFVFV[W[WFXFX[Y[YFZFZ["]
}

gat.alphabet.hershey_timesi = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MXUFTGRS RUGRS RUFVGRS RPYOZP[QZPY","I[PFNM RQFNM RYFWM RZFWM","H]SBLb RYBRb RLOZO RKUYU","H]TBL_ RYBQ_ RZJYKZL[K[JZHYGVFRFOGMIMKNMONVRXT RMKOMVQWRXTXWWYVZS[O[LZKYJWJVKULVKW","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","F_[NZO[P\\O\\N[MZMYNXPVUTXRZP[M[JZIXIUJSPORMSKSIRGPFNGMIMKNNPQUXWZZ[[[\\Z\\Y RM[KZJXJUKSMQ RMKNMVXXZZ[","NWUFSM RVFSM","KZZBVESHQKOONTNXO]P`Qb RVESIQMPPOUOZP_Qb","JYSBTDUGVLVPUUSYQ\\N_Jb RSBTEUJUOTTSWQ[N_","JZRLRX RMOWU RWOMU","E_RIR[ RIR[R","MXP[OZPYQZQ[P]N_","E_IR[R","MXPYOZP[QZPY","G][BIb","H]TFQGOIMLLOKSKVLYMZO[Q[TZVXXUYRZNZKYHXGVFTF RTFRGPINLMOLSLVMYO[ RQ[SZUXWUXRYNYKXHVF","H]TJO[ RVFP[ RVFSIPKNL RUIQKNL","H]OJPKOLNKNJOHPGSFVFYGZIZKYMWOTQPSMUKWI[ RVFXGYIYKXMVOPS RJYKXMXRZUZWYXW RMXR[U[WZXW","H]OJPKOLNKNJOHPGSFVFYGZIZKYMVOSP RVFXGYIYKXMVO RQPSPVQWRXTXWWYVZS[O[LZKYJWJVKULVKW RSPUQVRWTWWVYUZS[","H]XGR[ RYFS[ RYFJUZU","H]QFLP RQF[F RQGVG[F RLPMOPNSNVOWPXRXUWXUZR[O[LZKYJWJVKULVKW RSNUOVPWRWUVXTZR[","H]YIXJYKZJZIYGWFTFQGOIMLLOKSKWLYMZO[R[UZWXXVXSWQVPTOQOOPMRLT RTFRGPINLMOLSLXMZ RR[TZVXWVWRVP","H]NFLL R[FZIXLSRQUPWO[ RXLRRPUOWN[ RMIPFRFWI RNHPGRGWIYIZH[F","H]SFPGOHNJNMOOQPTPXOYNZLZIYGVFSF RSFQGPHOJOMPOQP RTPWOXNYLYIXGVF RQPMQKSJUJXKZN[R[VZWYXWXTWRVQTP RQPNQLSKUKXLZN[ RR[UZVYWWWSVQ","H]YMXOVQTRQROQNPMNMKNIPGSFVFXGYHZJZNYRXUVXTZQ[N[LZKXKWLVMWLX ROQNONKOIQGSF RXGYIYNXRWUUXSZQ[","MXSMRNSOTNSM RPYOZP[QZ","MXSMRNSOTNSM RP[OZPYQZQ[P]N_","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","H]OJPKOLNKNJOHPGSFWFZG[I[KZMYNSPQQQSRTTT RWFYGZIZKYMXNVO RPYOZP[QZPY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","H\\UFH[ RUFV[ RTHU[ RLUUU RF[L[ RR[X[","F^OFI[ RPFJ[ RLFWFZG[I[KZNYOVP RWFYGZIZKYNXOVP RMPVPXQYSYUXXVZR[F[ RVPWQXSXUWXUZR[","H]ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[S[UZWXXV RTFRGPINLMOLSLVMYNZP[","F]OFI[ RPFJ[ RLFUFXGYHZKZOYSWWUYSZO[F[ RUFWGXHYKYOXSVWTYRZO[","F]OFI[ RPFJ[ RTLRT RLF[FZLZF RMPSP RF[U[WVT[","F\\OFI[ RPFJ[ RTLRT RLF[FZLZF RMPSP RF[M[","H^ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[R[UZWXYT RTFRGPINLMOLSLVMYNZP[ RR[TZVXXT RUT\\T","E_NFH[ ROFI[ R[FU[ R\\FV[ RKFRF RXF_F RLPXP RE[L[ RR[Y[","LYUFO[ RVFP[ RRFYF RL[S[","I[XFSWRYQZO[M[KZJXJVKULVKW RWFRWQYO[ RTF[F","F]OFI[ RPFJ[ R]FLS RSOW[ RROV[ RLFSF RYF_F RF[M[ RS[Y[","H\\QFK[ RRFL[ RNFUF RH[W[YUV[","E`NFH[ RNFO[ ROFPY R\\FO[ R\\FV[ R]FW[ RKFOF R\\F`F RE[K[ RS[Z[","F_OFI[ ROFVX ROIV[ R\\FV[ RLFOF RYF_F RF[L[","G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF RSFQGOIMLLOKSKVLYN[ RQ[SZUXWUXRYNYKXHVF","F]OFI[ RPFJ[ RLFXF[G\\I\\K[NYPUQMQ RXFZG[I[KZNXPUQ RF[M[","G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF RSFQGOIMLLOKSKVLYN[ RQ[SZUXWUXRYNYKXHVF RLYLXMVOUPURVSXS_T`V`W^W] RSXT^U_V_W^","F^OFI[ RPFJ[ RLFWFZG[I[KZNYOVPMP RWFYGZIZKYNXOVP RRPTQURVZW[Y[ZYZX RURWYXZYZZY RF[M[","G^ZH[H\\F[L[JZHYGVFRFOGMIMKNMONVRXT RMKOMVQWRXTXWWYVZS[O[LZKYJWJUI[JYKY","H]UFO[ RVFP[ ROFLLNF]F\\L\\F RL[S[","F_NFKQJUJXKZN[R[UZWXXU\\F ROFLQKUKXLZN[ RKFRF RYF_F","H\\NFO[ ROFPY R\\FO[ RLFRF RXF^F","E_MFK[ RNFLY RUFK[ RUFS[ RVFTY R]FS[ RJFQF RZF`F","G]NFU[ ROFV[ R\\FH[ RLFRF RXF^F RF[L[ RR[X[","H]NFRPO[ ROFSPP[ R]FSP RLFRF RYF_F RL[S[","G][FH[ R\\FI[ ROFLLNF\\F RH[V[XUU[","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","G]JTROZT RJTRPZT","H\\Hb\\b","LXPFUL RPFOGUL","H]XMVTUXUZV[Y[[Y\\W RYMWTVXVZW[ RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ","H[PFLSLVMYNZ RQFMS RMSNPPNRMTMVNWOXQXTWWUZR[P[NZMWMS RVNWPWTVWTZR[ RMFQF","I[WPWQXQXPWNUMRMONMQLTLWMYNZP[R[UZWW RRMPNNQMTMXNZ","H]ZFVTUXUZV[Y[[Y\\W R[FWTVXVZW[ RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ RWF[F","I[MVQUTTWRXPWNUMRMONMQLTLWMYNZP[R[UZWX RRMPNNQMTMXNZ","KZZGYHZI[H[GZFXFVGUHTJSMP[O_Na RXFVHUJTNRWQ[P^O`NaLbJbIaI`J_K`Ja ROMYM","H\\YMU[T^RaObLbJaI`I_J^K_J` RXMT[S^QaOb RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ","H]PFJ[ RQFK[ RMTOPQNSMUMWNXOXQVWVZW[ RUMWOWQUWUZV[Y[[Y\\W RMFQF","LYUFTGUHVGUF RMQNOPMSMTNTQRWRZS[ RRMSNSQQWQZR[U[WYXW","LYVFUGVHWGVF RNQOOQMTMUNUQR[Q^P`OaMbKbJaJ`K_L`Ka RSMTNTQQ[P^O`Mb","H\\PFJ[ RQFK[ RXNWOXPYOYNXMWMUNQROSMS ROSQTSZT[ ROSPTRZS[U[WZYW RMFQF","MYUFQTPXPZQ[T[VYWW RVFRTQXQZR[ RRFVF","AbBQCOEMHMINIPHTF[ RGMHNHPGTE[ RHTJPLNNMPMRNSOSQP[ RPMRORQO[ RRTTPVNXMZM\\N]O]Q[W[Z\\[ RZM\\O\\QZWZZ[[^[`YaW","F]GQHOJMMMNNNPMTK[ RLMMNMPLTJ[ RMTOPQNSMUMWNXOXQVWVZW[ RUMWOWQUWUZV[Y[[Y\\W","I[RMONMQLTLWMYNZP[R[UZWWXTXQWOVNTMRM RRMPNNQMTMXNZ RR[TZVWWTWPVN","G\\HQIOKMNMONOPNTJb RMMNNNPMTIb RNTOQQNSMUMWNXOYQYTXWVZS[Q[OZNWNT RWNXPXTWWUZS[ RFbMb","H\\XMRb RYMSb RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ RObVb","IZJQKOMMPMQNQPPTN[ ROMPNPPOTM[ RPTRPTNVMXMYNYOXPWOXN","J[XOXPYPYOXNUMRMONNONQORVVWW RNPOQVUWVWYVZS[P[MZLYLXMXMY","KYTFPTOXOZP[S[UYVW RUFQTPXPZQ[ RNMWM","F]GQHOJMMMNNNQLWLYN[ RLMMNMQKWKYLZN[P[RZTXVT RXMVTUXUZV[Y[[Y\\W RYMWTVXVZW[","H\\IQJOLMOMPNPQNWNYP[ RNMONOQMWMYNZP[Q[TZVXXUYQYMXMYO","C`DQEOGMJMKNKQIWIYK[ RIMJNJQHWHYIZK[M[OZQXRV RTMRVRYSZU[W[YZ[X\\V]R]M\\M]O RUMSVSYU[","H\\KQMNOMRMSOSR RQMRORRQVPXNZL[K[JZJYKXLYKZ RQVQYR[U[WZYW RYNXOYPZOZNYMXMVNTPSRRVRYS[","G\\HQIOKMNMONOQMWMYO[ RMMNNNQLWLYMZO[Q[SZUXWT RZMV[U^SaPbMbKaJ`J_K^L_K` RYMU[T^RaPb","H\\YMXOVQNWLYK[ RLQMOOMRMVO RMOONRNVOXO RLYNYRZUZWY RNYR[U[WYXW","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","JZJFJ[K[KFLFL[M[MFNFN[O[OFPFP[Q[QFRFR[S[SFTFT[U[UFVFV[W[WFXFX[Y[YFZFZ["]
}

gat.alphabet.hershey_timesib = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MXVFUFTGRT RVGUGRT RVGVHRT RVFWGWHRT RPXOYOZP[Q[RZRYQXPX RPYPZQZQYPY","I[PFNM RQFNM RYFWM RZFWM","H]SBLb RYBRb RLOZO RKUYU","H]TBL_ RYBQ_ RZKZJYJYL[L[JZHYGVFRFOGMIMLNNPPVSWUWXVZ RNLONVRWT ROGNINKOMUPWRXTXWWYVZS[O[LZKYJWJULULWKWKV","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_\\O\\N[N[P]P]N\\M[MYNWPRXPZN[K[HZGXGVHTISKRPPROTMUKUITGRFPGOIOLPRQURWTZV[X[YYYX RL[HZ RIZHXHVITJSLR RPPQSTYVZ RK[JZIXIVJTKSMRRO ROLPOQRSVUYWZXZYY","NWUFSM RVFSM","JZZBXCUERHPKNOMSMXN\\O_Qb RSHQKOONTN\\ RZBWDTGRJQLPOOSN\\ RNTO]P`Qb","JZSBUEVHWLWQVUTYR\\O_LaJb RVHVPUUSYQ\\ RSBTDUGVP RVHUQTUSXRZP]M`Jb","J[TFSGUQTR RTFTR RTFUGSQTR ROIPIXOYO ROIYO ROIOJYNYO RYIXIPOOO RYIOO RYIYJONOO","F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R","MXQ[P[OZOYPXQXRYR[Q]P^N_ RPYPZQZQYPY RQ[Q\\P^","E_IR[R","MXPXOYOZP[Q[RZRYQXPX RPYPZQZQYPY","G^[BIbJb R[B\\BJb","H]TFQGOIMLLOKSKVLYMZO[Q[TZVXXUYRZNZKYHXGVFTF RQHOJNLMOLSLWMY RTYVWWUXRYNYJXH RTFRGPJOLNOMSMXNZO[ RQ[SZUWVUWRXNXIWGVF","H]TJO[Q[ RWFUJP[ RWFQ[ RWFTIQKOL RTJRKOL","H]OKOJPJPLNLNJOHPGSFVFYGZIZKYMWOMUKWI[ RXGYIYKXMVOSQ RVFWGXIXKWMUOMU RJYKXMXRYWYXX RMXRZWZ RMXR[U[WZXXXW","H]OKOJPJPLNLNJOHPGSFVFYGZIZKYMXNVOSP RXGYIYKXMWN RVFWGXIXKWMUOSP RQPSPVQWRXTXWWYUZR[O[LZKYJWJULULWKWKV RVRWTWWVY RSPUQVSVWUYTZR[","H]WJR[T[ RZFXJS[ RZFT[ RZFJUZU","H]QFLP RQF[F RQGYG RPHUHYG[F RLPMOPNSNVOWPXRXUWXUZQ[N[LZKYJWJULULWKWKV RVPWRWUVXTZ RSNUOVQVUUXSZQ[","H]YJYIXIXKZKZIYGWFTFQGOIMLLOKSKVLYMZO[R[UZWXXVXSWQVPTOQOOPNQMS RPINLMOLSLWMY RVXWVWSVQ RTFRGPJOLNOMSMXNZO[ RR[TZUYVVVRUPTO","H]NFLL R[FZIXLTQRTQWP[ RRSPWO[ RXLRRPUOWN[P[ RMIPFRFWI ROGRGWI RMIOHRHWIYIZH[F","H]SFPGOHNJNMOOQPTPWOYNZLZIYGWFSF RUFPG RPHOJONPO ROORP RSPWO RXNYLYIXG RYGUF RSFQHPJPNQP RTPVOWNXLXHWF RQPMQKSJUJXKZN[R[VZWYXWXTWRVQTP RRPMQ RNQLSKUKXLZ RKZP[VZ RVYWWWTVR RVQSP RQPOQMSLULXMZN[ RR[TZUYVWVSUQTP","H]XNWPVQTRQROQNPMNMKNIPGSFVFXGYHZKZNYRXUVXTZQ[N[LZKXKVMVMXLXLW ROPNNNKOI RXHYJYNXRWUUX RQRPQOOOKPHQGSF RVFWGXIXNWRVUUWSZQ[","MXSMRNROSPTPUOUNTMSM RSNSOTOTNSN RPXOYOZP[Q[RZRYQXPX RPYPZQZQYPY","MXSMRNROSPTPUOUNTMSM RSNSOTOTNSN RQ[P[OZOYPXQXRYR[Q]P^N_ RPYPZQZQYPY RQ[Q\\P^","F^ZIJRZ[","F_JM[M[N RJMJN[N RJU[U[V RJUJV[V","F^JIZRJ[","H]OKOJPJPLNLNJOHPGSFWFZG[I[KZMYNWOSPQQQSSTTT RUFZG RYGZIZKYMXNVO RWFXGYIYKXMWNSPRQRSST RPXOYOZP[Q[RZRYQXPX RPYPZQZQYPY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","H\\UFIZ RSJT[ RTHUZ RUFUHVYV[ RLUTU RF[L[ RQ[X[ RIZG[ RIZK[ RTZR[ RTYS[ RVYW[","F^OFI[ RPFJ[ RQFK[ RLFWFZG[I[KZNYOVP RYGZIZKYNXO RWFXGYIYKXNVP RNPVPXQYSYUXXVZR[F[ RWQXSXUWXUZ RVPWRWUVXTZR[ RMFPG RNFOH RRFPH RSFPG RJZG[ RJYH[ RKYL[ RJZM[","H]ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[S[UZWXXV RQHOJNLMOLSLWMY RTFRGPJOLNOMSMXNZP[","F]OFI[ RPFJ[ RQFK[ RLFUFXGYHZKZOYSWWUYSZO[F[ RWGXHYKYOXSVWTY RUFWHXKXOWSUWRZO[ RMFPG RNFOH RRFPH RSFPG RJZG[ RJYH[ RKYL[ RJZM[","F]OFI[ RPFJ[ RQFK[ RULST RLF[FZL RNPTP RF[U[WV RMFPG RNFOH RRFPH RSFPG RWFZG RXFZH RYFZI RZFZL RULSPST RTNRPSR RTOQPSQ RJZG[ RJYH[ RKYL[ RJZM[ RP[UZ RR[UY RUYWV","F\\OFI[ RPFJ[ RQFK[ RULST RLF[FZL RNPTP RF[N[ RMFPG RNFOH RRFPH RSFPG RWFZG RXFZH RYFZI RZFZL RULSPST RTNRPSR RTOQPSQ RJZG[ RJYH[ RKYL[ RJZM[","H^ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[R[UZWXYT RQHOJNLMOLSLWMY RVXWWXT RTFRGPJOLNOMSMXNZP[ RR[TZVWWT RTT\\T RUTWU RVTWW RZTXV R[TXU","E_NFH[ ROFI[ RPFJ[ RZFT[ R[FU[ R\\FV[ RKFSF RWF_F RLPXP RE[M[ RQ[Y[ RLFOG RMFNH RQFOH RRFOG RXF[G RYFZH R]F[H R^F[G RIZF[ RIYG[ RJYK[ RIZL[ RUZR[ RUYS[ RVYW[ RUZX[","KYTFN[ RUFO[ RVFP[ RQFYF RK[S[ RRFUG RSFTH RWFUH RXFUG ROZL[ ROYM[ RPYQ[ ROZR[","I\\WFRWQYO[ RXFTSSVRX RYFUSSXQZO[M[KZJXJVKULUMVMWLXKX RKVKWLWLVKV RTF\\F RUFXG RVFWH RZFXH R[FXG","F]OFI[ RPFJ[ RQFK[ R\\GMR RQOU[ RROV[ RSNWZ RLFTF RYF_F RF[N[ RR[Y[ RMFPG RNFOH RRFPH RSFPG RZF\\G R^F\\G RJZG[ RJYH[ RKYL[ RJZM[ RUZS[ RUYT[ RVYX[","H\\QFK[ RRFL[ RSFM[ RNFVF RH[W[YU ROFRG RPFQH RTFRH RUFRG RLZI[ RLYJ[ RMYN[ RLZO[ RR[WZ RT[XX RV[YU","D`MFGZ RMGNYN[ RNFOY ROFPX R[FPXN[ R[FU[ R\\FV[ R]FW[ RJFOF R[F`F RD[J[ RR[Z[ RKFMG RLFMH R^F\\H R_F\\G RGZE[ RGZI[ RVZS[ RVYT[ RWYX[ RVZY[","F_OFIZ ROFV[ RPFVX RQFWX R\\GWXV[ RLFQF RYF_F RF[L[ RMFPG RNFPH RZF\\G R^F\\G RIZG[ RIZK[","G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF ROIMLLOKSKWLY RUXWUXRYNYJXH RSFQGOJNLMOLSLXMZN[ RQ[SZUWVUWRXNXIWGVF","F]OFI[ RPFJ[ RQFK[ RLFXF[G\\I\\K[NYPUQMQ RZG[I[KZNXP RXFYGZIZKYNWPUQ RF[N[ RMFPG RNFOH RRFPH RSFPG RJZG[ RJYH[ RKYL[ RJZM[","G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF ROIMLLOKSKWLY RUXWUXRYNYJXH RSFQGOJNLMOLSLXMZN[ RQ[SZUWVUWRXNXIWGVF RLXMVOUPURVSXT]U^V^W] RT^U_V_ RSXS_T`V`W]W\\","F^OFI[ RPFJ[ RQFK[ RLFWFZG[I[KZNYOVPNP RYGZIZKYNXO RWFXGYIYKXNVP RRPTQURWXXYYYZX RWYXZYZ RURVZW[Y[ZXZW RF[N[ RMFPG RNFOH RRFPH RSFPG RJZG[ RJYH[ RKYL[ RJZM[","G^ZH[H\\F[L[JZHYGVFRFOGMIMLNNPPVSWUWXVZ RNLONVRWT ROGNINKOMUPWRXTXWWYVZS[O[LZKYJWJUI[JYKY","G]TFN[ RUFO[ RVFP[ RMFKL R]F\\L RMF]F RK[S[ RNFKL RPFLI RRFMG RYF\\G RZF\\H R[F\\I R\\F\\L ROZL[ ROYM[ RPYQ[ ROZR[","F_NFKQJUJXKZN[R[UZWXXU\\G ROFLQKUKYLZ RPFMQLULYN[ RKFSF RYF_F RLFOG RMFNH RQFOH RRFOG RZF\\G R^F\\G","H\\NFNHOYO[ ROGPX RPFQW R[GO[ RLFSF RXF^F RMFNH RQFPH RRFOG RYF[G R]F[G","E_MFMHKYK[ RNGLX ROFMW RUFMWK[ RUFUHSYS[ RVGTX RWFUW R]GUWS[ RJFRF RUFWF RZF`F RKFNG RLFMH RPFNI RQFNG R[F]G R_F]G","G]NFT[ ROFU[ RPFV[ R[GIZ RLFSF RXF^F RF[L[ RQ[X[ RMFOH RQFPH RRFPG RYF[G R]F[G RIZG[ RIZK[ RTZR[ RTYS[ RUYW[","G]MFQPN[ RNFRPO[ ROFSPP[ R\\GSP RKFRF RYF_F RK[S[ RLFNG RPFOH RQFNG RZF\\G R^F\\G ROZL[ ROYM[ RPYQ[ ROZR[","G]ZFH[ R[FI[ R\\FJ[ R\\FNFLL RH[V[XU ROFLL RPFMI RRFNG RR[VZ RT[WX RU[XU","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","G]JTROZT RJTRPZT","H\\Hb\\b","LXPFUL RPFOGUL","G]WMUTUXVZW[Y[[Y\\W RXMVTVZ RWMYMWTVX RUTUQTNRMPMMNKQJTJVKYLZN[P[RZSYTWUT RNNLQKTKWLY RPMNOMQLTLWMZN[","I\\PFNMMSMWNYOZQ[S[VZXWYTYRXOWNUMSMQNPOOQNT RQFOMNQNWOZ RVYWWXTXQWO RMFRFPMNT RS[UYVWWTWQVNUM RNFQG ROFPH","I[WQWPVPVRXRXPWNUMRMONMQLTLVMYNZP[R[UZWW ROONQMTMWNY RRMPOOQNTNWOZP[","G]YFVQUUUXVZW[Y[[Y\\W RZFWQVUVZ RVF[FWTVX RUTUQTNRMPMMNKQJTJVKYLZN[P[RZSYTWUT RMOLQKTKWLY RPMNOMQLTLWMZN[ RWFZG RXFYH","I[MVQUTTWRXPWNUMRMONMQLTLVMYNZP[R[UZWX ROONQMTMWNY RRMPOOQNTNWOZP[","JZZHZGYGYI[I[GZFXFVGTISKRNQRO[N^M`Kb RTJSMRRP[O^ RXFVHUJTMSRQZP]O_MaKbIbHaH_J_JaIaI` RNMYM","H]XMT[S^QaOb RYMU[S_ RXMZMV[T_RaObLbJaI`I^K^K`J`J_ RVTVQUNSMQMNNLQKTKVLYMZO[Q[SZTYUWVT RNOMQLTLWMY RQMOONQMTMWNZO[","G]OFI[K[ RPFJ[ RLFQFK[ RMTOPQNSMUMWNXPXSVX RWNWRVVVZ RWPUUUXVZW[Y[[Y\\W RMFPG RNFOH","KXSFSHUHUFSF RTFTH RSGUG RLQMOOMQMRNSPSSQX RRNRRQVQZ RRPPUPXQZR[T[VYWW","KXUFUHWHWFUF RVFVH RUGWG RMQNOPMRMSNTPTSRZQ]P_NaLbJbIaI_K_KaJaJ` RSNSSQZP]O_ RSPRTP[O^N`Lb","G]OFI[K[ RPFJ[ RLFQFK[ RYOYNXNXPZPZNYMWMUNQROS RMSOSQTRUTYUZWZ RQUSYTZ ROSPTRZS[U[WZYW RMFPG RNFOH","LXTFQQPUPXQZR[T[VYWW RUFRQQUQZ RQFVFRTQX RRFUG RSFTH","@cAQBODMFMGNHPHSF[ RGNGSE[ RGPFTD[F[ RHSJPLNNMPMRNSPSSQ[ RRNRSP[ RRPQTO[Q[ RSSUPWNYM[M]N^P^S\\X R]N]R\\V\\Z R]P[U[X\\Z][_[aYbW","F^GQHOJMLMMNNPNSL[ RMNMSK[ RMPLTJ[L[ RNSPPRNTMVMXNYPYSWX RXNXRWVWZ RXPVUVXWZX[Z[\\Y]W","H\\QMNNLQKTKVLYMZP[S[VZXWYTYRXOWNTMQM RNOMQLTLWMY RVYWWXTXQWO RQMOONQMTMWNZP[ RS[UYVWWTWQVNTM","G]HQIOKMMMNNOPOSNWKb RNNNSMWJb RNPMTIb ROTPQQORNTMVMXNYOZRZTYWWZT[R[PZOWOT RXOYQYTXWWY RVMWNXQXTWWVYT[ RFbNb RJaGb RJ`Hb RK`Lb RJaMb","G\\WMQb RXMRb RWMYMSb RUTUQTNRMPMMNKQJTJVKYLZN[P[RZSYTWUT RMOLQKTKWLY RPMNOMQLTLWMZN[ RNbVb RRaOb RR`Pb RS`Tb RRaUb","I[JQKOMMOMPNQPQTO[ RPNPTN[ RPPOTM[O[ RYOYNXNXPZPZNYMWMUNSPQT","J[XPXOWOWQYQYOXNUMRMONNONQOSQTTUVVWX RONNQ RORQSTTVU RWVVZ RNOOQQRTSVTWVWXVZS[P[MZLYLWNWNYMYMX","KYTFQQPUPXQZR[T[VYWW RUFRQQUQZ RTFVFRTQX RNMXM","F^GQHOJMLMMNNPNSLX RMNMRLVLZ RMPKUKXLZN[P[RZTXVU RXMVUVXWZX[Z[\\Y]W RYMWUWZ RXMZMXTWX","H\\IQJOLMNMONPPPSNX RONORNVNZ ROPMUMXNZP[R[TZVXXUYQYMXMXNYP","CaDQEOGMIMJNKPKSIX RJNJRIVIZ RJPHUHXIZK[M[OZQXRU RTMRURXSZU[W[YZ[X]U^Q^M]M]N^P RUMSUSZ RTMVMTTSX","G]JQLNNMPMRNSPSR RPMQNQRPVOXMZK[I[HZHXJXJZIZIY RRORRQVQY RZOZNYNYP[P[NZMXMVNTPSRRVRZS[ RPVPXQZS[U[WZYW","G]HQIOKMMMNNOPOSMX RNNNRMVMZ RNPLULXMZO[Q[SZUXWT RYMU[T^RaPb RZMV[T_ RYM[MW[U_SaPbMbKaJ`J^L^L`K`K_","H\\YMXOVQNWLYK[ RXOOOMPLR RVORNONNO RVORMOMMOLR RLYUYWXXV RNYRZUZVY RNYR[U[WYXV","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","JZJFJ[K[KFLFL[M[MFNFN[O[OFPFP[Q[QFRFR[S[SFTFT[U[UFVFV[W[WFXFX[Y[YFZFZ["]
}

gat.alphabet.hershey_timesr = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MWRFQHRTSHRF RRHRN RRYQZR[SZRY","I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM","H]SBLb RYBRb RLOZO RKUYU","H\\PBP_ RTBT_ RXIWJXKYJYIWGTFPFMGKIKKLMMNOOUQWRYT RKKMMONUPWQXRYTYXWZT[P[MZKXKWLVMWLX","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","F_[NZO[P\\O\\N[MZMYNXPVUTXRZP[M[JZIXIUJSPORMSKSIRGPFNGMIMKNNPQUXWZZ[[[\\Z\\Y RM[KZJXJUKSMQ RMKNMVXXZZ[","NVRFQM RSFQM","KYVBTDRGPKOPOTPYR]T`Vb RTDRHQKPPPTQYR\\T`","KYNBPDRGTKUPUTTYR]P`Nb RPDRHSKTPTTSYR\\P`","JZRLRX RMOWU RWOMU","E_RIR[ RIR[R","NVSWRXQWRVSWSYQ[","E_IR[R","NVRVQWRXSWRV","G][BIb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF RQFOGNHMJLOLRMWNYOZQ[ RS[UZVYWWXRXOWJVHUGSF","H\\NJPISFS[ RRGR[ RN[W[","H\\LJMKLLKKKJLHMGPFTFWGXHYJYLXNUPPRNSLUKXK[ RTFVGWHXJXLWNTPPR RKYLXNXSZVZXYYX RNXS[W[XZYXYV","H\\LJMKLLKKKJLHMGPFTFWGXIXLWNTOQO RTFVGWIWLVNTO RTOVPXRYTYWXYWZT[P[MZLYKWKVLUMVLW RWQXTXWWYVZT[","H\\THT[ RUFU[ RUFJUZU RQ[X[","H\\MFKP RKPMNPMSMVNXPYSYUXXVZS[P[MZLYKWKVLUMVLW RSMUNWPXSXUWXUZS[ RMFWF RMGRGWF","H\\WIVJWKXJXIWGUFRFOGMILKKOKULXNZQ[S[VZXXYUYTXQVOSNRNOOMQLT RRFPGNIMKLOLUMXOZQ[ RS[UZWXXUXTWQUOSN","H\\KFKL RKJLHNFPFUIWIXHYF RLHNGPGUI RYFYIXLTQSSRVR[ RXLSQRSQVQ[","H\\PFMGLILLMNPOTOWNXLXIWGTFPF RPFNGMIMLNNPO RTOVNWLWIVGTF RPOMPLQKSKWLYMZP[T[WZXYYWYSXQWPTO RPONPMQLSLWMYNZP[ RT[VZWYXWXSWQVPTO","H\\XMWPURRSQSNRLPKMKLLINGQFSFVGXIYLYRXVWXUZR[O[MZLXLWMVNWMX RQSORMPLMLLMIOGQF RSFUGWIXLXRWVVXTZR[","NVROQPRQSPRO RRVQWRXSWRV","NVROQPRQSPRO RSWRXQWRVSWSYQ[","F^ZIJRZ[","E_IO[O RIU[U","F^JIZRJ[","I[MJNKMLLKLJMHNGPFSFVGWHXJXLWNVORQRT RSFUGVHWJWLVNTP RRYQZR[SZRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","H\\RFK[ RRFY[ RRIX[ RMUVU RI[O[ RU[[[","G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUP RUFWGXHYJYLXNWOUP RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[","G\\XIYLYFXIVGSFQFNGLIKKJNJSKVLXNZQ[S[VZXXYV RQFOGMILKKNKSLVMXOZQ[","G]LFL[ RMFM[ RIFSFVGXIYKZNZSYVXXVZS[I[ RSFUGWIXKYNYSXVWXUZS[","G\\LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[Y[YUX[","G[LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[P[","G^XIYLYFXIVGSFQFNGLIKKJNJSKVLXNZQ[S[VZXX RQFOGMILKKNKSLVMXOZQ[ RXSX[ RYSY[ RUS\\S","F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RLPXP RH[O[ RU[\\[","MXRFR[ RSFS[ ROFVF RO[V[","KZUFUWTZR[P[NZMXMVNUOVNW RTFTWSZR[ RQFXF","F\\KFK[ RLFL[ RYFLS RQOY[ RPOX[ RHFOF RUF[F RH[O[ RU[[[","I[NFN[ ROFO[ RKFRF RK[Z[ZUY[","F_KFK[ RLFRX RKFR[ RYFR[ RYFY[ RZFZ[ RHFLF RYF]F RH[N[ RV[][","G^LFL[ RMFYY RMHY[ RYFY[ RIFMF RVF\\F RI[O[","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF","G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[P[","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF RNYNXOVQURUTVUXV_W`Y`Z^Z] RUXV\\W^X_Y_Z^","G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUPMP RUFWGXHYJYLXNWOUP RI[P[ RRPTQURXYYZZZ[Y RTQUSWZX[Z[[Y[X","H\\XIYFYLXIVGSFPFMGKIKKLMMNOOUQWRYT RKKMMONUPWQXRYTYXWZT[Q[NZLXKUK[LX","I\\RFR[ RSFS[ RLFKLKFZFZLYF RO[V[","F^KFKULXNZQ[S[VZXXYUYF RLFLUMXOZQ[ RHFOF RVF\\F","H\\KFR[ RLFRX RYFR[ RIFOF RUF[F","F^JFN[ RKFNV RRFN[ RRFV[ RSFVV RZFV[ RGFNF RWF]F","H\\KFX[ RLFY[ RYFK[ RIFOF RUF[F RI[O[ RU[[[","H]KFRQR[ RLFSQS[ RZFSQ RIFOF RVF\\F RO[V[","H\\XFK[ RYFL[ RLFKLKFYF RK[Y[YUX[","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","G]JTROZT RJTRPZT","H\\Hb\\b","LXPFUL RPFOGUL","I]NONPMPMONNPMTMVNWOXQXXYZZ[ RWOWXXZZ[[[ RWQVRPSMTLVLXMZP[S[UZWX RPSNTMVMXNZP[","G\\LFL[ RMFM[ RMPONQMSMVNXPYSYUXXVZS[Q[OZMX RSMUNWPXSXUWXUZS[ RIFMF","H[WPVQWRXQXPVNTMQMNNLPKSKULXNZQ[S[VZXX RQMONMPLSLUMXOZQ[","H]WFW[ RXFX[ RWPUNSMQMNNLPKSKULXNZQ[S[UZWX RQMONMPLSLUMXOZQ[ RTFXF RW[[[","H[LSXSXQWOVNTMQMNNLPKSKULXNZQ[S[VZXX RWSWPVN RQMONMPLSLUMXOZQ[","KXUGTHUIVHVGUFSFQGPIP[ RSFRGQIQ[ RMMUM RM[T[","I\\QMONNOMQMSNUOVQWSWUVVUWSWQVOUNSMQM RONNPNTOV RUVVTVPUN RVOWNYMYNWN RNUMVLXLYM[P\\U\\X]Y^ RLYMZP[U[X\\Y^Y_XaUbObLaK_K^L\\O[","G]LFL[ RMFM[ RMPONRMTMWNXPX[ RTMVNWPW[ RIFMF RI[P[ RT[[[","MXRFQGRHSGRF RRMR[ RSMS[ ROMSM RO[V[","MXSFRGSHTGSF RTMT_SaQbObNaN`O_P`Oa RSMS_RaQb RPMTM","G\\LFL[ RMFM[ RWMMW RRSX[ RQSW[ RIFMF RTMZM RI[P[ RT[Z[","MXRFR[ RSFS[ ROFSF RO[V[","BcGMG[ RHMH[ RHPJNMMOMRNSPS[ ROMQNRPR[ RSPUNXMZM]N^P^[ RZM\\N]P][ RDMHM RD[K[ RO[V[ RZ[a[","G]LML[ RMMM[ RMPONRMTMWNXPX[ RTMVNWPW[ RIMMM RI[P[ RT[[[","H\\QMNNLPKSKULXNZQ[S[VZXXYUYSXPVNSMQM RQMONMPLSLUMXOZQ[ RS[UZWXXUXSWPUNSM","G\\LMLb RMMMb RMPONQMSMVNXPYSYUXXVZS[Q[OZMX RSMUNWPXSXUWXUZS[ RIMMM RIbPb","H\\WMWb RXMXb RWPUNSMQMNNLPKSKULXNZQ[S[UZWX RQMONMPLSLUMXOZQ[ RTb[b","IZNMN[ ROMO[ ROSPPRNTMWMXNXOWPVOWN RKMOM RK[R[","J[WOXMXQWOVNTMPMNNMOMQNRPSUUWVXW RMPNQPRUTWUXVXYWZU[Q[OZNYMWM[NY","KZPFPWQZS[U[WZXX RQFQWRZS[ RMMUM","G]LMLXMZP[R[UZWX RMMMXNZP[ RWMW[ RXMX[ RIMMM RTMXM RW[[[","I[LMR[ RMMRY RXMR[ RJMPM RTMZM","F^JMN[ RKMNX RRMN[ RRMV[ RSMVX RZMV[ RGMNM RWM]M","H\\LMW[ RMMX[ RXML[ RJMPM RTMZM RJ[P[ RT[Z[","H[LMR[ RMMRY RXMR[P_NaLbKbJaK`La RJMPM RTMZM","I[WML[ RXMM[ RMMLQLMXM RL[X[XWW[","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","JZJFJ[K[KFLFL[M[MFNFN[O[OFPFP[Q[QFRFR[S[SFTFT[U[UFVFV[W[WFXFX[Y[YFZFZ["]
}

gat.alphabet.hershey_timesrb = {
  lineHeight:30,
  textlineToPath: gat.alphabet.hershey_astrology.textlineToPath,
  alphabet:[
    "JZ","MXRFQGQIRQ RRFRTST RRFSFST RSFTGTISQ RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM","H]SBLb RYBRb RLOZO RKUYU","H\\PBP_ RTBT_ RXKXJWJWLYLYJXHWGTFPFMGKIKLLNOPURWSXUXXWZ RLLMNOOUQWRXT RMGLILKMMONUPXRYTYWXYWZT[P[MZLYKWKUMUMWLWLV","F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT","E_[O[NZNZP\\P\\N[MZMYNXPVUTXRZP[L[JZIXIUJSPORMSKSIRGPFNGMIMLNOPRTWWZY[[[\\Y\\X RKZJXJUKSLR RRMSI RSKRG RNGMK RNNPQTVWYYZ RN[LZKXKULSPO RMINMQQUVXYZZ[Z\\Y","NWSFRGRM RSGRM RSFTGRM","KYUBSDQGOKNPNTOYQ]S`Ub RQHPKOOOUPYQ\\ RSDRFQIPOPUQ[R^S`","KYOBQDSGUKVPVTUYS]Q`Ob RSHTKUOUUTYS\\ RQDRFSITOTUS[R^Q`","JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO","F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R","MXTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^","E_IR[R","MXRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","G^[BIbJb R[B\\BJb","H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF RNHMJLNLSMWNY RVYWWXSXNWJVH RQFOGNIMNMSNXOZQ[ RS[UZVXWSWNVIUGSF","H\\QHQ[ RRHRZ RSFS[ RSFPINJ RM[W[ RQZO[ RQYP[ RSYT[ RSZU[","H\\LJLKMKMJLJ RLIMINJNKMLLLKKKJLHMGPFTFWGXHYJYLXNUPPRNSLUKXK[ RWHXJXLWN RTFVGWJWLVNTPPR RKYLXNXSYWYYX RNXSZWZXY RNXS[W[XZYXYV","H\\LJLKMKMJLJ RLIMINJNKMLLLKKKJLHMGPFTFWGXIXLWNTO RVGWIWLVN RSFUGVIVLUNSO RQOTOVPXRYTYWXYWZT[P[MZLYKWKVLUMUNVNWMXLX RWRXTXWWY RSOUPVQWTWWVZT[ RLVLWMWMVLV","H\\SIS[ RTHTZ RUFU[ RUFJUZU RP[X[ RSZQ[ RSYR[ RUYV[ RUZW[","H\\MFKPMNPMSMVNXPYSYUXXVZS[P[MZLYKWKVLUMUNVNWMXLX RWPXRXVWX RSMUNVOWRWVVYUZS[ RLVLWMWMVLV RMFWF RMGUG RMHQHUGWF","H\\VIVJWJWIVI RWHVHUIUJVKWKXJXIWGUFRFOGMILKKOKULXNZQ[S[VZXXYUYTXQVOSNQNOONPMR RNIMKLOLUMXNY RWXXVXSWQ RRFPGOHNJMNMUNXOZQ[ RS[UZVYWVWSVPUOSN","H\\KFKL RYFYIXLTQSSRWR[ RSRRTQWQ[ RXLSQQTPWP[R[ RKJLHNFPFUIWIXHYF RMHNGPGRH RKJLINHPHUI","H\\PFMGLILLMNPOTOWNXLXIWGTFPF RNGMIMLNN RVNWLWIVG RPFOGNINLONPO RTOUNVLVIUGTF RPOMPLQKSKWLYMZP[T[WZXYYWYSXQWPTO RMQLSLWMY RWYXWXSWQ RPONPMSMWNZP[ RT[VZWWWSVPTO","H\\MWMXNXNWMW RWOVQURSSQSNRLPKMKLLINGQFSFVGXIYLYRXVWXUZR[O[MZLXLWMVNVOWOXNYMY RMPLNLKMI RVHWIXLXRWVVX RQSORNQMNMKNHOGQF RSFUGVIWLWSVWUYTZR[","MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^","F^ZIJRZ[","F_JM[M[N RJMJN[N RJU[U[V RJUJV[V","F^JIZRJ[","I\\MKMJNJNLLLLJMHNGPFTFWGXHYJYLXNWOSQ RWHXIXMWN RTFVGWIWMVOUP RRQRTSTSQRQ RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY","E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV","H\\RFKZ RQIW[ RRIX[ RRFY[ RMUVU RI[O[ RT[[[ RKZJ[ RKZM[ RWZU[ RWYV[ RXYZ[","G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZLYNXOUP RXHYJYLXN RUFWGXIXMWOUP RNPUPXQYRZTZWYYXZU[I[ RXRYTYWXY RUPWQXSXXWZU[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[","G\\XIYFYLXIVGTFQFNGLIKKJNJSKVLXNZQ[T[VZXXYV RMILKKNKSLVMX RQFOGMJLNLSMWOZQ[","G]LFL[ RMGMZ RNFN[ RIFSFVGXIYKZNZSYVXXVZS[I[ RWIXKYNYSXVWX RSFUGWJXNXSWWUZS[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[","G\\LFL[ RMGMZ RNFN[ RIFYFYL RNPTP RTLTT RI[Y[YU RJFLG RKFLH ROFNH RPFNG RTFYG RVFYH RWFYI RXFYL RTLSPTT RTNRPTR RTOPPTQ RLZJ[ RLYK[ RNYO[ RNZP[ RT[YZ RV[YY RW[YX RX[YU","G[LFL[ RMGMZ RNFN[ RIFYFYL RNPTP RTLTT RI[Q[ RJFLG RKFLH ROFNH RPFNG RTFYG RVFYH RWFYI RXFYL RTLSPTT RTNRPTR RTOPPTQ RLZJ[ RLYK[ RNYO[ RNZP[","G^XIYFYLXIVGTFQFNGLIKKJNJSKVLXNZQ[T[VZXZY[YS RMILKKNKSLVMX RQFOGMJLNLSMWOZQ[ RXTXY RWSWYVZ RTS\\S RUSWT RVSWU RZSYU R[SYT","F^KFK[ RLGLZ RMFM[ RWFW[ RXGXZ RYFY[ RHFPF RTF\\F RMPWP RH[P[ RT[\\[ RIFKG RJFKH RNFMH ROFMG RUFWG RVFWH RZFYH R[FYG RKZI[ RKYJ[ RMYN[ RMZO[ RWZU[ RWYV[ RYYZ[ RYZ[[","LXQFQ[ RRGRZ RSFS[ RNFVF RN[V[ ROFQG RPFQH RTFSH RUFSG RQZO[ RQYP[ RSYT[ RSZU[","JZSFSWRZQ[ RTGTWSZ RUFUWTZQ[O[MZLXLVMUNUOVOWNXMX RMVMWNWNVMV RPFXF RQFSG RRFSH RVFUH RWFUG","F\\KFK[ RLGLZ RMFM[ RXGMR RPPW[ RQPX[ RQNY[ RHFPF RUF[F RH[P[ RT[[[ RIFKG RJFKH RNFMH ROFMG RWFXG RZFXG RKZI[ RKYJ[ RMYN[ RMZO[ RWYU[ RWYZ[","I[NFN[ ROGOZ RPFP[ RKFSF RK[Z[ZU RLFNG RMFNH RQFPH RRFPG RNZL[ RNYM[ RPYQ[ RPZR[ RU[ZZ RW[ZY RX[ZX RY[ZU","E_JFJZ RJFQ[ RKFQX RLFRX RXFQ[ RXFX[ RYGYZ RZFZ[ RGFLF RXF]F RG[M[ RU[][ RHFJG R[FZH R\\FZG RJZH[ RJZL[ RXZV[ RXYW[ RZY[[ RZZ\\[","F^KFKZ RKFY[ RLFXX RMFYX RYGY[ RHFMF RVF\\F RH[N[ RIFKG RWFYG R[FYG RKZI[ RKZM[","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RMILKKNKSLVMX RWXXVYSYNXKWI RQFOGMJLNLSMWOZQ[ RS[UZWWXSXNWJUGSF","G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZMYOXPUQNQ RXHYJYMXO RUFWGXIXNWPUQ RI[Q[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[","G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RMILKKNKSLVMX RWXXVYSYNXKWI RQFOGMJLNLSMWOZQ[ RS[UZWWXSXNWJUGSF RNXOVQURUTVUXV^W`Y`Z^Z\\ RV\\W^X_Y_ RUXW]X^Y^Z]","G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZLYNXOUPNP RXHYJYLXN RUFWGXIXMWOUP RRPTQUSWYX[Z[[Y[W RWWXYYZZZ RTQURXXYYZY[X RI[Q[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[","H\\XIYFYLXIVGSFPFMGKIKLLNOPURWSXUXXWZ RLLMNOOUQWRXT RMGLILKMMONUPXRYTYWXYWZT[Q[NZLXKUK[LX","H\\JFJL RQFQ[ RRGRZ RSFS[ RZFZL RJFZF RN[V[ RKFJL RLFJI RMFJH ROFJG RUFZG RWFZH RXFZI RYFZL RQZO[ RQYP[ RSYT[ RSZU[","F^KFKULXNZQ[S[VZXXYUYG RLGLVMX RMFMVNYOZQ[ RHFPF RVF\\F RIFKG RJFKH RNFMH ROFMG RWFYG R[FYG","H\\KFR[ RLFRXR[ RMFSX RYGR[ RIFPF RUF[F RJFLH RNFMH ROFMG RWFYG RZFYG","F^JFN[ RKFNVN[ RLFOV RRFOVN[ RRFV[ RSFVVV[ RTFWV RZGWVV[ RGFOF RRFTF RWF]F RHFKG RIFKH RMFLH RNFLG RXFZG R\\FZG","H\\KFW[ RLFX[ RMFY[ RXGLZ RIFPF RUF[F RI[O[ RT[[[ RJFMH RNFMH ROFMG RVFXG RZFXG RLZJ[ RLZN[ RWZU[ RWYV[ RWYZ[","G]JFQQQ[ RKFRQRZ RLFSQS[ RYGSQ RHFOF RVF\\F RN[V[ RIFKG RNFLG RWFYG R[FYG RQZO[ RQYP[ RSYT[ RSZU[","H\\YFKFKL RWFK[ RXFL[ RYFM[ RK[Y[YU RLFKL RMFKI RNFKH RPFKG RT[YZ RV[YY RW[YX RX[YU","KYOBOb RPBPb ROBVB RObVb","KYKFY^","KYTBTb RUBUb RNBUB RNbUb","G]JTROZT RJTRPZT","H\\Hb\\b","LXPFUL RPFOGUL","I]NPNOOOOQMQMONNPMTMVNWOXQXXYZZ[ RVOWQWXXZ RTMUNVPVXWZZ[[[ RVRUSPTMULWLXMZP[S[UZVX RNUMWMXNZ RUSQTOUNWNXOZP[","G\\LFL[MZOZ RMGMY RIFNFNZ RNPONQMSMVNXPYSYUXXVZS[Q[OZNX RWPXRXVWX RSMUNVOWRWVVYUZS[ RJFLG RKFLH","H[WQWPVPVRXRXPVNTMQMNNLPKSKULXNZQ[S[VZXX RMPLRLVMX RQMONNOMRMVNYOZQ[","H]VFV[[[ RWGWZ RSFXFX[ RVPUNSMQMNNLPKSKULXNZQ[S[UZVX RMPLRLVMX RQMONNOMRMVNYOZQ[ RTFVG RUFVH RXYY[ RXZZ[","H[MSXSXQWOVNSMQMNNLPKSKULXNZQ[S[VZXX RWRWQVO RMPLRLVMX RVSVPUNSM RQMONNOMRMVNYOZQ[","KYWHWGVGVIXIXGWFTFRGQHPKP[ RRHQKQZ RTFSGRIR[ RMMVM RM[U[ RPZN[ RPYO[ RRYS[ RRZT[","I\\XNYOZNYMXMVNUO RQMONNOMQMSNUOVQWSWUVVUWSWQVOUNSMQM ROONQNSOU RUUVSVQUO RQMPNOPOTPVQW RSWTVUTUPTNSM RNUMVLXLYM[N\\Q]U]X^Y_ RN[Q\\U\\X] RLYMZP[U[X\\Y^Y_XaUbObLaK_K^L\\O[ RObMaL_L^M\\O[","G^LFL[ RMGMZ RIFNFN[ RNQOOPNRMUMWNXOYRY[ RWOXRXZ RUMVNWQW[ RI[Q[ RT[\\[ RJFLG RKFLH RLZJ[ RLYK[ RNYO[ RNZP[ RWZU[ RWYV[ RYYZ[ RYZ[[","LXQFQHSHSFQF RRFRH RQGSG RQMQ[ RRNRZ RNMSMS[ RN[V[ ROMQN RPMQO RQZO[ RQYP[ RSYT[ RSZU[","KXRFRHTHTFRF RSFSH RRGTG RRMR^QaPb RSNS]R` ROMTMT]S`RaPbMbLaL_N_NaMaM` RPMRN RQMRO","G]LFL[ RMGMZ RIFNFN[ RWNNW RRSY[ RRTX[ RQTW[ RTM[M RI[Q[ RT[[[ RJFLG RKFLH RUMWN RZMWN RLZJ[ RLYK[ RNYO[ RNZP[ RWYU[ RVYZ[","LXQFQ[ RRGRZ RNFSFS[ RN[V[ ROFQG RPFQH RQZO[ RQYP[ RSYT[ RSZU[","AcFMF[ RGNGZ RCMHMH[ RHQIOJNLMOMQNROSRS[ RQORRRZ ROMPNQQQ[ RSQTOUNWMZM\\N]O^R^[ R\\O]R]Z RZM[N\\Q\\[ RC[K[ RN[V[ RY[a[ RDMFN REMFO RFZD[ RFYE[ RHYI[ RHZJ[ RQZO[ RQYP[ RSYT[ RSZU[ R\\ZZ[ R\\Y[[ R^Y_[ R^Z`[","G^LML[ RMNMZ RIMNMN[ RNQOOPNRMUMWNXOYRY[ RWOXRXZ RUMVNWQW[ RI[Q[ RT[\\[ RJMLN RKMLO RLZJ[ RLYK[ RNYO[ RNZP[ RWZU[ RWYV[ RYYZ[ RYZ[[","H\\QMNNLPKSKULXNZQ[S[VZXXYUYSXPVNSMQM RMPLRLVMX RWXXVXRWP RQMONNOMRMVNYOZQ[ RS[UZVYWVWRVOUNSM","G\\LMLb RMNMa RIMNMNb RNPONQMSMVNXPYSYUXXVZS[Q[OZNX RWPXRXVWX RSMUNVOWRWVVYUZS[ RIbQb RJMLN RKMLO RLaJb RL`Kb RN`Ob RNaPb","H\\VNVb RWOWa RUNWNXMXb RVPUNSMQMNNLPKSKULXNZQ[S[UZVX RMPLRLVMX RQMONNOMRMVNYOZQ[ RSb[b RVaTb RV`Ub RX`Yb RXaZb","IZNMN[ RONOZ RKMPMP[ RWOWNVNVPXPXNWMUMSNQPPS RK[S[ RLMNN RMMNO RNZL[ RNYM[ RPYQ[ RPZR[","J[WOXMXQWOVNTMPMNNMOMQNSPTUUWVXY RNNMQ RNRPSUTWU RXVWZ RMONQPRUSWTXVXYWZU[Q[OZNYMWM[NY","KZPHPVQYRZT[V[XZYX RQHQWRY RPHRFRWSZT[ RMMVM","G^LMLVMYNZP[S[UZVYWW RMNMWNY RIMNMNWOZP[ RWMW[\\[ RXNXZ RTMYMY[ RJMLN RKMLO RYYZ[ RYZ[[","I[LMR[ RMMRY RNMSY RXNSYR[ RJMQM RTMZM RKMNO RPMNN RVMXN RYMXN","F^JMN[ RKMNX RLMOX RRMOXN[ RRMV[ RSMVX RRMTMWX RZNWXV[ RGMOM RWM]M RHMKN RNMLN RXMZN R\\MZN","H\\LMV[ RMMW[ RNMX[ RWNMZ RJMQM RTMZM RJ[P[ RS[Z[ RKMMN RPMNN RUMWN RYMWN RMZK[ RMZO[ RVZT[ RWZY[","H[LMR[ RMMRY RNMSY RXNSYP_NaLbJbIaI_K_KaJaJ` RJMQM RTMZM RKMNO RPMNN RVMXN RYMXN","I[VML[ RWMM[ RXMN[ RXMLMLQ RL[X[XW RMMLQ RNMLP ROMLO RQMLN RS[XZ RU[XY RV[XX RW[XW","KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb","NVRBRb","KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb","F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O","JZJFJ[K[KFLFL[M[MFNFN[O[OFPFP[Q[QFRFR[S[SFTFT[U[UFVFV[W[WFXFX[Y[YFZFZ["]
}
