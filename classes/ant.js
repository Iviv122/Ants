import { Display } from "./display.js";
import { Palette } from "./palette.js";

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
    palette

    constructor(display, name, x, y) {
        this.display = display
        this.posX = x
        this.posY = y
        this.palette = new Palette(name)
    }

    Move() {
        const ind = this.display.GetValue(this.posX, this.posY)
        const currentRule = this.palette.getRule(ind)
        
        if (currentRule.turn) {
            // counter clockwise
            this.dir = (this.dir + 1) % 4;
        } else {
            // clockwise
            this.dir = (this.dir + 3) % 4;
        }


        const val = this.palette.getRule(ind+1)

        this.display.SetValue(this.posX, this.posY, ind+1, val.color)

        this.posX += dirs[this.dir].x
        this.posY += dirs[this.dir].y
    }
}
