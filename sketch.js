// You could have multiple flags like: start, launch to indicate the state of the game.
//var ground1 =createSprite( 30,40,50,60);
//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    background("green");
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
ground1  = new Ground(380,400,3000,60);

}

function draw() {
    Engine.update(engine);
// Remember to update the Matter Engine and set the background.
circle (300,250,50);
circle (250,200,50);
circle (50,150,50);
rect (10,345,90,28);
rect (10,320,90,28);
rect (30,270,90,28);
arc(55,320, 90, 80, PI, TWO_PI);
//rectangle (40,50,69,80);

ground1.display();
drawSprites();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}