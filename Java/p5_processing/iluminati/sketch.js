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

  for (let x = 155; x <= 200; x += 5) {
    fill(x + 30, x * 17, x * 10, 100);
    tri(x, x + 5, x * 5, 110);
  }

}