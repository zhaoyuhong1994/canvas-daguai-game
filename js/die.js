function die() {
    var mf = f - this.ddf;
    var i = 0;
    // if (df < 30) {
    //     ctx.save();
    //     ctx.globalAlpha = 1 - 1 / 30 * df;
    //     ctx.fillStyle = 'white';
    //     ctx.drawImage(R["xue"], 0, 0, 480, 640);
    //     ctx.restore();
    // }
    jiguang.pause();
    sing.pause();
    feiji.pause();
    zhishengji.pause();
    xiannv.pause();
    xiao.pause();
    if (mf < 50) {
        ctx.save();
        ctx.drawImage(R["die"], 0, 0, 1920, 1080, 0, 0, 800, 500);
        ctx.restore();
    } else if (mf > 55) {
        if (f % 3 == 0) {
            i += 10;
        }
        ctx.save();
        ctx.drawImage(R["die1"], 0, 0, 1024, 529, 0, 0, 800, 500);
        ctx.drawImage(R["over"], 0, 0, 1056, 248, 100, 160, 600, 140);
        ctx.restore();
    }
}