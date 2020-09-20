var hr;
var mn;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
hr = hour();
mn = minute();
sc = second();
angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  let scAngle = map(sc, 0, 60, 0, 360)
  ellipse(400,200,scAngle,scAngle)
  stroke(255,0,0);
  strokeWeight(7);
  line(400,200,100,0);
  translate(line)

  let mnAngle = map(mn, 0, 60, 0, 360)
ellipse(400,200,mnAngle,mnAngle)
stroke(255,0,0);
strokeWeight(7);
line(400,200,50,0);
translate(line)

let hrAngle = map(hr, 0, 60, 0, 360)
ellipse(400,200,hrAngle,hrAngle)
stroke(255,0,0);
strokeWeight(7);
line(400,200,20,0);
translate(line)
}
