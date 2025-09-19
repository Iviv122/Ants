export class Display {


    screenWidth = 0;
    screenHeight = 0;

    FontSize = 8;

    width = 0;
    height = 0;

    matrix;
    display;

    constructor(display) {

        this.screenWidth = document.documentElement.clientWidth
        this.screenHeight = document.documentElement.clientHeight

        this.width = Math.floor((this.screenWidth - 100) / this.FontSize)
        this.height = Math.floor((this.screenHeight - 100) / this.FontSize / this.GetFontWidthRatio())

        display.style.fontSize = this.FontSize + "px"

        this.display = display
        this.matrix = new Array(this.width * this.height)

        this.InitMatrix()

    }

    FlipValue(x, y) {
        this.matrix[y * this.width + x] = !this.matrix[y * this.width + x]
    }
    GetValue(x, y) {
        return this.matrix[y * this.width + x]
    }

    GetFontWidthRatio() {
        const span = document.createElement('span');
        span.style.position = 'absolute';
        span.style.visibility = 'hidden';
        span.style.whiteSpace = 'nowrap';
        span.style.fontSize = this.FontSize + "px";
        span.textContent = "0";

        document.body.appendChild(span);

        const width = span.offsetWidth;
        const height = span.offsetHeight;

        document.body.removeChild(span);

        const aspectRatio = height / width;
        return aspectRatio;
    }
    PrintMatrix() {
        let string = "";
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                string += this.GetValue(x, y) ? "1" : "0";
            }
            string += "\n";
        }
        this.display.textContent = string;
    }

    InitMatrix() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                this.matrix[i * this.width + j] = false
            }
        }
    }
}