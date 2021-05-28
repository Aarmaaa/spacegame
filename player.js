class Player{
    constructor(x,y){
        
        this.body = createSprite(x,y);
        this.body.addImage(playerimg);
        this.body.scale=0.08;
        this.health=30;
        playerGroup.add(this.body);
        
    }

    playerMove(){
        if(keyDown(LEFT_ARROW)){
           this.body.x=this.body.x-10;
        }
        else if(keyDown(RIGHT_ARROW)){
            this.body.x=this.body.x+10;
        }
        if(this.body.x <= -40){
            this.body.x=1449;
        }
        else if(this.body.x >= 1450){
            this.body.x=-40;
        }
        // console.log(this.health);

      }

    playerFire(){
        if(keyWentDown("SPACE")){
        PlayerBullet(); 
        }
    }

    dead(){
        for(var i=0;i<bulletGroup.length;i++){
            if(bulletGroup.get(i).isTouching(this.body)){
                this.health=this.health-10;
                bulletGroup.get(i).destroy();
                
            }
        }
        if( this.health <= 0 ){
            gameState='Lost';
            textSize(40);
            text(" 🅶🅰🅼🅴 🅾🆅🅴🆁 ",540,200);
            textSize(40);
            text(" 🆈🅾🆄 🅻🅾🆂🆃 " ,550,250);
          
            this.body.destroy();
            this.body.visible = false;
            playerBulletGroup.destroyEach();
            enemyGroup.destroyEach();
            bulletGroup.destroyEach();
        }
    }

    
}