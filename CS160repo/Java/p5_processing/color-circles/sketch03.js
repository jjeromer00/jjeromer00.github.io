function setup() {
    createCanvas(640, 420);
    strokeWeight(12);
}
function draw() {
    background(204);
    stroke(202,100,100);
    line(mouseX, 0, mouseX, height); // Gray line
    stroke(50);
    var mx = mouseX / 2 + 60;
    line(mx, 0, mx, height); // Black line 
}