import { Display } from "./classes/display.js";
import { Ant } from "./classes/ant.js";
import { Pen } from "./classes/pen.js"

var speed = 10
var target = document.getElementById("display")
var footer = document.getElementById("footer")

var display = new Display(target);
console.log(display.width, display.height)

var ants = []
ants.push(new Ant(display, 100, 40))

var pen = new Pen(display, ants,footer)

Draw()

function Draw() {
    ants.forEach((a) => { a.Move() })

    display.PrintMatrix()
        return setTimeout(() => {
            Draw()
        }, speed);

}
function DoNothing() {
    pen.mode = 0
}
window.DoNothing = DoNothing;
function Fill() {
    pen.mode = 1
}
window.Fill = Fill;
function PlaceAnt() {
    pen.mode = 2
}
window.PlaceAnt = PlaceAnt;
function Reset() {
    pen.mode = 0
    display.Reset()
}
window.Reset = Reset;
function RemoveAnts() {
    pen.mode = 0
    ants.length = 0
}
window.RemoveAnts = RemoveAnts;
function HardReset() {
    pen.mode = 0
    ants.length = 0
    display.Reset()
}
window.HardReset = HardReset;
function SetSpeed(value) {
    speed = value
}
window.SetSpeed = SetSpeed;