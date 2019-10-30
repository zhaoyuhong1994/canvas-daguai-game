function Qg(x, y) {
    this.x = x;
    this.y = y;
    qgArr.push(this);
}

Qg.prototype.update = function() {
    this.x += 20;
    if (this.y < -20 || this.y > 500 || this.x < -20 || this.x - (swk.x + 20) > 300) {
        for (var j = 0; j < qgArr.length; j++) {
            if (qgArr[j] == this) {
                qgArr.splice(j, 1);
            }
        }
    }
    this.x1 = this.x + 50;
    this.x2 = this.x + 133;
    this.y1 = this.y - 20;
    this.y2 = this.y + 63;
    //     if (swk.x2 > this.x1 && swk.y1 < this.y2 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 80 ||
    //         swk.x2 > this.x1 && swk.y2 > this.y1 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 17) {
    //         // console.log("撞");
    //         changjing = "boom";
    //         window.sf = f;
    //         for (var i = 0; i < fjzdArr.length; i++) {
    //             if (fjzdArr[i] == this) {
    //                 fjzdArr.splice(i, 1);
    //             }
    //         }
    //     }
    var baoqi = document.getElementById("baoqi");
    baoqi.play();
    var man = document.getElementById("man");
    man.play();
}
Qg.prototype.render = function() {
    ctx.drawImage(R["qg"], 8, 10, 167, 167, this.x + 50, this.y - 20, 83, 83);
    // ctx.fillText("x1:", this.x1, this.y + 37);
    // ctx.fillText("x2:", this.x2, this.y + 37);
    // ctx.fillText("y1:", this.x + 20, this.y1);
    // ctx.fillText("y2:", this.x + 20, this.y2);
}