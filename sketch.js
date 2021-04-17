const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  engine, world;
var boyImg;
var boy,umbrella;
var dropsA=[];
var ground;
function preload(){
    boyImg=loadImage("proC41Img.png");
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    boy=createSprite(200,400,50,50);
    umbrella = Bodies.circle(boy.x,boy.y,100,{isStatic:true});
    World.add(world,umbrella);
    ground=createSprite(200,560,450,20);
    for(var i=0;i<=60;i++)
    {
        
        dropsA.push(new Rain(random(10,390),random(5,600),4));

    }
   
    
}

function draw(){
    background(0);
    Engine.update(engine);
   

   
    for(var i=0;i<dropsA.length;i++)
    {
        if(dropsA[i].body.position.y>=550)
        {
         Matter.body.setPosition(dropsA[i].body,{x:random(10,390),y:random(5,530)})
        }
        dropsA[i].display();
    }
    imageMode(CENTER)
    boy.scale=2;
    boy.addImage("AAB",boyImg);
    

    drawSprites()
}   

