function Boomboom(x, y) {
    this.x = x;
    this.y = y;
    this.fff = f;
    this.step = 0;
    boomboomArr.push(this);
}
Boomboom.prototype.update = function() {
    if (f - this.fff > 16) {
        for (var j = 0; j < boomboomArr.length; j++) {
            if (boomboomArr[j] == this) {
                boomboomArr.splice(j, 1);
            }
        }
    }
    if (f % 4 == 0) {
        this.step++;
    }
    this.step = this.step < 4 ? this.step : 0;
    var baozha1  = document.getElementById("baozha1");
    baozha1.play();
}
Boomboom.prototype.render = function() {
    ctx.drawImage(R["boom"], 128 * this.step, 156, 128, 200, this.x - 30, this.y - 50, 128, 200);
    ctx.drawImage(R["baoji"], 0, 0, 82, 30, this.x + 60, this.y + 30, 82, 30);
    ctx.drawImage(R["shuzi"], 79, 257, 48, 48, this.x + 70, this.y -20, 48, 48);
    ctx.drawImage(R["shuzi"], 73, 449, 60, 60, this.x + 110, this.y -20, 60, 60);
    ctx.drawImage(R["shuzi"], 79, 257, 48, 48, 720, 40, 36, 36);
    ctx.drawImage(R["shuzi"], 427, 272, 48, 48, 770, 40, 36, 36); 
}