var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1000, 400);
  centerCanvas();
  background(50, 200, 230);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  if (mouseX !== pmouseX || mouseY !== pmouseY) {
    if (mouseIsPressed) {
      fill(75,0,125);
    }
    else {
      fill(random(250),random(200),random(100));
    }
  }
  ellipse(mouseX, mouseY, 70, 90);
  //ellipse(mouseX, mouseY, 80, 80);
}