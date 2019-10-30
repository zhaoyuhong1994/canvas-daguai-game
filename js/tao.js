function Tao(x, y) {
    this.x = x;
    this.y = y;
    // this.f = f;
    taoArr.push(this);
}
Tao.prototype.update = function() {
    // this.x -= this.dx;
    // if (f % 12 == 0) {
    //     new Fjzd(this.x, this.y);
    // }
    this.y += 5;
    this.x1 = this.x + 30;
    this.x2 = this.x + 62;
    this.y1 = this.y + 50;
    this.y2 = this.y + 82;
    if (swk.x2 > this.x1 && swk.y1 < this.y2 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 80 ||
        swk.x2 > this.x1 && swk.y2 > this.y1 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 32) {
        // console.log("撞");
        // changjing = "boom";
        // window.sf = f;
        blood += 5;
        for (var i = 0; i < taoArr.length; i++) {
            if (taoArr[i] == this) {
                taoArr.splice(i, 1);
            }
        }
    }
    if (this.y < -20 || this.y > 500 || this.x < -20 || this.x > 1000) {
        for (var j = 0; j < taoArr.length; j++) {
            if (taoArr[j] == this) {
                taoArr.splice(j, 1);
            }
        }
    }
}
Tao.prototype.render = function() {
    ctx.drawImage(R["tao"], 0, 0, 127, 126, this.x + 30, this.y + 50, 32, 32);
}