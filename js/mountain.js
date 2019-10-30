function Mt() {
    this.x = Math.random() * 400 + 500;
    this.dx = Math.random() * 10 - 2;
    this.y = Math.random() * 400;
    this.dy = Math.random() * 2 - 1;
    this.mark = false;
    mtArr.push(this);
}
Mt.prototype.update = function() {
    this.x -= this.dx;
    this.y += this.dy;
    this.x1 = this.x;
    this.x2 = this.x + 100;
    this.y1 = this.y;
    this.y2 = this.y + 79;
    if (swk.x2 > this.x1 && swk.y1 < this.y2 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 80 ||
        swk.x2 > this.x1 && swk.y2 > this.y1 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 79) {
        // console.log("撞");
        isblood += 1;
        if (isblood % 30 == 0) {
            blood -= 1;
        }
        if (blood < 0) {
            window.ddf = f;
            changjing = "die";
        }
        changjing = "boom";
        window.sf = f;
        for (var i = 0; i < mtArr.length; i++) {
            if (mtArr[i] == this) {
                mtArr.splice(i, 1);
            }
        }
    }
    if (!this.ismark && swk.x1 > this.x2 && Math.abs(swk.y1 - this.y1) < 100) {
        // console.log("guo");
        score += 2;
        this.ismark = true;
    }
    for (var i = 0; i < mtArr.length; i++) {
        for (var j = 0; j < qgArr.length; j++) {
            if (qgArr[j].x2 > mtArr[i].x1 && qgArr[j].y1 < mtArr[i].y2 && qgArr[j].x1 < mtArr[i].x2 && Math.abs(qgArr[j].y1 - mtArr[i].y1) < 83 ||
                qgArr[j].x2 > mtArr[i].x1 && qgArr[j].y2 > mtArr[i].y1 && qgArr[j].x1 < mtArr[i].x2 && Math.abs(qgArr[j].y1 - mtArr[i].y1) < 79) {
                console.log("撞si");
                score += 3;
                new Boomboom(mtArr[i].x, mtArr[i].y);
                mtArr.splice(i, 1);
                qgArr.splice(j, 1);
                // changjing = "boom";
                // window.sf = f;
            }
        }
    }
}
Mt.prototype.render = function() {
    ctx.drawImage(R["shan"], 0, 0, 512, 408, this.x, this.y, 100, 79);
    // ctx.fillText("x1:", this.x1, this.y + 40);
    // ctx.fillText("x2:", this.x2, this.y + 40);
    // ctx.fillText("y1:", this.x + 30, this.y1);
    // ctx.fillText("y2:", this.x + 30, this.y2);
}