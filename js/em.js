function Em() {
    this.x = Math.random() * 400 + 500;
    this.dx = Math.random() * 10 - 2;
    this.y = Math.random() * 400 + 100;
    this.dy = Math.random() * 2 - 2;
    emArr.push(this);
}
Em.prototype.update = function() {
    this.x -= this.dx;
    if (f % 30 == 0) {
        new Tao(this.x, this.y);
    }

    this.y += this.dy;
    this.x1 = this.x;
    this.x2 = this.x + 100;
    this.y1 = this.y;
    this.y2 = this.y + 141;

    if (swk.x2 > this.x1 && swk.y1 < this.y2 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 80 ||
        swk.x2 > this.x1 && swk.y2 > this.y1 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 141) {
        // console.log("撞");
        // for (var i = 0; i < emArr.length; i++) {
        //     if (emArr[i] == this) {
        //         emArr.splice(i, 1);
        //     }
        // }
        // ctx.save();

        // ctx.restore();
        blood += 1;
        var xiannv = document.getElementById("xiannv");
        xiannv.play();
        var xiao = document.getElementById("sing");
        sing.play();
    }
}
Em.prototype.render = function() {
    ctx.drawImage(R["em"], 0, 0, 322, 455, this.x, this.y, 100, 141);
    // ctx.fillText("x1:", this.x1, this.y + 60);
    // ctx.fillText("x2:", this.x2, this.y + 60);
    // ctx.fillText("y1:", this.x + 50, this.y1);
    // ctx.fillText("y2:", this.x + 50, this.y2);
    // if (f - ff <50) {
    //     ctx.drawImage(R["flower"], 0, 0, 360, 320, this.x, this.y, 180, 160);
    // }
}