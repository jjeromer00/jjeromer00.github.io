var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(800, 1000);
  centerCanvas();
  background(110, 250, 200);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  fill(130,140,200, 100);
  stroke(12, 55);
  rect(50, 90, 100, 150);
  

  }
