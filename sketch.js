const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  box1 = new Box(25,350,50,100);
  box2 = new Box(75,350,50,50);
  box3 = new Box(125,350,50,100);
  box4 = new Box(175,350,50,50);
  box5 = new Box(225,350,50,100);
  box6 = new Box(275,350,50,50);
  box7 = new Box(325,350,50,100);
  
}

function draw() {
  background(255,255,255); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  drawSprites();
}