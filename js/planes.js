function Planes() {
    this.x = Math.random() * 400 + 500;
    this.dx = 6;
    this.y = Math.random() * 200;
    this.step = 0;
    this.ismark = false;
    // this.dy = Math.random() * 1 - 1;
    // this.f = f;
    planesArr.push(this);
}
Planes.prototype.update = function() {
    this.x -= this.dx;
    // this.y += this.dy;
    if (f % 30 == 0) {
        new Fjzds(this.x, this.y);
    }
    if (f % 3 == 0) {
        this.step++;
        if (this.step > 3) {
            this.step = 0;
        }
    }
    this.x1 = this.x;
    this.x2 = this.x + 173;
    this.y1 = this.y + 60;
    this.y2 = this.y + 131;
    if (swk.x2 > this.x1 && swk.y1 < this.y2 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 80 ||
        swk.x2 > this.x1 && swk.y2 > this.y1 && swk.x1 < this.x2 && Math.abs(swk.y1 - this.y1) < 71) {
        // console.log("撞");
        score += 3;
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
    for (var i = 0; i < planesArr.length; i++) {
        for (var j = 0; j < qgArr.length; j++) {
            if (qgArr[j].x2 > planesArr[i].x1 && qgArr[j].y1 < planesArr[i].y2 && qgArr[j].x1 < planesArr[i].x2 && Math.abs(qgArr[j].y1 - planesArr[i].y1) < 83 ||
                qgArr[j].x2 > planesArr[i].x1 && qgArr[j].y2 > planesArr[i].y1 && qgArr[j].x1 < planesArr[i].x2 && Math.abs(qgArr[j].y1 - planesArr[i].y1) < 71) {
                // console.log("撞si");
                new Boomboom(planesArr[i].x, planesArr[i].y);
                planesArr.splice(i, 1);
                qgArr.splice(j, 1);
                // changjing = "boom";
                // window.sf = f;
            }
        }
    }
    var zhishengji = document.getElementById("zhishengji");
    zhishengji.play();
}
Planes.prototype.render = function() {
    ctx.drawImage(R["planes"], 346 * this.step, 322, 346, 322, this.x, this.y, 173, 161);
    // ctx.fillText("x1:", this.x1, this.y + 70);
    // ctx.fillText("x2:", this.x2, this.y + 70);
    // ctx.fillText("y1:", this.x + 80, this.y1);
    // ctx.fillText("y2:", this.x + 80, this.y2);
}