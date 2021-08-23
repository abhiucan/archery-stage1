const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  playerBase = new Playerbase(300,Random(450,height,-300),180,150)
  player = new Player(285,Playerbase.body.position.y-153,50,80)

  ComputerBase = new ComputerBase(300,Random(450,height,-300),180,150)
  player = new computer(285,Playerbase.body.position.y-153,50,80)


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
playerBase.display()
player.display()

   //display Player and computerplayer

   ComputerBase.display()
   Computer.display()
}
