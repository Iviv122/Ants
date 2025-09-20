import { Display } from "./classes/display.js";
import { Ant } from "./classes/ant.js";
import {Pen} from "./classes/pen.js"

var speed = 1
var target = document.getElementById("display")

var display = new Display(target);
console.log(display.width,display.height)

var ants = []
ants.push(new Ant(display, 100, 40))

var pen = new Pen(display,ants)

Draw()

function Draw() {
    ants.forEach((a) =>{a.Move()})

    display.PrintMatrix()
    setTimeout(() => {
        Draw()
    }, speed);
}
function Fill(){
    pen.mode = 1
}
window.Fill = Fill;
function PlaceAnt(){
    pen.mode = 2
}
window.PlaceAnt = PlaceAnt;