import { Display } from "./classes/display.js";
import { Ant } from "./classes/ant.js";

var target = document.getElementById("display")

var display = new Display(target);
console.log(display.width,display.height)
var a = new Ant(display, 100, 40)


Draw()

function Draw() {
    a.Move()

    display.PrintMatrix()
    setTimeout(() => {
        Draw()
    }, 1);
}
