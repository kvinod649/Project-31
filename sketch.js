const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var plinkos = [];
var particles = [];
var divisions = [];

var divisionHeight=300;
var height=800;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);
  
  ground = new Ground(600,height,1200,20);
  
  //Plinkos
  for (var j = 40; j <= width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <= width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 40; j <= width; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }
  
  //Particles
  

  //Divisions
  for (var k = 0; k<=width; k = k + 80) {
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }

  
}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for (var i = 0; i < plinkos.length; i++)  {
    plinkos[i].display();
  }

  for (var j = 0; j < particles.length; j++)  {
    particles[j].display();
  }
  
  for (var k = 0; k < divisions.length; k++)  {
    divisions[k].display();
  }

  
}
