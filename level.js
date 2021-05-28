class Level{

  constructor(){

  }

   level1Setup(){

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

  }

  level1Draw(){

      
if(gameState=='play'){


  textSize(25);
  text("Socre : "+score,25,660);
  text("Player Health : " +player.health,1100,650 )


//array.length


if(World.frameCount % startCount === 0){
  var num=Math.round(random(1,enemyGroup.length))

  // if(startCount>=0){
  //   setInterval(() => {
  //     startCount=startCount+1;
  //   }, 5000);
  // }

  if(num==1 && !enemy.body.removed){
    enemy.createBullet(50);   }
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

player.playerMove();
player.playerFire();
player.dead();

enemy.dead();
enemy2.dead();
enemy3.dead();
enemy4.dead();
enemy5.dead();
enemy6.dead();
enemy7.dead();
enemy8.dead();
enemy9.dead();
enemy10.dead();
enemy11.dead();
enemy12.dead();
enemy13.dead();
enemy14.dead();

}  

//bullet ,  player and enemy(in gamestate=lost,Win) destroy (dead())

if(gameState=="Lost"){
 
  levelNum=1;
}
 if(gameState=='Win'){
    
     player.body.destroy();
     bulletGroup.destroyEach();
     playerBulletGroup.destroyEach()
     enemyGroup.destroyEach();
     levelNum=levelNum+1;

}


  }


  level2Setup(){

    if(gameState == 'Win'){

      player = new Player(700,600);

    }


  }

  level2Draw(){

    player.playerMove();
    player.playerFire();
    player.dead();
    

  }

}