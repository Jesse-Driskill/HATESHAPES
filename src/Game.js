import { Circle, Rectangle, Shape, Triangle } from "./Shape";
import UTIL from "./util";


export class Game {
    constructor(ctx) {
        this.objects = [];
        this.level = 0;
        this.ctx = ctx;
        this.spawnObjects();
        this.bullets = [];
        this.missed = 0;
        this.score = 0;
    }

    spawnObjects(max = 3) {
        let ctx = this.ctx;
        for (let i = 0; i < max; i++) {
            this.objects.push(this.pickShape());
            // document.getElementById("whoosh").play();
        }
        // let a = UTIL.genRandVec;
        //sampleshapes
        // this.objects.push(new Triangle([800, 800], this.ctx, 'black', { "h": 50}, [1, -40]));
        // this.objects.push(new Rectangle([420, 800], this.ctx, "green", { "h": 20, "w": 20}, [0, -40]));
        // this.objects.push(new Circle([100, 800], this.ctx, "red", { "r": 69 }, [0, 0]));
        // this.objects.push(new Triangle([800, 800], this.ctx, 'black', { "h": 50}, a(800)));
        // this.objects.push(new Rectangle([420, 800], this.ctx, "green", { "h": 20, "w": 20}, a(420)));
        // this.objects.push(new Circle([100, 800], this.ctx, "red", { "r": 69 }, a(100)));
        // this.objects.push(new Triangle(UTIL.genRandPos(), this.ctx, 'black', { "h": 50}, a(800)));
        // this.objects.push(new Rectangle(UTIL.genRandPos(), this.ctx, "green", { "h": 20, "w": 20}, a(420)));
        // this.objects.push(new Circle(UTIL.genRandPos(), this.ctx, "red", { "r": 40 }, a(420)));
        // setTimeout( () => {
        //     document.getElementById("whoosh").play();
        // }, 500)
    }

    pickShape() {
        let num = Math.floor(Math.random() * 3);
        let randPos = UTIL.genRandPos();
        let a = UTIL.genRandVec;
        if (num === 0) {
            return new Triangle(randPos, this.ctx, 'green', { "h": 50, "w": 50}, a(randPos[0]));
        }
        else if (num === 1) {
            return new Circle(randPos, this.ctx, 'red', { "r": 50 }, a(randPos[0]));
        }
        else {
            return new Rectangle(randPos, this.ctx, 'black', { "h": 50, "w": 50}, a(randPos[0]));
        }
    }

    // draw() {
    //     this.ctx.clearRect(0, 0, 1700, 860);
    //     for (let i = 0; i < this.objects.length; i++) {
    //         this.objects[i].draw();
    //     }
    // }

    // moveObjects() {
    //     for (let i = 0; i < this.objects.length; i++) {
    //         this.objects[i].move();
    //     }
    // }

    animate() {
        setInterval( () => {
            this.ctx.clearRect(0, 0, 1700, 860);
            for (let i = 0; i < this.objects.length; i++) {
                this.objects[i].move();
                // this.objects[i].draw();
                this.objects[i].changeVelocity(UTIL.GRAVITY);
                
            }

            for (let i = 0; i < this.bullets.length; i++) {
                for (let k = 0; k < this.objects[i].length; k++) {
                    if (this.bullets[i].collided(this.objects[i])) {
                        this.deleteObject(this.objects[i]);
                    }
                }
            }

            this.checkShapePositions();
            console.log(this.objects);

        }, 25)
    }

    deleteObjects() {
        for (let i = 0; i < this.objects.length; i++) {
            delete(this.objects[i]);
        }
    }

    deleteObject(object) {
        // this.objects[this.objects.indexOf(object)] = undefined;
        let arr = [];
        for (let i = 0; i < this.objects.length; i++) {
            if (object !== this.objects[i]) {
                arr.push(this.objects[i]);
            }
        }

        this.objects = arr;

        if (this.checkLevelCompletion()) {
            let that = this;
            setTimeout( this.newLevel.bind(that), 1500 )
        }
    }

    checkLevelCompletion() {
        if (this.objects.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    newLevel() {
        this.level += 1;
        this.spawnObjects(this.level + 3);
        let lev = document.getElementById("level");
        lev.innerHTML = `Level: ${this.level}`;
    }

    checkShapePositions() {
        for (let i = 0; i < this.objects.length; i++) {
            let shape = this.objects[i];
            if (shape.y > 1000) {
                this.missed += 1;
                this.deleteObject(this.objects[i]);
                let missed = document.getElementById("missed");
                missed.innerHTML = `Missed: ${this.missed}`;
            }
        }
    }





}