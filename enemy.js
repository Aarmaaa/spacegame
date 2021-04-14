class Enemy{

    constructor(x,y){
        this.body=createSprite(x,y);
        this.body.addImage(enemyimg);
        this.body.scale = 0.15;
        enemyGroup.add(this.body)
    }

    createBullet(x){
/*         //console.log("visibility: " + this.body.visible)
        //console.log(this.body);
        if(this.body.visible){
        if(World.frameCount % startCount === 0){
            var num=Math.round(random(1,14))
    
            // if(startCount>=0){
            //   setInterval(() => {
            //     startCount=startCount+1;
            //   }, 5000);
            // }
    
            if(num==1){
                bullets(50);
            }
            else  if(num==2){
                bullets(150);
            }
            else  if(num==3){
                bullets(250);
            }
            else  if(num==4){
                bullets(350);
            }
            else  if(num==5){
                bullets(450);
            }
            else  if(num==6){
                bullets(550);
            }
            else  if(num==7){
                bullets(650);
            }
            else  if(num==8){
                bullets(750);
            }
            else  if(num==9){
                bullets(850);
            }
            else  if(num==10){
                bullets(950);
            }
            else  if(num==11){
                bullets(1050);
            }
            else  if(num==12){
                bullets(1150);
            }
            else  if(num==13){
                bullets(1250);
            } 
            else  if(num==14){
                bullets(1350);
            } 
        }
    }
 */    
        var  bullet = createSprite(x,125,10,20);
        bullet.velocityY=4.5;
        bullet.addImage(bulletimg);
        bullet.scale=0.05;
        bulletGroup.add(bullet);
    }
}

