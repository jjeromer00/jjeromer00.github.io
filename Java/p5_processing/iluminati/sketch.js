var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(500, 500);
  centerCanvas();
  background(110, 250, 200);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  fill(234,192,134,255);
  stroke(75, 105);
  ellipse(250,250,400,400);

  fill(0,111,255,225);
  stroke(12, 55);
  rect(275, 175, 75, 70);

  fill(0,111,255,225);
  stroke(12, 55);
  rect(150,175,75, 70);

  fill(0,0,0);
  stroke(12, 55);
  rect(350,200,97, 12);

  fill(0,0,0);
  rect(53,200,97, 12);

  fill(0,0,0);
  stroke(12, 55);
  rect(225,200,50, 12);

  fill(255,255,255);
  stroke(12, 55);
  ellipse(250,350,110, 90);

  fill(255,10,10);
  stroke(12, 55);
  ellipse(265,375,55, 35);

  fill(139,69,19);
  stroke(12, 55);
  rect(150,125,75, 18);

  fill(139,69,19);
  stroke(12, 55);
  rect(275,125,75, 18);
}
