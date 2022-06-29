function preload(){
  snake_img= loadImage("Snake.png")
}

function setup() {
  createCanvas(400,400);
  Snake=createSprite(200,200,20,20);
  Snake.addImage("Snake",snake_img)
  Snake.scale=0.3
}

function draw() 
{
  background(30);
drawSprites();
}




