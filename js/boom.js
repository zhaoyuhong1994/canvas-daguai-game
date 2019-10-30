function boom() {
    var df = f - this.sf;
    if (df < 5) {
        ctx.save();
        ctx.drawImage(R["swk1"], 706, 370, 126, 63, swk.x, swk.y, 126, 63);
        ctx.drawImage(R["wx"], 0, 0, 800, 478, 0, 0, 800, 500);
        ctx.drawImage(R["shanghai"], 0, 0, 75, 29, swk.x + 110, swk.y + 10, 75, 29);
        ctx.drawImage(R["blood"], 0, 0, 20, 24, swk.x + 190, swk.y + 12, 20, 24);
        ctx.restore();
        var xiao = document.getElementById("xiao");
        xiao.play();
    }
    if (df > 5) {
        this.changjing = "noboom";
    }
}