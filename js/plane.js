function Plane() {
    this.x = Math.random() * 400 + 500;
    this.dx = Math.random() * 10 - 2;
    this.y = Math.random() * 400;
    this.dy = Math.random() * 1 - 1;
    this.ismark = false;
    // this.f = f;
    planeArr.push(this);
}
Plane.prototype.update = function() {
    this.x -= this.dx;
    this.y += this.dy;
    if (f % 12 == 0) {
        new Fjzd(this.x, this.y);
    }
    this.x1 = this.x;
    this.x2 = this.x + 120;
    this.y1 = this.y;
    this.y2 = this.y + 64;
    if (swk.x2 > this.x1 && swk.y1 < this.y2 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 80 ||
        swk.x2 > this.x1 && swk.y2 > this.y1 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 64) {
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
    if (!this.ismark && swk.x1 > this.x2 && Math.abs(swk.y1 - this.y1) < 100) {
        // console.log("guo");
        score += 2;
        this.ismark = true;
    }
    for (var i = 0; i < planeArr.length; i++) {
        for (var j = 0; j < qgArr.length; j++) {
            if (qgArr[j].x2 > planeArr[i].x1 && qgArr[j].y1 < planeArr[i].y2 && qgArr[j].x1 < planeArr[i].x2 && Math.abs(qgArr[j].y1 - planeArr[i].y1) < 83 ||
                qgArr[j].x2 > planeArr[i].x1 && qgArr[j].y2 > planeArr[i].y1 && qgArr[j].x1 < planeArr[i].x2 && Math.abs(qgArr[j].y1 - planeArr[i].y1) < 64) {
                // console.log("撞si");
                score += 3;
                new Boomboom(planeArr[i].x, planeArr[i].y);
                planeArr.splice(i, 1);
                qgArr.splice(j, 1);
                // changjing = "boom";
                // window.sf = f;
            }
        }
    }
    var feiji = document.getElementById("feiji");
    feiji.play();
    var jiguang = document.getElementById("jiguang");
    jiguang.play();
}
Plane.prototype.render = function() {
    ctx.drawImage(R["plane"], 0, 0, 120, 64, this.x, this.y, 120, 64);
    // ctx.fillText("x1:", this.x1, this.y + 30);
    // ctx.fillText("x2:", this.x2, this.y + 30);
    // ctx.fillText("y1:", this.x + 50, this.y1);
    // ctx.fillText("y2:", this.x + 50, this.y2);
}