var ground;
var bucket;
var paperSprite, paperBody, paperImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperImage = loadImage("paper.png")
}

function setup() {
	rectMode(CENTER)

	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    paperBody = Bodies.circle(200, 300, 40,{isStatic : true})
	World.add(world, paperBody)

	paperSprite = createSprite(200, 300, 40, 40)
    paperSprite.addImage(paperImage)
	paperSprite.scale = 0.5;

	ground = new Ground(800, 470, 1600, 30);
    bucket1 = new Bucket(1200, 380, 30, 150);
	bucket2 = new Bucket(1450, 380, 30, 150);
	bucket3 = new Bucket(1325, 440, 280, 30);

	Engine.run(engine);
  
}


function draw() 
{
	
	Engine.update(engine)

  background("black");

  rectMode(CENTER);

  ground.display();
  bucket1.display();
  bucket2.display();
  bucket3.display();
 
  paperSprite.x = paperBody.position.x;
  paperSprite.y = paperBody.position.y;

  //keyPressed();
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyDown("up"))
	{
	var options = {restitution : 0.3, friction : 0.1, density : 1.2}

	ball = Bodies.circle(ball.position.x + 50, ball.position.y -20, 40, options);
	World.add(world, ball)
	}
}

  