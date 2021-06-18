var hero,heroIMG;
var zombie,zombieIMG;
var swordzombie,swordzombieIMG;
var invisibleground;

function preload(){
  heroIMG=loadImage("hero.gif");
  zombieIMG=loadAnimation("zombie1.png","zombie2.png","zombie3.png","zombie4.png");
  swordzombieIMG=loadAnimation("swordzombie1.png","swordzombie2.png","swordzombie3.png","swordzombie4.png");
}
function setup() {
   createCanvas(1000,800);
   hero=createSprite(400, 200, 50, 50);
   hero.addImage(heroIMG);
   hero.scale=0.8
   invisibleground=createSprite(500,335,1000,20);
  //  invisibleground.visible=false;
   hero.debug = true;
   hero.setCollider("rectangle",+20,+20,140,200)

  
}

function draw() {
  background(0);
  if(keyDown("space")) {
    hero.velocityY = -12;
  }  
  hero.velocityY= hero.velocityY + 0.8;

  spawnzombies();
  hero.collide(invisibleground);
  drawSprites();


}
function spawnzombies() {
  if(frameCount % 200 === 0) {
  zombie=createSprite(1000,255);
  zombie.debug = true;
  zombie.velocityX = -2;
     var rand = Math.round(random(1,2));
     console.log("rand val is "+rand);
     switch(rand) {
       case 1: zombie.addAnimation("zombie",zombieIMG);
               break;
       case 2: zombie.addAnimation("swordZombie",swordzombieIMG);
              break;
       default: break;
     }      
    zombie.lifetime = 300;
  }
}