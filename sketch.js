var bulletimg;
var player,playerbulletimg;
var enemy,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemy11,enemy12,enemy13,enemy14;
var bulletGroup,playerBulletGroup,enemyGroup,playerGroup;
var startCount=50;
var gameoverimg,gameover;

var gameState='play';

function preload(){
  buttonimg=loadImage("images/level2.png");
  playerimg=loadImage("images/player.png");
  enemyimg=loadImage("images/enemy.png");
  bulletimg=loadImage("images/bullet1.png");
  playerbulletimg=loadImage("images/playerbullet.png");
  gameoverimg=loadImage("images/gameover.png");
  lazersound=loadSound("sound/lazersound.mp3");
  l2enemyimg=loadImage("images/enemys.png");
  mainenemyimg=loadImage("images/mainenemy.png");
}

function setup() {
  createCanvas(1400,670);

  bulletGroup = new Group();
  playerBulletGroup = new Group();
  enemyGroup = new Group();
  playerGroup = new Group();

  // if(gameState=='PLAY'){
  player = new Player(700,600);

  enemy = new Enemy(50,75);
  enemy2 = new Enemy(150,75);
  enemy3 = new Enemy(250,75);
  enemy4 = new Enemy(350,75);
  enemy5 = new Enemy(450,75);
  enemy6 = new Enemy(550,75);
  enemy7 = new Enemy(650,75);
  enemy8 = new Enemy(750,75);
  enemy9 = new Enemy(850,75);
  enemy10 = new Enemy(950,75);
  enemy11 = new Enemy(1050,75);
  enemy12 = new Enemy(1150,75);
  enemy13 = new Enemy(1250,75);
  enemy14 = new Enemy(1350,75);
  drawSprites();

  }  

// }


function draw() {
  background("white");

  if(gameState=='play'){

    if(bulletGroup.isTouching(playerGroup)){
     player.body.destroy();
     bulletGroup.destroyEach();
     playerBulletGroup.destroyEach()
     enemyGroup.destroyEach();
     gameState='end';
  }

  //array.length

    for(var i=0;i<enemyGroup.length;i=i+1){

      if(enemyGroup.get(i).isTouching(playerBulletGroup)){
        //enemyGroup.get(i).visible = false; 
        enemyGroup.get(i).visible = false;

        console.log(enemyGroup.get(i).visible);
        enemyGroup.get(i).destroy();
        bulletGroup.destroyEach();
      }

    }

 console.log(enemyGroup.length);


  player.playerMove();
  player.playerFire();
  
  if(World.frameCount % startCount === 0){
    var num=Math.round(random(1,enemyGroup.length))

    // if(startCount>=0){
    //   setInterval(() => {
    //     startCount=startCount+1;
    //   }, 5000);
    // }

    if(num==1 && !enemy.body.removed){
      enemy.createBullet(50);    }
    else  if(num==2 && !enemy2.body.removed){
      enemy2.createBullet(150);    }
    else  if(num==3 && !enemy3.body.removed){
      enemy3.createBullet(250);    }
    else  if(num==4 && !enemy4.body.removed){
      enemy4.createBullet(350);    }
    else  if(num==5 && !enemy5.body.removed){
      enemy5.createBullet(450);    }
    else  if(num==6 && !enemy6.body.removed){
      enemy6.createBullet(550);    }
    else  if(num==7 && !enemy7.body.removed){
      enemy7.createBullet(650);    }
    else  if(num==8 && !enemy8.body.removed){
      enemy8.createBullet(750);    }
    else  if(num==9 && !enemy9.body.removed){
      enemy9.createBullet(850);    }
    else  if(num==10 && !enemy10.body.removed){
      enemy10.createBullet(950);    }
    else  if(num==11 && !enemy11.body.removed){
      enemy11.createBullet(1050);    }
    else  if(num==12 && !enemy12.body.removed){
      enemy12.createBullet(1150);    }
    else  if(num==13 && !enemy13.body.removed){
      enemy13.createBullet(1250);    } 
    else  if(num==14 && !enemy14.body.removed){
      enemy14.createBullet(1350);    } 
}

/*
  enemy.createBullet();
  enemy2.createBullet();
  enemy3.createBullet();
  enemy4.createBullet();  
 */
  }  

  if(gameState=='end'){
    background(gameoverimg);
  }


  drawSprites();

}

function bullets(x){
 /*  var  bullet = createSprite(x,125,10,20);
  bullet.velocityY=4.5;
  bullet.addImage(bulletimg);
  bullet.scale=0.05;
  bulletGroup.add(bullet); */
}

function PlayerBullet(){

  var bullet1 = createSprite(player.body.x,player.body.y-50,10,20) ;
  bullet1.velocityY=-5;
  bullet1.addImage(playerbulletimg);
  bullet1.scale=0.05;
  playerBulletGroup.add(bullet1);
}