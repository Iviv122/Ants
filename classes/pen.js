import { Display } from "./display.js";
import { Ant } from "./ant.js";

let modes = [
    { "left": () => { }, "right": () => { } }, // Nothing 
    { "left": (x, y, display) => { display.SetValue(x, y, 1) }, "right": (x, y, display) => { display.SetValue(x, y, 0) } }, // Place ants
    { "left": (x, y, display, antlist) => { antlist.push(new Ant(display, x, y)) }, "right": () => { } } // Switch points
]

export class Pen {
    mode = 0
    PixelSize = 0

    isHolding = false
    button = - 1
    display
    antlist

    constructor(display, antlist, footer) {
        this.PixelSize = display.PixelSize
        this.display = display
        this.antlist = antlist


        addEventListener("mousedown", (e) => {
            if (!footer.contains(e.target)) {
                this.down(e)
            }
        }
        )
        addEventListener("mousemove", (e) => this.click(e))
        addEventListener("mouseup", (e) => this.up(e))
        document.addEventListener('contextmenu', event => {
            event.preventDefault();
        });
    }
    down(e) {
        this.isHolding = true
        this.button = e.button
        this.click(e)
    }
    up(e) {
        this.isHolding = false
        this.button = -1
    }
    click(e) {
        if (this.isHolding) {
            let x = Math.floor(e.clientX / this.PixelSize)
            let y = Math.floor(e.clientY / this.PixelSize)

            if (this.button == 0) { // left mouse click
                modes[this.mode].left(x, y, this.display, this.antlist)
            }
            if (this.button == 2) { // right mouse click
                modes[this.mode].right(x, y, this.display, this.antlist)
            }
        }
    }
}