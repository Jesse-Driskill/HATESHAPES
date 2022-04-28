import UTIL from "./util";

export class Shape {
    constructor(pos, ctx, color, dimensions, velocity) {
        this.pos = pos;
        this.ctx = ctx;

        this.color = color;
        this.x = pos[0];
        this.y = pos[1];
        this.w = dimensions["w"];  //width
        this.h = dimensions["h"];  //height
        this.r = dimensions["r"];  //radius
        if (dimensions["r"] === undefined) {
            if (this.h > this.w) {
                this.r = this.h;
            }
            else {
                this.r = this.w;
            }
        }
        this.v = velocity;
    }

    move() {
        let v = this.v;
        this.x += v[0];
        this.y += v[1];
        this.pos = [this.x, this.y];
        // console.log(this.pos)
    }

    changeVelocity(vector) {
        this.v = [this.v[0], this.v[1] + vector];
    }

}

export class Rectangle extends Shape {

    draw() {
        // let ctx = this.ctx;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        
    }
}

export class Circle extends Shape {
    
    draw() {
        
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);
        this.ctx.fillStyle = this.color;
        
        this.ctx.fill();
    }
}

export class Triangle extends Shape {

    draw() {
        // console.log(this)
        // let ctx = this.ctx;
        let X = this.x;
        let Y = this.y;
        
        let height = this.h * (Math.sqrt(3)/2);
        this.ctx.fillstyle = this.color;
        this.ctx.beginPath();
        this.ctx.moveTo(X, Y);
        this.ctx.lineTo(X+height, Y+height + height/2); 
        this.ctx.lineTo(X-height, Y+height + height/2);
        this.ctx.lineTo(X, Y);
        // this.// ctx.closePath();
        this.ctx.fill();
        
    }
}


export class Bullet extends Shape {

    draw() {

    }

    collided(object) {
        if (UTIL.dist(this.pos, object.pos) < object.r) {
            return true;
        }
        else {
            return false;
        }
    }
}

