function Bg() {
    this.x = 0;
    this.y = 0;
}
Bg.prototype.update = function() {
    this.x -= 1;
    if (this.x < -800) {
        this.x = 0;
    }
}
Bg.prototype.render = function() {
    ctx.drawImage(R["bg6"], 0, 0, 800, 480, this.x, this.y, 800, 500);
    ctx.drawImage(R["bg6"], 0, 0, 800, 480, this.x + 800, this.y, 800, 500);
}