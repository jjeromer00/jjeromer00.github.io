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
  fill(130,140,200, 100);

  for (let x = 10; x <= 200; x += 10) {
    fill(x + 30, x * 5, x * 10, 100);
    rect(x, x + 5, x * 5, 200);
  }

}