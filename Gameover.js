// var gameoverimg = new Image();
// gameoverimg.src = "images/gameover.png";
// var gameover;
// let Gameover = function (img) {
//     this.x = 75;
//     this.y = 200;
//     this.width = 350;
//     this.height = 200;
//
//     this.drawImage = function () {
//         ctx.drawImage(img, this.x,this.y,this.width,this.height);
//     }
//
// }

function PlayerScore() {
    ctx.font = "15px SuperLegendBoy";
    ctx.fillText("Score",430,20);
    ctx.font = "25px SuperLegendBoy";
    ctx.fillText(count,450,50);
}

function gameOver() {
    ctx.font = "25px SuperLegendBoy";
    ctx.fillText("GAME",215,300);
    ctx.font = "25px SuperLegendBoy";
    ctx.fillText("OVER",215,326);

}




function resetGame() {

}