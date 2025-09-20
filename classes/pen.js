import { Display } from "./display.js";
import { Ant } from "./ant.js";

let modes = [
    { "left": () => { console.log("Left Works") }, "right": () => { console.log("Right Works") } }, // Nothing 
    { "left": (x,y,display) => { display.SetValue(x,y,1)}, "right": (x,y,display) => { display.SetValue(x,y,0)} }, // Place ants
    { "left": (x,y,display,antlist) => { antlist.push(new Ant(display,x,y)) }, "right": (x,y,display,antlist) => { } } // Switch points
]

export class Pen {
    mode = 0
    fontSize = 0
    ratio = 0
    
    isHolding = false
    button = - 1 
    display
    antlist

    constructor(display,antlist) {
        this.fontSize = display.FontSize
        this.ratio = display.GetFontWidthRatio()
        this.display = display
        this.antlist = antlist

        console.log(this.fontSize);
        console.log(this.ratio);

        addEventListener("mousedown", (e) => this.down(e))
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
            let x = Math.floor(e.clientX / this.fontSize)
            let y = Math.floor(e.clientY / this.fontSize / this.ratio)
            
            if (this.button == 0) { // left mouse click
                modes[this.mode].left(x,y,this.display,this.antlist)
            }
            if (this.button == 2) { // right mouse click
                modes[this.mode].right(x,y,this.display,this.antlist)
            }
        }
    }
}