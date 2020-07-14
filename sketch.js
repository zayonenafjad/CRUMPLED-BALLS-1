var paper, basket;
var ground;
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

ground=createSprite(400,680,800,20)
	engine = Engine.create();
	world = engine.world;
	ENGINE.run(engine);
paper=new paperball(20,675,20,28)
ground.shapeColor=("yellow")
paper.shapeColor=("pink")
  
}


function draw() {
  rectMode(CENTER);
  background(0);
paper.display();
  
  drawSprites();
 
}



