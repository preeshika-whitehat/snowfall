const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg, bgImg;
var snowman, snowmanImg;
var snowfall, snowball;

var maxSnowballs = 100;

function preload() {
  bg = loadImage("snow2.jpg");
  snowmanImg = loadImage("snowman.png");
  

}


function setup() {
  createCanvas(800,400);
  snowman = createSprite(440, 330, 50, 50);
  snowman.addImage(snowmanImg);
  snowman.scale = 0.7;

  if(frameCount % 200 === 0) {
for(var i=0; i<maxSnowballs; i++) {
  snowball = new Snowball(random(0,700), random(0,700));
}
  }
}

function draw() {
  //Engine.update(engine);
  background(bg);  
  if(keyDown("RIGHT_ARROW")) {
    snowman.velocityX = 3;

  }

  for(var i=0; i<maxSnowballs; i++) {
    snowball.showBall();
    drops[i].updateY();
  }


  drawSprites();
}