const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

// function preload() {
//     backgroundImg = loadImage("sprites/bg.png");
// }

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    box1 = new Classbox(500,320,70,70);
    box2 = new Classbox(570,320,70,70)
    box3 = new Classbox(640,320,70,70)
    box4 = new Classbox(710,320,70,70)
    box5 = new Classbox(780,320,70,70)
    box6 = new Classbox(570,250,70,70)
    box7 = new Classbox(640,250,70,70)
    box8 = new Classbox(710,250,70,70)
    box9 = new Classbox(640,180,70,70)


    ball = new ClassBall(400,400,50)
    slingshot = new Slingshot(ball.body,{x: 400 , y: 100});
}

function draw(){
    background("lightgreen");
    Engine.update(engine);
    // strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    ball.display();
    ground.display();
    slingshot.display();  
    
}

function mouseDragged(){

Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY})
    
}

// function mouseReleased(){
// slingshot.fly()


// }
