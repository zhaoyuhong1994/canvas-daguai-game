function House() {
    this.x = Math.random() * 400 + 500;
    this.y = Math.random() * 400;
    this.dx = 2;
    houseArr.push(this);
}
House.prototype.update = function() {
    this.x -= this.dx;
    this.x1 = this.x;
    this.x2 = this.x + 150;
    this.y1 = this.y;
    this.y2 = this.y + 130;
    if (swk.x2 > this.x1 && swk.y1 < this.y2 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 30 ||
        swk.x2 > this.x1 && swk.y2 > this.y1 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 100) {
        // console.log("撞");
        isblood += 1;
        if (isblood % 50 == 0) {
            blood -= 1;
        }
        if (blood < 0) {
            window.ddf = f;
            changjing = "die";
        }
        changjing = "boom";
        window.sf = f;
    }
}
House.prototype.render = function() {
    ctx.drawImage(R["house3"], 90, 0, 502, 438, this.x, this.y, 150, 130);
    // ctx.fillText("x1:", this.x1, this.y + 40);
    // ctx.fillText("x2:", this.x2, this.y + 40);
    // ctx.fillText("y1:", this.x + 30, this.y1);
    // ctx.fillText("y2:", this.x + 30, this.y2);
}