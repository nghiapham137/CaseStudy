var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var setinterVal;
var count = 0;
// var backgroundmusic;
var level = 1;



window.addEventListener("keydown",movingHuman);
window.addEventListener("keyup",stopMoving);
window.addEventListener("keypress",resetGame);



function startGame() {
    // backgroundmusic = new Sound("sound/trafficsound.mp3");
    // backgroundmusic.play();
    human = new Human(image,250,602,32,48);
    Cars[0] = new Car(37);
    Cars[1] = new Car(160);
    Cars[2] = new Car(280);
    Cars[3] = new Car(400);
    Cars[4] = new Car(497);
    Cars[5] = new Car(540);
    for (let i = 0; i < Cars.length; i++){
        Cars[i].show();
    }
    setinterVal = setInterval(updateGameScreen,20);
}

function updateGameScreen() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for (let i = 0; i < Cars.length; i++){
        if (!human.Intersect(Cars[i])){
            Cars[i].Carposition();
            Cars[i].drawCar();
            Cars[i].MoveCar();

        }else {
            StopGame();
            // backgroundmusic.stop();

        }
    }
    human.position();
    human.drawImage();
    handleHumanFrame();
    changeLevel();
    currentScore();
}

function StopGame() {
    clearInterval(setinterVal);
    alertGameOver();
}

function resetGame(evt) {
    if (evt.keyCode === 13){
        location.reload();
    }
}


function changeLevel() {
    if (human.y < 0 - human.height){
        human.y = canvas.height - human.height;
        alertLevelUp();
        level += 0.5;
        count++;
    }
}

function alertLevelUp() {
    ctx.font = "25px SuperLegendBoy"
    ctx.fillText("Level up",200,50);
}

function currentScore() {
    ctx.font = "15px SuperLegendBoy";
    ctx.fillText("Score",430,20);
    ctx.font = "25px SuperLegendBoy";
    ctx.fillText(count,450,50);
}

function alertGameOver() {
    ctx.font = "25px SuperLegendBoy";
    ctx.fillText("GAME",215,300);
    ctx.font = "25px SuperLegendBoy";
    ctx.fillText("OVER",215,326);
    ctx.font = "16px SuperLegendBoy";
    ctx.fillText("Press ",185,360);
    ctx.font = "20px SuperLegendBoy";
    ctx.fillText("ENTER ",255,360);
    ctx.font = "16px SuperLegendBoy";
    ctx.fillText("to retry ",220,380);
}


// function Sound(src) {
//     this.sound = document.createElement("audio");
//     this.sound.src = src;
//     this.sound.setAttribute("preload","auto");
//     this.sound.setAttribute("controls","none");
//     this.sound.style.display = "none";
//     document.body.appendChild(this.sound);
//     this.play = function () {
//         this.sound.play();
//
//     }
//     this.stop = function () {
//         this.sound.pause();
//
//     }
//
// }

