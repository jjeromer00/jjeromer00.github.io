function setup() {
    createCanvas(640, 420);
    strokeWeight(12);
}
function draw() {
    background(104, 160, 100);
    stroke(102, 200,255);
    line( mouseX, 0, mouseX, height);
    var c = map(mouseX, 0, width, 100, 255);
    stroke(c, c*2%256, c*3%256, 125);
    var mx = map(mouseX, 0, width, 100, 520);
    line(mx, 0, mx, height); // Black line
   }