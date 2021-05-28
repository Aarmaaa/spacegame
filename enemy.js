class Enemy{

    constructor(x,y){
        this.body=createSprite(x,y);
        this.body.addImage(enemyimg);
        this.body.scale = 0.15;
        enemyGroup.add(this.body)
    }

    createBullet(x){

    if(this.body.visible==true){
    
        var  bullet = createSprite(x,125,10,20);
        bullet.velocityY=5;
        bullet.addImage(bulletimg);
        bullet.scale=0.05;
        bulletGroup.add(bullet);
    }
}

    dead(){
        for(var i=0;i<playerBulletGroup.length;i=i+1){

            if(playerBulletGroup.get(i).isTouching(this.body)){
              //enemyGroup.get(i).visible = false; 
              this.body.visible = false;
              score = score + Math.round(random(20,50)/10)*10;
      
              // console.log(this.body.visible);
              this.body.destroy();
            //   bulletGroup.destroyEach();
            }
      
          }

          if(enemyGroup.length==0){
            gameState='Win';
          } 
    }
} 

