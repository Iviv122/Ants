import { Display } from "./classes/display.js";
import { Ant } from "./classes/ant.js";
import { Pen } from "./classes/pen.js"

var speed = 10
var iterations = 0
var ittext = document.getElementById("iterations")

const cavnas = document.getElementById("canvas")
const ctx = cavnas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const footer = document.getElementById("footer")
const display = new Display(ctx);

console.log(display.width, display.height)

var ants = []
ants.push(new Ant(display, Math.floor(display.width/2), Math.floor(display.height/2)))

var pen = new Pen(display, ants, footer)

Draw()

function Draw() {
    if (ants.length > 0) {
        iterations += 1
        ittext.textContent = "iterations: " + iterations.toString()

        ants.forEach((a) => { a.Move() })
    }

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

    iterations = 0
    ittext.textContent = "" 

    display.Reset()
}
window.HardReset = HardReset;
function SetSpeed(value) {
    speed = value
}
window.SetSpeed = SetSpeed;