function Fjzds(x, y) {
    this.x = x;
    this.y = y;
    this.dy = 6;
    fjzdsArr.push(this);
}
Fjzds.prototype.update = function() {
    this.y += this.dy;
    if (this.y < -20 || this.y > 500 || this.x < -20 || this.x > 1000) {
        for (var j = 0; j < fjzdsArr.length; j++) {
            if (fjzdsArr[j] == this) {
                fjzdsArr.splice(j, 1);
            }
        }
    }
    this.x1 = this.x + 50;
    this.x2 = this.x + 90;
    this.y1 = this.y + 120;
    this.y2 = this.y + 180;
    if (swk.x2 > this.x1 && swk.y1 < this.y2 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 80 ||
        swk.x2 > this.x1 && swk.y2 > this.y1 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 60) {
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
        for (var i = 0; i < fjzdsArr.length; i++) {
            if (fjzdsArr[i] == this) {
                fjzdsArr.splice(i, 1);
            }
        }
    }
}
Fjzds.prototype.render = function() {
    ctx.drawImage(R["fjzds"], 0, 0, 58, 88, this.x + 50, this.y + 120, 40, 60);
    // ctx.fillText("x1:", this.x1, this.y + 150);
    // ctx.fillText("x2:", this.x2, this.y + 150);
    // ctx.fillText("y1:", this.x + 70, this.y1);
    // ctx.fillText("y2:", this.x + 70, this.y2);
}