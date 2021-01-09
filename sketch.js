const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let paperBall;
let dustbin1, dustbin, dustbin3;
let ground;

function setup() {
  createCanvas(1600, 400);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  paperBall = new Paper(100, 200, 70);

  dustbin = new Dustbin(1245, 310, 190, 150);

  ground = new Ground(700, 390, 1600, 10);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);
  paperBall.display();
  dustbin.display();
  ground.display();
  keyPressed();
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (paperBall.x < 1200) {
      Matter.Body.applyForce(paperBall.body, paperBall.body.position, {
        x: 20.5,
        y: -40.8,
      });
    }
  }
}
