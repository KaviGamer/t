var bI;
var bgI;
var oI;
var fG;
var oG;
var back;
var score;
var player;
var player_running;
var ground;
var flag=0;

function preload(){
bgI = loadImage("jungle.jpg");
player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bI = loadImage("banana.png");
  oI = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  back = createSprite(0,0,800,400);
  back.scale=1.5;
  back.addImage(bgI);
   back.x = back.width/2;
  player = createSprite(200,380,10,10);
  player.addAnimation("running",player_running);
  player.scale=0.1;
  ground=createSprite(200,380,400,10);
  ground.visible=false;
  ground.x = ground.width/2;
  
  fG = new Group();
  oG = new Group();
  score = 0;
}

function draw() {
  background(220);
  ground.velocityX = -(6+score/100);
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
     if(back.x<0){
      back.x = back.width/2; 
     }
  back.velocityX = -(6+score/100);
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score, 200,50);
  
  if(oG.isTouching(player)&&flag===0){
    player.scale = 0.05;
    flag=1;
     }
  if(oG.isTouching(player)&&flag>0){
    oG.destroyEach();
fG.destroyEach();
back.velocityX = 0;
     }
  
  
  if(keyDown("space")){
     monkey.velocityY = -10;
     }
  
  mokey.velocityY = monkey.velocityY + 0.8
  
  if(fG.isTouching(player)){
  score = score + 2;
    fG.destroyEach(); 
  }
 
  switch(score){
    case 10: player.scale = 0.12;
      break;
    case 10: player.scale = 0.14;
      break;
    case 10: player.scale = 0.16;
      break;
    case 10: player.scale = 0.18;
      break;
      default: break;  
         }
  
    fGGG();
  oGGG();
  player.collide(ground);

     drawSprites();
}

function fGGG(){
if (frameCount % 60 === 0) {
    var banana = createSprite(400,50);
    banana.y = Math.round(random(25,60));
    banana.addImage(bI);
    banana.scale = 0.05;
    banana.velocityX = -(6+score/100);
    
    
    banana.lifetime = 200;
    
    fG.add(banana);
  }
  
}
function oGGG(){
if (frameCount % 300 === 0) {
    var stone = createSprite(400,380);
    stone.addImage(oI);
    stone.scale = 0.2;
    stone.velocityX = -(6+score/100);
    
    
    stone.lifetime = 200;
    
    oG.add(stone);
  }
  
}

function END(){


}
