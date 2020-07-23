
var image = new Image();
image.src = "images/captainamerica.png";
var human;



//Khởi tạo lớp Human
let Human = function (img,x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.frameX = 0;
    this.frameY = 3;
    this.isMoving = false;

    this.drawImage = function () {
        ctx.drawImage(img, this.width * this.frameX, this.height * this.frameY,
            this.width, this.height, this.x, this.y, this.width, this.height);

    }

    //Set vị trí cho Human mỗi khi đi đến chạm đến đỉnh, đáy, 2 bên
    this.position = function () {
        if (this.x + this.directionX >= 0 &&
            this.x + this.directionX <= canvas.width - this.width){
            this.x += this.directionX;
        }
        if (this.y + this.directionY <= canvas.height - this.height){
            this.y += this.directionY;
        }

    }

    //Set va chạm
    this.Intersect = function(cars) {
        var humanLeft = human.x + (human.width/3);
        var humanRight = human.x + (human.width*2/3);
        var humanTop = human.y + (human.height*3/4);
        var humanBottom = human.y + (human.height);
        var carLeft = cars.x;
        var carRight = cars.x + (cars.width);
        var carTop = cars.y;
        var carBottom = cars.y + (cars.height);
        var intersect = true;
        if (humanLeft > carRight || humanRight < carLeft ||
            humanTop > carBottom || humanBottom < carTop){
            intersect = false;
        }

        return intersect;
    }
}

function movingHuman(evt) {
    switch (evt.keyCode) {
        case 37:
            human.frameY = 1;
            human.directionX = -6;
            human.directionY = 0;
            human.isMoving = true;

            break;
        case 38:
            human.frameY = 3;
            human.directionX = 0;
            human.directionY = -6;
            human.isMoving = true;
            break;
        case 39:
            human.frameY = 2;
            human.directionX = 6;
            human.directionY = 0;
            human.isMoving = true;
            break;
        case 40:
            human.frameY = 0;
            human.directionX = 0;
            human.directionY = 6;
            human.isMoving = true;
            break;
    }

}

function stopMoving() {
    human.directionX = 0;
    human.directionY = 0;
    human.isMoving = false;

}

function handleHumanFrame() {
    if (human.frameX < 3 && human.isMoving) human.frameX++;
    else human.frameX = 0;

}









