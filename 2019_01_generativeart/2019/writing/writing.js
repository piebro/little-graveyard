"use strict"

const size = [1170,810]
let panel

function main(){
  let mainLoop = gat.mainLoop({
    drawFunc:draw,
    engine:gat.engines.svg,
    size:size,
    name:"writing",
  });

  panel = QuickSettings.create(10, 10, "settings");
  panel.addDropDown("Fonts", Object.keys(gat.alphabet), mainLoop.redraw);
  panel.addTextArea("Text", "example text", mainLoop.redraw);
  // panel.hide()

  mainLoop.start()
  panel.setValue("Fonts",1)
}

function draw(ctx,seed){
  // am Anfang random font and random text?

  let current_font = panel.getValue("Fonts").value
  let current_text = panel.getValue("Text")

  let a = 60;
  let bbox = [0+a,0+a,1170-a,810-a]

  // current_text = "! \"#$%'()*+,-./\n0123456789:;<=>?\n@ABCDEFGHIJKL\nMNOPQRSTUVWXYZ[\\]^_\n`abcdeefghijkl\nmnopqrstuvwxyz{|}~ä"

  let alphabet = gat.alphabet[current_font]

  let pb = gat.path.textToPathAndBbox(current_text, alphabet, {
    char_spacing:100,
    line_spacing:100
  })
  gat.path.drawPathBbox(ctx, pb.path, pb.bbox, bbox, 0, true)

  ctx.lineJoin="round";
  ctx.lineCap="round";
  ctx.lineWidth=5;
  ctx.stroke()
}
