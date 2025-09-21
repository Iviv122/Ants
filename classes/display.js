export class Display {

    screenWidth = 0;
    screenHeight = 0;

    PixelSize = 4;

    width = 0;
    height = 0;

    matrix;
    ctx;

    constructor(ctx) {

        this.screenWidth = document.documentElement.clientWidth
        this.screenHeight = document.documentElement.clientHeight

        this.width = Math.floor(this.screenWidth / this.PixelSize)
        this.height = Math.floor(this.screenHeight / this.PixelSize)

        this.ctx = ctx
        this.matrix = new Map()

        this.Reset()

    }
    SetValue(x, y, val, color) {
        const key = `${x},${y}`;
        this.matrix.set(key, val);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.PixelSize, y * this.PixelSize, this.PixelSize, this.PixelSize);
    }

    GetValue(x, y) {
        const key = `${x},${y}`;
        return this.matrix.get(key) !== undefined ? this.matrix.get(key) : 0;
    }

    Reset() {
        this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
        this.matrix.clear()
    }
}