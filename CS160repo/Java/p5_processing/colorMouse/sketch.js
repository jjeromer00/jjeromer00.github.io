var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(800, 600);
  centerCanvas();
  background(255, 255, 255);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  if (mouseX !== pmouseX || mouseY !== pmouseY) {
    if (mouseIsPressed) {
      fill(random(255), random(175), 50);
    }
    else {
      fill(125, 250, 198);
    }
  }
  ellipse(mouseX, mouseY, 75, 75);
  //ellipse(mouseX, mouseY, 80, 80);
}