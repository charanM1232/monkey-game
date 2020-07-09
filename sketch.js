//Global Variables
var monkey, ground, jungle;

var monkey_running, groundimg, jungleimg;

var speed

var obstaclesGroup, obstacleimg;
var bananaGroup, bananaimg;

var invisibleGround

function preload(){
  
  monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png",           "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png",       "Monkey_09.png", "Monkey_10.png");
  
  groundimg = loadImage("ground.jpg");
  jungleimg = loadImage("jungle.jpg");
  
  obstacleimg = loadImage("stone.png");
  bananaimg = loadImage("Banana.png");
}


function setup() {
  createCanvas(500,500);

  ground = createSprite(300,150);
  ground.addImage("floor", groundimg);
  
  jungle = createSprite(300,150,700,200);
  jungle.addImage("floor2", jungleimg);
  jungle.scale = 0.9;
  jungle.x = jungle.width /2;
  jungle.velocityX = -7;
  
  monkey = createSprite(100,350,15,15);
  monkey.addAnimation("gorilla", monkey_running);
  monkey.scale = 0.13;
  
  invisibleGround = createSprite(200,395,400,10);
  invisibleGround.visible = false;
  
  obstaclesGroup = new Group();
  bananaGroup = new Group();
  

}


function draw(){
 background(255);

  if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);
  
  
    if (monkey.isTouching(obstaclesGroup)){
    
    jungle.velocityX = 0;
    monkey.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    
    obstaclesGroup.lifetime = -1;
    bananaGroup.lifetime = -1; 
    
      }
  
  
  
  spawnObstacles();
  spawnBananas();
  drawSprites();
}


function spawnObstacles () {
    //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var obstacles = createSprite(620,350,40,10);
    obstacles.addImage("rock", obstacleimg);
    obstacles.scale = 0.2;
    obstacles.velocityX = -7;
    
     //assign lifetime to the variable
    obstacles.lifetime = 170;
    
    //add each cloud to the group
    obstaclesGroup.add(obstacles);
  }
}

function spawnBananas () {
    //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var bananas = createSprite(620,275,40,10);
    bananas.addImage("fruit", bananaimg);
    bananas.scale = 0.06;
    bananas.velocityX = -7;
    
     //assign lifetime to the variable
    bananas.lifetime = 170;
    
    //add each cloud to the group
    bananaGroup.add(bananas);
  }
}
