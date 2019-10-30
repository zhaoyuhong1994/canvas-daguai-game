function Fjzd(x, y) {
    this.x = x;
    this.y = y;
    fjzdArr.push(this);
}
Fjzd.prototype.update = function() {
    this.x -= 20;
    if (this.y < -20 || this.y > 500 || this.x < -20 || this.x > 1000) {
        for (var j = 0; j < fjzdArr.length; j++) {
            if (fjzdArr[j] == this) {
                fjzdArr.splice(j, 1);
            }
        }
    }
    this.x1 = this.x;
    this.x2 = this.x + 50;
    this.y1 = this.y + 30;
    this.y2 = this.y + 47;
    if (swk.x2 > this.x1 && swk.y1 < this.y2 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 80 ||
        swk.x2 > this.x1 && swk.y2 > this.y1 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 17) {
        // console.log("撞");
        isblood += 1;
        if (isblood % 5 == 0) {
            blood -= 1;
        }
        if (blood < 0) {
            window.ddf = f;
            changjing = "die";
        }
        changjing = "boom";
        window.sf = f;
        for (var i = 0; i < fjzdArr.length; i++) {
            if (fjzdArr[i] == this) {
                fjzdArr.splice(i, 1);
            }
        }
    }
    
}
Fjzd.prototype.render = function() {
    ctx.drawImage(R["fjzd"], 0, 0, 182, 64, this.x, this.y + 30, 50, 17);
    // ctx.fillText("x1:", this.x1, this.y + 37);
    // ctx.fillText("x2:", this.x2, this.y + 37);
    // ctx.fillText("y1:", this.x + 20, this.y1);
    // ctx.fillText("y2:", this.x + 20, this.y2);
}