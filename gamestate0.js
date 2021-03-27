class Gamestate0{
    
    constructor(){
        bgs = createSprite(300,300,20,20);
        bgs.addImage(bgsImage);
        bgs.scale = 2;
        
        start = createSprite(300,300,20,20);
        start.addImage(startImage);
        start.scale = 0.5;


       
    }

    display(){


        if(keyDown("space")){
            text("How to play",);
            start.destroy();
        }
        
        drawSprites();
    }
}