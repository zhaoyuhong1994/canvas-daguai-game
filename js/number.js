function Number() {

}
Number.prototype.render = function() {
    if (blood < 0) {
        this.ddf = f;
        changjing = "die";
        music2.pause();
        music.play();
    }
    if (blood > 9) {
        blood = 9;
    }
    if (score % 301 == 0) {
        blood = 9;
    }
    var str = blood.toString();
    if (blood > 0) {
        ctx.drawImage(R["xueliangtiao"], 0, 0, 201, 78, 0, 0, 201, 78);
        ctx.drawImage(R[str], 0, 0, 128, 128, 72, -16, 119, 108);
    } else if (blood < 0) {
        ctx.drawImage(R["xueliangtiao"], 0, 0, 201, 78, 0, 0, 201, 78);
    }

    var arr = score.toString().split("");
    for (var i = 0; i < arr.length; i++) {
        ctx.drawImage(R["fenshu"], 18.6 * parseInt(arr[i]), 0, 18.6, 24, 790 - arr.length * 23 + 23 * i, 15, 18.6, 24)
    }
}