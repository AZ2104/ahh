var start, startImage;
var bgs, bgsImage;

var bg, bgImage;
var tad, tadImage;

 gamestate= 0



function preload(){
//for the start
startImage = loadImage("start.png");
bgsImage = loadImage("bg4start.png");

// for level one
bgImage = loadImage("bg0.png");
tadImage = loadAnimation("tad.png");
}

function setup(){
createCanvas(600,600);


if(gamestate === 0 ){
 start = new Gamestate0();
}

/*bg = createSprite(200,300,100,100);
bg.addImage(bgImage);
bg.scale = 2;
bg.velocityX = -5

tad = createSprite(300,300,20,20);
tad.addAnimation("tadpole", tadImage);
tad.scale = 0.4;*/

}

function draw(){

    background(0);
/*if(bg.x<20){
    bg.x = bg.width/2;
}*/

    
    start.display();
}