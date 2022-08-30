function setup() {
    let quadCanvas = createCanvas(500, 500);
    quadCanvas.parent("QuadTreeCanvas");
    let boundary = new Rectangle(250, 250, 250, 250);
    qt = new QuadTree(boundary, 4);

    console.log(qt);
}

function draw() {
    background(0);
    if (mouseIsPressed) {
        for (let i = 0; i < 1; i++) {
            let m = new Point(mouseX + random(-5, 5), mouseY + random(-5, 5));
            qt.insert(m)
        }
    }
    background(0);
    qt.show();
}