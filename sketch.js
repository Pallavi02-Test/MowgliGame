var jungle1,jungle1img;
var wood1,wood1img,wood2,wood2img;

function preload(){
    jungle1img = loadImage("images/jungle.png");
    wood1img = loadImage("images/woodLog3.jpg");
}

function setup(){
    createCanvas(displayWidth+200,displayHeight-30);
    jungle1 = createSprite(displayWidth/2-800, displayHeight-400,displayWidth, displayHeight+300);
    jungle1.addImage("jungle1",jungle1img);
    jungle1.scale= 1.5;
    jungle1.velocityX = -3;
    jungle1.x = displayWidth/2-800 ;

    wood1 = createSprite(displayWidth/2-300,displayHeight/2 + 200,displayWidth*5,displayHeight-200);
    wood1.addImage("wood1",wood1img);
    wood1.scale= 1.3;

    wood2 = createSprite(displayWidth/2+300,displayHeight/2 + 200,displayWidth,displayHeight-200);
    wood2.addImage("wood2",wood1img);
    wood2.scale=1.3;
}

function draw(){
    jungle1.velocityX = -3;

   if(jungle1.x <600){
        jungle1.x = displayWidth/2 ;
    }
  
    drawSprites();

}