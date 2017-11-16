var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(600, 600);
  centerCanvas();
  background(255, 200, 200);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  fill(30,40,200);
  rect(30, 50, 100, 200);
}