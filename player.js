class Player{
    constructor(x,y){
        
        this.body = createSprite(x,y);
        this.body.addImage(playerimg);
        this.body.scale=0.08;
        playerGroup.add(this.body);
    }

    playerMove(){
        if(keyDown(LEFT_ARROW)){
           this.body.x=this.body.x-10;
        }
        else if(keyDown(RIGHT_ARROW)){
            this.body.x=this.body.x+10;
        }
      }

    playerFire(){
        if(keyWentDown("SPACE")){
        PlayerBullet(); 
        }
    }  
}