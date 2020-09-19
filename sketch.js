
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbinSide1 , dustbinSide2 , dustbinSide3; 
var paper;

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650,650,1300,20);

	paper = new Paper(200,60,20);

	dustbinSide1 = new DustbinSide(1000,630,200,20);
	dustbinSide2 = new DustbinSide(910,590,20,100);
	dustbinSide3 = new DustbinSide(1090,590,20,100);

	

	Engine.run(engine);
  
}


function draw() {
  background(0);

  rectMode(CENTER);

  ground.display();

  dustbinSide1.display();
  dustbinSide2.display();
  dustbinSide3.display();

  paper.display();

 
  
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.Paper,paper.Paper.position,{x:75,y:-85});
	}
}
