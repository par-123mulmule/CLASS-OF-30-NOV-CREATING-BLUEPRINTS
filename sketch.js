const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ground;
var ball;
var box1,box2;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var ground_options= {
    isStatic:true
  }
  ground=Bodies.rectangle(200,395,400,20,ground_options);
  World.add(world,ground);
  console.log(ground);
  
  box1=new Box(100,100,100,100);
   box2=new Box(150,50,150,100);
  
}

function draw() {
  background("lightblue"); 
  Engine.update(engine); 
fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,15);
  
  box1.display();
  box2.display();

}
