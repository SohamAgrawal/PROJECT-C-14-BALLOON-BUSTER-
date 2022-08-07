var bow , arrow,  background, balloons;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redballoon,greenballoon,blueballoon,pinkballoon;
var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }

    var select_balloon = Math.round(random(1,4));

    if(frameCount%80===0){

     if(select_balloon===1){
      redballoon();
     } else if (select_balloon===2){
      blueballoon();
     } else if(select_balloon===3){
      greenballoon();
     } else if(select_balloon===4){
      pinkballoon();
     }

    }

  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }
  
  
  drawSprites();

 textSize(15);
 stroke("red");
 text("Score: " + score, 290,30);

 

}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redballoon(){
  var redballoon = createSprite(0,Math.round(random(0,300)),1,100);
  redballoon.addImage(red_balloonImage);
  redballoon.velocityX = 5;
  redballoon.scale = 0.1; 

  

}

function blueballoon(){
   var blueballoon = createSprite(0,Math.round(random(0,300)),1,100);
   blueballoon.addImage(blue_balloonImage);
   blueballoon.scale = 0.1;
   blueballoon.velocityX = 5; 

 

}

function greenballoon(){
  

  var greenballoon = createSprite(0,Math.round(random(0,300)),1,100);
  greenballoon.addImage(green_balloonImage);
  greenballoon.scale = 0.1;
  greenballoon.velocityX = 5;


 
  
}

function pinkballoon (){

  var pinkballoon = createSprite(0,Math.round(random(0,300)),1,100);
  pinkballoon.addImage(pink_balloonImage);
  pinkballoon.scale = 1.3;
  pinkballoon.velocityX = 5;

}




















