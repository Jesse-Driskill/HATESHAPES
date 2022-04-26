import { Game } from "./Game";
import { Shape } from "./Shape";

window.Game = new Game();
window.Shape = new Shape();

document.addEventListener("DOMContentLoaded", () => {
    
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');

    
    ctx.beginPath();
    
    
    ctx.arc(69, 69, 69, 0, 2*Math.PI, false);
    ctx.fillStyle = "FFFFFF";
    ctx.fill();
});