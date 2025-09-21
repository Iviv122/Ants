import { Display } from "./display.js";

const dirs = [
    { x: -1, y: 0 }, // 0
    { x: 0, y: -1 }, // 1
    { x: 1, y: 0 }, // 2
    { x: 0, y: 1 }, // 3
]

export class Ant {
    posX = 0
    posY = 0
    dir = 0
    display

    constructor(display, x, y) {
        this.display = display
        this.posX = x
        this.posY = y
    }
    Move() {
        if (!!this.display.GetValue(this.posX, this.posY)) {
            // counter clockwise
            this.dir = (this.dir - 1 + dirs.length) % dirs.length
        } else {
            // clockwise
            this.dir = (this.dir + 1) % dirs.length
        }

        this.dir = (this.dir + 4) % 4

        this.display.FlipValue(this.posX, this.posY)

        this.posX += dirs[this.dir].x
        this.posY += dirs[this.dir].y
    }
}
