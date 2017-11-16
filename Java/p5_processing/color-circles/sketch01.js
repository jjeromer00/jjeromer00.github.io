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
  if (mouseX !== pmouseX || mouseY !== pmouseY) {
    if (mouseIsPressed) {
      fill(0);
    }
    else {
      fill(random(256),random(256),random(256));
    }
  }
  ellipse(mouseX, mouseY, 80, 80);
}