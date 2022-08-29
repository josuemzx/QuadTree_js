function setup() {
    let quadCanvas = createCanvas(500, 500);
    quadCanvas.parent("QuadTreeCanvas");
    let boundary = new Rectangle(250, 250, 250, 250);
    qt = new QuadTree(boundary, 4);

    console.log(qt);
    for (let i = 0; i < 3; i++) {
        let p = new Point(Math.random() * 400, Math.random() * 400);
        qt.insert(p);
    }

    background(0);
    qt.show();
}