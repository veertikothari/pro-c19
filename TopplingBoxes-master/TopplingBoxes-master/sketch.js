const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,650,70,70);
    box1.shapeColor="blue";
    box2 = new Box(1000,650,70,70);
    box2.debug=true;
    box3 = new Box(800,550,70,70);
    box3.debug=true;
    box4 = new Box(1000,550,70,70);
    box4.debug=true;
    box5 = new Box(900,450,70,70);
    box5.debug=true;

    log1= new Log(900,600,300,PI/2);
    log2= new Log(900,450,300,PI/2);
    log3= new Log(910,300,150,PI/6);
    log4= new Log(990,300,150,-PI/6);

    pig1=new Pig(900,650);
    pig2=new Pig(900,550);

    bird=new Bird(200,200);

    ground = new Ground(800,height,1600,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    bird.display();
    ground.display();
}