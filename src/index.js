import { Game } from "./Game";
import { Shape, Circle, Triangle, Rectangle, Bullet } from "./Shape";

window.Game = Game;
window.Shape = Shape; 
window.Circle = Circle; 
window.Triangle = Triangle; 
window.Rectangle = Rectangle;
Window.Bullet = Bullet;

document.addEventListener("DOMContentLoaded", () => {
    
    
    document.getElementById("whoosh").style.display = 'none';
    document.getElementById("hitmarker").style.display = 'none';
    
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    let game = new Game(ctx);
    let score = document.getElementById("score");
    
    game.animate();
    
    document.addEventListener( "click", (e) => {
        let pos = [e.pageX, e.pageY];
        let bullet = new Bullet(pos, ctx, 'white', { r: 10 }, [0, 0]);
        

        for (let i = 0; i < game.objects.length; i++) {
            if (bullet.collided(game.objects[i])) {
                game.deleteObject(game.objects[i]);
                game.score += 1;
                score.innerHTML = `Score: ${game.score}`;
            }
        }

        document.getElementById("hitmarker").play()
    });
    // game.deleteObjects();


    // let circle = new Circle([100, 420], ctx, "red", { "r": 69 });
    // circle.draw();

    // let square = new Rectangle([420, 100], ctx, "green", { "h": 20, "w": 20});
    // square.draw();
    
    // let triangle = new Triangle([420, 420], ctx, 'black', { "h": 50}); 
    // triangle.draw();
});