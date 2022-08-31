function setup() {
    let quadCanvas = createCanvas(400, 400);
    quadCanvas.parent("QuadTreeCanvas");
    let boundary = new Rectangle(2050, 200, 200, 200);
    qt = new QuadTree(boundary, 4);

    console.log(qt);
    for (let i = 0; i < 3; i++) {
        let p = new Point(Math.random() * 400, Math.random() * 400);
        qt.insert(p);
    }

    background(0);
    qt.show();
}