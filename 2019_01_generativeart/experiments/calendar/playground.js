"use strict"

const size = [297,420]

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

let monthCounter = -1

function draw(ctx,seed){
  let ran = new gat.Randomizer(seed);
  monthCounter++;

  let month = monthCounter%12

  let spaceBetweenLetters = 250
  let spaceBottom = 10
  let spaceLeftRight = 10
  let height = 20

  let spaceLeftRightMonthName = 40

  let borderStr = [0.23,0.2]
  let borderNum = [0.23,0.2]
  let keepRatioStr = false
  let keepRatioNum = false
  let rotationStr = 0
  let rotationNum = 0

  let monthNames = ["JANUAR","FEBRUAR","MÄRZ","APRIL","MAI","JUNI","JULI","AUGUST","SEPTEMBER","OKTOBER","NOVEMBER","DEZEMBER",]
  let weekdays = ["MO","DI","MI","DO","FR","SA","SO"]
  let monthInfo={
    "JANUAR":{startWeekday:1,dayCount:31},
    "FEBRUAR":{startWeekday:4,dayCount:28},
    "MÄRZ":{startWeekday:4,dayCount:31},
    "APRIL":{startWeekday:0,dayCount:30},
    "MAI":{startWeekday:2,dayCount:31},
    "JUNI":{startWeekday:5,dayCount:30},
    "JULI":{startWeekday:0,dayCount:31},
    "AUGUST":{startWeekday:3,dayCount:31},
    "SEPTEMBER":{startWeekday:6,dayCount:30},
    "OKTOBER":{startWeekday:1,dayCount:31},
    "NOVEMBER":{startWeekday:4,dayCount:30},
    "DEZEMBER":{startWeekday:6,dayCount:31},
  }
  let startWeekday = monthInfo[monthNames[month]].startWeekday
  let dayCount = monthInfo[monthNames[month]].dayCount

  let weekdayPaths = []
  for(let i in weekdays){
    weekdayPaths.push(gat.path.textToPath(weekdays[i], gat.alphabets.monospace_simple, spaceBetweenLetters))
  }

  let monthNamePaths = []
  for(let i in monthNames){
    monthNamePaths.push(gat.path.textToPath(monthNames[i], gat.alphabets.monospace_simple, spaceBetweenLetters))
  }


  let bboxMonthName = [
    spaceLeftRightMonthName,
    size[1]-(spaceBottom+height+30),
    size[0]-spaceLeftRightMonthName,
    size[1]-(spaceBottom+height+10)
  ]

  gat.path.drawPathBbox(ctx,monthNamePaths[month].path, monthNamePaths[month].bbox,bboxMonthName,0,true)


  let dayArray = []
  for(let i=0; i<dayCount; i++){
    dayArray.push({
      weekday:(startWeekday+i)%7,
      day:i+1
    })
  }

  if (month == 1){
    dayArray.splice(24,1)
  }
  if (month == 2){
    dayArray[6] = dayArray[20]
    dayArray[13] = dayArray[20]
    dayArray[27] = dayArray[20]
  }



  let p = [
    ["ml",[0,1,dayArray.length,1]]
  ]
  for(let i=1; i<dayArray.length; i++){
    p.push(["ml",[i,0,i,2]])
  }

  for(let i=0; i<dayArray.length; i++){

    let topBox = [i+borderStr[0],0+borderStr[1],i+1-borderStr[0],1-borderStr[1]]
    let bottomBox = [i+borderNum[0],1+borderNum[1],i+1-borderNum[0],2-borderNum[1]]

    let weekdayBox = topBox
    let dayBox = bottomBox

    let pathWeekday = weekdayPaths[dayArray[i].weekday]
    p = p.concat(gat.path.getPathBbox(pathWeekday.path, pathWeekday.bbox, weekdayBox, rotationStr, keepRatioStr))

    let pathNum = gat.path.textToPath(dayArray[i].day.toString(), gat.alphabets.monospace_simple, spaceBetweenLetters)

    p = p.concat(gat.path.getPathBbox(pathNum.path, pathNum.bbox, dayBox, rotationNum, keepRatioNum))
  }

  gat.path.drawPathBbox(ctx,p,[0,0,dayArray.length,2],
    [spaceLeftRight,size[1]-spaceBottom-height,
    size[0]-spaceLeftRight,size[1]-spaceBottom])



  ctx.lineJoin="round";
  ctx.lineCap="round";
  ctx.lineWidth=0.5;
  ctx.stroke()
}
