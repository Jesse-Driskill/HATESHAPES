import { Game } from "./Game";
import { Shape, Circle, Triangle, Rectangle, Bullet } from "./Shape";

window.Game = Game;
window.Shape = Shape; 
window.Circle = Circle; 
window.Triangle = Triangle; 
window.Rectangle = Rectangle;
Window.Bullet = Bullet;

document.addEventListener("DOMContentLoaded", () => {
    
    
    
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    let game = new Game(ctx);
    game.animate();
    document.addEventListener( "click", (e) => {
        let pos = [e.pageX, e.pageY];
        
    });
    // game.deleteObjects();


    // let circle = new Circle([100, 420], ctx, "red", { "r": 69 });
    // circle.draw();

    // let square = new Rectangle([420, 100], ctx, "green", { "h": 20, "w": 20});
    // square.draw();
    
    // let triangle = new Triangle([420, 420], ctx, 'black', { "h": 50}); 
    // triangle.draw();
});