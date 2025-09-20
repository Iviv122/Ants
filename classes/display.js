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
        ctx.fillStyle = "green";
        this.matrix = new Array(this.width * this.height)

        this.Reset()

    }
    SetValue(x, y, val) {
        this.matrix[y * this.width + x] = val
    }
    FlipValue(x, y) {
        this.matrix[y * this.width + x] = !this.matrix[y * this.width + x]
    }
    GetValue(x, y) {
        return this.matrix[y * this.width + x]
    }
    PrintMatrix() {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.ctx.fillStyle = this.GetValue(x,y) ? "white" : "black";
                this.ctx.fillRect(x*this.PixelSize,y*this.PixelSize,this.PixelSize,this.PixelSize) 
            }
        }
    }

    Reset() {
        this.ctx.clearRect(0,0,this.screenWidth,this.screenHeight);
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                this.matrix[i * this.width + j] = false
            }
        }
    }
}