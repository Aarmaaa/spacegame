var bulletimg;
var player,playerbulletimg;
var enemy,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemy11,enemy12,enemy13,enemy14;
var bulletGroup,playerBulletGroup,enemyGroup,playerGroup;
var startCount=50;
var gameoverimg,gameoverzz;
var score = 0;
var levelNum = 1,level;
var flag2=0;

var gameState='play';

function preload(){
  buttonimg=loadImage("images/level2.png");
  playerimg=loadImage("images/player.png");
  enemyimg=loadImage("images/enemy.png");
  l2enemyimg=loadImage("images/enemys.png");
  mainenemyimg = loadImage("images/mainenemy.png");
  bulletimg=loadImage("images/bullet1.png");
  playerbulletimg=loadImage("images/playerbullet.png");
  gameoverimg=loadImage("images/gameover.png");
  lazersound=loadSound("sound/lazersound.mp3");

}

function setup() {
  createCanvas(1400,670);

  

  bulletGroup = new Group();
  playerBulletGroup = new Group();
  enemyGroup = new Group();
  playerGroup = new Group();

  level = new Level(); 

  level.level1Setup();

  }  


function draw() {
  background("white");

  if(levelNum == 1){
    level.level1Draw();
  }
  else if(levelNum == 2 ){
   if(flag2===0){
    level.level2Setup();
    flag2 = 1;
   }
    level.level2Draw();
  }
  
  drawSprites();

}


function PlayerBullet(){

  var bullet1 = createSprite(player.body.x,player.body.y-50,10,20) ;
  bullet1.velocityY=-5;
  bullet1.addImage(playerbulletimg);
  bullet1.scale=0.05;
  playerBulletGroup.add(bullet1);
}