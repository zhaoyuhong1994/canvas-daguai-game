function Swk() {
    this.x = 20;
    this.y = 100;
    this.speed = 5;
    this.dy = 1;
    this.ismoving = false;
    this.direction = "down";
}
Swk.prototype.update = function() {
    if (this.x > 250) {
        this.x = 250;
    }
    if (this.x < 20) {
        this.x = 20;
    }
    // this.speed += 0.01;
    this.dy = 5;
    if (this.ismoving) {
        if (this.y > 420) {
            this.y = 420;
        }
        if (this.y < 0) {
            this.y = 0;
        }
        switch (this.direction) {
            case
            this.direction = "up":
                this.y -= this.dy;
                break;
            case
            this.direction = "down":
                this.y += this.dy;
                break;
            case
            this.direction = "right":
                this.speed += 0.02;
                bg.x -= this.speed;
                this.x += 3;
                break;
            case
            this.direction = "left":
                this.x -= 3;
                break;
        }
    }
    this.x1 = this.x;
    this.x2 = this.x + 134;
    this.y1 = this.y;
    this.y2 = this.y + 80;
    // if (f % 10 == 0) {
    //     new Qg(this.x, this.y);
    // }
}
Swk.prototype.turn = function(str) {
    this.direction = str;
}

Swk.prototype.stop = function() {
    this.ismoving = false;
}

Swk.prototype.move = function() {
    this.ismoving = true;
}

Swk.prototype.render = function() {
    if (changjing == "noattack" || changjing == "noboom") {
        ctx.drawImage(R["swk1"], 885, 197, 134, 78, this.x, this.y, 134, 80);
    } else if (changjing == "attack") {
        ctx.drawImage(R["swk1"], 431, 133, 132, 72, swk.x, swk.y, 132, 72);
        // ctx.drawImage(R["qg"], 8, 10, 167, 167, this.x + 60, this.y-50, 167, 167);
    }
    // ctx.fillText("x1:", this.x1, this.y + 30);
    // ctx.fillText("x2:", this.x2, this.y + 30);
    // ctx.fillText("y1:", this.x + 50, this.y1);
    // ctx.fillText("y2:", this.x + 50, this.y2);

}