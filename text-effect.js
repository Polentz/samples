let graphic;

function setup() {
    createCanvas(600, 600);
    background("#1D1D1D")

    // create offscreen graphics buffer
    graphic = createGraphics(600, 600);

    // type setup offscreen in buffer
    graphic.textFont("Helvetica")
    graphic.textSize(800)
    graphic.textAlign(CENTER, CENTER)
    graphic.fill('#FFFFFF')
    graphic.text('a', width / 2, height / 2 - 60)
}

function draw() {
    background("#1D1D1D")

    const tiles = 6
    const tileSize = 600 / tiles

    // loop over each tile
    for (let x = 0; x < tiles; x = x + 1) {
        for (let y = 0; y < tiles; y = y + 1) {
            const distortion = sin(frameCount * 0.05 + x * 0.5 + y * 0.3) * 50

            // think of this as applying the grid to the source in the graphics buffer
            const sx = x * tileSize + distortion
            const sy = y * tileSize
            const sw = tileSize
            const sh = tileSize

            // and this as applying the grid to the destination on the canvas
            const dx = x * tileSize
            const dy = y * tileSize
            const dw = tileSize
            const dh = tileSize

            //	grided image from buffer into main canvas
            image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
        }
    }
}

